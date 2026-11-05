import type { ReactNode } from "react";
import { A, Gradient, type FactItem, type FaqItem } from "@/components/ui";
import type { AllianceTile } from "@/components/sections/oekosystem/AllianceFlow";
import type { EcoBrand } from "@/components/sections/oekosystem/EcoBrandCard";
import type { FeatureTileData } from "@/components/sections/oekosystem/FeatureGrid";
import type { LinkTileData } from "@/components/sections/oekosystem/LinkTile";
import type { DefinitionRow } from "@/components/sections/oekosystem/Panel";
import type { Responsibility } from "@/components/sections/oekosystem/ResponsibilityList";
import type { StatusGroup } from "@/components/sections/oekosystem/StatusBoard";
import { site } from "@/content/site";

/** Daten der Seite "Ökosystem". Markup liegt in den Komponenten, hier nur Inhalt. */

export const meta = {
  title: "Ökosystem",
  description:
    "Die VylarisGroup im Überblick: vier Bausteine, dahinter die Infrastruktur von VylarisData mit 10 Servern, knapp 1 PB Rohkapazität und PBS-Backup.",
  path: "/oekosystem/",
} as const;

/* ------------------------------------------------------------------------ Hero */

export const heroTitle = (
  <>
    Ein Ökosystem, getragen von <Gradient>Infrastruktur, die läuft.</Gradient>
  </>
);

export const heroLead =
  "Die VylarisGroup besteht aus vier Bausteinen. VylarisData liefert die Technik: zehn Server, knapp 1 PB Rohkapazität, ein eigenes Netzwerk und ein eigenes PBS-Backup-System sind im Betrieb. Der weitere Ausbau des Ökosystems ist geplant.";

/* ------------------------------------------------------------ Sektionsköpfe */

export type HeadData = { id: string; eyebrow: string; title: string; lead?: ReactNode };

export const heads = {
  facts: {
    id: "zahlen-h",
    eyebrow: "Das Fundament in Zahlen",
    title: "Die Basis des Ökosystems steht.",
    lead: "Eigene Hardware statt Absichtserklärung. Das sind die Eckdaten der Infrastruktur, die VylarisData betreibt.",
  },
  overview: {
    id: "uebersicht-h",
    eyebrow: "Übersicht",
    title: "Vier Bausteine, eine Gruppe.",
    lead: "Unter dem Dach der VylarisGroup arbeiten vier Bausteine zusammen, jeder mit eigener Aufgabe. Einer davon, VylarisSpace, ist noch angekündigt. Diese Seite gehört zu VylarisData, der Technologie- und Infrastrukturmarke der Gruppe.",
  },
  foundation: {
    id: "fundament-h",
    eyebrow: "Das Fundament",
    title: "Sechs Bausteine, fünf davon im Betrieb.",
    lead: "Sechs Bausteine tragen die Infrastruktur, fünf sind im Betrieb. Der DNS-Server wird gerade gewartet.",
  },
  responsibilities: {
    id: "zustaendigkeiten-h",
    eyebrow: "Zuständigkeiten",
    title: "Wer in der Gruppe was übernimmt.",
    lead: (
      <>
        Vier Bausteine, klar verteilt. Anfragen laufen gebündelt über{" "}
        <A className="link" href={site.links.contact}>
          vylaris.eu/contact
        </A>
        .
      </>
    ),
  },
  site: {
    id: "betrieb-h",
    eyebrow: "Diese Website",
    title: "Diese Website läuft hinter einem Cloudflare Tunnel.",
    lead: "Auch bei dieser Seite sagen wir offen, wie sie betrieben wird. Das ist der Stand, soweit wir ihn selbst belegen können.",
  },
  values: {
    id: "werte-h",
    eyebrow: "Werte & Grundsätze",
    title: "Woran wir uns messen lassen.",
    lead: "Zwei dieser Werte sind unsere eigenen, zwei nennt VylarisGroupEurope für ihre Dienste. Auch daran orientieren wir uns.",
  },
  links: {
    id: "links-h",
    eyebrow: "Weiterlesen",
    title: "Die Gruppe im Netz: vylaris.eu und vylaris.ch.",
    lead: "Die meisten Inhalte der Gruppe liegen auf vylaris.ch und vylaris.eu. Hier sind die wichtigsten Einstiege; alle Links öffnen in einem neuen Tab.",
  },
} as const satisfies Record<string, HeadData>;

