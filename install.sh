#!/usr/bin/env bash
# =============================================================================
#  VylarisData – Installer & Deployment für Cloudflare Pages
# =============================================================================
#  Führt dich Schritt für Schritt durch die Einrichtung:
#    1. Voraussetzungen prüfen (Node.js, npm, curl)
#    2. Cloudflare-API-Token anlegen – das Skript erklärt dir genau, wie
#    3. Token + Account-ID eingeben (Eingabe bleibt unsichtbar) und prüfen
#    4. Zugangsdaten sicher lokal speichern (.env.local, nur für dich lesbar)
#    5. Abhängigkeiten installieren, Seite bauen (Next.js -> Ordner out/)
#    6. Pages-Projekt anlegen und veröffentlichen
#    7. Domain verbinden, optional GitHub-Secrets für automatische Veröffentlichung
#
#  Aufruf:
#    ./install.sh              geführte Einrichtung (empfohlen)
#    ./install.sh deploy       neu bauen und veröffentlichen
#    ./install.sh verify       gespeicherten Token prüfen
#    ./install.sh build        nur bauen (Ordner out/)
#    ./install.sh status       Projekt, Domain, letzte Veröffentlichung
#    ./install.sh forget       gespeicherte Zugangsdaten (.env.local) löschen
#    ./install.sh help         diese Hilfe
#
#  Optionen:
#    --yes            keine Rückfragen (Werte aus Umgebung bzw. .env.local)
#    --dry-run        nichts verändern, nur anzeigen
#    --project NAME   Pages-Projekt (Standard: vylarisdata)
#    --domain DOMAIN  Domain (Standard: vylarisdata.com)
#
#  Umgebungsvariablen (statt Eingabe, z. B. für CI):
#    CLOUDFLARE_API_TOKEN  CLOUDFLARE_ACCOUNT_ID  CF_PAGES_PROJECT  SITE_DOMAIN
# =============================================================================
set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$ROOT/.env.local"
OUT_DIR="$ROOT/out"
API="${CF_API_BASE:-https://api.cloudflare.com/client/v4}"
API="${API%/}"
WRANGLER="wrangler@4"
DEFAULT_PROJECT="vylarisdata"
DEFAULT_DOMAIN="vylarisdata.com"

YES=0
DRY=0
CMD="setup"
OPT_PROJECT=""
OPT_DOMAIN=""

# ---------------------------------------------------------------- Ausgabe ----
if [ -t 1 ] && [ -z "${NO_COLOR:-}" ]; then
  B=$'\033[1m'; D=$'\033[2m'; G=$'\033[32m'; R=$'\033[31m'; Y=$'\033[33m'; C=$'\033[36m'; Z=$'\033[0m'
else
  B=""; D=""; G=""; R=""; Y=""; C=""; Z=""
fi
info() { printf '%s\n' "$*"; }
ok()   { printf '  %s✔%s %s\n' "$G" "$Z" "$*"; }
warn() { printf '  %s!%s %s\n' "$Y" "$Z" "$*"; }
bad()  { printf '  %s✘%s %s\n' "$R" "$Z" "$*"; }
die()  { printf '\n'; bad "$*"; exit 1; }
step() { printf '\n%s[%s/%s] %s%s\n%s\n' "$B$C" "$1" "$2" "$3" "$Z" "$D────────────────────────────────────────────────────────────────$Z"; }

trap 'printf "\nAbgebrochen.\n"; exit 130' INT

