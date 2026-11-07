import type { FactItem, FaqItem, TimelineItem } from "@/components/ui";
import { A, Gradient } from "@/components/ui";
import type { AudienceItem } from "@/components/sections/leistungen/AudienceCards";
import type { BlockItem } from "@/components/sections/leistungen/BlockCards";
import type { FieldContent } from "@/components/sections/leistungen/FieldSection";
import type { OverviewRow } from "@/components/sections/leistungen/OverviewTable";
import type { SoftwareTile } from "@/components/sections/leistungen/SoftwareTiles";
import { site } from "@/content/site";

/** Daten der Seite "Leistungen". Markup liegt in den Komponenten, hier nur Inhalt. */

export const meta = {
  title: "Leistungen",
  description:
    "Software Development & Technology von VylarisData. Die eigene Infrastruktur in Europa (Datensicherung, Netzwerk, Sicherheit) ist im Aufbau; wir suchen Hardware, auch gebrauchte, und freuen uns über Unterstützung.",
  path: "/leistungen/",
} as const;

/* ---------------------------------------------------------------------- Seitentexte */

export const hero = {
  title: "Software von VylarisData und eine Infrastruktur im Aufbau",
  lead: "Wir entwickeln Software. Unsere eigene Infrastruktur entsteht gerade erst: Aktuell haben wir noch keine eigene Hardware, wir fangen gerade an. Server, Datensicherung, Netzwerk und Sicherheit sind geplante Bausteine. Hardware, auch ältere oder gebrauchte, ist uns herzlich willkommen.",
  primary: "Unsere Bausteine im Überblick",
  secondary: "Alle Bereiche",
} as const;

export const sections = {
  kennzahlen: {
    eyebrow: "Auf einen Blick",
    title: "Wo wir heute stehen",
    lead: "Ehrlich vorweg: Wir fangen gerade an. Software entwickeln wir heute, die Infrastruktur dazu ist im Aufbau.",
  },
  bausteine: {
    eyebrow: "Bausteine",
    title: "Acht Bausteine: Infrastruktur im Aufbau, Unterstützung gesucht",
    lead: "Server, Speicher, Datensicherung, Netzwerk und Sicherheit: So soll unsere Infrastruktur einmal aufgebaut sein. Das ist ein Plan, kein Bestand: Aktuell haben wir noch keine eigene Hardware.",
    callout: "Den Stand der Bausteine zeigt die",
    calloutLink: "Infrastruktur-Seite",
    support: "Du möchtest beim Aufbau helfen? Hardware (gern auch ältere oder gebrauchte), Know-how, Sponsoring und Empfehlungen sind willkommen, mehr dazu unter",
    supportLink: "Unterstützen",
  },
  software: {
    eyebrow: "Leistungsfeld 04",
    title: "Software entwickeln: das können wir heute",
    lead: "Unser Geschäftsbereich ist Software Development & Technology. VylarisData ist eine Untermarke von VylarisGroupEurope und gehört zur VylarisGroup.",
    text: "Eigenentwicklung heißt: Wir kennen den Code, den wir schreiben, und passen ihn an, wenn sich Anforderungen ändern. Das ist der Teil, den wir heute schon tun. Die Infrastruktur dazu bauen wir gerade erst auf.",
  },
  uebersicht: {
    eyebrow: "Überblick",
    title: "Alle Bereiche auf einen Blick",
    lead: "Software entwickeln wir heute. Server, Speicher, Datensicherung, Netzwerk und Sicherheit sind im Aufbau bzw. geplant, ebenso der Ausbau des Ökosystems. Wir suchen Hardware und Unterstützung.",
  },
  stand: {
    eyebrow: "Stand und Ausblick",
    title: "Was heute geht, was im Aufbau ist, was wir planen",
    lead: "Klar getrennt: was heute möglich ist, was im Aufbau ist, was wir suchen und was wir planen.",
  },
  arbeitsweise: {
    eyebrow: "Ablauf",
    title: "Vier Schritte von der Anforderung bis zum Betrieb",
    lead: "So gliedert sich ein Vorhaben. Für Software gilt das heute, für Infrastruktur mit dem Aufbau.",
  },
  zielgruppen: {
    eyebrow: "Einordnung",
    title: "Unser Platz in der VylarisGroup",
    lead: "VylarisData ist eine Untermarke von VylarisGroupEurope und gehört zur VylarisGroup, zu der auch VylarisGroup Schweiz zählt. Anfragen laufen über den Kontaktweg der VylarisGroup.",
  },
  faq: {
    eyebrow: "Häufige Fragen",
    title: "Was du vor einer Anfrage wissen solltest",
    lead: "Kurze Antworten zu Hardware, Stand, Unterstützung, Daten und Kontakt.",
  },
} as const;

