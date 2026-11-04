import { A, type FaqItem, type IconName, type TimelineItem } from "@/components/ui";
import type { Fact } from "@/components/sections/infrastruktur/FactList";
import type { Layer } from "@/components/sections/infrastruktur/LayerStack";
import type { ServiceItem } from "@/components/sections/infrastruktur/ServiceTile";
import type { TopicContent, TopicPoint } from "@/components/sections/infrastruktur/TopicSection";
import type { TopicVisualContent } from "@/components/sections/infrastruktur/TopicVisual";
import { site } from "@/content/site";

/* ------------------------------------------------------------------ Meta */

export const meta = {
  title: "Infrastruktur",
  description:
    "Architektur und Grundsätze der geplanten Hosting-Infrastruktur der VylarisGroup: eigene Hardware in Europa, DSGVO by design, kein Tracking. Im Aufbau.",
  path: "/infrastruktur/",
} as const;

/* ------------------------------------------------------------ Hinweis/Fakten */

export const stateNote = {
  headingId: "stand-h",
  title: "Die Infrastruktur ist im Aufbau.",
  text: "Diese Seite beschreibt Architektur und Grundsätze, nach denen wir bauen, und keine Leistungen eines laufenden Angebots. Konkrete Spezifikationen möchten wir veröffentlichen, sobald die Systeme produktiv sind. Bis dahin ist alles, was hier als Zielbild oder geplant beschrieben ist, ein Ziel und keine Zusage.",
} as const;

export const facts: readonly Fact[] = [
  {
    value: "CircleUpWilms",
    label: "VylarisData ist eine Marke von CircleUpWilms und der Geschäftsbereich Software Development & Technology der VylarisGroup.",
  },
  {
    value: "Im Aufbau",
    label: "VylarisData soll künftig das Hosting der VylarisGroup werden. Ein Angebot für Kundinnen und Kunden gibt es heute noch nicht.",
  },
  { value: "Europa", label: "Die Dienste von VylarisGroupEurope laufen auf eigener Infrastruktur in Europa." },
  {
    value: "Keine Tracker",
    label: (
      <>
        Diese Website kommt ohne Cookies und Tracking aus. Mehr dazu unter{" "}
        <A href="#datenschutz" className="link">
          Datenschutz & Compliance
        </A>
        .
      </>
    ),
  },
];

/* ------------------------------------------------------------- Architektur */

export const architectureLayers: readonly Layer[] = [
  {
    icon: "box",
    name: "Dienste",
    text: "Websites, Plattformen und Dienste der VylarisGroup sollen als klar getrennte Anwendungen laufen, jede mit eigener Konfiguration und eigenen Ressourcen.",
    highlight: true,
  },
  {
    icon: "git",
    name: "Plattform",
    text: "Neue Versionen sollen über einen festen, automatisierten Ablauf in den Betrieb gelangen (Deployment). Jede Änderung soll nachvollziehbar sein.",
  },
  {
    icon: "cpu",
    name: "Rechenschicht",
    text: "Virtualisierung und Container sollen Dienste voneinander trennen und Rechenleistung flexibel verteilbar machen.",
  },
  {
    icon: "hdd",
    name: "Speicher",
    text: "Speicher & Backup: Daten sollen redundant vorliegen und regelmäßig gesichert werden. Die Wiederherstellung soll geübt und nicht nur angenommen werden.",
  },
  {
    icon: "network",
    name: "Netzwerk",
    text: "Netzwerk & Edge: Verkehr soll die Dienste über abgesicherte, getrennte Wege erreichen. Die Edge ist die Schicht am Rand, die eingehenden Verkehr annimmt.",
  },
  {
    icon: "server",
    name: "Standort",
    text: "Standort & Hardware: Eigene Hardware an Standorten in Europa. Wir wollen jederzeit wissen, wo unsere Systeme stehen und wer Zugriff darauf hat.",
    highlight: true,
  },
];

