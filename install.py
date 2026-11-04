#!/usr/bin/env python3
"""VylarisData – Installer & Deployment für Cloudflare Pages.

Der Installer führt dich Schritt für Schritt durch die Einrichtung:

  1. Cloudflare-API-Token anlegen (er erklärt dir genau, welche Rechte nötig sind)
  2. Token eingeben (die Eingabe bleibt unsichtbar) und prüfen lassen
  3. Token sicher lokal speichern (.env.local, nur für dich lesbar, nie im Git-Repository)
  4. Cloudflare-Pages-Projekt anlegen, Seite bauen und veröffentlichen
  5. Eigene Domain verbinden (z. B. vylarisdata.com)
  6. Optional: automatische Veröffentlichung bei jedem Push über GitHub Actions

Aufruf:
  python3 install.py              # geführte Einrichtung (empfohlen)
  python3 install.py deploy       # Seite neu bauen und veröffentlichen
  python3 install.py verify       # gespeicherten Token prüfen
  python3 install.py build        # nur die Seite bauen (Ordner dist/)
  python3 install.py status       # Projekt, Domain und letzte Veröffentlichung anzeigen
  python3 install.py forget       # gespeicherte Zugangsdaten (.env.local) löschen

Optionen:
  --yes            keine Rückfragen, Werte aus Umgebungsvariablen/.env.local verwenden
  --dry-run        nichts verändern, nur anzeigen, was passieren würde
  --project NAME   Name des Pages-Projekts (Standard: vylarisdata)
  --domain DOMAIN  Domain, die verbunden werden soll (Standard: vylarisdata.com)

Umgebungsvariablen (alternativ zur Eingabe, z. B. für CI):
  CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID, CF_PAGES_PROJECT, SITE_DOMAIN

Nur Python-Standardbibliothek. Für das Hochladen wird Node.js (npx) benötigt –
ohne Node.js erzeugt der Installer stattdessen dist.zip zum manuellen Hochladen.
"""
import argparse, getpass, json, os, shutil, ssl, stat, subprocess, sys, urllib.error, urllib.request, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent
ENV_FILE = ROOT / ".env.local"
DIST = ROOT / "dist"
API = os.environ.get("CF_API_BASE", "https://api.cloudflare.com/client/v4").rstrip("/")
DEFAULT_PROJECT = "vylarisdata"
DEFAULT_DOMAIN = "vylarisdata.com"
WRANGLER = "wrangler@4"

USE_COLOR = sys.stdout.isatty() and os.environ.get("NO_COLOR") is None
def c(code, s): return f"\033[{code}m{s}\033[0m" if USE_COLOR else s
def bold(s): return c("1", s)
def dim(s): return c("2", s)
def green(s): return c("32", s)
def red(s): return c("31", s)
def yellow(s): return c("33", s)
def blue(s): return c("36", s)

def info(msg=""): print(msg)
def ok(msg): print(f"  {green('✔')} {msg}")
def warn(msg): print(f"  {yellow('!')} {msg}")
def fail(msg): print(f"  {red('✘')} {msg}")
def step(n, total, title):
    print()
    print(bold(blue(f"[{n}/{total}] {title}")))
    print(dim("─" * 64))

class Abort(Exception):
    pass

# ----------------------------------------------------------------------------
# Eingabe
# ----------------------------------------------------------------------------
def ask(prompt, default=None, yes=False):
    if yes:
        return default or ""
    suffix = f" [{default}]" if default else ""
    try:
        val = input(f"  {prompt}{suffix}: ").strip()
    except EOFError:
        raise Abort("Keine Eingabe möglich (stdin geschlossen). Nutze --yes mit Umgebungsvariablen.")
    return val or (default or "")

def confirm(prompt, default=True, yes=False):
    if yes:
        return default
    hint = "J/n" if default else "j/N"
    try:
        val = input(f"  {prompt} [{hint}]: ").strip().lower()
    except EOFError:
        raise Abort("Keine Eingabe möglich (stdin geschlossen).")
    if not val:
        return default
    return val in ("j", "ja", "y", "yes")

def ask_secret(prompt):
    try:
        return getpass.getpass(f"  {prompt}: ").strip()
    except EOFError:
        raise Abort("Keine Eingabe möglich (stdin geschlossen).")