/* ------------------------------------------------------------------ Kennzahlen */

export const keyFacts: readonly FactItem[] = [
  { icon: "code", value: "Software heute", label: "Entwicklung im Geschäftsbereich Software Development & Technology" },
  { icon: "server", value: "Infrastruktur im Aufbau", label: "Wir haben aktuell keine eigene Hardware und fangen gerade an" },
  { icon: "db", value: "Gesucht: Hardware", label: "Auch ältere oder gebrauchte Hardware ist uns sehr willkommen" },
  { icon: "heart", value: "Unterstützung willkommen", label: "Hardware, Know-how, Sponsoring und Empfehlungen" },
];

/* ----------------------------------------------------------------- Überblick */

export const overview: readonly OverviewRow[] = [
  {
    name: "Softwareentwicklung",
    status: { tone: "ok", label: "Heute möglich" },
    text: "Unser Geschäftsbereich Software Development & Technology: Anwendungen, Schnittstellen und Werkzeuge.",
  },
  {
    name: "Server & Betrieb",
    status: { tone: "info", label: "Im Aufbau" },
    text: "Eigene Server in Europa sind das Ziel. Aktuell haben wir keine eigene Hardware und suchen sie, auch ältere oder gebrauchte.",
  },
  {
    name: "Speicher & Datensicherung",
    status: { tone: "info", label: "Im Aufbau" },
    text: "Geplant sind eigener Speicher und ein eigenes System zur Datensicherung. Beides ist noch nicht im Betrieb.",
  },
  {
    name: "Netzwerk",
    status: { tone: "info", label: "Im Aufbau" },
    text: "Ein eigenes Netzwerk ist als Baustein geplant. Aktuell betreiben wir kein eigenes Netz.",
  },
  {
    name: "DNS-Server",
    status: { tone: "warn", label: "Geplant" },
    text: "Ein eigener DNS-Server gehört zum Plan. Aktuell ist keiner im Betrieb.",
  },
  {
    name: "Sicherheit & Datenschutz",
    status: { tone: "info", label: "Im Aufbau" },
    text: "Ein eigenes Sicherheitssystem ist geplant. Schon heute gilt: Für Besucher setzt diese Website keine Cookies und kein Tracking ein.",
  },
  {
    name: "Hardware & Unterstützung",
    status: { tone: "warn", label: "Gesucht" },
    text: "Wir nehmen sehr gerne ältere oder gebrauchte Hardware entgegen und freuen uns über Know-how, Sponsoring und Empfehlungen. Mehr unter „Unterstützen“.",
  },
  {
    name: "Ausbau des Ökosystems",
    status: { tone: "warn", label: "Geplant" },
    text: "Wir planen, das Vylaris-Ökosystem weiter auszubauen. Termine nennen wir, sobald sie feststehen.",
  },
  {
    name: "Zusammenarbeit",
    text: "Untermarke von VylarisGroupEurope und Teil der VylarisGroup, mit Bezug zu VylarisGroup Schweiz („Allianz CH & EU“).",
  },
];

export const facts: readonly FactItem[] = [
  { value: "Untermarke von VylarisGroupEurope", label: "Teil der VylarisGroup" },
  { value: "Software & Technology", label: "Unser Geschäftsbereich" },
  { value: "Infrastruktur im Aufbau", label: "Server, Datensicherung, Netzwerk und Sicherheit sind geplante Bausteine" },
  { value: "Kein Tracking", label: "Keine Cookies für Besucher" },
];