export const crossCuttingLayers: readonly Layer[] = [
  {
    icon: "activity",
    iconTone: "indigo",
    name: "Monitoring",
    text: "Messwerte, Protokolle und Alarme über alle Schichten hinweg. Wir wollen Probleme erkennen, bevor jemand sie melden muss.",
  },
  {
    icon: "shield",
    iconTone: "indigo",
    name: "Sicherheit",
    text: "Sicherheit soll in jeder Schicht gelten: Zugriffe, Verschlüsselung, Updates und Härtung.",
  },
];

/* ------------------------------------------------------------------ Kacheln */

export type InfoTile = { icon: IconName; title: string; text: string };

export const principles: readonly InfoTile[] = [
  {
    icon: "server",
    title: "Eigene Hardware in Europa",
    text: "Wir wollen unsere Systeme selbst und in Europa betreiben. So bleibt klar, wo Daten liegen und wer Zugriff hat. Dienstleister, deren Zugriff wir nicht nachvollziehen können, wollen wir nicht einsetzen.",
  },
  {
    icon: "shield",
    title: "DSGVO by design",
    text: "Datenschutz ist eine Anforderung an die Architektur und kein Dokument, das am Ende entsteht. Wir erheben nur, was ein Dienst für seine Aufgabe braucht.",
  },
  {
    icon: "eye",
    title: "Kein Tracking",
    text: "Keine Tracker, keine Werbenetzwerke, keine Profile. Diese Website macht es bereits so vor, die Details stehen unter Datenschutz & Compliance.",
  },
  {
    icon: "layers",
    title: "Redundanz statt Hoffnung",
    text: "Kritische Komponenten sollen doppelt ausgelegt sein. Wir planen den Ausfall eines Bauteils ein, statt zu hoffen, dass er nicht eintritt.",
  },
  {
    icon: "refresh",
    title: "Automatisierung & Reproduzierbarkeit",
    text: "Was sich beschreiben lässt, beschreiben wir als Code. Eine Umgebung soll sich aus ihrer Beschreibung jederzeit neu aufbauen lassen.",
  },
  {
    icon: "activity",
    title: "Transparenz & Status",
    text: "Wer Dienste auf unserer Infrastruktur betreibt, soll deren Zustand einsehen können. Dafür wollen wir den Systemstatus der VylarisGroup nutzen, sofern die Gruppe das vorsieht.",
  },
];

export const computeTiles: readonly InfoTile[] = [
  { icon: "cpu", title: "Virtualisierung", text: "Trennt Dienste auf Ebene ganzer Systeme." },
  { icon: "box", title: "Container", text: "Trennen einzelne Anwendungen innerhalb eines Systems." },
  { icon: "shield", title: "Isolation", text: "Fehler und Lastspitzen sollen in ihrer Umgebung bleiben." },
  { icon: "zap", title: "Ressourcengrenzen", text: "Jeder Dienst soll definierte Obergrenzen haben." },
  { icon: "layers", title: "Ausfalltoleranz", text: "Fällt ein Rechenknoten aus, sollen andere seine Aufgaben übernehmen." },
  { icon: "refresh", title: "Wartbar im Betrieb", text: "Updates und der Austausch von Knoten sollen ohne Stillstand möglich sein." },
];

export const securityTiles: readonly InfoTile[] = [
  {
    icon: "key",
    title: "Zugriff",
    text: "Wer auf Systeme zugreift, soll dafür einen Grund und nur die minimal nötigen Rechte haben, mit starker Authentifizierung und nachvollziehbaren Anmeldungen.",
  },
  {
    icon: "lock",
    title: "Verschlüsselung",
    text: "Daten sollen bei der Übertragung und, soweit technisch möglich, auch im Ruhezustand verschlüsselt werden.",
  },
  { icon: "refresh", title: "Updates", text: "Sicherheitsupdates sollen im Betrieb Vorrang haben und zeitnah eingespielt werden." },
  { icon: "shield", title: "Härtung", text: "Auf Systemen soll nur aktiv sein, was ein Dienst braucht." },
];

/* ---------------------------------------------------------- Themenabschnitte */

const point = (lead: string, text: string): TopicPoint => ({ lead, text });