def mask(tok):
    return "•" * 8 + tok[-4:] if len(tok) > 8 else "••••"

# ----------------------------------------------------------------------------
# .env.local
# ----------------------------------------------------------------------------
def load_env_file():
    vals = {}
    if ENV_FILE.exists():
        for line in ENV_FILE.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            vals[k.strip()] = v.strip().strip('"').strip("'")
    return vals

def save_env_file(vals):
    lines = [
        "# VylarisData – lokale Zugangsdaten. NICHT ins Repository committen, NICHT weitergeben.",
        "# Erzeugt von install.py. Löschen mit: python3 install.py forget",
    ]
    for k in ("CLOUDFLARE_API_TOKEN", "CLOUDFLARE_ACCOUNT_ID", "CF_PAGES_PROJECT", "SITE_DOMAIN"):
        if vals.get(k):
            lines.append(f'{k}="{vals[k]}"')
    ENV_FILE.write_text("\n".join(lines) + "\n", encoding="utf-8")
    try:
        os.chmod(ENV_FILE, stat.S_IRUSR | stat.S_IWUSR)  # 600
    except OSError:
        pass

def ensure_gitignore():
    gi = ROOT / ".gitignore"
    wanted = [".env.local", ".env", "dist/", "dist.zip", "node_modules/", ".wrangler/"]
    have = gi.read_text(encoding="utf-8").splitlines() if gi.exists() else []
    add = [w for w in wanted if w not in have]
    if add:
        with gi.open("a", encoding="utf-8") as f:
            if have and have[-1] != "":
                f.write("\n")
            f.write("\n".join(add) + "\n")
        ok(f".gitignore ergänzt ({', '.join(add)})")

def get_config():
    """Reihenfolge: Umgebungsvariablen vor .env.local."""
    f = load_env_file()
    def pick(k, default=""):
        return os.environ.get(k) or f.get(k) or default
    return {
        "CLOUDFLARE_API_TOKEN": pick("CLOUDFLARE_API_TOKEN"),
        "CLOUDFLARE_ACCOUNT_ID": pick("CLOUDFLARE_ACCOUNT_ID"),
        "CF_PAGES_PROJECT": pick("CF_PAGES_PROJECT", DEFAULT_PROJECT),
        "SITE_DOMAIN": pick("SITE_DOMAIN", DEFAULT_DOMAIN),
    }

# ----------------------------------------------------------------------------
# Cloudflare-API (nur urllib, Token wird nie ausgegeben)
# ----------------------------------------------------------------------------
class Cloudflare:
    def __init__(self, token, account_id=""):
        self.token = token
        self.account_id = account_id
        self.ctx = ssl.create_default_context()
        bundle = os.environ.get("SSL_CERT_FILE") or os.environ.get("REQUESTS_CA_BUNDLE")
        if bundle and os.path.exists(bundle):
            self.ctx = ssl.create_default_context(cafile=bundle)

    def call(self, method, path, body=None):
        data = json.dumps(body).encode() if body is not None else None
        req = urllib.request.Request(API + path, data=data, method=method)
        req.add_header("Authorization", f"Bearer {self.token}")
        req.add_header("Content-Type", "application/json")
        req.add_header("User-Agent", "vylarisdata-installer/1.0")
        try:
            with urllib.request.urlopen(req, timeout=30, context=self.ctx) as r:
                return r.status, json.loads(r.read().decode() or "{}")
        except urllib.error.HTTPError as e:
            try:
                payload = json.loads(e.read().decode() or "{}")
            except Exception:
                payload = {}
            return e.code, payload
        except (urllib.error.URLError, TimeoutError, OSError) as e:
            raise Abort(f"Keine Verbindung zu Cloudflare ({getattr(e, 'reason', e)}). Internetverbindung prüfen.")

    @staticmethod
    def errors(payload):
        errs = payload.get("errors") or []
        return "; ".join(f"{e.get('message', '?')} (Code {e.get('code', '?')})" for e in errs) or "unbekannter Fehler"

    def verify(self):
        """Prüft den Token. Unterstützt Benutzer- und Account-Tokens."""
        code, p = self.call("GET", "/user/tokens/verify")
        if code == 200 and p.get("success"):
            return True, p.get("result", {})
        if self.account_id:
            code2, p2 = self.call("GET", f"/accounts/{self.account_id}/tokens/verify")
            if code2 == 200 and p2.get("success"):
                return True, p2.get("result", {})
        return False, {"http": code, "message": self.errors(p)}

    def list_projects(self):
        return self.call("GET", f"/accounts/{self.account_id}/pages/projects")

    def get_project(self, name):
        return self.call("GET", f"/accounts/{self.account_id}/pages/projects/{name}")

    def create_project(self, name):
        return self.call("POST", f"/accounts/{self.account_id}/pages/projects",
                         {"name": name, "production_branch": "main"})

    def get_domains(self, name):
        return self.call("GET", f"/accounts/{self.account_id}/pages/projects/{name}/domains")

    def add_domain(self, name, domain):
        return self.call("POST", f"/accounts/{self.account_id}/pages/projects/{name}/domains", {"name": domain})