/* ------------------------------------------------------------ Leistungsfeld 04 */

export const softwareTiles: readonly SoftwareTile[] = [
  {
    icon: "code",
    title: "Anwendungen",
    text: "Dienste und Oberflächen aus unserem Geschäftsbereich Software Development & Technology.",
  },
  {
    icon: "link",
    title: "Schnittstellen",
    text: "Schnittstellen, die Dienste miteinander verbinden.",
  },
  {
    icon: "wrench",
    title: "Werkzeuge",
    text: "Interne Werkzeuge für wiederkehrende Aufgaben. Ein Beispiel ist die Live-Statusübersicht auf der Infrastruktur-Seite.",
  },
  {
    icon: "globe",
    title: "Diese Website",
    text: "Von uns gebaut: erreichbar über einen ausgehenden Tunnel ohne offene Ports, in gehärteten Containern, ohne Tracking.",
  },
];

/* ------------------------------------------------- Bausteine der Infrastruktur */

/** Alle Bausteine sind Plan bzw. im Aufbau: keine Zahlen, keine Termine, nichts "bereits vorhanden". */
export const blocks: readonly BlockItem[] = [
  {
    icon: "server",
    title: "Server",
    status: { tone: "info", label: "Im Aufbau" },
    figure: "Ziel: eigene Server",
    text: "Eigene Server in Europa sind geplant. Aktuell haben wir noch keine eigene Hardware.",
  },
  {
    icon: "db",
    title: "Speicher",
    status: { tone: "info", label: "Im Aufbau" },
    figure: "Ziel: eigener Speicher",
    text: "Geplant, aber noch nicht im Betrieb. Wir nennen bewusst keine Kapazitäten.",
  },
  {
    icon: "life",
    title: "Datensicherung",
    status: { tone: "info", label: "Im Aufbau" },
    figure: "Ziel: eigenes Backup",
    text: "Ein eigenes System zur Datensicherung ist ein geplanter Baustein.",
  },
  {
    icon: "network",
    title: "Netzwerk",
    status: { tone: "info", label: "Im Aufbau" },
    figure: "Ziel: eigenes Netzwerk",
    text: "Ein eigenes Netzwerk gehört zum Plan und ist noch nicht im Betrieb.",
  },
  {
    icon: "globe",
    title: "DNS-Server",
    status: { tone: "warn", label: "Geplant" },
    figure: "Noch nicht im Betrieb",
    text: "Ein eigener Server für die Namensauflösung ist vorgesehen.",
  },
  {
    icon: "shield",
    title: "Sicherheitssystem",
    status: { tone: "info", label: "Im Aufbau" },
    figure: "Ziel: eigene Sicherheit",
    text: "Ein eigenes Sicherheitssystem ist geplant, sobald die Infrastruktur steht.",
  },
  {
    icon: "hdd",
    title: "Hardware gesucht",
    status: { tone: "warn", label: "Gesucht" },
    figure: "Auch gebraucht willkommen",
    text: "Wir nehmen sehr gerne ältere oder gebrauchte Hardware entgegen.",
  },
  {
    icon: "heart",
    title: "Unterstützung",
    status: { tone: "warn", label: "Gesucht" },
    figure: "Know-how und mehr",
    text: "Know-how, Sponsoring und Empfehlungen helfen uns beim Aufbau.",
  },
];

/* ----------------------------------------------- Leistungsfelder 01 bis 05 */

