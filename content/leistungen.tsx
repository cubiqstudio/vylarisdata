import type { FactItem, FaqItem, TimelineItem } from "@/components/ui";
import { A, Gradient } from "@/components/ui";
import type { AudienceItem } from "@/components/sections/leistungen/AudienceCards";
import type { BlockItem } from "@/components/sections/leistungen/BlockCards";
import type { FieldContent } from "@/components/sections/leistungen/FieldSection";
import type { OverviewRow } from "@/components/sections/leistungen/OverviewTable";
import type { SoftwareTile } from "@/components/sections/leistungen/SoftwareTiles";
import { site } from "@/content/site";

/** Daten der Seite "Leistungen". Markup liegt in den Komponenten, hier nur Inhalt. */

/* ------------------------------------------------------------ Hardware-Eckdaten */

/** Die Eckdaten der Hardware, einmal geführt und überall abgeleitet. */
const hw = {
  servers: "10 Server",
  ssdNow: "250 TB SSD",
  ssdTarget: "4 × 120 TB SSD",
  hdd: "knapp 500 TB HDD",
  total: "knapp 1 Petabyte",
  totalShort: "knapp 1 PB",
} as const;

export const meta = {
  title: "Leistungen",
  description: `Software und eigene Infrastruktur: ${hw.servers}, aktuell ${hw.ssdNow} im Betrieb und ein Speicherausbau auf ${hw.totalShort}, eigenes Netzwerk, PBS-Backup-System und Sicherheitssystem. Der DNS-Server ist aktuell in Wartung.`,
  path: "/leistungen/",
} as const;

/* ---------------------------------------------------------------------- Seitentexte */

export const hero = {
  title: `${hw.servers}, ${hw.ssdNow} im Betrieb, eigenes Netzwerk: Software und Infrastruktur von VylarisData`,
  lead: `Wir entwickeln Software und betreiben eigene Hardware: ${hw.servers} insgesamt, aktuell ${hw.ssdNow} im Betrieb, ein eigenes Netzwerk, ein PBS-Backup-System und ein Sicherheitssystem. Der Rest des Speichers (Ziel ${hw.total}) ist im Aufbau, der DNS-Server in Wartung.`,
  primary: "Unsere Hardware im Überblick",
  secondary: "Alle Bereiche",
} as const;

export const sections = {
  kennzahlen: {
    eyebrow: "In Zahlen",
    title: "Zahlen unserer Infrastruktur",
    lead: "Die Eckdaten unserer Infrastruktur, so wie sie heute laufen.",
  },
  bausteine: {
    eyebrow: "Bausteine",
    title: "Sieben Bausteine unserer Infrastruktur",
    lead: "Server, Speicher, Backup, Netzwerk und Sicherheit: So setzt sich unsere Infrastruktur zusammen, mit Status je Baustein.",
    callout: "Der DNS-Server ist aktuell in Wartung. Den Stand aller Systeme findest du live auf der",
    calloutLink: "Infrastruktur-Seite",
  },
  software: {
    eyebrow: "Leistungsfeld 04",
    title: "Software bauen und die Hardware dafür selbst betreiben",
    lead: "Unser Geschäftsbereich ist Software Development & Technology. VylarisData ist eine Marke von CircleUpWilms und gehört zur VylarisGroup.",
    text: "Eigenentwicklung heißt: Wir kennen den Code, den wir schreiben, und passen ihn an, wenn sich Anforderungen ändern. Software und Hardware liegen bei uns in einer Hand.",
  },
  uebersicht: {
    eyebrow: "Überblick",
    title: "Acht Bereiche auf einen Blick",
    lead: "Im Betrieb sind Server, 250 TB SSD-Speicher, Datensicherung, Netzwerk und Sicherheit. Der Rest des Speichers ist im Aufbau, der DNS-Server in Wartung, der Ausbau des Ökosystems geplant.",
  },
  stand: {
    eyebrow: "Stand und Ausblick",
    title: "Was läuft, was im Aufbau ist, was in Wartung ist, was wir planen",
    lead: "Vier Zustände, klar getrennt: im Betrieb, im Aufbau, in Wartung und geplant.",
  },
  arbeitsweise: {
    eyebrow: "Ablauf",
    title: "Vier Schritte von der Anforderung bis zum Betrieb",
    lead: "So gliedert sich ein Vorhaben, für Software und Infrastruktur gleichermaßen.",
  },
  zielgruppen: {
    eyebrow: "Einordnung",
    title: "Unser Platz in der VylarisGroup",
    lead: "VylarisData gehört zur VylarisGroup, zu der auch VylarisGroupEurope und VylarisGroup Schweiz zählen. Anfragen laufen über den Kontaktweg der VylarisGroup.",
  },
  faq: {
    eyebrow: "Häufige Fragen",
    title: "Was du vor einer Anfrage wissen solltest",
    lead: "Kurze Antworten zu Hardware, Stand, Standort, Daten und Kontakt.",
  },
} as const;