# ----------------------------------------------------------------------------
# Schritte
# ----------------------------------------------------------------------------
TOKEN_HELP = f"""
  {bold('So legst du den API-Token an')} (dauert ca. 2 Minuten):

   1. Öffne {blue('https://dash.cloudflare.com/profile/api-tokens')}
      und melde dich bei Cloudflare an.
   2. Klicke auf {bold('„Create Token“')} und dann bei „Create Custom Token“ auf {bold('„Get started“')}.
   3. Token-Name: {bold('VylarisData Deploy')}
   4. Berechtigungen (Permissions) – so einstellen:
        {bold('Account')}  ·  {bold('Cloudflare Pages')}  ·  {bold('Edit')}          {dim('← zwingend nötig')}
      Nur wenn die DNS-Einträge automatisch gesetzt werden sollen (optional):
        {bold('Zone')}     ·  {bold('DNS')}               ·  {bold('Edit')}
        {bold('Zone')}     ·  {bold('Zone')}              ·  {bold('Read')}
   5. Account Resources:  Include → {bold('dein Account')}
      Zone Resources (nur bei DNS-Rechten):  Include → Specific zone → {bold('vylarisdata.com')}
   6. Optional, aber empfohlen: bei „TTL“ ein Ablaufdatum setzen.
   7. {bold('„Continue to summary“')} → {bold('„Create Token“')}.
   8. Kopiere den Token sofort – Cloudflare zeigt ihn {bold('nur ein einziges Mal')} an.

  {bold('Wo finde ich die Account-ID?')}
   Cloudflare-Dashboard → {bold('Workers & Pages')} → rechte Seitenleiste „Account ID“
   (oder in der Adresszeile: dash.cloudflare.com/{bold('<ACCOUNT-ID>')}/…).

  {yellow('Sicherheit:')} Gib den Token niemals in Chats, Tickets oder Commits weiter.
  Der Installer speichert ihn nur lokal in {bold('.env.local')} (nur für dich lesbar)."""

def have(cmd):
    return shutil.which(cmd) is not None

def run(cmd, env=None, check=True):
    return subprocess.run(cmd, cwd=ROOT, env=env, check=check)

def do_build(dry=False):
    info("  Seite wird gebaut …")
    if dry:
        warn("Trockenlauf: build.py wird nicht ausgeführt.")
        return
    if not have("python3") and not sys.executable:
        raise Abort("Python 3 nicht gefunden.")
    r = subprocess.run([sys.executable, str(ROOT / "tools" / "build.py"), "--dist", "dist"], cwd=ROOT)
    if r.returncode != 0 or not (DIST / "index.html").exists():
        raise Abort("Der Build ist fehlgeschlagen.")
    ok(f"Auslieferbarer Ordner erstellt: {DIST.relative_to(ROOT)}/")

def make_zip():
    z = ROOT / "dist.zip"
    with zipfile.ZipFile(z, "w", zipfile.ZIP_DEFLATED) as zf:
        for p in sorted(DIST.rglob("*")):
            if p.is_file():
                zf.write(p, p.relative_to(DIST))
    return z