export const hostingField: FieldContent = {
  id: "hosting",
  eyebrow: "Leistungsfeld 01",
  title: "Server & Betrieb: unser Ziel",
  status: { tone: "info", label: "Im Aufbau" },
  lead: "Unser Ziel ist eine eigene Infrastruktur in Europa. Aktuell haben wir noch keine eigene Hardware: Wir fangen gerade an.",
  paragraphs: [
    "Mit dem Aufbau wollen wir mehr Kontrolle darüber gewinnen, was auf unserer Technik läuft, und sie selbst gestalten. Bis es so weit ist, konzentrieren wir uns auf Software.",
    "Wir suchen Hardware und nehmen sehr gerne auch ältere oder gebrauchte Geräte entgegen. Über jede Unterstützung freuen wir uns.",
  ],
  points: [
    { lead: "Stand:", text: "Die Infrastruktur ist im Aufbau, eigene Hardware haben wir aktuell nicht." },
    { lead: "Ziel:", text: "eigene Server als Grundlage für unsere Dienste." },
    { lead: "Gesucht:", text: "Hardware (auch ältere oder gebrauchte), außerdem Know-how und Sponsoring." },
    { lead: "Live-Status:", text: "Den Stand der Bausteine zeigt die Infrastruktur-Seite." },
  ],
  link: { href: "/unterstuetzen/", label: "Wie du uns unterstützen kannst" },
  visual: {
    eyebrow: "Unser Zielbild (Plan)",
    arrows: false,
    layers: [
      { icon: "server", name: "Server", description: "Geplant: eigene Server in Europa.", highlight: true },
      { icon: "db", name: "Speicher & Backup", description: "Geplant: eigener Speicher und ein System zur Datensicherung." },
      { icon: "network", name: "Netzwerk & Sicherheit", description: "Geplant: ein eigenes Netzwerk und ein Sicherheitssystem." },
    ],
  },
};

export const speicherField: FieldContent = {
  id: "speicher",
  band: true,
  reverse: true,
  eyebrow: "Leistungsfeld 02",
  title: "Speicher und Datensicherung: ein geplanter Baustein",
  status: { tone: "info", label: "Im Aufbau" },
  lead: "Eigener Speicher und ein eigenes System zur Datensicherung gehören zu unserem Plan. Beides ist noch nicht im Betrieb, denn wir haben noch keine eigene Hardware.",
  paragraphs: [
    "Speicher und Datensicherung brauchen Hardware, und genau die suchen wir. Auch ältere oder gebrauchte Geräte helfen uns beim Anfangen.",
    "Wir nennen hier bewusst keine Kapazitäten und keine Termine. Was im Betrieb ist, schreiben wir erst dann hier auf.",
  ],
  points: [
    { lead: "Stand:", text: "noch kein eigener Speicher und kein eigenes Backup-System im Betrieb." },
    { lead: "Plan:", text: "eigener Speicher als Teil unserer Infrastruktur." },
    { lead: "Datensicherung:", text: "ein geplanter Baustein, damit Daten künftig eigenständig gesichert werden können." },
    { lead: "Gesucht:", text: "Hardware für Speicher und Datensicherung, gern auch gebraucht." },
  ],
  visual: {
    eyebrow: "Zielbild, ohne Zahlen",
    arrows: false,
    layers: [
      { icon: "db", name: "Speicher", description: "Geplant: eigener Speicher in unserer Infrastruktur.", highlight: true },
      { icon: "life", name: "Datensicherung", description: "Geplant: ein eigenes System für Backups." },
      { icon: "hdd", name: "Hardware gesucht", description: "Ältere oder gebrauchte Geräte sind willkommen." },
    ],
  },
};

