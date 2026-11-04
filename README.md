# VylarisData

Website von **VylarisData** – *Powering the Vylaris Ecosystem. Technology. Infrastructure. Innovation.*

- Zugehörigkeit: VylarisGroup · Geschäftsbereich: Software Development & Technology
- Marke von: CircleUpWilms · Domain: vylarisdata.com

Gebaut mit **Next.js** (App Router, statischer Export), **React** und **TypeScript** (strict).
Kein Tracking, keine Cookies, keine Drittanbieter-Ressourcen (die Schrift Poppins ist lokal eingebunden).

## So wird die Seite betrieben

```
Besucher ──HTTPS──▶ Cloudflare ◀──ausgehende Verbindung── cloudflared ──▶ nginx ──▶ statische Seite
                                    (Tunnel)               (Container)    (Container, ohne Port)
```

- Die Seite läuft in **Docker** (`compose.yaml`): ein nginx-Container (ohne Root-Rechte, schreibgeschützt,
  ohne Internetzugang) und ein `cloudflared`-Container für den **Cloudflare Tunnel**.
- **Keine offenen Ports:** Der Server veröffentlicht keinen einzigen Port. Der Tunnel baut nur ausgehende
  Verbindungen zu Cloudflare auf (Port 7844). Eingehend kann die Firewall komplett gesperrt bleiben.
- HTTPS, DDoS-Schutz und Caching übernimmt Cloudflare. Es gibt keine zusätzliche öffentliche Adresse
  außer `vylarisdata.com`.

## Installation: ein Befehl

Auf dem Server (Linux; macOS mit Docker Desktop; Windows über WSL):

```bash
git clone https://github.com/cubiqstudio/vylarisdata.git
```

```bash
cd vylarisdata && ./install.sh
```

Der Installer fragt dabei nach deinem **Cloudflare-API-Token** und führt der Reihe nach durch:

1. Voraussetzungen prüfen und **fehlende selbst installieren** (Docker über das offizielle Skript von
   get.docker.com, curl und python3 über den Paketmanager),
2. erklären, wie du den API-Token in Cloudflare anlegst und wo du die Account-ID findest,
3. Token (unsichtbare Eingabe) und Account-ID abfragen und bei Cloudflare prüfen,
4. Zugangsdaten lokal in `.env.local` speichern (Rechte 600, steht in `.gitignore`),
5. den **Tunnel** anlegen und die Route `vylarisdata.com → nginx` setzen,
6. den **DNS-Eintrag** (CNAME auf den Tunnel) setzen,
7. Container bauen und starten, Tunnel-Status und Erreichbarkeit prüfen.

### Den Token in Cloudflare anlegen

1. <https://dash.cloudflare.com/profile/api-tokens> → **Create Token** → **Create Custom Token**
2. Berechtigungen (drei Zeilen):
   - **Account · Cloudflare Tunnel · Edit**
   - **Zone · DNS · Edit**
   - **Zone · Zone · Read**
3. Account Resources: dein Account · Zone Resources: `vylarisdata.com`
4. Token kopieren – er wird nur einmal angezeigt.
5. Die **Account-ID** steht im Cloudflare-Dashboard in der rechten Seitenleiste.

Die Domain `vylarisdata.com` muss in diesem Cloudflare-Konto liegen (Nameserver von Cloudflare).
Hat der Token keine DNS-Rechte, zeigt der Installer genau, welchen CNAME du von Hand setzen musst.

### Befehle

```bash
./install.sh deploy     # Seite neu bauen und neu starten (nach Änderungen)
./install.sh status     # Tunnel, Container und Erreichbarkeit
./install.sh logs       # Logs ansehen
./install.sh stop       # Container stoppen (Seite offline)
./install.sh verify     # gespeicherten Token prüfen
./install.sh domain     # DNS-Eintrag und Tunnel-Route (neu) setzen
./install.sh forget     # gespeicherte Zugangsdaten löschen
./install.sh --dry-run  # nur anzeigen, nichts verändern
./install.sh help
```

Ohne Rückfragen: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `SITE_DOMAIN`, `TUNNEL_NAME` als
Umgebungsvariablen setzen und `./install.sh --yes` ausführen.

### Sicherheit

- Der API-Token wird nie ausgegeben, nie als Kommandozeilenargument übergeben und nie committet.
- Der Tunnel-Container bekommt nur einen **eigenen Tunnel-Token** (`.env.tunnel`), nie den API-Token.
- `.env.local` und `.env.tunnel` haben Rechte 600 und stehen in `.gitignore`.
- Beide Container laufen mit `cap_drop: ALL`, `no-new-privileges` und schreibgeschütztem Dateisystem;
  nginx läuft als normaler Benutzer und hat keinen Zugang zum Internet.
- Sicherheits-Header (CSP, HSTS, nosniff, kein Framing) setzt nginx (`docker/nginx.conf`, `docker/security.conf`).
- Token mit Ablaufdatum und nur den nötigen Rechten anlegen; bei Verdacht in Cloudflare widerrufen.

## Entwickeln

Voraussetzung: Node.js 20 oder neuer.

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
components/layout/    Header, Footer, Navigation, Theme-Umschalter
components/sections/  seitenspezifische Bausteine
content/              typisierte Inhalte und Stammdaten (content/site.ts)
lib/metadata.ts       einheitliche Meta-Daten je Seite
public/               Schriften, Logo, Favicon
Dockerfile            baut die Seite (Node) und liefert sie mit nginx aus
compose.yaml          nginx + Cloudflare Tunnel, keine veröffentlichten Ports
docker/               nginx-Konfiguration und Sicherheits-Header
install.sh            Installer und Verwaltung (Tunnel, DNS, Start, Status)
```

Eine neue Seite: Ordner unter `app/<name>/` mit `page.tsx` anlegen, Bausteine aus `@/components/ui`
verwenden, Meta-Daten mit `pageMetadata(...)` setzen und die Seite in `content/site.ts` (`nav`) eintragen.
Danach auf dem Server `./install.sh deploy`.