# ----------------------------------------------------------------- Eingabe ----
# ask VAR "Frage" [Standard]
ask() {
  local __var="$1" __q="$2" __def="${3:-}" __val=""
  if [ "$YES" = 1 ]; then printf -v "$__var" '%s' "$__def"; return; fi
  if [ -n "$__def" ]; then read -r -p "  $__q [$__def]: " __val || die "Keine Eingabe möglich (stdin geschlossen). Nutze --yes mit Umgebungsvariablen."
  else read -r -p "  $__q: " __val || die "Keine Eingabe möglich (stdin geschlossen)."; fi
  printf -v "$__var" '%s' "${__val:-$__def}"
}
# ask_secret VAR "Frage"  – Eingabe bleibt unsichtbar
ask_secret() {
  local __var="$1" __q="$2" __val=""
  if [ -t 0 ]; then
    read -r -s -p "  $__q: " __val || die "Keine Eingabe möglich."
    printf '\n'
  else
    read -r __val || die "Keine Eingabe möglich (stdin geschlossen)."
  fi
  printf -v "$__var" '%s' "$__val"
}
# confirm "Frage" [j|n]  – Rückgabe 0 = Ja
confirm() {
  local q="$1" def="${2:-j}" hint="J/n" val=""
  [ "$def" = n ] && hint="j/N"
  if [ "$YES" = 1 ]; then [ "$def" = j ]; return; fi
  read -r -p "  $q [$hint]: " val || die "Keine Eingabe möglich (stdin geschlossen)."
  val="$(printf '%s' "$val" | tr '[:upper:]' '[:lower:]')"
  [ -z "$val" ] && val="$def"
  case "$val" in j|ja|y|yes) return 0 ;; *) return 1 ;; esac
}
mask() { local t="$1"; if [ "${#t}" -gt 8 ]; then printf '••••••••%s' "${t: -4}"; else printf '••••'; fi; }

# --------------------------------------------------------------- Konfiguration
CLOUDFLARE_API_TOKEN="${CLOUDFLARE_API_TOKEN:-}"
CLOUDFLARE_ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-}"
CF_PAGES_PROJECT="${CF_PAGES_PROJECT:-}"
SITE_DOMAIN="${SITE_DOMAIN:-}"

# Liest .env.local ohne es auszuführen; Umgebungsvariablen haben Vorrang.
load_env() {
  [ -f "$ENV_FILE" ] || return 0
  local line k v
  while IFS= read -r line || [ -n "$line" ]; do
    case "$line" in ''|'#'*) continue ;; esac
    k="${line%%=*}"; v="${line#*=}"
    v="${v%\"}"; v="${v#\"}"; v="${v%\'}"; v="${v#\'}"
    case "$k" in
      CLOUDFLARE_API_TOKEN)  [ -z "$CLOUDFLARE_API_TOKEN" ]  && CLOUDFLARE_API_TOKEN="$v" ;;
      CLOUDFLARE_ACCOUNT_ID) [ -z "$CLOUDFLARE_ACCOUNT_ID" ] && CLOUDFLARE_ACCOUNT_ID="$v" ;;
      CF_PAGES_PROJECT)      [ -z "$CF_PAGES_PROJECT" ]      && CF_PAGES_PROJECT="$v" ;;
      SITE_DOMAIN)           [ -z "$SITE_DOMAIN" ]           && SITE_DOMAIN="$v" ;;
    esac
  done < "$ENV_FILE"
}

apply_defaults() {
  [ -n "$OPT_PROJECT" ] && CF_PAGES_PROJECT="$OPT_PROJECT"
  [ -n "$OPT_DOMAIN" ]  && SITE_DOMAIN="$OPT_DOMAIN"
  [ -z "$CF_PAGES_PROJECT" ] && CF_PAGES_PROJECT="$DEFAULT_PROJECT"
  [ -z "$SITE_DOMAIN" ] && SITE_DOMAIN="$DEFAULT_DOMAIN"
  return 0
}

save_env() {
  ( umask 077
    {
      echo "# VylarisData – lokale Zugangsdaten. NICHT ins Repository committen, NICHT weitergeben."
      echo "# Erzeugt von install.sh. Löschen mit: ./install.sh forget"
      echo "CLOUDFLARE_API_TOKEN=\"$CLOUDFLARE_API_TOKEN\""
      echo "CLOUDFLARE_ACCOUNT_ID=\"$CLOUDFLARE_ACCOUNT_ID\""
      echo "CF_PAGES_PROJECT=\"$CF_PAGES_PROJECT\""
      echo "SITE_DOMAIN=\"$SITE_DOMAIN\""
    } > "$ENV_FILE" )
  chmod 600 "$ENV_FILE" 2>/dev/null || true
}