/** Kopf mit Text neben Visual (Eyebrow, Titel, Absätze). */
export type CopyData = { id: string; eyebrow: string; title: string };

export const copies = {
  storage: { id: "speicher-h", eyebrow: "Speicher", title: "Knapp ein Petabyte Rohkapazität." },
  alliance: { id: "allianz-h", eyebrow: "Allianz CH & EU", title: "Schweiz und Europa arbeiten zusammen." },
  circleUpWilms: { id: "circleupwilms-h", eyebrow: "CircleUpWilms", title: "Wer hinter VylarisData steht." },
  progress: { id: "stand-h", eyebrow: "Stand und Ausblick", title: "Im Betrieb, in Wartung, geplant." },
  faq: { id: "faq-h", eyebrow: "Häufige Fragen", title: "Was du über VylarisData und die Gruppe wissen willst." },
} as const satisfies Record<string, CopyData>;

/* ------------------------------------------------------------------ Kennzahlen */

export const facts: readonly FactItem[] = [
  {
    icon: "server",
    value: "10 Server",
    label: "Insgesamt zehn Server im Betrieb. Intern laufen KVM-Server, außerhalb klassische Server.",
  },
  {
    icon: "db",
    value: "Knapp 1 PB",
    label: "Rohkapazität im Speicher, gerechnet vor Redundanz: 4 × 120 TB SSD plus knapp 500 TB HDD.",
  },
  {
    icon: "network",
    value: "Eigenes Subnetz",
    label: "Ein eigenes IP-Subnetz und ein Network-Server, der unsere Internetanbindung regelt.",
  },
  {
    icon: "refresh",
    value: "Eigenes Backup",
    label: "Ein PBS-Backup-System sorgt für die Datensicherung.",
  },
];

/* ------------------------------------------------------------------- Übersicht */

export const groupPanel = {
  title: "VylarisGroup",
  subtitle: "Das Dach des Ökosystems",
  text: "Vier Bausteine ergänzen sich unter einem Dach. Unser Beitrag als VylarisData ist die Technik: eigene Hardware, eigenes Netzwerk, eigene Datensicherung.",
} as const;

export const brands: readonly EcoBrand[] = [
  {
    name: "VylarisGroup Schweiz",
    sub: "vylaris.ch",
    icon: "users",
    status: { tone: "ok", label: "Besteht" },
    text: "Der Verein hinter der Idee. Er ist aus einem Homelab und einem Podcast entstanden und hat fünf Mitglieder, davon drei im Vorstand.",
    action: { href: site.links.ch, label: "vylaris.ch besuchen", icon: "ext" },
  },
  {
    name: "VylarisGroupEurope",
    sub: "vylaris.eu",
    icon: "building",
    iconTone: "indigo",
    status: { tone: "ok", label: "Besteht" },
    text: "Der offizielle europäische Zweig, geleitet von Lucas Wilms. Seine Aufgabe ist die europäische Rechts- und Unternehmensstruktur sowie Hosting und Serverinfrastruktur für alle seine Dienste. Er bietet freie Open-Source-SaaS-Dienste an, DSGVO-konform und ohne Tracking.",
    action: { href: site.links.eu, label: "vylaris.eu besuchen", icon: "ext" },
  },
  {
    name: "VylarisData",
    sub: "vylarisdata.com",
    icon: "cpu",
    status: { tone: "ok", label: "Infrastruktur im Betrieb" },
    text: "Geschäftsbereich Software Development & Technology: Technologie und Infrastruktur der Gruppe, mit eigenen Servern, eigenem Speicher und eigenem Netz. Alle Details unter Infrastruktur.",
    current: true,
    action: { href: "/infrastruktur/", label: "Zur Infrastruktur" },
  },
  {
    name: "VylarisSpace",
    sub: "Hosting-Panel",
    icon: "server",
    iconTone: "indigo",
    status: { tone: "info", label: "Coming Soon" },
    text: "Ein Panel für Websites, E-Mail und Datenbanken. Es ist angekündigt und noch nicht verfügbar.",
    action: { href: site.links.services, label: "Dienste ansehen", icon: "ext" },
  },
];

