#!/usr/bin/env bash
# =============================================================================
#  VylarisData – Installer: Website über einen Cloudflare Tunnel, ohne offene Ports
# =============================================================================
#  Die Seite läuft in Docker (nginx, ohne veröffentlichte Ports). Ein Cloudflare
#  Tunnel (cloudflared) baut nur AUSGEHENDE Verbindungen zu Cloudflare auf –
#  eingehend muss auf dem Server nichts erreichbar sein.
#
#  Der Installer führt dich Schritt für Schritt durch die Einrichtung:
#    1. Voraussetzungen prüfen und fehlende selbst installieren (Docker, curl)
#    2. Cloudflare-API-Token anlegen – das Skript erklärt dir genau, wie
#    3. Token + Account-ID eingeben (Eingabe bleibt unsichtbar) und prüfen
#    4. Zugangsdaten sicher lokal speichern (.env.local, nur für dich lesbar)
#    5. Tunnel anlegen und konfigurieren (Domain -> nginx im Container)
#    6. DNS-Eintrag setzen (CNAME auf den Tunnel)
#    7. Container bauen und starten, Erreichbarkeit prüfen
#
#  Aufruf:
#    ./install.sh              geführte Einrichtung (empfohlen)
#    ./install.sh update       neueste Version aus Git holen, Images erneuern, neu starten
#    ./install.sh update --check   nur prüfen, ob ein Update verfügbar ist
#    ./install.sh deploy       Seite aus dem aktuellen Stand neu bauen und neu starten
#    ./install.sh status       Tunnel, Container und Erreichbarkeit anzeigen
#    ./install.sh logs         Logs ansehen (Strg+C beendet)
#    ./install.sh stop         Container stoppen
#    ./install.sh verify       gespeicherten Token prüfen
#    ./install.sh domain       DNS-Eintrag und Tunnel-Route (neu) setzen
#    ./install.sh forget       gespeicherte Zugangsdaten löschen
#    ./install.sh help         diese Hilfe
#
#  Optionen:
#    --yes             keine Rückfragen (Werte aus Umgebung bzw. .env.local)
#    --dry-run         nichts verändern, nur anzeigen
#    --domain DOMAIN   Domain der Seite (Standard: vylarisdata.com)
#    --tunnel NAME     Name des Tunnels (Standard: vylarisdata)
#    --check           (bei update) nur prüfen, nichts verändern
#
#  Umgebungsvariablen (statt Eingabe, z. B. für Automatisierung):
#    CLOUDFLARE_API_TOKEN  CLOUDFLARE_ACCOUNT_ID  SITE_DOMAIN  TUNNEL_NAME
# =============================================================================
set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$ROOT/.env.local"          # API-Token & Einstellungen (nur für dieses Skript)
TUNNEL_ENV="$ROOT/.env.tunnel"       # nur der Tunnel-Token (wird vom cloudflared-Container gelesen)
API="${CF_API_BASE:-https://api.cloudflare.com/client/v4}"
API="${API%/}"
DEFAULT_DOMAIN="vylarisdata.com"
DEFAULT_TUNNEL="vylarisdata"
ORIGIN="http://web:8080"             # Ziel im Container-Netz (siehe compose.yaml)

YES=0; DRY=0; CMD="setup"; OPT_DOMAIN=""; OPT_TUNNEL=""; CHECK_ONLY=0; SKIP_PULL=0
DOCKER=(docker)

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
ask() {   # ask VAR "Frage" [Standard]
  local __var="$1" __q="$2" __def="${3:-}" __val=""
  if [ "$YES" = 1 ]; then printf -v "$__var" '%s' "$__def"; return; fi
  if [ -n "$__def" ]; then read -r -p "  $__q [$__def]: " __val || die "Keine Eingabe möglich (stdin geschlossen). Nutze --yes mit Umgebungsvariablen."
  else read -r -p "  $__q: " __val || die "Keine Eingabe möglich (stdin geschlossen)."; fi
  printf -v "$__var" '%s' "${__val:-$__def}"
}
ask_secret() {   # Eingabe bleibt unsichtbar
  local __var="$1" __q="$2" __val=""
  if [ -t 0 ]; then read -r -s -p "  $__q: " __val || die "Keine Eingabe möglich."; printf '\n'
  else read -r __val || die "Keine Eingabe möglich (stdin geschlossen)."; fi
  printf -v "$__var" '%s' "$__val"
}
confirm() {   # confirm "Frage" [j|n]  – Rückgabe 0 = Ja
  local q="$1" def="${2:-j}" hint="J/n" val=""
  [ "$def" = n ] && hint="j/N"
  if [ "$YES" = 1 ]; then [ "$def" = j ]; return; fi
  read -r -p "  $q [$hint]: " val || die "Keine Eingabe möglich (stdin geschlossen)."
  val="$(printf '%s' "$val" | tr '[:upper:]' '[:lower:]')"; [ -z "$val" ] && val="$def"
  case "$val" in j|ja|y|yes) return 0 ;; *) return 1 ;; esac
}
mask() { local t="$1"; if [ "${#t}" -gt 8 ]; then printf '••••••••%s' "${t: -4}"; else printf '••••'; fi; }

# --------------------------------------------------------------- Konfiguration
CLOUDFLARE_API_TOKEN="${CLOUDFLARE_API_TOKEN:-}"
CLOUDFLARE_ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-}"
SITE_DOMAIN="${SITE_DOMAIN:-}"
TUNNEL_NAME="${TUNNEL_NAME:-}"
TUNNEL_ID="${TUNNEL_ID:-}"
TUNNEL_TOKEN=""