ensure_gitignore() {
  local gi="$ROOT/.gitignore" added="" w
  touch "$gi"
  for w in ".env.local" ".env" "out/" ".next/" "node_modules/" ".wrangler/" "dist.zip"; do
    if ! grep -qxF "$w" "$gi"; then printf '%s\n' "$w" >> "$gi"; added="$added $w"; fi
  done
  [ -n "$added" ] && ok ".gitignore ergänzt:$added"
  return 0
}

# ------------------------------------------------------------ Cloudflare-API ---
# Token wird NIE als Argument übergeben (sonst in der Prozessliste sichtbar),
# sondern als curl-Konfiguration über stdin.
# cf METHOD PFAD [JSON]  ->  setzt CF_BODY und CF_CODE
CF_BODY=""; CF_CODE=""
cf() {
  local method="$1" path="$2" data="${3:-}" resp
  local -a args=(-sS --max-time 30 -X "$method" -H "Content-Type: application/json" -H "User-Agent: vylarisdata-installer/2.0")
  [ -n "$data" ] && args+=(--data "$data")
  resp="$(printf 'header = "Authorization: Bearer %s"\n' "$CLOUDFLARE_API_TOKEN" \
          | curl -K - "${args[@]}" -w $'\n%{http_code}' "$API$path" 2>&1)" || {
    CF_BODY="$resp"; CF_CODE="000"
    die "Keine Verbindung zu Cloudflare. Internetverbindung prüfen. ($(printf '%s' "$resp" | head -n1))"
  }
  CF_CODE="${resp##*$'\n'}"
  CF_BODY="${resp%$'\n'*}"
}

# jget AUSDRUCK  – liest JSON von stdin und gibt einen Wert aus (z. B. "result.status")
jget() {
  node -e '
    let s = ""; process.stdin.on("data", d => s += d).on("end", () => {
      try {
        let v = JSON.parse(s);
        for (const k of process.argv[1].split(".")) { if (v == null) break; v = v[k]; }
        if (v === undefined || v === null) process.stdout.write("");
        else process.stdout.write(typeof v === "object" ? JSON.stringify(v) : String(v));
      } catch { process.stdout.write(""); }
    });' "$1"
}
# cf_errors  – lesbare Fehlermeldung aus CF_BODY
cf_errors() {
  printf '%s' "$CF_BODY" | node -e '
    let s = ""; process.stdin.on("data", d => s += d).on("end", () => {
      try { const e = (JSON.parse(s).errors || []).map(x => `${x.message} (Code ${x.code})`).join("; ");
            process.stdout.write(e || "unbekannter Fehler"); } catch { process.stdout.write("unbekannter Fehler"); }
    });'
}

# ------------------------------------------------------------------ Texte -----
token_help() {
  cat <<EOF

  ${B}So legst du den API-Token an${Z} (dauert ca. 2 Minuten):

   1. Öffne ${C}https://dash.cloudflare.com/profile/api-tokens${Z}
      und melde dich bei Cloudflare an.
   2. Klicke auf ${B}„Create Token“${Z} und bei „Create Custom Token“ auf ${B}„Get started“${Z}.
   3. Token-Name: ${B}VylarisData Deploy${Z}
   4. Berechtigungen (Permissions) – so einstellen:
        ${B}Account${Z}  ·  ${B}Cloudflare Pages${Z}  ·  ${B}Edit${Z}          ${D}← zwingend nötig${Z}
      Nur wenn die DNS-Einträge automatisch gesetzt werden sollen (optional):
        ${B}Zone${Z}     ·  ${B}DNS${Z}               ·  ${B}Edit${Z}
        ${B}Zone${Z}     ·  ${B}Zone${Z}              ·  ${B}Read${Z}
   5. Account Resources:  Include → ${B}dein Account${Z}
      Zone Resources (nur bei DNS-Rechten):  Include → Specific zone → ${B}vylarisdata.com${Z}
   6. Optional, aber empfohlen: bei „TTL“ ein Ablaufdatum setzen.
   7. ${B}„Continue to summary“${Z} → ${B}„Create Token“${Z}.
   8. Kopiere den Token sofort – Cloudflare zeigt ihn ${B}nur ein einziges Mal${Z} an.

  ${B}Wo finde ich die Account-ID?${Z}
   Cloudflare-Dashboard → ${B}Workers & Pages${Z} → rechte Seitenleiste „Account ID“
   (oder in der Adresszeile: dash.cloudflare.com/${B}<ACCOUNT-ID>${Z}/…).

  ${Y}Sicherheit:${Z} Gib den Token niemals in Chats, Tickets oder Commits weiter.
  Das Skript speichert ihn nur lokal in ${B}.env.local${Z} (nur für dich lesbar).

EOF
}

