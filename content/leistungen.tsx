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
  ssd: "4 × 120 TB SSD",
  ssdTotal: "480 TB SSD",
  hdd: "knapp 500 TB HDD",
  total: "fast 1 Petabyte",
  totalShort: "fast 1 PB",
} as const;

export const meta = {
  title: "Leistungen",
  description: `Software und eigene Infrastruktur: ${hw.servers}, ${hw.totalShort} Rohkapazität, eigenes Netzwerk, PBS-Backup-System und Sicherheitssystem. Der DNS-Server ist aktuell in Wartung.`,
  path: "/leistungen/",
} as const;

/* ---------------------------------------------------------------------- Seitentexte */

export const hero = {
  title: `${hw.servers}, ${hw.total}, eigenes Netzwerk: Software und Infrastruktur von VylarisData`,
  lead: `Wir entwickeln Software und betreiben eigene Hardware: ${hw.servers} insgesamt, ${hw.total} Rohkapazität, ein eigenes Netzwerk, ein PBS-Backup-System und ein Sicherheitssystem. Nur der DNS-Server ist aktuell in Wartung.`,
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
    title: "Acht Bausteine unserer Infrastruktur",
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
    lead: "Im Betrieb sind Server, Speicher, Datensicherung, Netzwerk und Sicherheit. Der DNS-Server ist in Wartung, der Ausbau des Ökosystems ist geplant.",
  },
  stand: {
    eyebrow: "Stand und Ausblick",
    title: "Was läuft, was in Wartung ist, was wir planen",
    lead: "Drei Zustände, klar getrennt: im Betrieb, in Wartung und geplant.",
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
  { icon: "server", value: hw.servers, label: "Server insgesamt, intern KVM-Server" },
  { icon: "db", value: "Fast 1 PB", label: `Rohkapazität: ${hw.ssd} und ${hw.hdd}` },
  { icon: "life", value: "PBS-Backup-System", label: "Unser eigenes System für Backups" },
  { icon: "network", value: "Eigenes IP-Subnetz", label: "Mit eigenem Network-Server" },
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
    text: `${hw.servers} insgesamt, intern als KVM-Server, extern als normale Server. Anfragen laufen über den Kontaktweg der VylarisGroup.`,
  },
  {
    name: "Speicher & Datensicherung",
    status: { tone: "ok", label: "Im Betrieb" },
    text: `Fünf Storage-Server mit ${hw.totalShort} Rohkapazität und ein PBS-Backup-System.`,
  },
  {
    name: "Netzwerk",
    status: { tone: "ok", label: "Im Betrieb" },
    text: "Eigenes IP-Subnetz und ein Network-Server, der unsere Internetanbindung regelt.",
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
    title: "KVM-Server",
    status: { tone: "ok", label: "Im Betrieb" },
    figure: "Intern",
    text: "Unsere internen Server sind KVM-Server.",
  },
  {
    icon: "cloud",
    title: "Externe Server",
    status: { tone: "ok", label: "Im Betrieb" },
    figure: "Extern",
    text: "Die externen Server sind ganz normale Server.",
  },
  {
    icon: "db",
    title: "Storage SSD",
    status: { tone: "ok", label: "Im Betrieb" },
    figure: hw.ssd,
    text: `Vier Storage-Server mit zusammen ${hw.ssdTotal}.`,
  },
  {
    icon: "hdd",
    title: "Storage HDD",
    status: { tone: "ok", label: "Im Betrieb" },
    figure: "Knapp 500 TB HDD",
    text: "Ein Storage-Server mit knapp 500 TB auf Festplatten (HDD).",
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
    text: "Ein Network-Server regelt unsere Internetanbindung.",
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
    { lead: "10 Server insgesamt:", text: "intern als KVM-Server, extern als normale Server." },
    { lead: "Eigener Speicher", text: "auf fünf Storage-Servern mit SSD und HDD." },
    { lead: "Eigenes PBS-Backup-System", text: "für Backups." },
    { lead: "Eigenes Netzwerk:", text: "eigenes IP-Subnetz und ein Network-Server für die Internetanbindung." },
    { lead: "Live-Status:", text: "Den Stand unserer Systeme zeigt die Live-Statusübersicht auf der Infrastruktur-Seite." },
  ],
  link: { href: "/infrastruktur/", label: "Infrastruktur und Live-Status ansehen" },
  visual: {
    eyebrow: "Unsere Hardware",
    arrows: false,
    layers: [
      { icon: "server", name: "Server", description: "Interne KVM-Server und externe Server.", highlight: true },
      { icon: "db", name: "Speicher & Backup", description: "Storage-Server mit SSD und HDD, PBS-Backup-System." },
      { icon: "network", name: "Netzwerk & Sicherheit", description: "Eigenes IP-Subnetz, Network-Server, Sicherheitssystem." },
    ],
  },
};