load_env() {   # liest .env.local ohne es auszuführen; Umgebungsvariablen haben Vorrang
  [ -f "$ENV_FILE" ] || return 0
  local line k v
  while IFS= read -r line || [ -n "$line" ]; do
    case "$line" in ''|'#'*) continue ;; esac
    k="${line%%=*}"; v="${line#*=}"; v="${v%\"}"; v="${v#\"}"; v="${v%\'}"; v="${v#\'}"
    case "$k" in
      CLOUDFLARE_API_TOKEN)  [ -z "$CLOUDFLARE_API_TOKEN" ]  && CLOUDFLARE_API_TOKEN="$v" ;;
      CLOUDFLARE_ACCOUNT_ID) [ -z "$CLOUDFLARE_ACCOUNT_ID" ] && CLOUDFLARE_ACCOUNT_ID="$v" ;;
      SITE_DOMAIN)           [ -z "$SITE_DOMAIN" ]           && SITE_DOMAIN="$v" ;;
      TUNNEL_NAME)           [ -z "$TUNNEL_NAME" ]           && TUNNEL_NAME="$v" ;;
      TUNNEL_ID)             [ -z "$TUNNEL_ID" ]             && TUNNEL_ID="$v" ;;
    esac
  done < "$ENV_FILE"
}
apply_defaults() {
  [ -n "$OPT_DOMAIN" ] && SITE_DOMAIN="$OPT_DOMAIN"
  [ -n "$OPT_TUNNEL" ] && TUNNEL_NAME="$OPT_TUNNEL"
  [ -z "$SITE_DOMAIN" ] && SITE_DOMAIN="$DEFAULT_DOMAIN"
  [ -z "$TUNNEL_NAME" ] && TUNNEL_NAME="$DEFAULT_TUNNEL"
  return 0
}
save_env() {
  ( umask 077
    { echo "# VylarisData – lokale Zugangsdaten. NICHT ins Repository committen, NICHT weitergeben."
      echo "# Erzeugt von install.sh. Löschen mit: ./install.sh forget"
      echo "CLOUDFLARE_API_TOKEN=\"$CLOUDFLARE_API_TOKEN\""
      echo "CLOUDFLARE_ACCOUNT_ID=\"$CLOUDFLARE_ACCOUNT_ID\""
      echo "SITE_DOMAIN=\"$SITE_DOMAIN\""
      echo "TUNNEL_NAME=\"$TUNNEL_NAME\""
      [ -n "$TUNNEL_ID" ] && echo "TUNNEL_ID=\"$TUNNEL_ID\""
    } > "$ENV_FILE" )
  chmod 600 "$ENV_FILE" 2>/dev/null || true
}
save_tunnel_env() {   # nur der Tunnel-Token – der cloudflared-Container bekommt NICHT den API-Token
  ( umask 077; printf 'TUNNEL_TOKEN=%s\n' "$TUNNEL_TOKEN" > "$TUNNEL_ENV" )
  chmod 600 "$TUNNEL_ENV" 2>/dev/null || true
}
ensure_gitignore() {
  local gi="$ROOT/.gitignore" added="" w
  touch "$gi"
  for w in ".env.local" ".env.tunnel" ".env" "out/" ".next/" "node_modules/"; do
    grep -qxF "$w" "$gi" || { printf '%s\n' "$w" >> "$gi"; added="$added $w"; }
  done
  [ -n "$added" ] && ok ".gitignore ergänzt:$added"
  return 0
}

# ------------------------------------------------------------ Cloudflare-API ---
# Der Token wird NIE als Argument übergeben (sonst in der Prozessliste sichtbar),
# sondern als curl-Konfiguration über stdin.
CF_BODY=""; CF_CODE=""
cf() {   # cf METHOD PFAD [JSON]  ->  CF_BODY, CF_CODE
  local method="$1" path="$2" data="${3:-}" resp
  local -a args=(-sS --max-time 30 -X "$method" -H "Content-Type: application/json" -H "User-Agent: vylarisdata-installer/3.0")
  [ -n "$data" ] && args+=(--data "$data")
  resp="$(printf 'header = "Authorization: Bearer %s"\n' "$CLOUDFLARE_API_TOKEN" \
          | curl -K - "${args[@]}" -w $'\n%{http_code}' "$API$path" 2>&1)" || {
    die "Keine Verbindung zu Cloudflare. Internetverbindung prüfen. ($(printf '%s' "$resp" | head -n1))"
  }
  CF_CODE="${resp##*$'\n'}"; CF_BODY="${resp%$'\n'*}"
}
cf_ok() { { [ "$CF_CODE" = 200 ] || [ "$CF_CODE" = 201 ]; } && [ "$(printf '%s' "$CF_BODY" | jget success)" = true ]; }
cf_denied() { [ "$CF_CODE" = 401 ] || [ "$CF_CODE" = 403 ]; }

JSON_TOOL=""
jget() {   # liest JSON von stdin, gibt einen Wert aus (z. B. "result.0.id"); leer, wenn nicht vorhanden
  if [ "$JSON_TOOL" = python3 ]; then
    python3 -c '
import sys, json
try:
    v = json.load(sys.stdin)
    for k in sys.argv[1].split("."):
        if v is None: break
        v = v[int(k)] if isinstance(v, list) else v.get(k)
    if v is None: out = ""
    elif isinstance(v, bool): out = "true" if v else "false"
    elif isinstance(v, (dict, list)): out = json.dumps(v)
    else: out = str(v)
    sys.stdout.write(out)
except Exception:
    pass' "$1"
  else
    node -e '
      let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{let v=JSON.parse(s);
        for(const k of process.argv[1].split(".")){ if(v==null)break; v=v[k]; }
        process.stdout.write(v==null?"":(typeof v==="object"?JSON.stringify(v):String(v)));}catch{}})' "$1"
  fi
}
cf_errors() {   # lesbare Fehlermeldung aus CF_BODY
  if [ "$JSON_TOOL" = python3 ]; then
    printf '%s' "$CF_BODY" | python3 -c '
import sys, json
try:
    e = json.load(sys.stdin).get("errors") or []
    sys.stdout.write("; ".join("%s (Code %s)" % (x.get("message","?"), x.get("code","?")) for x in e) or "unbekannter Fehler")
except Exception:
    sys.stdout.write("unbekannter Fehler")'
  else
    printf '%s' "$CF_BODY" | node -e '
      let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const e=(JSON.parse(s).errors||[]).map(x=>`${x.message} (Code ${x.code})`).join("; ");process.stdout.write(e||"unbekannter Fehler")}catch{process.stdout.write("unbekannter Fehler")}})'
  fi
}