# --------------------------------------------------------------- Schritte -----
need_tools() {
  local missing=0
  command -v curl >/dev/null 2>&1 && ok "curl" || { bad "curl fehlt (macOS/Linux: Paketmanager, z. B. apt install curl)"; missing=1; }
  if command -v node >/dev/null 2>&1; then
    local v major; v="$(node -v | sed 's/^v//')"; major="${v%%.*}"
    if [ "${major:-0}" -ge 20 ]; then ok "Node.js $v"; else bad "Node.js $v ist zu alt – benötigt wird Version 20 oder neuer (https://nodejs.org)"; missing=1; fi
  else
    bad "Node.js fehlt – bitte Version 20 oder neuer installieren: https://nodejs.org (oder: nvm install 20)"; missing=1
  fi
  command -v npm >/dev/null 2>&1 && ok "npm $(npm -v)" || { bad "npm fehlt (kommt mit Node.js)"; missing=1; }
  [ -f "$ROOT/package.json" ] && ok "package.json vorhanden" || { bad "package.json fehlt – bitte im Projektordner ausführen."; missing=1; }
  [ "$missing" = 0 ] || die "Bitte die fehlenden Voraussetzungen installieren und das Skript erneut starten."
}

collect_credentials() {
  local tries
  if [ -z "$CLOUDFLARE_API_TOKEN" ] || [ -z "$CLOUDFLARE_ACCOUNT_ID" ]; then
    [ "$YES" = 1 ] && die "CLOUDFLARE_API_TOKEN und CLOUDFLARE_ACCOUNT_ID fehlen (Umgebungsvariablen oder .env.local)."
    token_help
  fi
  if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
    for tries in 1 2 3; do
      ask_secret CLOUDFLARE_API_TOKEN "API-Token einfügen (Eingabe bleibt unsichtbar)"
      if [ "${#CLOUDFLARE_API_TOKEN}" -ge 20 ] && [[ "$CLOUDFLARE_API_TOKEN" != *" "* ]]; then
        ok "Token übernommen ($(mask "$CLOUDFLARE_API_TOKEN"))"; break
      fi
      bad "Das sieht nicht wie ein Token aus (zu kurz oder Leerzeichen). Bitte erneut einfügen."
      CLOUDFLARE_API_TOKEN=""
      [ "$tries" = 3 ] && die "Kein gültiger Token eingegeben."
    done
  else
    ok "Token gefunden ($(mask "$CLOUDFLARE_API_TOKEN"))"
  fi
  if [ -z "$CLOUDFLARE_ACCOUNT_ID" ]; then
    for tries in 1 2 3; do
      ask CLOUDFLARE_ACCOUNT_ID "Account-ID (32 Zeichen, siehe Hinweis oben)"
      CLOUDFLARE_ACCOUNT_ID="$(printf '%s' "$CLOUDFLARE_ACCOUNT_ID" | tr '[:upper:]' '[:lower:]' | tr -d '[:space:]')"
      if [[ "$CLOUDFLARE_ACCOUNT_ID" =~ ^[0-9a-f]{32}$ ]]; then ok "Account-ID übernommen"; break; fi
      bad "Die Account-ID besteht aus genau 32 Hex-Zeichen (0-9, a-f)."
      CLOUDFLARE_ACCOUNT_ID=""
      [ "$tries" = 3 ] && die "Keine gültige Account-ID eingegeben."
    done
  else
    ok "Account-ID gefunden (${CLOUDFLARE_ACCOUNT_ID:0:6}…)"
  fi
}

