# VylarisData

Website von **VylarisData** – *Powering the Vylaris Ecosystem. Technology. Infrastructure. Innovation.*

- Zugehörigkeit: VylarisGroup
- Geschäftsbereich: Software Development & Technology
- Marke von: CircleUpWilms
- Domain: vylarisdata.com

Statische Website ohne Datenbank, ohne Tracking, ohne Cookies und ohne Drittanbieter-Ressourcen
(die Schrift Poppins ist lokal eingebunden).

## Installation und Veröffentlichung (Cloudflare Pages)

Der Installer führt dich durch die komplette Einrichtung und fragt dabei nach deinem
**Cloudflare-API-Token**:

```bash
python3 install.py          # oder: ./install.sh
```

Er macht der Reihe nach:

1. erklärt, wie du den API-Token in Cloudflare anlegst und wo du die Account-ID findest,
2. fragt Token (unsichtbare Eingabe) und Account-ID ab und prüft beides bei Cloudflare,
3. speichert die Zugangsdaten lokal in `.env.local` (Rechte 600, steht in `.gitignore`),
4. legt das Pages-Projekt an, baut die Seite und veröffentlicht sie,
5. verbindet deine Domain und erklärt die nötigen DNS-Einträge,
6. kann auf Wunsch die GitHub-Secrets für automatisches Veröffentlichen setzen.

### Den Token in Cloudflare anlegen

1. <https://dash.cloudflare.com/profile/api-tokens> → **Create Token** → **Create Custom Token**
2. Berechtigungen:
   - **Account · Cloudflare Pages · Edit** (zwingend)
   - optional für automatische DNS-Einträge: **Zone · DNS · Edit** und **Zone · Zone · Read**
3. Account Resources: dein Account · (bei DNS-Rechten) Zone Resources: `vylarisdata.com`
4. Token kopieren – er wird nur einmal angezeigt.
5. Die **Account-ID** steht im Dashboard unter *Workers & Pages* in der rechten Seitenleiste.

### Weitere Befehle

```bash
python3 install.py deploy     # neu bauen und veröffentlichen
python3 install.py verify     # gespeicherten Token prüfen
python3 install.py status     # Projekt, Domain, letzte Veröffentlichung
python3 install.py build      # nur bauen (Ordner dist/)
python3 install.py forget     # .env.local löschen
python3 install.py --dry-run  # nur anzeigen, nichts verändern
```

Für CI oder ohne Rückfragen: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`,
`CF_PAGES_PROJECT`, `SITE_DOMAIN` als Umgebungsvariablen setzen und `python3 install.py --yes` ausführen.

Zum Hochladen wird Node.js (`npx wrangler`) verwendet. Ohne Node.js erzeugt der Installer
`dist.zip`, die du im Cloudflare-Dashboard hochladen kannst.

### Automatisch bei jedem Push veröffentlichen

Der Workflow `.github/workflows/deploy.yml` baut und veröffentlicht bei jedem Push auf `main`.
Dafür im GitHub-Repository unter *Settings → Secrets and variables → Actions* anlegen:
`CLOUDFLARE_API_TOKEN` und `CLOUDFLARE_ACCOUNT_ID` (der Installer kann das über die GitHub-CLI
`gh` für dich erledigen). Fehlen die Secrets, wird die Veröffentlichung übersprungen.

### Sicherheit

- Der Token wird nie ausgegeben, nie als Kommandozeilenargument übergeben und nie committet.
- `.env.local`, `dist/` und `dist.zip` stehen in `.gitignore`.
- Token mit Ablaufdatum und nur den nötigen Rechten anlegen; bei Verdacht in Cloudflare widerrufen.
- `_headers` setzt strenge Sicherheits-Header (CSP, HSTS, nosniff, kein Framing).

## Aufbau des Projekts

```
src/pages/*.html    Inhalte der Seiten (Quelle)
tools/build.py      Seiten-Generator (Kopf, Navigation, Footer, Sitemap, Header-Datei)
install.py          Installer und Deployment
assets/css          Design-Tokens (Hell/Dunkel) und Komponenten
assets/js           Theme-Umschalter, Menü
assets/img          Logo, Favicon, Vorschaubild
assets/fonts        Poppins (OFL)
*.html              erzeugte Seiten (nicht von Hand bearbeiten)
```

Seiten ändern: Datei in `src/pages/` bearbeiten, dann

```bash
python3 tools/build.py        # erzeugt die *.html im Projektordner
python3 -m http.server 8000   # lokale Vorschau
```