# ------------------------------------------------------------------ Texte -----
token_help() {
  cat <<EOF

  ${B}So legst du den API-Token an${Z} (dauert ca. 2 Minuten):

   1. Öffne ${C}https://dash.cloudflare.com/profile/api-tokens${Z}
      und melde dich bei Cloudflare an.
   2. Klicke auf ${B}„Create Token“${Z} und bei „Create Custom Token“ auf ${B}„Get started“${Z}.
   3. Token-Name: ${B}VylarisData Tunnel${Z}
   4. Berechtigungen (Permissions) – drei Zeilen hinzufügen:
        ${B}Account${Z}  ·  ${B}Cloudflare Tunnel${Z}  ·  ${B}Edit${Z}     ${D}← Tunnel anlegen und konfigurieren${Z}
        ${B}Zone${Z}     ·  ${B}DNS${Z}               ·  ${B}Edit${Z}     ${D}← CNAME-Eintrag für die Domain${Z}
        ${B}Zone${Z}     ·  ${B}Zone${Z}              ·  ${B}Read${Z}     ${D}← Domain im Konto finden${Z}
   5. Account Resources:  Include → ${B}dein Account${Z}
      Zone Resources:     Include → Specific zone → ${B}vylarisdata.com${Z}
   6. Optional, aber empfohlen: bei „TTL“ ein Ablaufdatum setzen.
   7. ${B}„Continue to summary“${Z} → ${B}„Create Token“${Z}.
   8. Kopiere den Token sofort – Cloudflare zeigt ihn ${B}nur ein einziges Mal${Z} an.

  ${B}Wo finde ich die Account-ID?${Z}
   Cloudflare-Dashboard → Startseite deines Kontos → rechte Seitenleiste „Account ID“
   (oder in der Adresszeile: dash.cloudflare.com/${B}<ACCOUNT-ID>${Z}/…).

  ${B}Voraussetzung:${Z} Die Domain ${B}vylarisdata.com${Z} muss in diesem Cloudflare-Konto liegen
  (Nameserver von Cloudflare) – sonst kann der DNS-Eintrag nicht gesetzt werden.

  ${Y}Sicherheit:${Z} Gib den Token niemals in Chats, Tickets oder Commits weiter.
  Das Skript speichert ihn nur lokal in ${B}.env.local${Z} (nur für dich lesbar). Der Tunnel läuft
  mit einem eigenen, getrennten Token (${B}.env.tunnel${Z}) – der API-Token gelangt nie in einen Container.

EOF
}

# ------------------------------------------------- Selbstinstallation ---------
SUDO=""
detect_sudo() {
  [ "$(id -u)" = 0 ] && return 0
  command -v sudo >/dev/null 2>&1 && SUDO="sudo"
  return 0
}
pkg_install() {   # Systempakete per Paketmanager installieren; Rückgabe 0 = Erfolg
  detect_sudo
  local pkgs="$*" pm=""
  for pm in apt-get dnf yum pacman zypper apk brew; do command -v "$pm" >/dev/null 2>&1 && break || pm=""; done
  [ -n "$pm" ] || return 1
  if [ "$pm" != brew ] && [ "$(id -u)" != 0 ] && [ -z "$SUDO" ]; then return 1; fi
  info "  Installiere $pkgs mit $pm …"
  case "$pm" in
    apt-get) $SUDO apt-get update -qq && $SUDO apt-get install -y -qq $pkgs ;;
    dnf)     $SUDO dnf install -y -q $pkgs ;;
    yum)     $SUDO yum install -y -q $pkgs ;;
    pacman)  $SUDO pacman -S --noconfirm --needed $pkgs ;;
    zypper)  $SUDO zypper --non-interactive install $pkgs ;;
    apk)     $SUDO apk add --no-progress $pkgs ;;
    brew)    brew install $pkgs ;;
  esac
}

# Findet einen nutzbaren Docker-Zugang: direkt oder über sudo. Rückgabe 0 = Docker + Compose bereit
docker_ready() {
  command -v docker >/dev/null 2>&1 || return 1
  if docker info >/dev/null 2>&1; then DOCKER=(docker)
  elif command -v sudo >/dev/null 2>&1 && sudo docker info >/dev/null 2>&1; then DOCKER=(sudo docker)
  else return 2; fi
  "${DOCKER[@]}" compose version >/dev/null 2>&1 || return 3
  return 0
}
dc() { "${DOCKER[@]}" compose "$@"; }

install_docker() {
  case "$(uname -s)" in
    Linux) ;;
    Darwin) bad "Bitte Docker Desktop installieren und starten: https://www.docker.com/products/docker-desktop/ – danach ./install.sh erneut ausführen."; return 1 ;;
    *) bad "Dieses Betriebssystem wird nicht unterstützt (Windows: bitte WSL mit Ubuntu verwenden)."; return 1 ;;
  esac
  detect_sudo
  if [ "$(id -u)" != 0 ] && [ -z "$SUDO" ]; then bad "Für die Docker-Installation werden Administrator-Rechte benötigt (sudo fehlt)."; return 1; fi
  local tmp; tmp="$(mktemp -d)" || return 1
  info "  Lade das offizielle Docker-Installationsskript (get.docker.com) …"
  curl -fsSL --max-time 60 https://get.docker.com -o "$tmp/get-docker.sh" || { rm -rf "$tmp"; bad "get.docker.com nicht erreichbar."; return 1; }
  $SUDO sh "$tmp/get-docker.sh" || { rm -rf "$tmp"; bad "Docker-Installation fehlgeschlagen."; return 1; }
  rm -rf "$tmp"
  command -v systemctl >/dev/null 2>&1 && $SUDO systemctl enable --now docker >/dev/null 2>&1
  [ -n "$SUDO" ] && $SUDO usermod -aG docker "${USER:-$(id -un)}" >/dev/null 2>&1 || true
  ok "Docker installiert"
}