# Rückgabe 0 = Token gültig und Pages-Rechte vorhanden
check_token() {
  if [ "$DRY" = 1 ]; then warn "Trockenlauf: Token wird nicht gegen Cloudflare geprüft."; return 0; fi
  local status expires
  cf GET "/user/tokens/verify"
  if [ "$CF_CODE" != 200 ] || [ "$(printf '%s' "$CF_BODY" | jget success)" != true ]; then
    cf GET "/accounts/$CLOUDFLARE_ACCOUNT_ID/tokens/verify"   # Account-Tokens
    if [ "$CF_CODE" != 200 ] || [ "$(printf '%s' "$CF_BODY" | jget success)" != true ]; then
      bad "Cloudflare lehnt den Token ab: $(cf_errors)"
      cat <<EOF

  Mögliche Ursachen:
   • Token wurde unvollständig kopiert (bitte neu einfügen)
   • Token ist abgelaufen oder wurde in Cloudflare gelöscht
   • Account-ID gehört nicht zu diesem Token
EOF
      return 1
    fi
  fi
  status="$(printf '%s' "$CF_BODY" | jget result.status)"; expires="$(printf '%s' "$CF_BODY" | jget result.expires_on)"
  ok "Token ist gültig (Status: ${status:-active})${expires:+, läuft ab: $expires}"
  cf GET "/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects"
  case "$CF_CODE" in
    200) ok "Berechtigung „Cloudflare Pages“ vorhanden"; return 0 ;;
    401|403)
      bad "Der Token darf keine Pages-Projekte lesen/ändern."
      cat <<EOF

  Behebung: Token in Cloudflare öffnen → Berechtigungen bearbeiten und hinzufügen:
      ${B}Account · Cloudflare Pages · Edit${Z}
  und prüfen, dass unter „Account Resources“ dein Account ausgewählt ist.
  Ist die Account-ID korrekt? Aktuell: ${CLOUDFLARE_ACCOUNT_ID:0:6}…
EOF
      return 1 ;;
    *) bad "Unerwartete Antwort von Cloudflare (HTTP $CF_CODE): $(cf_errors)"; return 1 ;;
  esac
}

ensure_project() {
  local name="$CF_PAGES_PROJECT"
  if [ "$DRY" = 1 ]; then warn "Trockenlauf: würde Projekt „$name“ prüfen/anlegen."; return 0; fi
  cf GET "/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/$name"
  if [ "$CF_CODE" = 200 ]; then ok "Pages-Projekt „$name“ existiert bereits"; return 0; fi
  if [ "$CF_CODE" = 404 ] || printf '%s' "$CF_BODY" | grep -q '8000007'; then
    cf POST "/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects" "{\"name\":\"$name\",\"production_branch\":\"main\"}"
    if { [ "$CF_CODE" = 200 ] || [ "$CF_CODE" = 201 ]; } && [ "$(printf '%s' "$CF_BODY" | jget success)" = true ]; then
      ok "Pages-Projekt „$name“ angelegt"; return 0
    fi
    bad "Projekt konnte nicht angelegt werden: $(cf_errors)"; return 1
  fi
  bad "Projekt konnte nicht geprüft werden (HTTP $CF_CODE): $(cf_errors)"; return 1
}

do_build() {
  info "  Seite wird gebaut (Next.js, TypeScript) …"
  if [ "$DRY" = 1 ]; then warn "Trockenlauf: npm ci && npm run build wird nicht ausgeführt."; return 0; fi
  cd "$ROOT" || return 1
  if [ -f package-lock.json ]; then npm ci --no-audit --no-fund || return 1
  else npm install --no-audit --no-fund || return 1; fi
  npm run build || return 1
  [ -f "$OUT_DIR/index.html" ] || { bad "Der Build hat keinen Ordner out/ erzeugt."; return 1; }
  ok "Auslieferbarer Ordner erstellt: out/"
}