def do_deploy(cfg, dry=False):
    if dry:
        warn(f"Trockenlauf: würde {DIST.name}/ per {WRANGLER} nach „{cfg['CF_PAGES_PROJECT']}“ hochladen.")
        return True
    if not have("npx"):
        z = make_zip()
        warn("Node.js (npx) wurde nicht gefunden – automatisches Hochladen ist nicht möglich.")
        info(f"""
  Alternative ohne Node.js:
   • Datei erstellt: {bold(str(z))}
   • Cloudflare-Dashboard → Workers & Pages → {bold(cfg['CF_PAGES_PROJECT'])} → „Create deployment“
     → ZIP-Datei oder den Ordner {bold('dist/')} hineinziehen.
   • Oder Node.js installieren (https://nodejs.org) und {bold('python3 install.py deploy')} erneut ausführen.""")
        return False
    env = dict(os.environ)
    env["CLOUDFLARE_API_TOKEN"] = cfg["CLOUDFLARE_API_TOKEN"]
    env["CLOUDFLARE_ACCOUNT_ID"] = cfg["CLOUDFLARE_ACCOUNT_ID"]
    env["WRANGLER_SEND_METRICS"] = "false"
    info("  Veröffentliche auf Cloudflare Pages (das erste Mal lädt npx wrangler herunter) …")
    r = subprocess.run(
        ["npx", "--yes", WRANGLER, "pages", "deploy", str(DIST), "--project-name", cfg["CF_PAGES_PROJECT"],
         "--branch", "main", "--commit-dirty=true"], cwd=ROOT, env=env)
    if r.returncode != 0:
        fail("Das Hochladen ist fehlgeschlagen. Meldung oben lesen; häufige Ursache: fehlende Berechtigung „Cloudflare Pages · Edit“.")
        return False
    ok(f"Veröffentlicht: https://{cfg['CF_PAGES_PROJECT']}.pages.dev")
    return True

def collect_credentials(args, cfg):
    """Fragt Token und Account-ID ab (falls nicht vorhanden)."""
    if not cfg["CLOUDFLARE_API_TOKEN"] or not cfg["CLOUDFLARE_ACCOUNT_ID"]:
        if args.yes:
            raise Abort("CLOUDFLARE_API_TOKEN und CLOUDFLARE_ACCOUNT_ID fehlen (Umgebungsvariablen oder .env.local).")
        info(TOKEN_HELP)
        print()
    if not cfg["CLOUDFLARE_API_TOKEN"]:
        for attempt in range(3):
            tok = ask_secret("API-Token einfügen (Eingabe bleibt unsichtbar)")
            if len(tok) >= 20 and " " not in tok:
                cfg["CLOUDFLARE_API_TOKEN"] = tok
                ok(f"Token übernommen ({mask(tok)})")
                break
            fail("Das sieht nicht wie ein Token aus (zu kurz oder Leerzeichen). Bitte erneut einfügen.")
        else:
            raise Abort("Kein gültiges Token eingegeben.")
    else:
        ok(f"Token gefunden ({mask(cfg['CLOUDFLARE_API_TOKEN'])})")
    if not cfg["CLOUDFLARE_ACCOUNT_ID"]:
        for attempt in range(3):
            acc = ask("Account-ID (32 Zeichen, siehe Hinweis oben)").strip()
            if len(acc) == 32 and all(ch in "0123456789abcdefABCDEF" for ch in acc):
                cfg["CLOUDFLARE_ACCOUNT_ID"] = acc.lower()
                ok("Account-ID übernommen")
                break
            fail("Die Account-ID besteht aus genau 32 Hex-Zeichen (0-9, a-f).")
        else:
            raise Abort("Keine gültige Account-ID eingegeben.")
    else:
        ok(f"Account-ID gefunden ({cfg['CLOUDFLARE_ACCOUNT_ID'][:6]}…)")