/* ------------------------------------------------------------------- Fundament */

export const foundation: readonly Responsibility[] = [
  {
    icon: "server",
    name: "Server",
    status: { tone: "ok", label: "Im Betrieb" },
    brand: "10 Server insgesamt",
    text: "Intern laufen KVM-Server, die Server außerhalb sind ganz normale Server.",
    highlight: true,
  },
  {
    icon: "db",
    iconTone: "indigo",
    name: "Speicher",
    status: { tone: "ok", label: "Im Betrieb" },
    brand: "5 Storage-Server",
    text: "Vier Server mit je 120 TB SSD und ein Server mit knapp 500 TB HDD. Zusammen knapp 1 PB Rohkapazität.",
  },
  {
    icon: "refresh",
    name: "Datensicherung",
    status: { tone: "ok", label: "Im Betrieb" },
    brand: "PBS-Backup-System",
    text: "Ein eigenes PBS-System sorgt für die Datensicherung.",
  },
  {
    icon: "network",
    iconTone: "indigo",
    name: "Netzwerk",
    status: { tone: "ok", label: "Im Betrieb" },
    brand: "Eigenes IP-Subnetz",
    text: "Ein Network-Server regelt unsere Internetanbindung.",
  },
  {
    icon: "globe",
    name: "Namensauflösung",
    status: { tone: "info", label: "In Wartung" },
    brand: "DNS-Server",
    text: "Der DNS-Server ist aktuell in Wartung.",
  },
  {
    icon: "shield",
    iconTone: "indigo",
    name: "Sicherheit",
    status: { tone: "ok", label: "Im Betrieb" },
    brand: "Sicherheitssystem",
    text: "Ein Sicherheitssystem mit internem Netzwerk-Setup.",
  },
];

export const foundationLink = { href: "/infrastruktur/", label: "Alle Details auf der Seite Infrastruktur" } as const;

/* --------------------------------------------------------------------- Speicher */

export const storageParagraphs: readonly string[] = [
  "Vier Storage-Server mit je 120 TB SSD liefern zusammen 480 TB SSD. Dazu kommt ein fünfter Storage-Server mit knapp 500 TB HDD.",
  "Zusammen ergibt das knapp ein Petabyte Rohkapazität. Wir sagen bewusst Rohkapazität: Die Zahl gilt vor Redundanz und ist keine Aussage darüber, wie viel davon nutzbar ist.",
];

export const storageRows: readonly (readonly [string, string])[] = [
  ["4 Storage-Server (SSD)", "je 120 TB, zusammen 480 TB SSD"],
  ["1 Storage-Server (HDD)", "knapp 500 TB HDD"],
  ["Rohkapazität gesamt", "knapp 1 PB, vor Redundanz"],
];

/* --------------------------------------------------------------------- Allianz */

export const allianceParagraph =
  "Die VylarisGroup bündelt vylaris.ch und vylaris.eu in der Allianz CH & EU: Der Schweizer Verein trägt die Idee, der europäische Zweig steuert Rechtsstruktur und Infrastruktur bei.";

export const allianceChecks: readonly ReactNode[] = [
  <>
    <strong>VylarisGroup Schweiz</strong> ist der Verein hinter der Idee.
  </>,
  <>
    <strong>VylarisGroupEurope</strong> hat die europäische Rechts- und Unternehmensstruktur zur Aufgabe.
  </>,
  <>
    <strong>VylarisData</strong> liefert Software und die technische Plattform.
  </>,
];

export const allianceLink = { href: site.links.allianz, label: "Allianz CH & EU auf vylaris.eu lesen" } as const;

export const allianceTop: AllianceTile = {
  icon: "users",
  title: "VylarisGroup Schweiz",
  text: "vylaris.ch · der Ursprungsverein, der die Idee trägt.",
};

