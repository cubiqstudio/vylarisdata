# VylarisData

Website von **VylarisData** – *Powering the Vylaris Ecosystem. Technology. Infrastructure. Innovation.*

- Zugehörigkeit: VylarisGroup · Geschäftsbereich: Software Development & Technology
- Marke von: CircleUpWilms · Domain: vylarisdata.com

Gebaut mit **Next.js** (App Router), **React** und **TypeScript** (strict). Kein Tracking, keine Cookies für
Besucher, keine Drittanbieter-Ressourcen (die Schrift Poppins ist lokal eingebunden).

## Was die Seite kann

- **Öffentliche Seiten:** Start, Leistungen, Infrastruktur, Technologie, Ökosystem, Über uns, Kontakt (vorgerendert).
- **Live-Status der Infrastruktur** auf der Seite „Infrastruktur“: Zustand jedes Systems (Im Betrieb, In Wartung,
  Eingeschränkt, Störung) mit Hinweis und Zeitstempel.
- **Admin-Bereich** unter `/admin/` mit Anmeldung: Status pflegen, **Impressum und Datenschutz pflegen**, Passwort ändern,
  Zwei-Faktor-Anmeldung (TOTP) mit Wiederherstellungscodes, Protokoll aller sicherheitsrelevanten Ereignisse.
- **Impressum und Datenschutzerklärung** entstehen aus den Angaben im Admin-Bereich (siehe unten).

## So wird die Seite betrieben

```
Besucher ──HTTPS──▶ Cloudflare ◀──ausgehende Verbindung── cloudflared ──▶ Next.js-Server ──▶ Volume /data
                                    (Tunnel)               (Container)    (Container, ohne Port)
```

- Alles läuft in **Docker** (`compose.yaml`): ein Next.js-Container (ohne Root-Rechte, schreibgeschütztes
  Dateisystem, ohne Internetzugang) und ein `cloudflared`-Container für den **Cloudflare Tunnel**.
- **Keine offenen Ports:** Der Server veröffentlicht keinen einzigen Port. Der Tunnel baut nur ausgehende
  Verbindungen zu Cloudflare auf (Port 7844). Eingehend kann die Firewall komplett gesperrt bleiben.
- Veränderliche Daten (Admin-Zugang, Sitzungen, Status, Protokoll) liegen im Docker-Volume `vd-data`
  und bleiben bei Updates erhalten.

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
5. den **Tunnel** anlegen und die Route `vylarisdata.com → Container` setzen,
6. den **DNS-Eintrag** (CNAME auf den Tunnel) setzen,
7. Container bauen und starten, Tunnel-Status und Erreichbarkeit prüfen und den **Admin-Zugang** einrichten.

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

### Admin-Zugang einrichten

```bash
./install.sh admin
```

Der Befehl erzeugt einen einmaligen **Einrichtungs-Schlüssel** (gilt eine Stunde) und zeigt ihn an. Damit legst du auf
`https://vylarisdata.com/admin/setup/` Benutzername und Passwort fest (mindestens 12 Zeichen). Danach ist die
Einrichtungsseite dauerhaft gesperrt und der Schlüssel wird entfernt. Anschließend im Admin-Bereich unter
**Sicherheit** die Zwei-Faktor-Anmeldung aktivieren (empfohlen). Passwort verloren: `./install.sh admin-reset`.

### Befehle

```bash
./install.sh update     # neueste Version holen, Images erneuern, neu starten (mit Rollback)
./install.sh update --check   # nur prüfen, ob ein Update verfügbar ist
./install.sh deploy     # Seite aus dem aktuellen Stand neu bauen und neu starten
./install.sh status     # Tunnel, Container und Erreichbarkeit
./install.sh logs       # Logs ansehen
./install.sh stop       # Container stoppen (Seite offline)
./install.sh admin      # Admin-Zugang einrichten
./install.sh admin-reset # Admin-Zugang zurücksetzen
./install.sh verify     # gespeicherten Token prüfen
./install.sh domain     # DNS-Eintrag und Tunnel-Route (neu) setzen
./install.sh forget     # gespeicherte Zugangsdaten löschen
./install.sh --dry-run  # nur anzeigen, nichts verändern
./install.sh help
```