export const netzField: FieldContent = {
  id: "netz",
  eyebrow: "Leistungsfeld 03",
  title: "Eigenes Netzwerk: ein geplanter Baustein",
  status: { tone: "info", label: "Im Aufbau" },
  lead: "Ein eigenes Netzwerk gehört zu den geplanten Bausteinen unserer Infrastruktur. Aktuell betreiben wir noch kein eigenes Netz.",
  paragraphs: [
    "Zum Netzwerk soll später auch ein eigener DNS-Server für die Namensauflösung gehören. Auch er ist geplant und noch nicht im Betrieb.",
    "Den jeweils aktuellen Stand der Bausteine zeigt die Infrastruktur-Seite.",
  ],
  points: [
    { lead: "Netzwerk:", text: "geplanter Baustein, noch nicht im Betrieb." },
    { lead: "DNS-Server:", text: "geplant, aktuell nicht im Betrieb." },
    { lead: "Sicherheitssystem:", text: "ebenfalls geplant, mehr dazu unter Sicherheit & Datenschutz." },
  ],
  link: { href: "/infrastruktur/", label: "Zur Infrastruktur-Seite" },
  visual: {
    eyebrow: "Zielbild (Plan)",
    arrows: false,
    layers: [
      { icon: "network", name: "Eigenes Netzwerk", description: "Geplant: ein eigenes Netzwerk als Teil der Infrastruktur.", highlight: true },
      { icon: "globe", name: "DNS-Server", description: "Geplant: ein eigener Server für die Namensauflösung." },
    ],
  },
};

export const sicherheitField: FieldContent = {
  id: "sicherheit",
  reverse: true,
  eyebrow: "Leistungsfeld 05",
  title: "Sicherheit & Datenschutz",
  status: { tone: "info", label: "Im Aufbau" },
  lead: "Ein eigenes Sicherheitssystem ist als Baustein geplant. Diese Website zeigt schon heute im Kleinen, wie wir Sicherheit und Datenschutz verstehen.",
  paragraphs: [
    "Die Website ist über einen ausgehenden Tunnel erreichbar, ohne offene Ports auf dem Server. Die Verbindung besteht ausschließlich von innen nach außen, die Website läuft in gehärteten Containern. Für Besucher setzt sie weder Cookies noch Tracking ein.",
  ],
  points: [
    { lead: "Sicherheitssystem:", text: "geplant, noch nicht im Betrieb." },
    { lead: "Keine offenen Ports:", text: "Diese Website ist über einen ausgehenden Tunnel erreichbar, nicht über offene Server-Ports." },
    { lead: "Gehärtete Container:", text: "Die Website läuft in gehärteten Containern." },
    { lead: "Kein Tracking:", text: "Für Besucher gibt es weder Cookies noch Analysedienste." },
  ],
  visual: {
    arrows: false,
    layers: [
      { icon: "lock", name: "Keine offenen Ports", description: "Ausgehende Tunnelverbindung statt offener Server-Ports.", highlight: true },
      { icon: "box", name: "Gehärtete Container", description: "Die Website läuft in gehärteten Containern." },
      { icon: "eye", name: "Kein Tracking", description: "Keine Cookies und keine Analysedienste für Besucher." },
      { icon: "shield", name: "Sicherheitssystem", description: "Geplanter Baustein unserer Infrastruktur, noch nicht im Betrieb." },
    ],
  },
};

export const partnerField: FieldContent = {
  id: "partner",
  band: true,
  eyebrow: "Zusammenarbeit",
  title: "Teil der VylarisGroup",
  lead: "VylarisData ist eine Untermarke von VylarisGroupEurope (Leitung: Lucas Wilms) und gehört zur VylarisGroup. Unser Leitsatz: „Powering the Vylaris Ecosystem.“",
  paragraphs: [
    "Die beiden Seiten der Gruppe arbeiten als „Allianz CH & EU“ zusammen: VylarisGroup Schweiz, der Ursprungsverein, trägt die Idee. VylarisGroupEurope bildet die europäische Rechtsstruktur.",
    "VylarisGroupEurope kündigt mit VylarisSpace ein Hosting-Panel für Websites, E-Mail und Datenbanken an, derzeit mit dem Hinweis „Coming Soon“.",
  ],
  points: [
    { lead: "Untermarke von VylarisGroupEurope,", text: "Teil der VylarisGroup." },
    { lead: "Geschäftsbereich:", text: "Software Development & Technology." },
    { lead: "Allianz CH & EU:", text: "VylarisGroup Schweiz und VylarisGroupEurope arbeiten Hand in Hand." },
  ],
  link: { href: "/oekosystem/", label: "Mehr zum Ökosystem" },
  visual: {
    layers: [
      {
        icon: "users",
        name: "vylaris.ch",
        description: "VylarisGroup Schweiz: der Ursprungsverein, entstanden aus einem Homelab und einem Podcast.",
      },
      {
        icon: "building",
        iconTone: "indigo",
        arrowBefore: "link",
        name: "vylaris.eu",
        description: "VylarisGroupEurope: europäische Rechtsstruktur, Leitung Lucas Wilms.",
      },
      {
        icon: "cpu",
        name: "VylarisData",
        description: "Untermarke von VylarisGroupEurope im Geschäftsbereich Software Development & Technology.",
        highlight: true,
      },
    ],
  },
};