ensure_tools() {
  case "$(uname -s)" in MINGW*|MSYS*|CYGWIN*)
    die "Unter Windows bitte WSL verwenden (PowerShell: wsl --install, danach in Ubuntu ./install.sh ausführen)." ;;
  esac
  # curl
  if command -v curl >/dev/null 2>&1; then ok "curl"
  else
    warn "curl fehlt."
    if [ "$DRY" = 1 ]; then warn "Trockenlauf: würde curl per Paketmanager installieren."
    elif confirm "curl jetzt installieren?" j && pkg_install curl && command -v curl >/dev/null 2>&1; then ok "curl installiert"
    else die "curl konnte nicht installiert werden. Bitte von Hand installieren (z. B. sudo apt install curl)."; fi
  fi
  # JSON-Werkzeug (python3 oder node)
  if command -v python3 >/dev/null 2>&1; then JSON_TOOL=python3; ok "python3 (zum Lesen der API-Antworten)"
  elif command -v node >/dev/null 2>&1; then JSON_TOOL=node; ok "node (zum Lesen der API-Antworten)"
  else
    warn "Weder python3 noch node gefunden (wird zum Lesen der API-Antworten gebraucht)."
    if [ "$DRY" = 1 ]; then warn "Trockenlauf: würde python3 installieren."; JSON_TOOL=python3
    elif confirm "python3 jetzt installieren?" j && pkg_install python3 && command -v python3 >/dev/null 2>&1; then JSON_TOOL=python3; ok "python3 installiert"
    else die "python3 konnte nicht installiert werden. Bitte von Hand installieren."; fi
  fi
  # Docker + Compose
  local rc=0
  if [ "$DRY" = 1 ]; then
    if command -v docker >/dev/null 2>&1; then ok "Docker gefunden"; else warn "Trockenlauf: Docker fehlt – würde über get.docker.com installiert."; fi
    return 0
  fi
  docker_ready || rc=$?
  case "$rc" in
    0) ok "Docker $("${DOCKER[@]}" version --format '{{.Server.Version}}' 2>/dev/null) · Compose $("${DOCKER[@]}" compose version --short 2>/dev/null)" ;;
    2) warn "Docker ist installiert, der Dienst läuft aber nicht (oder dir fehlt die Berechtigung)."
       detect_sudo
       if command -v systemctl >/dev/null 2>&1 && confirm "Docker-Dienst jetzt starten?" j; then $SUDO systemctl enable --now docker >/dev/null 2>&1; sleep 3; fi
       docker_ready || die "Docker ist nicht nutzbar. Prüfen mit:  docker info   (Dienst starten: sudo systemctl start docker)"
       ok "Docker bereit" ;;
    3) warn "Docker Compose (Plugin) fehlt."
       confirm "Docker Compose jetzt installieren?" j && pkg_install docker-compose-plugin
       docker_ready || die "Docker Compose fehlt. Installation: https://docs.docker.com/compose/install/linux/"
       ok "Docker Compose bereit" ;;
    *) warn "Docker ist nicht installiert."
       info "  Der Installer richtet Docker über das offizielle Skript von get.docker.com ein (Administrator-Rechte nötig)."
       confirm "Docker jetzt installieren?" j || die "Ohne Docker kann die Seite nicht betrieben werden. Abgebrochen."
       install_docker || die "Docker konnte nicht installiert werden: https://docs.docker.com/engine/install/"
       docker_ready || die "Docker ist installiert, aber noch nicht nutzbar. Bitte ab- und wieder anmelden (Gruppe „docker“) und erneut starten."
       ok "Docker $("${DOCKER[@]}" version --format '{{.Server.Version}}' 2>/dev/null) bereit" ;;
  esac
}

need_tools() {
  ensure_tools
  if [ -f "$ROOT/compose.yaml" ] && [ -f "$ROOT/Dockerfile" ]; then ok "compose.yaml und Dockerfile vorhanden"
  else die "compose.yaml/Dockerfile fehlen – bitte im Projektordner ausführen."; fi
}

# ------------------------------------------------------------- Schritte -------
collect_credentials() {
  local tries
  if [ -z "$CLOUDFLARE_API_TOKEN" ] || [ -z "$CLOUDFLARE_ACCOUNT_ID" ]; then
    [ "$YES" = 1 ] && die "CLOUDFLARE_API_TOKEN und CLOUDFLARE_ACCOUNT_ID fehlen (Umgebungsvariablen oder .env.local)."
    token_help
  fi
  if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
    for tries in 1 2 3; do
      ask_secret CLOUDFLARE_API_TOKEN "API-Token einfügen (Eingabe bleibt unsichtbar)"
      if [ "${#CLOUDFLARE_API_TOKEN}" -ge 20 ] && [[ "$CLOUDFLARE_API_TOKEN" != *" "* ]]; then ok "Token übernommen ($(mask "$CLOUDFLARE_API_TOKEN"))"; break; fi
      bad "Das sieht nicht wie ein Token aus (zu kurz oder Leerzeichen). Bitte erneut einfügen."; CLOUDFLARE_API_TOKEN=""
      [ "$tries" = 3 ] && die "Kein gültiger Token eingegeben."
    done
  else ok "Token gefunden ($(mask "$CLOUDFLARE_API_TOKEN"))"; fi
  if [ -z "$CLOUDFLARE_ACCOUNT_ID" ]; then
    for tries in 1 2 3; do
      ask CLOUDFLARE_ACCOUNT_ID "Account-ID (32 Zeichen, siehe Hinweis oben)"
      CLOUDFLARE_ACCOUNT_ID="$(printf '%s' "$CLOUDFLARE_ACCOUNT_ID" | tr '[:upper:]' '[:lower:]' | tr -d '[:space:]')"
      if [[ "$CLOUDFLARE_ACCOUNT_ID" =~ ^[0-9a-f]{32}$ ]]; then ok "Account-ID übernommen"; break; fi
      bad "Die Account-ID besteht aus genau 32 Hex-Zeichen (0-9, a-f)."; CLOUDFLARE_ACCOUNT_ID=""
      [ "$tries" = 3 ] && die "Keine gültige Account-ID eingegeben."
    done
  else ok "Account-ID gefunden (${CLOUDFLARE_ACCOUNT_ID:0:6}…)"; fi
}

ZONE_ID=""
find_zone() {   # sucht die Cloudflare-Zone zu SITE_DOMAIN (auch für Subdomains). Rückgabe: 0 gefunden, 2 keine Rechte, 3 nicht im Konto
  local zone="$SITE_DOMAIN"; ZONE_ID=""
  while [[ "$zone" == *.* ]]; do
    cf GET "/zones?name=$zone"
    cf_denied && return 2
    ZONE_ID="$(printf '%s' "$CF_BODY" | jget result.0.id)"
    [ -n "$ZONE_ID" ] && return 0
    zone="${zone#*.}"
  done
  return 3
}