/* ------------------------------------------------------------------ Kennzahlen */

export const keyFacts: readonly FactItem[] = [
  { icon: "server", value: hw.servers, label: "Server insgesamt, selbst betrieben" },
  { icon: "db", value: "250 TB SSD", label: `Aktuell im Betrieb, der Rest (Ziel ${hw.totalShort}) ist im Aufbau` },
  { icon: "life", value: "PBS-Backup-System", label: "Unser eigenes System für Backups" },
  { icon: "network", value: "Eigenes IP-Subnetz", label: "Mit eigenem Server für die Internetanbindung" },
];

/* ----------------------------------------------------------------- Überblick */

export const overview: readonly OverviewRow[] = [
  {
    name: "Softwareentwicklung",
    text: "Unser Geschäftsbereich Software Development & Technology: Anwendungen, Schnittstellen und Werkzeuge.",
  },
  {
    name: "Eigene Server & Betrieb",
    status: { tone: "ok", label: "Hardware im Betrieb" },
    text: `${hw.servers} insgesamt, auf eigener Hardware. Anfragen laufen über den Kontaktweg der VylarisGroup.`,
  },
  {
    name: "Speicher & Datensicherung",
    status: { tone: "ok", label: "Im Betrieb" },
    text: `${hw.ssdNow} im Betrieb, der Ausbau auf ${hw.totalShort} Rohkapazität ist im Aufbau. Dazu ein PBS-Backup-System.`,
  },
  {
    name: "Netzwerk",
    status: { tone: "ok", label: "Im Betrieb" },
    text: "Eigenes IP-Subnetz und ein Server, der unsere Internetanbindung regelt.",
  },
  {
    name: "DNS-Server",
    status: { tone: "info", label: "In Wartung" },
    text: "Aktuell in Wartung. Den Live-Stand zeigt die Infrastruktur-Seite.",
  },
  {
    name: "Sicherheit & Datenschutz",
    status: { tone: "ok", label: "Im Betrieb" },
    text: "Sicherheitssystem mit internem Netzwerk-Setup. Für Besucher setzt diese Website keine Cookies und kein Tracking ein.",
  },
  {
    name: "Ausbau des Ökosystems",
    status: { tone: "warn", label: "Geplant" },
    text: "Wir planen, das Vylaris-Ökosystem weiter auszubauen. Termine nennen wir, sobald sie feststehen.",
  },
  {
    name: "Zusammenarbeit",
    text: "Teil der VylarisGroup, mit Bezug zu VylarisGroupEurope und VylarisGroup Schweiz („Allianz CH & EU“).",
  },
];