export const standort: TopicContent = {
  id: "standort",
  band: true,
  eyebrow: "Standort & Datensouveränität",
  title: "Standorte in Europa, Daten unter eigener Kontrolle.",
  paragraphs: [
    "Das Fundament jeder Infrastruktur ist der Ort, an dem sie steht. Unser Zielbild: eigene Systeme an Standorten in Europa, betrieben unter europäischem Recht und unter unserer Kontrolle.",
    "VylarisData soll künftig das Hosting der VylarisGroup werden, die Infrastruktur dafür ist im Aufbau. Konkrete Standorte möchten wir erst nennen, wenn sie produktiv sind.",
  ],
  points: [
    point("Datensouveränität:", "Daten sollen in Europa bleiben und unter unserer Kontrolle stehen."),
    point("Physische Kontrolle:", "Wer an die Hardware darf, soll geregelt und protokolliert sein."),
    point("Keine unklaren Dritten:", "Wir wollen benennen, wer an Betrieb und Datenverarbeitung beteiligt ist."),
  ],
  visual: {
    kind: "outline",
    heading: "Zielbild Standort",
    items: [
      "Eigene Server statt gemieteter Plattformdienste",
      "Standorte ausschließlich in Europa",
      "Mehrere Standorte für Ausfallsicherheit",
      "Klare Verantwortung für jede Maschine",
    ],
    chips: [{ label: "Europa", blue: true }, { label: "Eigene Hardware" }, { label: "DSGVO" }, { label: "Im Aufbau" }],
  },
};

export const netzwerk: TopicContent = {
  id: "netzwerk",
  reverse: true,
  eyebrow: "Netzwerk & Erreichbarkeit",
  title: "Erreichbar, getrennt, abgesichert.",
  paragraphs: [
    "Wir planen das Netzwerk so, dass öffentlicher Verkehr, interner Verkehr und Verwaltungszugänge nicht auf demselben Weg laufen.",
    "Dazu gehört eine Anbindung, die den Ausfall einer einzelnen Strecke verkraften soll, und eine Edge-Schicht, die eingehenden Verkehr annimmt, prüft und weiterreicht. Zahlen zu Bandbreite und Anbindung möchten wir erst nennen, wenn sie gemessen und belegbar sind.",
  ],
  points: [
    point("Netzsegmentierung:", "Öffentlich, intern und Verwaltung sollen getrennte Zonen sein."),
    point("Redundante Anbindung:", "Es soll mehr als einen Weg ins Netz geben."),
    point("Verschlüsselt:", "Verbindungen zu unseren Diensten sollen ausschließlich per TLS laufen."),
  ],
  visual: {
    kind: "flow",
    heading: "Zielbild Weg des Verkehrs",
    arrows: true,
    layers: [
      { icon: "globe", name: "Öffentlich", text: "Eingehender Verkehr trifft zuerst auf die Edge." },
      { icon: "network", name: "Edge", text: "Annahme, Prüfung und Weiterleitung an den richtigen Dienst.", highlight: true },
      { icon: "lock", name: "Intern", text: "Dienste, Daten und Verwaltung in getrennten Zonen." },
    ],
  },
};

export const speicher: TopicContent = {
  id: "speicher",
  eyebrow: "Speicher & Backup",
  title: "Backups, die wiederherstellbar sind.",
  paragraphs: [
    "Ein Backup zählt erst, wenn sich damit tatsächlich wiederherstellen lässt, was verloren ging. Wir wollen unsere Backups nach der 3-2-1-Regel ausrichten: drei Kopien auf zwei verschiedenen Medien, davon eine an einem anderen Standort.",
    "Dazu sollen Redundanz im Speichersystem selbst und regelmäßige Wiederherstellungsproben kommen. Aufbewahrungsfristen und Intervalle möchten wir festlegen und veröffentlichen, sobald das Backup-Konzept produktiv ist.",
  ],
  points: [
    point("3-2-1 als Ziel:", "Drei Kopien, zwei Medien, ein externer Standort."),
    point("Wiederherstellung üben:", "Proben sollen fester Teil des Betriebs sein."),
    point("Verschlüsselte Backups:", "Backups sollen verschlüsselt und nur für Berechtigte lesbar sein."),
  ],
  visual: {
    kind: "flow",
    heading: "Zielbild 3-2-1",
    arrows: false,
    layers: [
      { icon: "layers", name: "3 Kopien", text: "Produktivdaten plus zwei Backup-Kopien." },
      { icon: "hdd", name: "2 Medien", text: "Backups auf unterschiedlichen Speicherarten." },
      { icon: "pin", name: "1 extern", text: "Eine Kopie an einem anderen Standort.", highlight: true },
    ],
  },
};