make_zip() {
  command -v zip >/dev/null 2>&1 || return 1
  ( cd "$OUT_DIR" && rm -f "$ROOT/dist.zip" && zip -qr "$ROOT/dist.zip" . ) && printf '%s' "$ROOT/dist.zip"
}

do_deploy() {
  local name="$CF_PAGES_PROJECT"
  if [ "$DRY" = 1 ]; then warn "Trockenlauf: würde out/ per $WRANGLER nach „$name“ hochladen."; return 0; fi
  info "  Veröffentliche auf Cloudflare Pages (beim ersten Mal lädt npx wrangler herunter) …"
  if CLOUDFLARE_API_TOKEN="$CLOUDFLARE_API_TOKEN" CLOUDFLARE_ACCOUNT_ID="$CLOUDFLARE_ACCOUNT_ID" WRANGLER_SEND_METRICS=false \
       npx --yes "$WRANGLER" pages deploy "$OUT_DIR" --project-name "$name" --branch main --commit-dirty=true; then
    ok "Veröffentlicht: https://$name.pages.dev"
    return 0
  fi
  bad "Das Hochladen ist fehlgeschlagen. Meldung oben lesen; häufige Ursache: fehlende Berechtigung „Cloudflare Pages · Edit“."
  local z; z="$(make_zip)" && info "  Alternative: ${B}$z${Z} im Dashboard hochladen (Workers & Pages → $name → Create deployment)."
  return 1
}

connect_domain() {
  local domain="$SITE_DOMAIN" name="$CF_PAGES_PROJECT"
  if [ "$DRY" = 1 ]; then warn "Trockenlauf: würde Domain $domain mit „$name“ verbinden."; return 0; fi
  cf GET "/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/$name/domains"
  if [ "$CF_CODE" = 200 ] && printf '%s' "$CF_BODY" | grep -q "\"$domain\""; then
    ok "Domain $domain ist bereits verbunden"
  else
    cf POST "/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/$name/domains" "{\"name\":\"$domain\"}"
    if { [ "$CF_CODE" = 200 ] || [ "$CF_CODE" = 201 ]; } && [ "$(printf '%s' "$CF_BODY" | jget success)" = true ]; then
      ok "Domain $domain zum Projekt hinzugefügt"
    else
      bad "Domain konnte nicht hinzugefügt werden: $(cf_errors)"; return 1
    fi
  fi
  cat <<EOF

  ${B}DNS prüfen${Z} – damit $domain wirklich auf die Seite zeigt:
   • Liegt die Domain bei Cloudflare (Nameserver von Cloudflare), legt Cloudflare den
     CNAME-Eintrag in der Regel selbst an. Falls nicht: Dashboard → $domain → DNS →
     Eintrag hinzufügen:  Typ ${B}CNAME${Z} · Name ${B}@${Z} · Ziel ${B}$name.pages.dev${Z} · Proxy ${B}an${Z}
   • Liegt die Domain bei einem anderen Anbieter, dort einen CNAME auf ${B}$name.pages.dev${Z}
     setzen (für die Hauptdomain ggf. „CNAME flattening“/ALIAS) oder die Nameserver zu Cloudflare umziehen.
   • Das HTTPS-Zertifikat stellt Cloudflare automatisch aus – das kann einige Minuten dauern.
EOF
}