export const allianceBottom: AllianceTile = {
  icon: "building",
  iconTone: "indigo",
  title: "VylarisGroupEurope",
  text: "vylaris.eu · der europäische Zweig mit Rechtsstruktur und Infrastruktur.",
};

export const allianceBetween = "Zusammenarbeit";

/* -------------------------------------------------------------- CircleUpWilms */

export const circleUpWilmsParagraphs: readonly string[] = [
  "VylarisData ist eine Marke von CircleUpWilms und Teil der VylarisGroup, Geschäftsbereich Software Development & Technology. Die VylarisGroupEurope leitet Lucas Wilms (CircleUpWilms).",
  "Anfragen an VylarisData laufen über die Kontaktseite von VylarisGroupEurope. Eigene Kontaktdaten veröffentlichen wir nicht.",
];

export const circleUpWilmsPanel = {
  title: "CircleUpWilms",
  subtitle: "Markeninhaber von VylarisData",
} as const;

export const circleUpWilmsRows: readonly DefinitionRow[] = [
  { term: "Marke", value: "VylarisData" },
  { term: "Geschäftsbereich", value: "Software Development & Technology" },
  { term: "Zugehörigkeit", value: "VylarisGroup" },
  { term: "Leitung VylarisGroupEurope", value: "Lucas Wilms (CircleUpWilms)" },
];

/* ------------------------------------------------------------ Wer macht was */

export const responsibilities: readonly Responsibility[] = [
  {
    icon: "users",
    name: "Idee & Verein",
    status: { tone: "ok", label: "Besteht" },
    brand: "VylarisGroup Schweiz",
    text: "Der Ursprungsverein trägt die Idee.",
  },
  {
    icon: "building",
    iconTone: "indigo",
    name: "Rechtsstruktur & Infrastruktur",
    status: { tone: "info", label: "Aufgabe" },
    brand: "VylarisGroupEurope",
    text: "Die europäische Rechts- und Unternehmensstruktur. Dazu gehören Hosting und Serverinfrastruktur für alle Dienste des Zweigs. Besteht bereits: die Website und das Angebot freier SaaS-Dienste.",
  },
  {
    icon: "cpu",
    name: "Technologie & Infrastruktur",
    status: { tone: "ok", label: "Im Betrieb" },
    brand: "VylarisData",
    text: "Software Development & Technology sowie die technische Plattform der Gruppe.",
    highlight: true,
  },
  {
    icon: "server",
    iconTone: "indigo",
    name: "Hosting-Panel",
    status: { tone: "info", label: "Coming Soon" },
    brand: "VylarisSpace",
    text: "Panel für Websites, E-Mail und Datenbanken. Angekündigt, noch nicht verfügbar.",
  },
];

export const responsibilitiesFooter: ReactNode = (
  <>
    Mehr zur Technik findest du auf der Seite{" "}
    <A className="link" href="/infrastruktur/">
      Infrastruktur
    </A>
    , Kontaktmöglichkeiten auf der{" "}
    <A className="link" href="/kontakt/">
      Kontaktseite
    </A>
    .
  </>
);

/* ----------------------------------------------------------------------- Stand */

export const progressText =
  "Die Infrastruktur läuft, ein Baustein wird gewartet, und der weitere Ausbau des Ökosystems ist geplant. Termine nennen wir erst, wenn sie feststehen.";

export const progressNote = "Die Gruppen zeigen den Stand, keine zeitliche Abfolge.";