export const plattform: TopicContent = {
  id: "plattform",
  band: true,
  reverse: true,
  eyebrow: "Plattform & Deployment",
  title: "Infrastruktur als Code, Releases per Pipeline.",
  paragraphs: [
    "Als Marke im Geschäftsbereich Software Development & Technology der VylarisGroup wollen wir Infrastruktur wie Software behandeln. Die Beschreibung einer Umgebung soll als Code in der Versionsverwaltung liegen und erst nach Prüfung und Test angewendet werden.",
    "Unser Ziel ist eine CI/CD-Pipeline, die jede Änderung automatisch baut, prüft und ausrollt. Handarbeit auf Produktivsystemen soll die Ausnahme bleiben.",
  ],
  points: [
    point("Infrastruktur als Code:", "Zustand und Änderungen sollen im Repository stehen."),
    point("CI/CD als Ziel:", "Bauen, Testen und Ausrollen sollen automatisch laufen."),
    point("Rollback:", "Jede Version soll sich auf den Vorgänger zurücksetzen lassen."),
  ],
  visual: {
    kind: "flow",
    heading: "Weg einer Änderung (Zielbild)",
    arrows: true,
    layers: [
      { icon: "code", name: "Code", text: "Änderung im Repository, die ein zweites Augenpaar prüfen soll." },
      { icon: "check", name: "Prüfen", text: "Automatische Tests und Sicherheitsprüfungen." },
      { icon: "rocket", name: "Ausrollen", text: "Kontrollierter Rollout, bei Problemen mit Rücknahme.", highlight: true },
    ],
  },
};

export const monitoring: TopicContent = {
  id: "monitoring",
  eyebrow: "Monitoring & Systemstatus",
  title: "Sichtbar, was gerade läuft.",
  paragraphs: [
    "Wir wollen Messwerte, Protokolle und Alarme so verknüpfen, dass Auffälligkeiten früh sichtbar werden und klar ist, wer reagiert.",
    "Den Zustand der Dienste wollen wir künftig über den Systemstatus der VylarisGroup (vylaris.eu/status) sichtbar machen, sofern die Gruppe das vorsieht. Was dort angezeigt wird, entscheidet die Gruppe. Wir folgen dem Prinzip, Störungen offen zu benennen, statt sie zu verschweigen.",
  ],
  points: [
    point("Metriken und Logs:", "Der Zustand aller Schichten soll an einer Stelle sichtbar sein."),
    point("Alarme mit Zuständigkeit:", "Jede Meldung soll eine klare Adresse haben."),
  ],
  action: { href: site.links.status, label: "Systemstatus der VylarisGroup", icon: "ext" },
  visual: {
    kind: "outline",
    heading: "Was wir beobachten wollen",
    items: [
      "Verfügbarkeit der Dienste von außen",
      "Auslastung von Rechen-, Speicher- und Netzwerkschicht",
      "Zustand der Backups",
      "Zertifikate, Updates und Sicherheitswarnungen",
    ],
    chips: [{ label: "Metriken", blue: true }, { label: "Logs" }, { label: "Alarme" }, { label: "Statusseite" }],
  },
};