offer_github() {
  if ! command -v gh >/dev/null 2>&1; then
    cat <<EOF

  ${B}Automatisch bei jedem Push veröffentlichen (optional):${Z}
   GitHub → Repository → Settings → Secrets and variables → Actions → „New repository secret“:
     ${B}CLOUDFLARE_API_TOKEN${Z}   = dein Token
     ${B}CLOUDFLARE_ACCOUNT_ID${Z}  = deine Account-ID
   Der Workflow .github/workflows/deploy.yml veröffentlicht dann bei jedem Push auf main.
EOF
    return 0
  fi
  if ! gh auth status >/dev/null 2>&1; then
    warn "GitHub-CLI ist nicht angemeldet (gh auth login) – Secrets bitte manuell setzen (siehe README)."; return 0
  fi
  confirm "GitHub-Secrets für automatische Veröffentlichung jetzt setzen?" n || return 0
  # Werte laufen über stdin, nie als Argument (sonst in der Prozessliste sichtbar)
  if printf '%s' "$CLOUDFLARE_API_TOKEN"  | (cd "$ROOT" && gh secret set CLOUDFLARE_API_TOKEN  >/dev/null 2>&1); then ok "Secret CLOUDFLARE_API_TOKEN gesetzt";  else bad "Secret CLOUDFLARE_API_TOKEN konnte nicht gesetzt werden";  fi
  if printf '%s' "$CLOUDFLARE_ACCOUNT_ID" | (cd "$ROOT" && gh secret set CLOUDFLARE_ACCOUNT_ID >/dev/null 2>&1); then ok "Secret CLOUDFLARE_ACCOUNT_ID gesetzt"; else bad "Secret CLOUDFLARE_ACCOUNT_ID konnte nicht gesetzt werden"; fi
}

# ---------------------------------------------------------------- Befehle -----
cmd_setup() {
  local total=7 deployed=0 attempt
  printf '\n%sVylarisData – Installer%s\n%sCloudflare Pages · Token · Veröffentlichung%s\n' "$B" "$Z" "$D" "$Z"
  [ "$DRY" = 1 ] && warn "TROCKENLAUF – es wird nichts verändert."
  load_env; apply_defaults

  step 1 $total "Voraussetzungen"
  need_tools

  step 2 $total "Cloudflare-Zugang"
  collect_credentials
  if [ "$YES" != 1 ]; then
    ask CF_PAGES_PROJECT "Name des Pages-Projekts" "$CF_PAGES_PROJECT"
    ask SITE_DOMAIN "Domain der Seite (leer lassen = keine verbinden)" "$SITE_DOMAIN"
  fi

  step 3 $total "Token prüfen"
  for attempt in 1 2; do
    check_token && break
    { [ "$YES" = 1 ] || [ "$attempt" = 2 ]; } && die "Token konnte nicht bestätigt werden."
    confirm "Token neu eingeben?" j || die "Abgebrochen."
    CLOUDFLARE_API_TOKEN=""; collect_credentials
  done

  step 4 $total "Sicher speichern"
  if [ "$DRY" = 1 ]; then
    warn "Trockenlauf: .env.local wird nicht geschrieben."
  else
    if [ -f "$ENV_FILE" ] && [ "$YES" != 1 ] && ! confirm ".env.local existiert bereits – überschreiben?" j; then
      warn "Vorhandene .env.local bleibt unverändert."
    else
      save_env; ok "Gespeichert in .env.local (Dateirechte 600 – nur du kannst sie lesen)"
    fi
    ensure_gitignore
  fi

  step 5 $total "Seite bauen"
  do_build || die "Der Build ist fehlgeschlagen. Meldung oben lesen."

  step 6 $total "Projekt anlegen und veröffentlichen"
  ensure_project || die "Projekt-Einrichtung fehlgeschlagen."
  do_deploy && deployed=1

  step 7 $total "Domain und automatische Veröffentlichung"
  if [ -n "$SITE_DOMAIN" ] && confirm "Domain $SITE_DOMAIN jetzt mit dem Projekt verbinden?" j; then connect_domain; fi
  [ "$DRY" = 1 ] || offer_github

  cat <<EOF

${B}${G}Fertig.${Z}

  Nächste Schritte:
   • Seite aktualisieren:   ${B}./install.sh deploy${Z}
   • Token prüfen:          ${B}./install.sh verify${Z}
   • Zugangsdaten löschen:  ${B}./install.sh forget${Z}
   • Vorschau:              https://$CF_PAGES_PROJECT.pages.dev$([ "$deployed" = 1 ] || printf '  (nach dem Hochladen)')
EOF
}