def check_token(cf, dry=False):
    if dry:
        warn("Trockenlauf: Token wird nicht gegen Cloudflare geprüft.")
        return True
    good, res = cf.verify()
    if not good:
        fail(f"Cloudflare lehnt den Token ab: {res.get('message')}")
        info(f"""
  Mögliche Ursachen:
   • Token wurde unvollständig kopiert (bitte neu einfügen)
   • Token ist abgelaufen oder wurde in Cloudflare gelöscht
   • Account-ID gehört nicht zu diesem Token""")
        return False
    status = res.get("status", "active")
    ok(f"Token ist gültig (Status: {status})" + (f", läuft ab: {res['expires_on']}" if res.get("expires_on") else ""))
    code, p = cf.list_projects()
    if code == 200:
        ok("Berechtigung „Cloudflare Pages“ vorhanden")
        return True
    if code in (401, 403):
        fail("Der Token darf keine Pages-Projekte lesen/ändern.")
        info(f"""
  Behebung: Token in Cloudflare öffnen → Berechtigungen bearbeiten und hinzufügen:
      {bold('Account · Cloudflare Pages · Edit')}
  und prüfen, dass unter „Account Resources“ dein Account ausgewählt ist.
  Ist die Account-ID korrekt? Aktuell: {cf.account_id[:6]}…""")
        return False
    fail(f"Unerwartete Antwort von Cloudflare (HTTP {code}): {cf.errors(p)}")
    return False

def ensure_project(cf, cfg, dry=False):
    name = cfg["CF_PAGES_PROJECT"]
    if dry:
        warn(f"Trockenlauf: würde Projekt „{name}“ prüfen/anlegen.")
        return True
    code, p = cf.get_project(name)
    if code == 200:
        ok(f"Pages-Projekt „{name}“ existiert bereits")
        return True
    if code == 404 or (p.get("errors") and any(e.get("code") == 8000007 for e in p["errors"])):
        code, p = cf.create_project(name)
        if code in (200, 201) and p.get("success"):
            ok(f"Pages-Projekt „{name}“ angelegt")
            return True
        fail(f"Projekt konnte nicht angelegt werden: {cf.errors(p)}")
        return False
    fail(f"Projekt konnte nicht geprüft werden (HTTP {code}): {cf.errors(p)}")
    return False

def connect_domain(cf, cfg, args, dry=False):
    domain, name = cfg["SITE_DOMAIN"], cfg["CF_PAGES_PROJECT"]
    if dry:
        warn(f"Trockenlauf: würde Domain {domain} mit „{name}“ verbinden.")
        return
    code, p = cf.get_domains(name)
    existing = [d.get("name") for d in (p.get("result") or [])] if code == 200 else []
    if domain in existing:
        ok(f"Domain {domain} ist bereits verbunden")
    else:
        code, p = cf.add_domain(name, domain)
        if code in (200, 201) and p.get("success"):
            ok(f"Domain {domain} zum Projekt hinzugefügt")
        else:
            fail(f"Domain konnte nicht hinzugefügt werden: {cf.errors(p)}")
            return
    info(f"""
  {bold('DNS prüfen')} – damit {domain} wirklich auf die Seite zeigt:
   • Liegt die Domain bei Cloudflare (Nameserver von Cloudflare), legt Cloudflare den
     CNAME-Eintrag in der Regel selbst an. Falls nicht: Dashboard → {domain} → DNS →
     Eintrag hinzufügen:  Typ {bold('CNAME')} · Name {bold('@')} · Ziel {bold(name + '.pages.dev')} · Proxy {bold('an')}
   • Liegt die Domain bei einem anderen Anbieter, dort einen CNAME auf
     {bold(name + '.pages.dev')} setzen (für die Hauptdomain ggf. „CNAME flattening“/ALIAS nutzen)
     oder die Nameserver zu Cloudflare umziehen.
   • Das Zertifikat (HTTPS) stellt Cloudflare automatisch aus – das kann einige Minuten dauern.""")