check_token() {   # Rückgabe 0 = Token gültig, Tunnel-Rechte vorhanden
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
  cf GET "/accounts/$CLOUDFLARE_ACCOUNT_ID/cfd_tunnel?is_deleted=false&per_page=1"
  if [ "$CF_CODE" = 200 ]; then ok "Berechtigung „Cloudflare Tunnel“ vorhanden"
  elif cf_denied; then
    bad "Der Token darf keine Tunnel verwalten."
    printf '\n  Behebung: Token in Cloudflare öffnen → Berechtigungen bearbeiten und hinzufügen:\n      %sAccount · Cloudflare Tunnel · Edit%s\n  und prüfen, dass unter „Account Resources“ dein Account ausgewählt ist.\n' "$B" "$Z"
    return 1
  else bad "Unerwartete Antwort von Cloudflare (HTTP $CF_CODE): $(cf_errors)"; return 1; fi
  find_zone; case $? in
    0) ok "Domain $SITE_DOMAIN liegt in deinem Cloudflare-Konto" ;;
    2) warn "Der Token darf keine Zonen/DNS-Einträge lesen (fehlt: „Zone · Zone · Read“, „Zone · DNS · Edit“) – den DNS-Eintrag musst du später von Hand setzen." ;;
    *) warn "Die Domain $SITE_DOMAIN liegt nicht in diesem Cloudflare-Konto – den DNS-Eintrag musst du später von Hand setzen." ;;
  esac
  return 0
}

# Tunnel anlegen oder wiederverwenden, Route (Domain -> nginx) setzen, Tunnel-Token speichern
ensure_tunnel() {
  if [ "$DRY" = 1 ]; then
    warn "Trockenlauf: würde Tunnel „$TUNNEL_NAME“ anlegen, die Route $SITE_DOMAIN → $ORIGIN setzen und .env.tunnel schreiben."
    TUNNEL_ID="00000000-0000-0000-0000-000000000000"; return 0
  fi
  cf GET "/accounts/$CLOUDFLARE_ACCOUNT_ID/cfd_tunnel?name=$TUNNEL_NAME&is_deleted=false"
  TUNNEL_ID="$(printf '%s' "$CF_BODY" | jget result.0.id)"
  if [ -n "$TUNNEL_ID" ]; then
    ok "Tunnel „$TUNNEL_NAME“ existiert bereits (${TUNNEL_ID:0:8}…)"
    cf GET "/accounts/$CLOUDFLARE_ACCOUNT_ID/cfd_tunnel/$TUNNEL_ID/token"
    TUNNEL_TOKEN="$(printf '%s' "$CF_BODY" | jget result)"
  else
    cf POST "/accounts/$CLOUDFLARE_ACCOUNT_ID/cfd_tunnel" "{\"name\":\"$TUNNEL_NAME\",\"config_src\":\"cloudflare\"}"
    cf_ok || { bad "Tunnel konnte nicht angelegt werden: $(cf_errors)"; return 1; }
    TUNNEL_ID="$(printf '%s' "$CF_BODY" | jget result.id)"
    TUNNEL_TOKEN="$(printf '%s' "$CF_BODY" | jget result.token)"
    [ -n "$TUNNEL_ID" ] && ok "Tunnel „$TUNNEL_NAME“ angelegt (${TUNNEL_ID:0:8}…)"
  fi
  if [ -z "$TUNNEL_ID" ] || [ -z "$TUNNEL_TOKEN" ]; then bad "Tunnel-ID oder Tunnel-Token fehlen in der Antwort von Cloudflare."; return 1; fi
  cf PUT "/accounts/$CLOUDFLARE_ACCOUNT_ID/cfd_tunnel/$TUNNEL_ID/configurations" \
     "{\"config\":{\"ingress\":[{\"hostname\":\"$SITE_DOMAIN\",\"service\":\"$ORIGIN\"},{\"service\":\"http_status:404\"}]}}"
  cf_ok || { bad "Tunnel-Route konnte nicht gesetzt werden: $(cf_errors)"; return 1; }
  ok "Route gesetzt: $SITE_DOMAIN → nginx im Container (kein Port auf dem Server offen)"
  save_tunnel_env && ok "Tunnel-Token gespeichert in .env.tunnel (Rechte 600)"
}

# CNAME  <domain> -> <tunnel-id>.cfargotunnel.com  (proxied). Rückgabe: 0 ok, 2 keine Rechte, 3 Zone fehlt, 4 Fehler
ensure_dns() {
  local host="$SITE_DOMAIN" target="$TUNNEL_ID.cfargotunnel.com" rid rtype rcontent rc
  if [ "$DRY" = 1 ]; then warn "Trockenlauf: würde CNAME $host → $target anlegen."; return 0; fi
  find_zone; rc=$?; [ "$rc" = 0 ] || return "$rc"
  cf GET "/zones/$ZONE_ID/dns_records?name=$host"
  cf_denied && return 2
  rid="$(printf '%s' "$CF_BODY" | jget result.0.id)"; rtype="$(printf '%s' "$CF_BODY" | jget result.0.type)"; rcontent="$(printf '%s' "$CF_BODY" | jget result.0.content)"
  local body="{\"type\":\"CNAME\",\"name\":\"$host\",\"content\":\"$target\",\"proxied\":true,\"ttl\":1}"
  if [ -n "$rid" ]; then
    if [ "$rtype" = CNAME ] && [ "$rcontent" = "$target" ]; then ok "DNS-Eintrag für $host zeigt bereits auf den Tunnel"; return 0; fi
    warn "Für $host gibt es schon einen Eintrag ($rtype → ${rcontent:-?})."
    confirm "Diesen Eintrag durch CNAME → $target ersetzen?" j || { warn "Eintrag bleibt unverändert – die Seite ist so nicht über den Tunnel erreichbar."; return 4; }
    cf PUT "/zones/$ZONE_ID/dns_records/$rid" "$body"
  else
    cf POST "/zones/$ZONE_ID/dns_records" "$body"
  fi
  if cf_ok; then ok "DNS-Eintrag gesetzt: CNAME $host → $target (über Cloudflare, HTTPS inklusive)"; return 0; fi
  cf_denied && return 2
  bad "DNS-Eintrag konnte nicht gesetzt werden: $(cf_errors)"; return 4
}

