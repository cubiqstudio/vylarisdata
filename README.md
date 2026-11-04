# VylarisData

Website von **VylarisData** – *Powering the Vylaris Ecosystem. Technology. Infrastructure. Innovation.*

- Zugehörigkeit: VylarisGroup · Geschäftsbereich: Software Development & Technology
- Marke von: CircleUpWilms · Domain: vylarisdata.com

Gebaut mit **Next.js** (App Router, statischer Export), **React** und **TypeScript** (strict).
Kein Tracking, keine Cookies, keine Drittanbieter-Ressourcen (die Schrift Poppins ist lokal eingebunden).

## Entwickeln

Voraussetzung: Node.js 20 oder neuer (der Installer `./install.sh` richtet es bei Bedarf selbst ein).

```bash
npm install
npm run dev          # Entwicklungsserver auf http://localhost:3000
npm run typecheck    # TypeScript-Prüfung
npm run build        # statischer Export nach out/
npm run preview      # fertigen Export lokal ansehen (http://localhost:4173)
```

## Aufbau

```
app/                  Seiten (Next.js App Router): page.tsx je Route, layout.tsx, sitemap.ts, robots.ts
components/ui/        typisierte Bausteine: PageHero, Section, Split, Tile, Faq, Timeline, Stack, Cta …
components/layout/    Header, Footer, Navigation, Theme-Umschalter (Client-Komponenten nur dort, wo nötig)
components/sections/  seitenspezifische Bausteine
components/graphics/  Grafiken (Netzwerk-Motiv)
content/              typisierte Inhalte und Stammdaten (content/site.ts)
lib/metadata.ts       einheitliche Meta-Daten je Seite
public/               Schriften, Logo, Favicon, _headers (Sicherheits-Header für Cloudflare)
install.sh            Installer und Deployment (Cloudflare Pages)
```

Eine neue Seite: Ordner unter `app/<name>/` mit `page.tsx` anlegen, Bausteine aus `@/components/ui`
verwenden, Meta-Daten mit `pageMetadata(...)` setzen und die Seite in `content/site.ts` (`nav`) eintragen.

## Installation und Veröffentlichung (Cloudflare Pages)

Der Installer führt durch die komplette Einrichtung und fragt dabei nach deinem
**Cloudflare-API-Token**:

```bash
./install.sh
```

Er macht der Reihe nach:

1. prüft die Voraussetzungen und **installiert fehlende selbst**: Node.js 22 (offizieller Download von nodejs.org mit SHA-256-Prüfung, nach `~/.vylarisdata/node`, ohne Administrator-Rechte) und bei Bedarf curl über den Paketmanager,
2. erklärt, wie du den API-Token in Cloudflare anlegst und wo du die Account-ID findest,
3. fragt Token (unsichtbare Eingabe) und Account-ID ab und prüft beides bei Cloudflare,
4. speichert die Zugangsdaten lokal in `.env.local` (Rechte 600, steht in `.gitignore`),
5. installiert die Abhängigkeiten und baut die Seite (`out/`),
6. legt das Pages-Projekt an und veröffentlicht,
7. verbindet die Domain, erklärt die DNS-Einträge und kann auf Wunsch GitHub-Secrets setzen.

### Den Token in Cloudflare anlegen

1. <https://dash.cloudflare.com/profile/api-tokens> → **Create Token** → **Create Custom Token**
2. Berechtigungen:
   - **Account · Cloudflare Pages · Edit** (zwingend)
   - optional für automatische DNS-Einträge: **Zone · DNS · Edit** und **Zone · Zone · Read**
3. Account Resources: dein Account · (bei DNS-Rechten) Zone Resources: `vylarisdata.com`
4. Token kopieren – er wird nur einmal angezeigt.
5. Die **Account-ID** steht im Dashboard unter *Workers & Pages* in der rechten Seitenleiste.

Unter Windows den Installer in WSL (Ubuntu) ausführen: `wsl --install`, danach dort `./install.sh`.

### Weitere Befehle

```bash
./install.sh deploy     # neu bauen und veröffentlichen
./install.sh verify     # gespeicherten Token prüfen
./install.sh status     # Projekt, Domain, letzte Veröffentlichung
./install.sh build      # nur bauen
./install.sh forget     # .env.local löschen
./install.sh --dry-run  # nur anzeigen, nichts verändern
./install.sh help
```

Für CI oder ohne Rückfragen: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`,
`CF_PAGES_PROJECT`, `SITE_DOMAIN` als Umgebungsvariablen setzen und `./install.sh --yes` ausführen.

### Automatisch bei jedem Push veröffentlichen

Der Workflow `.github/workflows/deploy.yml` prüft Typen, baut die Seite und veröffentlicht bei jedem
Push auf `main`. Für Pull Requests läuft nur Typprüfung und Build. Dafür im GitHub-Repository unter
*Settings → Secrets and variables → Actions* anlegen: `CLOUDFLARE_API_TOKEN` und
`CLOUDFLARE_ACCOUNT_ID` (der Installer kann das über die GitHub-CLI `gh` für dich erledigen).
Fehlen die Secrets, wird nur geprüft und gebaut.

### Sicherheit

- Der Token wird nie ausgegeben, nie als Kommandozeilenargument übergeben und nie committet.
- `.env.local`, `out/`, `.next/` und `node_modules/` stehen in `.gitignore`.
- Token mit Ablaufdatum und nur den nötigen Rechten anlegen; bei Verdacht in Cloudflare widerrufen.
- `public/_headers` setzt Sicherheits-Header (CSP, HSTS, nosniff, kein Framing).