/* ------------------------------------------------------------- Stand & Ausblick */

export const standSteps: readonly TimelineItem[] = [
  {
    title: "Software entwickeln",
    status: { tone: "ok", label: "Heute möglich" },
    text: "Anwendungen, Schnittstellen und Werkzeuge aus unserem Geschäftsbereich Software Development & Technology.",
  },
  {
    title: "Aufbau der Infrastruktur",
    status: { tone: "info", label: "Im Aufbau" },
    text: "Server, Datensicherung, Netzwerk und Sicherheit sind geplante Bausteine. Wir haben aktuell keine eigene Hardware und fangen gerade an. Zahlen und Termine nennen wir nicht.",
  },
  {
    title: "Hardware und Unterstützung",
    status: { tone: "warn", label: "Gesucht" },
    text: "Wir suchen Hardware, auch ältere oder gebrauchte, und freuen uns über Know-how, Sponsoring und Empfehlungen.",
  },
  {
    title: "Ausbau des Ökosystems",
    status: { tone: "warn", label: "Geplant" },
    text: "Wir planen, das Vylaris-Ökosystem weiter auszubauen. Termine nennen wir, sobald sie feststehen.",
  },
];

/* ---------------------------------------------------------------- Ablauf */

export const workSteps: readonly TimelineItem[] = [
  {
    title: "Schritt 1: Anforderung klären",
    text: "Am Anfang steht die Frage, was entstehen soll: Was soll der Dienst leisten und wer nutzt ihn?",
  },
  {
    title: "Schritt 2: Konzept & Architektur",
    text: "Die Lösung wird skizziert und die Entscheidung festgehalten.",
  },
  {
    title: "Schritt 3: Umsetzung",
    text: "Die Lösung wird gebaut: Software heute, Infrastruktur mit dem Aufbau.",
  },
  {
    title: "Schritt 4: Betrieb & Weiterentwicklung",
    text: "Der Dienst geht in den Betrieb und wird mit den Anforderungen weiterentwickelt.",
  },
];

/* ------------------------------------------------------------------ Einordnung */

export const audiences: readonly AudienceItem[] = [
  {
    icon: "building",
    iconTone: "indigo",
    title: "VylarisGroupEurope",
    text: "Der europäische Zweig der Gruppe (vylaris.eu) bildet die rechtliche Struktur, die Leitung hat Lucas Wilms. VylarisData ist seine Untermarke. Zu den Angeboten der Gruppe zählen freie Open-Source-SaaS-Dienste, DSGVO-konform und ohne Tracking.",
  },
  {
    icon: "users",
    title: "VylarisGroup Schweiz",
    text: "Der Ursprungsverein (vylaris.ch) hat fünf Mitglieder, davon drei im Vorstand. Er ist aus einem Homelab und einem Podcast entstanden.",
  },
  {
    icon: "link",
    title: "Weitere Vorhaben",
    text: "Du hast ein Vorhaben, das zur Gruppe passt? Anfragen laufen über Kontakt & Tickets der VylarisGroup auf vylaris.eu.",
  },
];

/* -------------------------------------------------------------------------- FAQ */