dns_manual_help() {
  cat <<EOF

  ${B}DNS-Eintrag von Hand anlegen${Z} – ohne ihn bleibt $SITE_DOMAIN unerreichbar („ERR_NAME_NOT_RESOLVED“):
     Cloudflare-Dashboard → ${B}$SITE_DOMAIN${Z} → DNS → Records → „Add record“:
       Typ ${B}CNAME${Z} · Name ${B}@${Z} · Ziel ${B}${TUNNEL_ID:-<TUNNEL-ID>}.cfargotunnel.com${Z} · Proxy-Status ${B}Proxied (orange Wolke)${Z}
     (Alternativ im Zero-Trust-Dashboard: Networks → Tunnels → $TUNNEL_NAME → Public Hostname.)
EOF
}
dns_result() {   # wertet den Rückgabecode von ensure_dns aus
  case "$1" in
    0) ;;
    2) warn "Der Token darf keine DNS-Einträge anlegen (fehlt: „Zone · DNS · Edit“ und „Zone · Zone · Read“)."; dns_manual_help ;;
    3) warn "Die Domain $SITE_DOMAIN liegt nicht in diesem Cloudflare-Konto."; dns_manual_help ;;
    *) dns_manual_help ;;
  esac
}

tunnel_status() { cf GET "/accounts/$CLOUDFLARE_ACCOUNT_ID/cfd_tunnel/$TUNNEL_ID"; printf '%s' "$CF_BODY" | jget result.status; }

wait_for_tunnel() {
  local i st=""
  info "  Warte, bis der Tunnel mit Cloudflare verbunden ist (bis zu 90 s) …"
  for i in $(seq 1 18); do
    st="$(tunnel_status)"
    if [ "$st" = healthy ]; then ok "Tunnel ist verbunden (Status: healthy)"; return 0; fi
    sleep 5
  done
  warn "Tunnel meldet noch „${st:-unbekannt}“. Logs ansehen:  ./install.sh logs"
  return 1
}

check_live() {   # prüft https://<domain>/ – DNS kann einige Minuten brauchen
  local i code=""
  info "  Prüfe https://$SITE_DOMAIN/ …"
  for i in 1 2 3 4 5 6; do
    code="$(curl -s -o /dev/null -m 15 -w '%{http_code}' "https://$SITE_DOMAIN/" 2>/dev/null || true)"
    if [ "$code" = 200 ]; then ok "https://$SITE_DOMAIN/ antwortet mit HTTP 200"; return 0; fi
    [ "$i" -lt 6 ] && sleep 8
  done
  warn "https://$SITE_DOMAIN/ ist noch nicht erreichbar (zuletzt: ${code:-keine Antwort}). DNS braucht manchmal einige Minuten – später:  ./install.sh status"
  return 1
}

start_stack() {
  if [ "$DRY" = 1 ]; then warn "Trockenlauf: würde 'docker compose up -d --build' ausführen."; return 0; fi
  [ -f "$TUNNEL_ENV" ] || die ".env.tunnel fehlt – bitte zuerst ./install.sh ausführen."
  info "  Baue die Seite und starte die Container (beim ersten Mal dauert das 1–3 Minuten) …"
  ( cd "$ROOT" && dc up -d --build ) || { bad "Start fehlgeschlagen. Meldung oben lesen."; return 1; }
  ok "Container laufen (web = nginx ohne Port nach außen, tunnel = cloudflared)"
}

firewall_note() {
  cat <<EOF

  ${B}Keine offenen Ports nötig:${Z} Der Server muss nur AUSGEHEND zu Cloudflare verbinden (Port 7844, TCP/UDP)
  und für Updates Docker-Hub/Paketquellen erreichen. Du kannst die Firewall für eingehenden Verkehr
  komplett sperren – ausgenommen den Zugang, den du selbst zur Verwaltung brauchst (z. B. SSH nur aus dem eigenen Netz/VPN).
  Beispiel (Ubuntu):  ${D}sudo ufw default deny incoming && sudo ufw allow from <dein-netz> to any port 22 && sudo ufw enable${Z}
EOF
}

# ---------------------------------------------------------------- Befehle -----
cmd_setup() {
  local total=7 attempt rc
  printf '\n%sVylarisData – Installer%s\n%sCloudflare Tunnel · keine offenen Ports%s\n' "$B" "$Z" "$D" "$Z"
  [ "$DRY" = 1 ] && warn "TROCKENLAUF – es wird nichts verändert."
  load_env; apply_defaults

  step 1 $total "Voraussetzungen"
  need_tools

  step 2 $total "Cloudflare-Zugang"
  collect_credentials
  if [ "$YES" != 1 ]; then
    ask SITE_DOMAIN "Domain der Seite" "$SITE_DOMAIN"
    ask TUNNEL_NAME "Name des Tunnels" "$TUNNEL_NAME"
  fi
  [ -n "$SITE_DOMAIN" ] || die "Keine Domain angegeben."

  step 3 $total "Token prüfen"
  for attempt in 1 2; do
    check_token && break
    { [ "$YES" = 1 ] || [ "$attempt" = 2 ]; } && die "Token konnte nicht bestätigt werden."
    confirm "Token neu eingeben?" j || die "Abgebrochen."
    CLOUDFLARE_API_TOKEN=""; collect_credentials
  done

  step 4 $total "Sicher speichern"
  if [ "$DRY" = 1 ]; then warn "Trockenlauf: .env.local wird nicht geschrieben."
  else
    if [ -f "$ENV_FILE" ] && [ "$YES" != 1 ] && ! confirm ".env.local existiert bereits – überschreiben?" j; then warn "Vorhandene .env.local bleibt unverändert."
    else save_env; ok "Gespeichert in .env.local (Dateirechte 600 – nur du kannst sie lesen)"; fi
    ensure_gitignore
  fi

  step 5 $total "Tunnel einrichten"
  ensure_tunnel || die "Tunnel-Einrichtung fehlgeschlagen."
  [ "$DRY" = 1 ] || save_env

  step 6 $total "DNS-Eintrag"
  ensure_dns; rc=$?; dns_result "$rc"

  step 7 $total "Starten und prüfen"
  start_stack || exit 1
  if [ "$DRY" != 1 ]; then wait_for_tunnel || true; check_live || true; firewall_note; fi

  cat <<EOF

${B}${G}Fertig.${Z}

  Adresse:  ${B}https://$SITE_DOMAIN/${Z}
  Nächste Schritte:
   • Seite aktualisieren (nach Änderungen):  ${B}./install.sh deploy${Z}
   • Status anzeigen:                        ${B}./install.sh status${Z}
   • Logs ansehen:                           ${B}./install.sh logs${Z}
   • Stoppen:                                ${B}./install.sh stop${Z}
EOF
}