export const statusGroups: readonly StatusGroup[] = [
  {
    status: { tone: "ok", label: "Im Betrieb" },
    items: [
      {
        title: "VylarisGroup Schweiz und VylarisGroupEurope",
        text: "Der Ursprungsverein, aus Homelab und Podcast entstanden, trägt die Idee. Der europäische Zweig bietet freie Open-Source-Dienste ohne Tracking an und kümmert sich um Rechtsstruktur und Hosting für seine Dienste.",
      },
      {
        title: "Infrastruktur von VylarisData",
        text: "Rechenleistung, Speicher, Backup, Netzwerk und Sicherheit laufen auf eigener Hardware.",
      },
    ],
  },
  {
    status: { tone: "info", label: "In Wartung" },
    items: [
      {
        title: "DNS-Server",
        text: "Der DNS-Server ist aktuell in Wartung. Den aktuellen Zustand zeigt der Live-Status auf der Seite Infrastruktur.",
      },
    ],
  },
  {
    status: { tone: "warn", label: "Geplant" },
    items: [
      {
        title: "Ökosystem weiter ausbauen",
        text: "Der Ausbau des Ökosystems ist geplant. Konkrete Termine nennen wir, sobald sie feststehen.",
      },
    ],
  },
  {
    status: { tone: "info", label: "Coming Soon" },
    items: [
      {
        title: "VylarisSpace",
        text: "Das Hosting-Panel für Websites, E-Mail und Datenbanken ist angekündigt und noch nicht verfügbar.",
      },
    ],
  },
];

/* ------------------------------------------------------------- Diese Website */

export const siteProofs: readonly FeatureTileData[] = [
  {
    icon: "lock",
    title: "Keine offenen Ports",
    text: "Diese Website läuft hinter einem Cloudflare Tunnel. Der Server baut die Verbindung nur nach außen auf, von außen ist kein Port offen.",
  },
  {
    icon: "box",
    title: "Gehärtete Container",
    text: "Die Seite läuft in gehärteten Containern, ohne offene Ports am Server.",
  },
  {
    icon: "eye",
    title: "Kein Tracking, keine Cookies",
    text: "Für Besucher setzen wir weder Tracking noch Cookies ein. Du kannst die Seite lesen, ohne dass wir dich tracken oder Cookies setzen.",
  },
  {
    icon: "activity",
    title: "Live-Status",
    text: "Der Zustand unserer Infrastruktur ist auf der Seite Infrastruktur sichtbar. Wir pflegen ihn selbst und blenden auch ein, was in Wartung ist.",
  },
];

/* ----------------------------------------------------------------------- Werte */

export const values: readonly FeatureTileData[] = [
  {
    icon: "server",
    title: "Eigene Hardware",
    text: "Wir betreiben eigene Server, eigenen Speicher, ein eigenes Netzwerk und ein eigenes Backup-System.",
  },
  {
    icon: "eye",
    title: "Transparenz",
    text: "Wir zeigen auch, was gerade in Wartung ist. Der DNS-Server steht deshalb offen als „In Wartung“ auf dieser Seite.",
  },
  {
    icon: "code",
    title: "Open Source & kostenlos",
    text: "VylarisGroupEurope bietet freie Open-Source-SaaS-Dienste an und garantiert, dass sie kostenlos bleiben (0 EUR). Daran orientieren wir uns.",
  },
  {
    icon: "shield",
    title: "Datenschutz",
    text: "VylarisGroupEurope betreibt ihre Dienste DSGVO-konform und ohne Tracking.",
  },
];

/* ----------------------------------------------------------------- Weiterlesen */