export const facts: readonly FactItem[] = [
  { value: "Marke von CircleUpWilms", label: "Teil der VylarisGroup" },
  { value: "Software & Technology", label: "Unser Geschäftsbereich" },
  { value: "Eigene Infrastruktur", label: "Server, Speicher, Backup, Netzwerk, Sicherheit" },
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

export const blocks: readonly BlockItem[] = [
  {
    icon: "server",
    title: "Server",
    status: { tone: "ok", label: "Im Betrieb" },
    figure: "10 Server",
    text: "Unsere Server laufen auf eigener Hardware, die wir selbst betreiben.",
  },
  {
    icon: "db",
    title: "Storage SSD",
    status: { tone: "ok", label: "Im Betrieb" },
    figure: hw.ssdNow,
    text: "Aktuell stehen 250 TB SSD-Speicher im Betrieb zur Verfügung.",
  },
  {
    icon: "hdd",
    title: "Storage-Ausbau",
    status: { tone: "info", label: "Im Aufbau" },
    figure: "Ziel: knapp 1 PB",
    text: "Im Aufbau: der SSD-Ausbau auf 4 × 120 TB (480 TB) und ein Server mit knapp 500 TB auf Festplatten (HDD).",
  },
  {
    icon: "life",
    title: "PBS-Backup-System",
    status: { tone: "ok", label: "Im Betrieb" },
    figure: "Eigenes System",
    text: "Unser eigenes System für Backups.",
  },
  {
    icon: "network",
    title: "Eigenes Netzwerk",
    status: { tone: "ok", label: "Im Betrieb" },
    figure: "Eigenes IP-Subnetz",
    text: "Ein Server regelt unsere Internetanbindung.",
  },
  {
    icon: "globe",
    title: "DNS-Server",
    status: { tone: "info", label: "In Wartung" },
    figure: "Aktuell in Wartung",
    text: "Der Server für die Namensauflösung ist aktuell in Wartung.",
  },
  {
    icon: "shield",
    title: "Sicherheitssystem",
    status: { tone: "ok", label: "Im Betrieb" },
    figure: "Mit internem Netzwerk-Setup",
    text: "Ein eigenes Sicherheitssystem, eingebunden in unser internes Netzwerk-Setup.",
  },
];

/* ----------------------------------------------- Leistungsfelder 01 bis 05 */

export const hostingField: FieldContent = {
  id: "hosting",
  eyebrow: "Leistungsfeld 01",
  title: "Eigene Server & Betrieb",
  status: { tone: "ok", label: "Hardware im Betrieb" },
  lead: `Wir betreiben ${hw.servers}, Speicher, Datensicherung, Netzwerk und ein Sicherheitssystem selbst.`,
  paragraphs: [
    "Hardware, Netzwerk und Betrieb liegen in unserer Hand. Das gibt uns Kontrolle darüber, was auf unserer Technik läuft, und die Möglichkeit, sie selbst zu gestalten.",
    "Anfragen zu unserer Technik laufen über den Kontaktweg der VylarisGroup auf vylaris.eu.",
  ],
  points: [
    { lead: "10 Server insgesamt:", text: "auf eigener Hardware, von uns selbst betrieben." },
    { lead: "Eigener Speicher:", text: "aktuell 250 TB SSD, der Ausbau auf SSD und HDD ist im Aufbau." },
    { lead: "Eigenes PBS-Backup-System", text: "für Backups." },
    { lead: "Eigenes Netzwerk:", text: "eigenes IP-Subnetz und ein Server für die Internetanbindung." },
    { lead: "Live-Status:", text: "Den Stand unserer Systeme zeigt die Live-Statusübersicht auf der Infrastruktur-Seite." },
  ],
  link: { href: "/infrastruktur/", label: "Infrastruktur und Live-Status ansehen" },
  visual: {
    eyebrow: "Unsere Hardware",
    arrows: false,
    layers: [
      { icon: "server", name: "Server", description: "Zehn Server auf eigener Hardware.", highlight: true },
      { icon: "db", name: "Speicher & Backup", description: "250 TB SSD im Betrieb, weiterer Speicher im Aufbau, PBS-Backup-System." },
      { icon: "network", name: "Netzwerk & Sicherheit", description: "Eigenes IP-Subnetz, Server für die Internetanbindung, Sicherheitssystem." },
    ],
  },
};

export const speicherField: FieldContent = {
  id: "speicher",
  band: true,
  reverse: true,
  eyebrow: "Leistungsfeld 02",
  title: `Speicher und Datensicherung: ${hw.ssdNow} im Betrieb`,
  status: { tone: "ok", label: "Im Betrieb" },
  lead: `Aktuell sind ${hw.ssdNow} in Betrieb. Der Rest ist im Aufbau: vier Server mit je 120 TB SSD und ein Server mit knapp 500 TB HDD ergeben als Ziel ${hw.total}.`,
  paragraphs: [
    `Wir nennen hier bewusst die Rohkapazität: Das Ausbauziel von ${hw.ssdTarget} (480 TB) plus knapp 500 TB HDD ist die Summe der Speicher, bevor Redundanz abgezogen wird. Heute laufen ${hw.ssdNow}.`,
    "SSD und HDD sind zwei Speicherarten: Flash-Speicher auf der einen, Festplatten mit großer Kapazität auf der anderen Seite. Heute laufen 250 TB SSD, der weitere SSD-Ausbau und die HDD-Stufe entstehen gerade. Für Backups betreiben wir zusätzlich ein eigenes PBS-Backup-System.",
  ],
  points: [
    { lead: "250 TB SSD", text: "sind aktuell im Betrieb." },
    { lead: "Im Aufbau:", text: "der SSD-Ausbau auf 4 × 120 TB (480 TB) und 1 Server mit knapp 500 TB HDD." },
    { lead: "Rohkapazität", text: "heißt: Summe der verbauten Speicher, vor Redundanz." },
    { lead: "PBS-Backup-System:", text: "unser eigenes System für Backups und Datensicherung." },
  ],
  visual: {
    eyebrow: "Rohkapazität und Backup",
    arrows: false,
    layers: [
      { icon: "db", name: hw.ssdNow, description: "Aktuell im Betrieb.", highlight: true },
      { icon: "hdd", name: "Im Aufbau", description: "Weitere SSD-Kapazität und ein Server mit knapp 500 TB HDD." },
      { icon: "layers", name: "Ziel: knapp 1 PB", description: "Rohkapazität nach dem Ausbau, vor Redundanz." },
      { icon: "life", name: "PBS-Backup-System", description: "Unser eigenes System für Backups." },
    ],
  },
};

export const netzField: FieldContent = {
  id: "netz",
  eyebrow: "Leistungsfeld 03",
  title: "Eigenes Netzwerk mit eigenem IP-Subnetz",
  status: { tone: "ok", label: "Im Betrieb" },
  lead: "Wir betreiben ein eigenes Netzwerk: ein eigenes IP-Subnetz und einen Server, der unsere Internetanbindung regelt.",
  paragraphs: [
    "Das Netzwerk gehört uns, vom IP-Subnetz bis zum Server, der die Verbindung ins Internet regelt.",
    "Der DNS-Server ist aktuell in Wartung; seinen Stand siehst du live auf der Infrastruktur-Seite.",
  ],
  points: [
    { lead: "Eigenes IP-Subnetz:", text: "unser eigener Adressbereich." },
    { lead: "Server:", text: "regelt unsere Internetanbindung." },
    { lead: "DNS-Server:", text: "aktuell in Wartung." },
    { lead: "Sicherheitssystem:", text: "mit internem Netzwerk-Setup." },
  ],
  link: { href: "/infrastruktur/", label: "Zum Live-Status" },
  visual: {
    eyebrow: "Unser Netzwerk",
    arrows: false,
    layers: [
      { icon: "link", name: "Eigenes IP-Subnetz", description: "Unser eigener Adressbereich." },
      { icon: "network", name: "Server", description: "Regelt unsere Internetanbindung.", highlight: true },
      { icon: "globe", name: "DNS-Server", description: "Aktuell in Wartung." },
    ],
  },
};

export const sicherheitField: FieldContent = {
  id: "sicherheit",
  reverse: true,
  eyebrow: "Leistungsfeld 05",
  title: "Sicherheit & Datenschutz",
  status: { tone: "ok", label: "Im Betrieb" },
  lead: "Wir betreiben ein Sicherheitssystem mit internem Netzwerk-Setup. Diese Website zeigt im Kleinen, wie wir Sicherheit und Datenschutz verstehen.",
  paragraphs: [
    "Die Website ist über einen ausgehenden Tunnel erreichbar, ohne offene Ports auf dem Server. Die Verbindung besteht ausschließlich von innen nach außen, die Website läuft in gehärteten Containern. Für Besucher setzt sie weder Cookies noch Tracking ein.",
  ],
  points: [
    { lead: "Sicherheitssystem", text: "mit internem Netzwerk-Setup, im Betrieb." },
    { lead: "Keine offenen Ports:", text: "Diese Website ist über einen ausgehenden Tunnel erreichbar, nicht über offene Server-Ports." },
    { lead: "Gehärtete Container:", text: "Die Website läuft in gehärteten Containern." },
    { lead: "Kein Tracking:", text: "Für Besucher gibt es weder Cookies noch Analysedienste." },
  ],
  visual: {
    arrows: false,
    layers: [
      { icon: "shield", name: "Sicherheitssystem", description: "Mit internem Netzwerk-Setup, im Betrieb.", highlight: true },
      { icon: "lock", name: "Keine offenen Ports", description: "Ausgehende Tunnelverbindung statt offener Server-Ports." },
      { icon: "box", name: "Gehärtete Container", description: "Die Website läuft in gehärteten Containern." },
      { icon: "eye", name: "Kein Tracking", description: "Keine Cookies und keine Analysedienste für Besucher." },
    ],
  },
};

export const partnerField: FieldContent = {
  id: "partner",
  band: true,
  eyebrow: "Zusammenarbeit",
  title: "Teil der VylarisGroup",
  lead: "VylarisData ist eine Marke von CircleUpWilms und gehört zur VylarisGroup. Unser Leitsatz: „Powering the Vylaris Ecosystem.“",
  paragraphs: [
    "Die beiden Seiten der Gruppe arbeiten als „Allianz CH & EU“ zusammen: VylarisGroup Schweiz, der Ursprungsverein, trägt die Idee. VylarisGroupEurope bildet die europäische Rechtsstruktur und stellt Hosting und Server-Infrastruktur für ihre Dienste bereit.",
    "VylarisGroupEurope kündigt mit VylarisSpace ein Hosting-Panel für Websites, E-Mail und Datenbanken an, derzeit mit dem Hinweis „Coming Soon“.",
  ],
  points: [
    { lead: "Marke von CircleUpWilms,", text: "Teil der VylarisGroup." },
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
        description: "VylarisGroupEurope: europäische Rechtsstruktur sowie Hosting und Server-Infrastruktur.",
      },
      {
        icon: "cpu",
        name: "VylarisData",
        description: "Marke von CircleUpWilms im Geschäftsbereich Software Development & Technology.",
        highlight: true,
      },
    ],
  },
};