# ---------------------------------------------------------------- Update ----
IMAGE_WEB="vylarisdata-web"

wait_web_healthy() {   # wartet bis zu 60 s auf einen gesunden nginx-Container
  local cid st="" i
  cid="$( cd "$ROOT" && dc ps -q web 2>/dev/null | head -n1 )"
  [ -n "$cid" ] || return 1
  for i in $(seq 1 20); do
    st="$("${DOCKER[@]}" inspect -f '{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' "$cid" 2>/dev/null)"
    case "$st" in healthy|running) return 0 ;; unhealthy|exited|dead) return 1 ;; esac
    sleep 3
  done
  return 1
}

cmd_update() {
  local before after upstream behind sum_before sum_after dirty
  load_env; apply_defaults
  printf '\n%sUpdate%s\n' "$B" "$Z"
  if ! command -v git >/dev/null 2>&1; then
    warn "git fehlt."
    if [ "$DRY" = 1 ] || [ "$CHECK_ONLY" = 1 ]; then die "git wird für das Update benötigt."; fi
    confirm "git jetzt installieren?" j && pkg_install git && command -v git >/dev/null 2>&1 || die "git konnte nicht installiert werden. Bitte von Hand installieren."
  fi
  [ -d "$ROOT/.git" ] || die "Dies ist kein Git-Klon. Für Updates das Projekt mit „git clone https://github.com/cubiqstudio/vylarisdata.git“ holen."
  cd "$ROOT" || die "Projektordner nicht erreichbar."
  before="$(git rev-parse --short HEAD)"

  # --- 1) Neue Version aus Git holen ---
  if [ "$SKIP_PULL" != 1 ]; then
    info "  Suche nach Updates …"
    git fetch --quiet 2>/dev/null || die "Git-Server nicht erreichbar (git fetch fehlgeschlagen). Internetverbindung prüfen."
    upstream="$(git rev-parse --abbrev-ref --symbolic-full-name '@{u}' 2>/dev/null)" || upstream="origin/$(git rev-parse --abbrev-ref HEAD)"
    git rev-parse --verify --quiet "$upstream" >/dev/null || die "Kein Upstream-Branch gefunden ($upstream)."
    behind="$(git rev-list --count "HEAD..$upstream")"
    if [ "$behind" -gt 0 ]; then
      ok "$behind neue Änderung(en) verfügbar:"
      git log --no-merges --pretty='      %C(yellow)%h%C(reset) %s' --abbrev-commit -n 12 "HEAD..$upstream"
      [ "$behind" -gt 12 ] && info "      … und weitere"
    else
      ok "Der Code ist bereits aktuell ($before)."
    fi
    if [ "$CHECK_ONLY" = 1 ]; then
      if [ "$behind" -gt 0 ]; then info "  Zum Installieren:  ./install.sh update"; exit 10; fi
      info "  Die Container-Images (nginx, cloudflared) werden bei jedem „./install.sh update“ auf Sicherheitsupdates geprüft."
      exit 0
    fi
    if [ "$DRY" = 1 ]; then warn "Trockenlauf: würde ${behind:-0} Änderung(en) holen, Images erneuern und neu starten."; return 0; fi
    if [ "$behind" -gt 0 ]; then
      dirty="$(git status --porcelain --untracked-files=no)"
      if [ -n "$dirty" ]; then
        warn "Es gibt lokale, nicht gespeicherte Änderungen an Projektdateien:"
        printf '%s\n' "$dirty" | sed 's/^/      /'
        confirm "Update trotzdem versuchen? (bricht bei Konflikten ab, nichts geht verloren)" n || die "Abgebrochen. Änderungen zuerst sichern (git stash) und erneut starten."
      fi
      confirm "Update jetzt installieren?" j || die "Abgebrochen."
      sum_before="$(sha256sum "$ROOT/install.sh" 2>/dev/null | cut -d' ' -f1)"
      git pull --ff-only --quiet || die "Update nicht möglich (lokaler Stand weicht ab). Bitte prüfen: git status"
      after="$(git rev-parse --short HEAD)"
      ok "Code aktualisiert: $before → $after"
      sum_after="$(sha256sum "$ROOT/install.sh" 2>/dev/null | cut -d' ' -f1)"
      if [ -n "$sum_before" ] && [ "$sum_before" != "$sum_after" ]; then
        info "  Der Installer selbst wurde aktualisiert – starte mit der neuen Version neu …"
        local -a again=(update --skip-pull); [ "$YES" = 1 ] && again+=(--yes)
        exec "$ROOT/install.sh" "${again[@]}"
      fi
    fi
  fi

  # --- 2) Container erneuern ---
  ensure_tools
  [ -f "$TUNNEL_ENV" ] || die ".env.tunnel fehlt – bitte zuerst ./install.sh ausführen."
  local prev=""
  prev="$("${DOCKER[@]}" image inspect -f '{{.Id}}' "$IMAGE_WEB:latest" 2>/dev/null)" || prev=""
  [ -n "$prev" ] && "${DOCKER[@]}" tag "$prev" "$IMAGE_WEB:previous" >/dev/null 2>&1 && ok "Aktuelles Image als Rückfallstand gesichert ($IMAGE_WEB:previous)"

  info "  Lade aktuelle Basis-Images und baue die Seite neu (1–3 Minuten) …"
  ( dc pull tunnel ) >/dev/null 2>&1 && ok "cloudflared auf neuestem Stand" || warn "cloudflared-Image konnte nicht erneuert werden (weiter mit vorhandenem)."
  if ! ( dc build --pull web ); then
    bad "Der Build ist fehlgeschlagen – die laufende Seite bleibt unverändert."; return 1
  fi
  ( dc up -d --remove-orphans ) || { bad "Start fehlgeschlagen."; return 1; }

  # --- 3) Prüfen, bei Problemen zurückrollen ---
  if wait_web_healthy; then
    ok "Neue Version läuft und ist gesund"
  else
    bad "Die neue Version wird nicht gesund."
    if [ -n "$prev" ]; then
      warn "Rolle auf den vorherigen Stand zurück …"
      "${DOCKER[@]}" tag "$IMAGE_WEB:previous" "$IMAGE_WEB:latest" >/dev/null 2>&1
      ( dc up -d --no-build --force-recreate web ) >/dev/null 2>&1
      if wait_web_healthy; then ok "Vorherige Version läuft wieder."; else bad "Auch der vorherige Stand startet nicht. Logs:  ./install.sh logs"; fi
    fi
    info "  Der Code bleibt auf $(git rev-parse --short HEAD). Zurücksetzen mit:  git reset --hard $before"
    return 1
  fi
  if [ -n "$TUNNEL_ID" ] && [ -n "$CLOUDFLARE_API_TOKEN" ] && [ -n "$CLOUDFLARE_ACCOUNT_ID" ]; then wait_for_tunnel || true
  else info "  (Tunnel-Status wird nicht geprüft – keine API-Zugangsdaten gespeichert.)"; fi
  check_live || true
  "${DOCKER[@]}" image prune -f >/dev/null 2>&1 && ok "Alte, nicht mehr genutzte Images entfernt"

  printf '\n%s%sUpdate abgeschlossen.%s  Version: %s%s%s\n' "$B" "$G" "$Z" "$B" "$(git rev-parse --short HEAD)" "$Z"
}