need_config() {
  load_env; apply_defaults
  command -v curl >/dev/null 2>&1 || die "curl fehlt."
  command -v node >/dev/null 2>&1 || die "Node.js fehlt (https://nodejs.org)."
  { [ -n "$CLOUDFLARE_API_TOKEN" ] && [ -n "$CLOUDFLARE_ACCOUNT_ID" ]; } \
    || die "Noch keine Zugangsdaten gespeichert. Bitte zuerst ausführen:  ./install.sh"
}

cmd_verify() { need_config; printf '\n%sToken prüfen%s\n' "$B" "$Z"; check_token || die "Token ungültig oder unzureichende Rechte."; }
cmd_build()  { printf '\n%sSeite bauen%s\n' "$B" "$Z"; command -v node >/dev/null 2>&1 || die "Node.js fehlt."; do_build || die "Build fehlgeschlagen."; }
cmd_deploy() {
  need_config; printf '\n%sVeröffentlichen%s\n' "$B" "$Z"
  check_token || die "Token ungültig oder unzureichende Rechte."
  ensure_project || die "Projekt nicht verfügbar."
  do_build || die "Build fehlgeschlagen."
  do_deploy || exit 1
}
cmd_status() {
  need_config; printf '\n%sStatus%s\n' "$B" "$Z"
  cf GET "/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/$CF_PAGES_PROJECT"
  [ "$CF_CODE" = 200 ] || die "Projekt „$CF_PAGES_PROJECT“ nicht abrufbar: $(cf_errors)"
  local sub dep stage
  sub="$(printf '%s' "$CF_BODY" | jget result.subdomain)"
  ok "Projekt:  $CF_PAGES_PROJECT  →  https://${sub:-$CF_PAGES_PROJECT.pages.dev}"
  dep="$(printf '%s' "$CF_BODY" | jget result.latest_deployment.created_on)"
  stage="$(printf '%s' "$CF_BODY" | jget result.latest_deployment.latest_stage.status)"
  if [ -n "$dep" ]; then ok "Letzte Veröffentlichung: $dep (${stage:-?})"; else warn "Noch keine Veröffentlichung vorhanden."; fi
  cf GET "/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/$CF_PAGES_PROJECT/domains"
  if [ "$CF_CODE" = 200 ]; then
    printf '%s' "$CF_BODY" | node -e '
      let s=""; process.stdin.on("data",d=>s+=d).on("end",()=>{try{for(const d of (JSON.parse(s).result||[])) console.log(`${d.name}\t${d.status||"?"}`)}catch{}})' \
      | while IFS=$'\t' read -r dn ds; do ok "Domain:   $dn  ($ds)"; done
  fi
}
cmd_forget() {
  printf '\n%sZugangsdaten löschen%s\n' "$B" "$Z"
  if [ -f "$ENV_FILE" ]; then
    if confirm ".env.local wirklich löschen?" n; then
      rm -f "$ENV_FILE"; ok ".env.local gelöscht"
      warn "Den Token in Cloudflare selbst widerrufen: dash.cloudflare.com/profile/api-tokens → Token → „Roll“/„Delete“."
    fi
  else info "  Keine .env.local vorhanden."; fi
}
usage() { awk 'NR==1{next} /^# =+$/{n++; next} n==2{sub(/^# ?/,""); print} n>=3{exit}' "${BASH_SOURCE[0]}"; }

# ---------------------------------------------------------------- Start -------
while [ $# -gt 0 ]; do
  case "$1" in
    setup|deploy|verify|build|status|forget) CMD="$1" ;;
    help|-h|--help) CMD="help" ;;
    --yes|-y) YES=1 ;;
    --dry-run) DRY=1 ;;
    --project) shift; OPT_PROJECT="${1:-}" ;;
    --domain)  shift; OPT_DOMAIN="${1:-}" ;;
    *) die "Unbekannte Option: $1  (Hilfe: ./install.sh help)" ;;
  esac
  shift
done

case "$CMD" in
  setup)  cmd_setup ;;
  deploy) cmd_deploy ;;
  verify) cmd_verify ;;
  build)  cmd_build ;;
  status) cmd_status ;;
  forget) cmd_forget ;;
  help)   usage ;;
esac