export const datenschutz: TopicContent = {
  id: "datenschutz",
  reverse: true,
  eyebrow: "Datenschutz & Compliance",
  title: "Datensparsam durch Architektur.",
  paragraphs: [
    "Datenschutz fängt bei der Architektur an. Wo kein Tracking existiert, muss auch nichts nachträglich abgeschaltet werden. Für die Infrastruktur soll derselbe Anspruch gelten wie für diese Website, die im Kasten daneben beschrieben ist.",
    "Zertifizierungen führen wir erst auf, wenn sie tatsächlich vorliegen.",
  ],
  points: [
    point("Datensparsamkeit:", "Es sollen nur Daten erhoben werden, die ein Dienst braucht."),
    point("Europäischer Rahmen:", "Der geplante Betrieb findet in Europa statt, die DSGVO ist der Maßstab."),
  ],
  action: { href: "/datenschutz/", label: "Zur Datenschutzerklärung", icon: "arrow" },
  visual: {
    kind: "checks",
    heading: "Auf dieser Website",
    items: [
      "Keine Cookies",
      "Kein Tracking",
      "Schriften und Skripte von derselben Domain",
      "Hell-, Dunkel- und Systemdarstellung; deine Auswahl bleibt nur lokal in deinem Browser gespeichert",
    ],
  },
};

/* ------------------------------------------------------------------- Dienste */

export const services: readonly ServiceItem[] = [
  {
    icon: "cloud",
    title: "VylarisSpace",
    soft: true,
    badge: { kind: "status", tone: "info", label: "Demnächst" },
    text: "Das geplante Hosting-Panel für Websites, E-Mail und Datenbanken. Es soll auf eigener Hardware in Europa laufen.",
    link: { href: site.links.services, label: "Zu den Diensten", icon: "ext" },
  },
  {
    icon: "heart",
    title: "Kostenlose Open-Source-Dienste",
    badge: { kind: "tag", label: "VylarisGroupEurope" },
    text: "VylarisGroupEurope bietet kostenlose Open-Source-SaaS-Dienste auf ihrer eigenen, DSGVO-konformen Infrastruktur in Europa an, ohne Tracking und mit der Paywall-Garantie (0 EUR).",
    link: { href: site.links.services, label: "vylaris.eu/services", icon: "ext" },
  },
  {
    icon: "code",
    title: "Eigenentwicklungen",
    badge: { kind: "status", tone: "warn", label: "Zielbild" },
    text: "Eigene Software und Werkzeuge sollen im Geschäftsbereich Software Development & Technology entstehen und auf derselben Basis laufen.",
    link: { href: "/leistungen/", label: "Unsere Leistungen", icon: "arrow" },
  },
];

/* --------------------------------------------------------------- Ausbaustufen */

export const stages: readonly TimelineItem[] = [
  {
    title: "Fundament",
    status: { tone: "warn", label: "Im Aufbau" },
    text: "Wir bauen Architektur, Server und Betriebsprozesse auf und sichern sie ab. In dieser Stufe wollen wir Standorte, Netzwerkdesign und Speicherkonzept festlegen und die Pipeline einrichten, auf der später Dienste laufen sollen.",
  },
  {
    title: "Migration",
    status: { tone: "info", label: "Geplant" },
    text: "Wenn Dienste der VylarisGroup auf die neue Infrastruktur wechseln, soll das kontrolliert und in kleinen Schritten geschehen.",
  },
  {
    title: "Betrieb & Ausbau",
    status: { tone: "info", label: "Geplant" },
    text: "Ziel ist, die Plattform zu betreiben, zu überwachen und weiterzuentwickeln. Neue Dienste sollen hinzukommen, bestehende verbessert werden.",
  },
];

export const guardrails: TopicVisualContent = {
  kind: "outline",
  heading: "Leitplanken",
  items: [
    "Keine festen Termine",
    "Reihenfolge und Inhalte sind ein Zielbild und keine Zusage",
    "Jede Stufe soll tragen, bevor die nächste beginnt",
    "Schritte sollen sich rückgängig machen lassen",
  ],
  chips: [{ label: "Im Aufbau", blue: true }, { label: "Geplant" }],
};

/* ------------------------------------------------------- Veröffentlichungen */