def offer_github(cfg, args):
    if not have("gh"):
        info(f"""
  {bold('Automatisch bei jedem Push veröffentlichen (optional):')}
   GitHub → Repository → Settings → Secrets and variables → Actions → „New repository secret“:
     {bold('CLOUDFLARE_API_TOKEN')}   = dein Token
     {bold('CLOUDFLARE_ACCOUNT_ID')}  = deine Account-ID
   Der Workflow .github/workflows/deploy.yml veröffentlicht dann bei jedem Push auf main.""")
        return
    if subprocess.run(["gh", "auth", "status"], capture_output=True).returncode != 0:
        warn("GitHub-CLI ist nicht angemeldet (gh auth login) – Secrets bitte manuell setzen (siehe README).")
        return
    if not confirm("GitHub-Secrets für automatische Veröffentlichung jetzt setzen?", default=False, yes=args.yes):
        return
    for key in ("CLOUDFLARE_API_TOKEN", "CLOUDFLARE_ACCOUNT_ID"):
        # Wert wird über stdin übergeben, nie als Argument (sichtbar in der Prozessliste)
        r = subprocess.run(["gh", "secret", "set", key], input=cfg[key].encode(), cwd=ROOT, capture_output=True)
        (ok if r.returncode == 0 else fail)(f"Secret {key} " + ("gesetzt" if r.returncode == 0 else "konnte nicht gesetzt werden"))

# ----------------------------------------------------------------------------
# Befehle
# ----------------------------------------------------------------------------
def cmd_setup(args):
    total = 6
    print(bold("\nVylarisData – Installer"))
    print(dim("Cloudflare Pages · Token · Veröffentlichung"))
    if args.dry_run:
        warn("TROCKENLAUF – es wird nichts verändert.")
    cfg = get_config()
    if args.project: cfg["CF_PAGES_PROJECT"] = args.project
    if args.domain: cfg["SITE_DOMAIN"] = args.domain

    step(1, total, "Voraussetzungen")
    ok(f"Python {sys.version.split()[0]}")
    (ok if have("npx") else warn)("Node.js/npx " + ("gefunden" if have("npx") else "nicht gefunden – es wird dist.zip zum manuellen Hochladen erzeugt"))
    if (ROOT / "tools" / "build.py").exists():
        ok("Build-Skript vorhanden")
    else:
        raise Abort("tools/build.py fehlt – bitte im Projektordner ausführen.")

    step(2, total, "Cloudflare-Zugang")
    collect_credentials(args, cfg)
    if not args.yes:
        cfg["CF_PAGES_PROJECT"] = ask("Name des Pages-Projekts", cfg["CF_PAGES_PROJECT"], args.yes)
        cfg["SITE_DOMAIN"] = ask("Domain der Seite (leer = keine verbinden)", cfg["SITE_DOMAIN"], args.yes)

    step(3, total, "Token prüfen")
    cf = Cloudflare(cfg["CLOUDFLARE_API_TOKEN"], cfg["CLOUDFLARE_ACCOUNT_ID"])
    for attempt in range(2):
        if check_token(cf, args.dry_run):
            break
        if args.yes or attempt == 1:
            raise Abort("Token konnte nicht bestätigt werden.")
        if not confirm("Token neu eingeben?", True, args.yes):
            raise Abort("Abgebrochen.")
        cfg["CLOUDFLARE_API_TOKEN"] = ""
        collect_credentials(args, cfg)
        cf = Cloudflare(cfg["CLOUDFLARE_API_TOKEN"], cfg["CLOUDFLARE_ACCOUNT_ID"])

    step(4, total, "Sicher speichern")
    if args.dry_run:
        warn("Trockenlauf: .env.local wird nicht geschrieben.")
    else:
        if ENV_FILE.exists() and not args.yes and not confirm(".env.local existiert bereits – überschreiben?", True):
            warn("Vorhandene .env.local bleibt unverändert.")
        else:
            save_env_file(cfg)
            ok(f"Gespeichert in {ENV_FILE.name} (Dateirechte 600 – nur du kannst sie lesen)")
        ensure_gitignore()

    step(5, total, "Projekt anlegen und veröffentlichen")
    if not ensure_project(cf, cfg, args.dry_run):
        raise Abort("Projekt-Einrichtung fehlgeschlagen.")
    do_build(args.dry_run)
    deployed = do_deploy(cfg, args.dry_run)

    step(6, total, "Domain und automatische Veröffentlichung")
    if cfg["SITE_DOMAIN"] and (args.yes or confirm(f"Domain {cfg['SITE_DOMAIN']} jetzt mit dem Projekt verbinden?", True)):
        connect_domain(cf, cfg, args, args.dry_run)
    if not args.dry_run:
        offer_github(cfg, args)

    print()
    print(bold(green("Fertig.")))
    info(f"""
  Nächste Schritte:
   • Seite aktualisieren:   {bold('python3 install.py deploy')}
   • Token prüfen:          {bold('python3 install.py verify')}
   • Zugangsdaten löschen:  {bold('python3 install.py forget')}
   • Vorschau:              https://{cfg['CF_PAGES_PROJECT']}.pages.dev{'' if deployed else '  (nach dem Hochladen)'}""")