/* ------------------------------------------------------------- Stand & Ausblick */

export const standSteps: readonly TimelineItem[] = [
  {
    title: "Server, Speicher, Netzwerk und Sicherheit",
    status: { tone: "ok", label: "Im Betrieb" },
    text: `Unsere ${hw.servers} insgesamt, ${hw.ssdNow} Speicher, das PBS-Backup-System, der Server mit eigenem IP-Subnetz und das Sicherheitssystem mit internem Netzwerk-Setup.`,
  },
  {
    title: "Speicherausbau",
    status: { tone: "info", label: "Im Aufbau" },
    text: `Der Rest des Speichers ist im Aufbau, Ziel sind ${hw.totalShort} Rohkapazität. Einen Termin nennen wir nicht.`,
  },
  {
    title: "DNS-Server",
    status: { tone: "info", label: "In Wartung" },
    text: "Der DNS-Server ist aktuell in Wartung. Den Live-Stand zeigt die Infrastruktur-Seite.",
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
    text: "Die Lösung wird gebaut, in Software wie in Infrastruktur.",
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
    text: "Der europäische Zweig der Gruppe (vylaris.eu) bildet die rechtliche Struktur und stellt Hosting und Server-Infrastruktur für seine Dienste bereit: freie Open-Source-SaaS-Dienste, DSGVO-konform und ohne Tracking.",
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
    q: "Betreibt VylarisData wirklich eigene Hardware?",
    a: `Ja. Wir betreiben ${hw.servers} insgesamt, alle auf eigener Hardware. Zur Infrastruktur gehören außerdem ${hw.ssdNow} Speicher im Betrieb, ein PBS-Backup-System, ein eigenes IP-Subnetz mit eigenem Server und ein Sicherheitssystem. Der Speicher wird gerade auf ${hw.total} Rohkapazität ausgebaut (vor Redundanz): vier Server mit je 120 TB SSD und ein Server mit knapp 500 TB HDD.`,
  },
  {
    q: "Ist alles im Normalbetrieb?",
    a: "Fast alles. Der DNS-Server ist aktuell in Wartung, und der Rest des Speichers ist noch im Aufbau. Den Live-Stand aller Systeme zeigt die Infrastruktur-Seite.",
  },
  {
    q: "Wo steht die Hardware?",
    a: "Konkrete Standorte geben wir nicht öffentlich an.",
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
    a: "VylarisData ist eine Marke von CircleUpWilms und Teil der VylarisGroup, im Geschäftsbereich Software Development & Technology. Zur Gruppe gehören VylarisGroupEurope und VylarisGroup Schweiz.",
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
  text: "Schildere dein Vorhaben über den Kontaktweg der VylarisGroup. Anfragen laufen über „Kontakt & Tickets“ auf vylaris.eu.",
  primary: { href: site.links.contact, label: "Kontakt aufnehmen", icon: "mail" },
  secondary: { href: "/infrastruktur/", label: "Zur Infrastruktur" },
} as const;