export const speicherField: FieldContent = {
  id: "speicher",
  band: true,
  reverse: true,
  eyebrow: "Leistungsfeld 02",
  title: `Speicher und Datensicherung: ${hw.total} Rohkapazität`,
  status: { tone: "ok", label: "Im Betrieb" },
  lead: `Vier Storage-Server mit je 120 TB SSD und ein Storage-Server mit knapp 500 TB HDD. Zusammen sind das ${hw.total}.`,
  paragraphs: [
    `Wir nennen hier bewusst die Rohkapazität: ${hw.ssd} ergeben 480 TB, dazu kommen knapp 500 TB HDD. Das ist die Summe der verbauten Speicher, bevor Redundanz abgezogen wird.`,
    "SSD und HDD sind zwei Speicherarten: Flash-Speicher auf der einen, Festplatten mit großer Kapazität auf der anderen Seite. Beides betreiben wir selbst. Für Backups betreiben wir zusätzlich ein eigenes PBS-Backup-System.",
  ],
  points: [
    { lead: "4 Storage-Server", text: "mit je 120 TB SSD, zusammen 480 TB SSD." },
    { lead: "1 Storage-Server", text: "mit knapp 500 TB HDD." },
    { lead: "Rohkapazität", text: "heißt: Summe der verbauten Speicher, vor Redundanz." },
    { lead: "PBS-Backup-System:", text: "unser eigenes System für Backups und Datensicherung." },
  ],
  visual: {
    eyebrow: "Rohkapazität und Backup",
    arrows: false,
    layers: [
      { icon: "db", name: hw.ssd, description: `Vier Storage-Server, zusammen ${hw.ssdTotal}.` },
      { icon: "hdd", name: "Knapp 500 TB HDD", description: "Ein Storage-Server mit großer Festplattenkapazität." },
      { icon: "layers", name: "Fast 1 PB gesamt", description: "Rohkapazität vor Redundanz.", highlight: true },
      { icon: "life", name: "PBS-Backup-System", description: "Unser eigenes System für Backups." },
    ],
  },
};

export const netzField: FieldContent = {
  id: "netz",
  eyebrow: "Leistungsfeld 03",
  title: "Eigenes Netzwerk mit eigenem IP-Subnetz",
  status: { tone: "ok", label: "Im Betrieb" },
  lead: "Wir betreiben ein eigenes Netzwerk: ein eigenes IP-Subnetz und einen Network-Server, der unsere Internetanbindung regelt.",
  paragraphs: [
    "Das Netzwerk gehört uns, vom IP-Subnetz bis zum Network-Server, der die Verbindung ins Internet regelt.",
    "Der DNS-Server ist aktuell in Wartung; seinen Stand siehst du live auf der Infrastruktur-Seite.",
  ],
  points: [
    { lead: "Eigenes IP-Subnetz:", text: "unser eigener Adressbereich." },
    { lead: "Network-Server:", text: "regelt unsere Internetanbindung." },
    { lead: "DNS-Server:", text: "aktuell in Wartung." },
    { lead: "Sicherheitssystem:", text: "mit internem Netzwerk-Setup." },
  ],
  link: { href: "/infrastruktur/", label: "Zum Live-Status" },
  visual: {
    eyebrow: "Unser Netzwerk",
    arrows: false,
    layers: [
      { icon: "link", name: "Eigenes IP-Subnetz", description: "Unser eigener Adressbereich." },
      { icon: "network", name: "Network-Server", description: "Regelt unsere Internetanbindung.", highlight: true },
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
    text: `Unsere ${hw.servers} insgesamt, fünf Storage-Server mit ${hw.totalShort} Rohkapazität, das PBS-Backup-System, der Network-Server mit eigenem IP-Subnetz und das Sicherheitssystem mit internem Netzwerk-Setup.`,
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
    a: `Ja. Wir betreiben ${hw.servers} insgesamt, intern sind es KVM-Server. Zur Infrastruktur gehören außerdem vier Storage-Server mit je 120 TB SSD, ein Storage-Server mit knapp 500 TB HDD, ein PBS-Backup-System, ein eigenes IP-Subnetz mit Network-Server und ein Sicherheitssystem. Die Gesamtmenge von ${hw.total} ist Rohkapazität, also vor Redundanz.`,
  },
  {
    q: "Ist alles im Normalbetrieb?",
    a: "Fast alles. Nur der DNS-Server ist aktuell in Wartung. Den Live-Stand aller Systeme zeigt die Infrastruktur-Seite.",
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