def need_config(args):
    cfg = get_config()
    if args.project: cfg["CF_PAGES_PROJECT"] = args.project
    if args.domain: cfg["SITE_DOMAIN"] = args.domain
    if not cfg["CLOUDFLARE_API_TOKEN"] or not cfg["CLOUDFLARE_ACCOUNT_ID"]:
        raise Abort("Noch keine Zugangsdaten gespeichert. Bitte zuerst ausführen:  python3 install.py")
    return cfg

def cmd_verify(args):
    cfg = need_config(args)
    cf = Cloudflare(cfg["CLOUDFLARE_API_TOKEN"], cfg["CLOUDFLARE_ACCOUNT_ID"])
    print(bold("\nToken prüfen"))
    if not check_token(cf, args.dry_run):
        raise Abort("Token ungültig oder unzureichende Rechte.")

def cmd_build(args):
    print(bold("\nSeite bauen"))
    do_build(args.dry_run)

def cmd_deploy(args):
    cfg = need_config(args)
    cf = Cloudflare(cfg["CLOUDFLARE_API_TOKEN"], cfg["CLOUDFLARE_ACCOUNT_ID"])
    print(bold("\nVeröffentlichen"))
    if not check_token(cf, args.dry_run):
        raise Abort("Token ungültig oder unzureichende Rechte.")
    if not ensure_project(cf, cfg, args.dry_run):
        raise Abort("Projekt nicht verfügbar.")
    do_build(args.dry_run)
    do_deploy(cfg, args.dry_run)

def cmd_status(args):
    cfg = need_config(args)
    cf = Cloudflare(cfg["CLOUDFLARE_API_TOKEN"], cfg["CLOUDFLARE_ACCOUNT_ID"])
    print(bold("\nStatus"))
    code, p = cf.get_project(cfg["CF_PAGES_PROJECT"])
    if code != 200:
        raise Abort(f"Projekt „{cfg['CF_PAGES_PROJECT']}“ nicht abrufbar: {cf.errors(p)}")
    r = p.get("result", {})
    ok(f"Projekt:  {r.get('name')}  →  https://{r.get('subdomain', cfg['CF_PAGES_PROJECT'] + '.pages.dev')}")
    dep = (r.get("latest_deployment") or {})
    if dep:
        ok(f"Letzte Veröffentlichung: {dep.get('created_on', '?')} ({(dep.get('latest_stage') or {}).get('status', '?')})")
    else:
        warn("Noch keine Veröffentlichung vorhanden.")
    code, p = cf.get_domains(cfg["CF_PAGES_PROJECT"])
    for d in (p.get("result") or []) if code == 200 else []:
        ok(f"Domain:   {d.get('name')}  ({d.get('status', '?')})")

def cmd_forget(args):
    print(bold("\nZugangsdaten löschen"))
    if ENV_FILE.exists():
        if confirm(".env.local wirklich löschen?", False, args.yes):
            ENV_FILE.unlink()
            ok(".env.local gelöscht")
            warn("Den Token in Cloudflare selbst widerrufen: dash.cloudflare.com/profile/api-tokens → Token → „Roll“/„Delete“.")
    else:
        info("  Keine .env.local vorhanden.")

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("command", nargs="?", default="setup", choices=["setup", "deploy", "verify", "build", "status", "forget"])
    ap.add_argument("--yes", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--project")
    ap.add_argument("--domain")
    args = ap.parse_args()
    try:
        {"setup": cmd_setup, "deploy": cmd_deploy, "verify": cmd_verify, "build": cmd_build,
         "status": cmd_status, "forget": cmd_forget}[args.command](args)
    except Abort as e:
        print()
        fail(str(e))
        sys.exit(1)
    except KeyboardInterrupt:
        print("\nAbgebrochen.")
        sys.exit(130)

if __name__ == "__main__":
    main()