export const faq: readonly FaqItem[] = [
  {
    q: "Betreibt VylarisData eigene Hardware?",
    a: "Nein, noch nicht. Aktuell haben wir keine eigene Hardware: keine eigenen Server, keinen eigenen Speicher und kein eigenes Backup-System. Die Infrastruktur ist im Aufbau, wir fangen gerade an. Geplant sind eine eigene Infrastruktur in Europa sowie Datensicherung, Netzwerk und Sicherheit als Bausteine. Zahlen und Termine nennen wir bewusst nicht.",
  },
  {
    q: "Was kann VylarisData heute leisten?",
    a: "Wir entwickeln Software: Anwendungen, Schnittstellen und Werkzeuge im Geschäftsbereich Software Development & Technology. Was eigene Infrastruktur voraussetzt, wird erst mit dem Aufbau möglich und ist auf dieser Seite als geplant gekennzeichnet.",
  },
  {
    q: "Wie kann ich VylarisData unterstützen?",
    a: (
      <p>
        Wir suchen Hardware und nehmen sehr gerne auch ältere oder gebrauchte Hardware entgegen. Auch Know-how, Sponsoring
        und Weitersagen helfen uns. Mehr dazu auf der Seite{" "}
        <A href="/unterstuetzen/" className="link">
          Unterstützen
        </A>
        ; Angebote richtest du bitte an die{" "}
        <A href="/kontakt/" className="link">
          Kontaktseite
        </A>
        .
      </p>
    ),
  },
  {
    q: "Gibt es eine Übersicht zum Stand der Infrastruktur?",
    a: "Ja, die Infrastruktur-Seite zeigt den Stand der Bausteine. Aktuell befindet sich jeder Baustein im Aufbau.",
  },
  {
    q: "Wo steht die Hardware?",
    a: "Es gibt noch keine eigene Hardware und damit auch noch keinen Standort. Geplant ist eine eigene Infrastruktur in Europa.",
  },
  {
    q: "Wie geht VylarisData mit Daten und Tracking um?",
    a: "Besucher bekommen von dieser Website keine Cookies und kein Tracking. Technisch notwendige Sitzungs-Cookies gibt es nur für angemeldete Betreiber, nicht für Besucher.",
  },
  {
    q: "Wie ist diese Website abgesichert?",
    a: "Sie ist nur über eine ausgehende, gesicherte Verbindung erreichbar; auf dem Server sind keine Ports offen. Die Website läuft in gehärteten Containern.",
  },
  {
    q: "Zu welcher Gruppe gehört VylarisData?",
    a: "VylarisData ist eine Untermarke von VylarisGroupEurope (Leitung: Lucas Wilms) und Teil der VylarisGroup, im Geschäftsbereich Software Development & Technology. Außerdem gehört VylarisGroup Schweiz zur Gruppe.",
  },
  {
    q: "Wie erreiche ich VylarisData?",
    a: (
      <p>
        Über den Kontaktweg der VylarisGroup unter{" "}
        <A href={site.links.contact} className="link">
          vylaris.eu/contact
        </A>
        , dort unter „Kontakt & Tickets“. Eine eigene E-Mail-Adresse, Telefonnummer oder
        Postanschrift für VylarisData gibt es nicht. Mehr dazu auf der{" "}
        <A href="/kontakt/" className="link">
          Kontaktseite
        </A>
        .
      </p>
    ),
  },
];

/* ---------------------------------------------------------------------- Abschluss */

export const cta = {
  title: (
    <>
      Du planst ein <Gradient>Projekt</Gradient>?
    </>
  ),
  text: (
    <>
      Schildere dein Vorhaben über den Kontaktweg der VylarisGroup. Anfragen laufen über „Kontakt & Tickets“ auf vylaris.eu.
      Du hast Hardware, Know-how oder eine Idee, wie du uns beim Aufbau helfen kannst? Dann schau gern bei{" "}
      <A href="/unterstuetzen/" className="link">
        Unterstützen
      </A>{" "}
      vorbei. Wir freuen uns über jede Hilfe.
    </>
  ),
  primary: { href: site.links.contact, label: "Kontakt aufnehmen", icon: "mail" },
  secondary: { href: "/unterstuetzen/", label: "Uns unterstützen", icon: "heart" },
} as const;