Ohne Rückfragen: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `SITE_DOMAIN`, `TUNNEL_NAME` als
Umgebungsvariablen setzen und `./install.sh --yes` ausführen.

### Aktualisieren

```bash
./install.sh update
```

1. holt die neueste Version aus Git und zeigt, welche Änderungen kommen (bei lokalen Änderungen fragt er nach),
2. startet sich bei Bedarf selbst mit der neuen Installer-Version neu,
3. sichert das laufende Image als Rückfallstand, lädt aktuelle Basis-Images und baut neu – schlägt der Build
   fehl, läuft die bisherige Seite unverändert weiter,
4. startet neu und wartet, bis die Seite gesund ist; sonst **automatischer Rollback** auf den vorherigen Stand,
5. prüft Tunnel und Erreichbarkeit und räumt alte Images auf.

`update --check` prüft nur, ob ein Update verfügbar ist (Exit-Code 10 = ja) und eignet sich für einen Cronjob.

## Impressum und Datenschutz pflegen

Im Admin-Bereich unter **Rechtliches** (`/admin/rechtliches/`) trägst du alle Angaben ein; die Seiten `/impressum/` und
`/datenschutz/` setzen sich daraus sofort zusammen:

- **Anbieter:** Markenname, Firma, Rechtsform, Inhaber, Vertretungsberechtigte (je nach Rechtsform)
- **Anschrift und Kontakt:** Straße, PLZ, Ort, Land, E-Mail, Telefon (optional)
- **Registereintrag:** ein-/ausschaltbar; Register, Registergericht und Registernummer (die Werte bleiben beim Ausschalten gespeichert)
- **Umsatzsteuer:** *Kleinunternehmerregelung (§ 19 UStG)* oder *Regelbesteuerung* mit USt-IdNr. (§ 27a UStG)
- **Weiteres:** Aufsichtsbehörde, verantwortliche Person nach § 18 Abs. 2 MStV, Verbraucherstreitbeilegung, freie Hinweise
- **Datenschutz:** Speicherdauer der Logfiles, Datenschutzbeauftragte(r), Aufsichtsbehörde, freie Hinweise

Eine Vollständigkeitsprüfung zeigt fehlende Pflichtangaben. Fehlt etwas, erscheint auf der öffentlichen Seite ein gelb
markierter Platzhalter. Eingaben werden geprüft (E-Mail, Telefon, USt-IdNr., Längen) und als reiner Text ausgegeben –
HTML aus Eingaben wird nie ausgeführt. Jede Änderung steht im Protokoll (nur die Feldnamen, nicht die Inhalte).

> Die Maske hilft beim Ausfüllen, ersetzt aber **keine Rechtsberatung**. Welche Angaben Pflicht sind, hängt von Rechtsform und
> Tätigkeit ab. Die Datenschutzerklärung nennt auch die Auslieferung über Cloudflare und den Admin-Cookie; prüfe, ob sie zu
> deinem tatsächlichen Betrieb passt (z. B. Verträge mit Dienstleistern).

## Sicherheit

**Betrieb**
- Der API-Token wird nie ausgegeben, nie als Kommandozeilenargument übergeben und nie committet.
- Der Tunnel-Container bekommt nur einen **eigenen Tunnel-Token** (`.env.tunnel`), nie den API-Token.
- `.env.local`, `.env.tunnel` und `.env.app` haben Rechte 600 und stehen in `.gitignore`.
- Beide Container laufen mit `cap_drop: ALL`, `no-new-privileges` und schreibgeschütztem Dateisystem; der
  Web-Container läuft als normaler Benutzer ohne Internetzugang. Einzig `/data` ist beschreibbar.