need_config() {
  load_env; apply_defaults
  ensure_tools
  if [ -z "$CLOUDFLARE_API_TOKEN" ] || [ -z "$CLOUDFLARE_ACCOUNT_ID" ]; then
    die "Noch keine Zugangsdaten gespeichert. Bitte zuerst ausführen:  ./install.sh"
  fi
}

cmd_verify() { need_config; printf '\n%sToken prüfen%s\n' "$B" "$Z"; check_token || die "Token ungültig oder unzureichende Rechte."; }
cmd_deploy() { load_env; apply_defaults; printf '\n%sSeite neu bauen und starten%s\n' "$B" "$Z"; ensure_tools; start_stack || exit 1; }
cmd_stop()   { load_env; ensure_tools; printf '\n%sStoppen%s\n' "$B" "$Z"; ( cd "$ROOT" && dc down ) && ok "Container gestoppt (Tunnel getrennt, Seite offline)"; }
cmd_logs()   { load_env; ensure_tools; ( cd "$ROOT" && dc logs --tail=100 -f ); }
cmd_domain() {
  local rc
  need_config; printf '\n%sDomain und Tunnel-Route%s\n' "$B" "$Z"
  check_token || die "Token ungültig oder unzureichende Rechte."
  ensure_tunnel || die "Tunnel-Einrichtung fehlgeschlagen."
  save_env
  ensure_dns; rc=$?; dns_result "$rc"
  if [ "$DRY" != 1 ]; then ( cd "$ROOT" && dc up -d ) >/dev/null 2>&1 || true; fi
}
cmd_status() {
  need_config; printf '\n%sStatus%s\n' "$B" "$Z"
  [ -n "$TUNNEL_ID" ] || die "Noch kein Tunnel eingerichtet. Bitte zuerst ausführen:  ./install.sh"
  local st; st="$(tunnel_status)"
  case "$st" in
    healthy) ok "Tunnel „$TUNNEL_NAME“: healthy (verbunden)" ;;
    "")      bad "Tunnel nicht abrufbar: $(cf_errors)" ;;
    *)       warn "Tunnel „$TUNNEL_NAME“: $st" ;;
  esac
  ( cd "$ROOT" && dc ps --format 'table {{.Service}}\t{{.State}}\t{{.Status}}' 2>/dev/null ) | sed 's/^/    /'
  check_live || true
}
cmd_forget() {
  printf '\n%sZugangsdaten löschen%s\n' "$B" "$Z"
  if [ -f "$ENV_FILE" ] || [ -f "$TUNNEL_ENV" ]; then
    if confirm ".env.local und .env.tunnel wirklich löschen?" n; then
      rm -f "$ENV_FILE" "$TUNNEL_ENV"; ok "Zugangsdaten gelöscht"
      warn "Den API-Token in Cloudflare selbst widerrufen: dash.cloudflare.com/profile/api-tokens → Token → „Roll“/„Delete“."
      warn "Ohne .env.tunnel kann der Tunnel-Container nicht mehr starten. Den Tunnel selbst löschst du im Zero-Trust-Dashboard (Networks → Tunnels)."
    fi
  else info "  Keine Zugangsdaten vorhanden."; fi
}
usage() { awk 'NR==1{next} /^# =+$/{n++; next} n==2{sub(/^# ?/,""); print} n>=3{exit}' "${BASH_SOURCE[0]}"; }

# ---------------------------------------------------------------- Start -------
while [ $# -gt 0 ]; do
  case "$1" in
    setup|deploy|update|verify|status|logs|stop|domain|forget) CMD="$1" ;;
    help|-h|--help) CMD="help" ;;
    --yes|-y) YES=1 ;;
    --dry-run) DRY=1 ;;
    --check) CHECK_ONLY=1 ;;
    --skip-pull) SKIP_PULL=1 ;;
    --domain) shift; OPT_DOMAIN="${1:-}" ;;
    --tunnel) shift; OPT_TUNNEL="${1:-}" ;;
    *) die "Unbekannte Option: $1  (Hilfe: ./install.sh help)" ;;
  esac
  shift
done

case "$CMD" in
  setup) cmd_setup ;; deploy) cmd_deploy ;; update) cmd_update ;; verify) cmd_verify ;; status) cmd_status ;;
  logs) cmd_logs ;; stop) cmd_stop ;; domain) cmd_domain ;; forget) cmd_forget ;; help) usage ;;
esac