export const publishRows: readonly (readonly [string, string])[] = [
  ["Standorte", "Wo unsere Systeme in Europa stehen und wie die Standorte zusammenspielen."],
  ["Netzwerk-Anbindung", "Wie die Standorte angebunden sind und wie Verkehr getrennt wird."],
  ["Hardware-Klassen", "Welche Klassen von Servern und Speichersystemen im Einsatz sind."],
  ["Backup-Konzept", "Intervalle, Aufbewahrung, Standorte und Ergebnisse der Proben zur Wiederherstellung."],
  ["Ziele zur Verfügbarkeit", "Welche Ziele wir uns setzen und wie wir sie messen. Die Ziele sind unverbindlich."],
  ["Sicherheitskonzept", "Zugriffsmodell, Verschlüsselung, Update-Prozess und der Umgang mit Meldungen zur Sicherheit."],
];

/* ------------------------------------------------------------------------ FAQ */

export const faq: readonly FaqItem[] = [
  {
    q: "Wann geht das Hosting live?",
    a: (
      <p>
        Einen Termin nennen wir bewusst nicht. Die Infrastruktur ist im Aufbau, die Stufen Migration sowie Betrieb und Ausbau sind
        geplant. Sobald es etwas Belastbares zu sagen gibt, wollen wir es hier nennen.
      </p>
    ),
  },
  {
    q: "Wo liegen meine Daten?",
    a: (
      <p>
        Unser Ziel ist Betrieb auf eigener Hardware in Europa. Konkrete Standorte möchten wir erst nennen, wenn sie produktiv
        sind. VylarisGroupEurope bietet ihre Dienste auf eigener, DSGVO-konformer Infrastruktur in Europa an.
      </p>
    ),
  },
  {
    q: "Gibt es Tracking?",
    a: (
      <p>
        Nein. Diese Website setzt keine Cookies und bindet keine Tracker ein. Auch VylarisGroupEurope bietet ihre Dienste ohne
        Tracking an. Für die Infrastruktur gilt dasselbe als Grundsatz.
      </p>
    ),
  },
  {
    q: "Wo finde ich den Systemstatus der VylarisGroup?",
    a: (
      <p>
        Unter{" "}
        <A href={site.links.status} className="link">
          vylaris.eu/status
        </A>
        . VylarisData ist noch im Aufbau, einen eigenen Status für unsere Infrastruktur gibt es deshalb noch nicht.
      </p>
    ),
  },
  {
    q: "Kann ich schon bei euch hosten?",
    a: (
      <p>
        Noch nicht. VylarisData wird künftig das Hosting der VylarisGroup übernehmen. Ein Angebot für Kundinnen und Kunden gibt es
        heute noch nicht. VylarisSpace, das geplante Hosting-Panel für Websites, E-Mail und Datenbanken, ist angekündigt.
      </p>
    ),
  },
  {
    q: "Ist alles Open Source?",
    a: (
      <p>
        Das lässt sich pauschal nicht sagen. VylarisGroupEurope setzt auf Open Source und Eigenentwicklung und bietet kostenlose
        Open-Source-SaaS-Dienste an. Welche Teile der Infrastruktur offengelegt werden, entscheiden wir, sobald die Systeme
        produktiv sind.
      </p>
    ),
  },
  {
    q: "Was kostet das?",
    a: (
      <p>
        Dazu nennen wir keine Preise. Für die kostenlosen Dienste von VylarisGroupEurope gilt die Paywall-Garantie (0 EUR). Für das
        künftige Hosting gibt es noch kein Angebot.
      </p>
    ),
  },
  {
    q: "Wie erreiche ich euch?",
    a: (
      <p>
        Über die Kontaktseite der VylarisGroup unter{" "}
        <A href={site.links.contact} className="link">
          vylaris.eu/contact
        </A>
        . Dort laufen Kontakt und Tickets zusammen. Mehr zu unserer Rolle findest du unter{" "}
        <A href="/ueber-uns/" className="link">
          Über uns
        </A>
        .
      </p>
    ),
  },
];

export type GroupLink = { href: string; label: string };

export const groupLinks: readonly GroupLink[] = [
  { href: site.links.status, label: "Systemstatus der VylarisGroup" },
  { href: site.links.contact, label: "Kontakt & Tickets" },
  { href: site.links.services, label: "Dienste von VylarisGroupEurope" },
  { href: "/oekosystem/", label: "Ökosystem der VylarisGroup" },
];