- Sicherheits-Header (CSP, HSTS, nosniff, kein Framing) setzt die Anwendung (`next.config.ts`);
  der Admin-Bereich wird nie zwischengespeichert und nie indexiert.

**Admin-Anmeldung**
- Passwörter (mindestens 14 Zeichen) werden mit **scrypt** gehasht (N=65536, individuelles Salz); unbekannte Benutzer kosten dieselbe Zeit,
  damit die Antwort nichts verrät.
- Serverseitige Sitzungen: im Cookie liegt ein zufälliger 256-Bit-Wert, auf der Platte nur dessen Hash.
  Cookie: `HttpOnly`, `Secure`, `SameSite=Strict`, Präfix `__Host-`; 2 Stunden Inaktivität, höchstens 12 Stunden.
- Versuche werden vor der Prüfung reserviert: Nach 8 Versuchen wird eine Adresse (IPv6 als /64) 15 Minuten gesperrt, auch bei
  parallelem Ansturm. Eine kontoweite Bremse verlängert die Wartezeit bei vielen Fehlversuchen; rechenintensive
  Passwortprüfungen laufen höchstens zwei gleichzeitig.
- **Zwei-Faktor (TOTP)** mit Replay-Schutz und 8 einmaligen Wiederherstellungscodes (nur als Hash gespeichert). Der Code-Schritt
  hat ein eigenes Limit je Konto (10 Versuche je 15 Minuten), das ein richtiges Passwort nicht zurücksetzt.
- Jede Aktion prüft die Herkunft der Anfrage (Origin/Sec-Fetch-Site) zusätzlich zum Schutz des Frameworks.
- Passwort ändern sowie Zwei-Faktor starten, aktivieren oder deaktivieren verlangt das aktuelle Passwort und beendet alle anderen Sitzungen. Alle sicherheitsrelevanten Ereignisse stehen im Protokoll.
- Die Erst-Einrichtung braucht den einmaligen Schlüssel aus `./install.sh admin` und ist danach gesperrt.

## Entwickeln

Voraussetzung: Node.js 20 oder neuer.

```bash
npm install
npm run dev          # Entwicklungsserver auf http://localhost:3000 (Daten in .data/)
npm run typecheck    # TypeScript-Prüfung
npm test             # Sicherheits-Tests (TOTP-Testvektoren, Limits, Passwort-Regeln); Node.js 22.18 oder neuer
npm run build        # Produktions-Build (Standalone-Server in .next/standalone)
```

Für den lokalen Test des Admin-Bereichs über HTTP: `ADMIN_SETUP_TOKEN=<mindestens 16 Zeichen> ADMIN_INSECURE_COOKIES=1 npm run dev`.

## Aufbau

```
app/                  Seiten (Next.js App Router); app/admin/ = Admin-Bereich mit Server Actions
components/ui/        typisierte Bausteine: PageHero, Section, Split, Tile, Faq, Timeline, Stack, Cta …
components/admin/     Formulare und Rahmen des Admin-Bereichs
components/status/    Live-Status-Anzeige
components/sections/  seitenspezifische Bausteine
content/              typisierte Inhalte und Stammdaten (content/site.ts)
lib/server/           Passwörter, TOTP, Sitzungen, Ratenbegrenzung, Protokoll, Status-Speicher
public/               Schriften, Logo, Favicon
Dockerfile            baut die Seite (Node) und startet den Standalone-Server
compose.yaml          Next.js-Server + Cloudflare Tunnel, keine veröffentlichten Ports
install.sh            Installer und Verwaltung (Tunnel, DNS, Start, Update, Admin)
```

Eine neue Seite: Ordner unter `app/<name>/` mit `page.tsx` anlegen, Bausteine aus `@/components/ui`
verwenden, Meta-Daten mit `pageMetadata(...)` setzen und die Seite in `content/site.ts` (`nav`) eintragen.
Danach auf dem Server `./install.sh update`.