/** Anzeigetext eines Links ohne Protokoll. */
const display = (href: string) => href.replace(/^https?:\/\//, "");

const euAbout = `${site.links.eu}/about`;

export const linkTiles: readonly LinkTileData[] = [
  {
    icon: "layers",
    iconTone: "indigo",
    title: "Dienste",
    text: "Die kostenlosen Open-Source-SaaS-Dienste von VylarisGroupEurope.",
    href: site.links.services,
    more: display(site.links.services),
  },
  {
    icon: "activity",
    iconTone: "indigo",
    title: "Systemstatus",
    text: "Live sehen, ob die Dienste von VylarisGroupEurope laufen.",
    href: site.links.status,
    more: display(site.links.status),
  },
  {
    icon: "mail",
    iconTone: "indigo",
    title: "Kontakt & Tickets",
    text: "Anfragen und Tickets an die VylarisGroup.",
    href: site.links.contact,
    more: display(site.links.contact),
  },
  {
    icon: "book",
    iconTone: "indigo",
    title: "Blog",
    text: "Neuigkeiten und Hintergründe von VylarisGroupEurope.",
    href: site.links.blog,
    more: display(site.links.blog),
  },
  {
    icon: "info",
    iconTone: "indigo",
    title: "Über VylarisGroupEurope",
    text: "Mehr über den europäischen Zweig der Gruppe.",
    href: euAbout,
    more: display(euAbout),
  },
  {
    icon: "users",
    title: "VylarisGroup Schweiz",
    text: "Der Schweizer Ursprungsverein hinter der Idee.",
    href: site.links.ch,
    more: display(site.links.ch),
  },
];

/* ------------------------------------------------------------------------ FAQ */

export const faqText = "Kurze Antworten zu VylarisData, VylarisGroupEurope und VylarisSpace.";

export const faq: readonly FaqItem[] = [
  {
    q: "Was ist der Unterschied zwischen VylarisData und VylarisGroupEurope?",
    a: "VylarisGroupEurope ist der europäische Zweig der Gruppe. Er kümmert sich um Rechts- und Unternehmensstruktur und bietet freie Open-Source-Dienste an. VylarisData ist die Technologie- und Infrastrukturmarke: Wir entwickeln Software und betreiben eigene Hardware.",
  },
  {
    q: "Gehört VylarisData zu CircleUpWilms oder zur VylarisGroup?",
    a: "Zu beiden, auf unterschiedlicher Ebene. VylarisData ist eine Marke von CircleUpWilms und gehört zugleich zur VylarisGroup. Der Geschäftsbereich ist Software Development & Technology.",
  },
  {
    q: "Was für Infrastruktur betreibt VylarisData?",
    a: (
      <p>
        Zehn Server insgesamt (intern KVM-Server), fünf Storage-Server mit zusammen knapp 1 PB Rohkapazität, ein
        PBS-Backup-System, ein eigenes IP-Subnetz mit Network-Server und ein Sicherheitssystem mit internem
        Netzwerk-Setup. Die Details stehen auf der Seite{" "}
        <A className="link" href="/infrastruktur/">
          Infrastruktur
        </A>
        .
      </p>
    ),
  },
  {
    q: "Wie steht es um den DNS-Server?",
    a: (
      <p>
        Der DNS-Server ist aktuell in Wartung. Den aktuellen Zustand unserer Systeme zeigt der Live-Status auf der Seite{" "}
        <A className="link" href="/infrastruktur/">
          Infrastruktur
        </A>
        .
      </p>
    ),
  },
  {
    q: "Was ist mit dem Ausbau des Ökosystems?",
    a: "Der Ausbau ist geplant. Es ist ein Vorhaben und keine Zusage: Termine und Details nennen wir, sobald wir sie belegen können.",
  },
  {
    q: "Was ist VylarisSpace?",
    a: "VylarisSpace ist ein Hosting-Panel für Websites, E-Mail und Datenbanken. Es ist angekündigt (Coming Soon) und noch nicht verfügbar.",
  },
  {
    q: "Wie erreiche ich VylarisData?",
    a: (
      <p>
        Über die Kontaktseite von VylarisGroupEurope unter{" "}
        <A className="link" href={site.links.contact}>
          vylaris.eu/contact
        </A>{" "}
        (Kontakt & Tickets). Eigene Kontaktdaten wie eine E-Mail-Adresse oder Telefonnummer veröffentlichen wir für
        VylarisData nicht. Mehr dazu findest du auf der{" "}
        <A className="link" href="/kontakt/">
          Kontaktseite
        </A>
        .
      </p>
    ),
  },
];

/* ------------------------------------------------------------------------- CTA */

export const ecoCta = {
  id: "kontakt",
  headingId: "kontakt-h",
  title: (
    <>
      Du willst mehr über das <Gradient>Ökosystem</Gradient> wissen?
    </>
  ),
  text: "Schau dir an, was bei uns im Betrieb ist, oder nimm über die Kontaktseite von VylarisGroupEurope Kontakt auf.",
  primary: { href: site.links.contact, label: "Kontakt über vylaris.eu", icon: "mail" },
  secondary: { href: "/infrastruktur/", label: "Infrastruktur im Detail" },
} as const;
