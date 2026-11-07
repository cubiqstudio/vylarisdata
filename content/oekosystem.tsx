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
    "Die VylarisGroup im Überblick: vier Bausteine. VylarisData ist eine Untermarke von VylarisGroupEurope, die eigene Infrastruktur ist im Aufbau.",
  path: "/oekosystem/",
} as const;

/* ------------------------------------------------------------------------ Hero */

export const heroTitle = (
  <>
    Ein Ökosystem, das <Gradient>gemeinsam wächst.</Gradient>
  </>
);

export const heroLead =
  "Die VylarisGroup besteht aus vier Bausteinen. VylarisData liefert als Untermarke von VylarisGroupEurope die Technik: Software und Technologie, dazu eine eigene Infrastruktur, die sich im Aufbau befindet. Wir haben aktuell keine eigene Hardware, wir fangen gerade an und freuen uns über Unterstützung. Der weitere Ausbau des Ökosystems ist geplant.";

/* ------------------------------------------------------------ Sektionsköpfe */

export type HeadData = { id: string; eyebrow: string; title: string; lead?: ReactNode };

export const heads = {
  facts: {
    id: "aufbau-h",
    eyebrow: "Der Aufbau im Überblick",
    title: "Wir fangen gerade an.",
    lead: "Die Infrastruktur von VylarisData ist im Aufbau. Wir haben aktuell keine eigene Hardware. Das sind die Eckpunkte, ehrlich und ohne Zahlen.",
  },
  overview: {
    id: "uebersicht-h",
    eyebrow: "Übersicht",
    title: "Vier Bausteine, eine Gruppe.",
    lead: "Unter dem Dach der VylarisGroup arbeiten vier Bausteine zusammen, jeder mit eigener Aufgabe. Einer davon, VylarisSpace, ist noch angekündigt. Diese Seite gehört zu VylarisData, der Technologiemarke der Gruppe und Untermarke von VylarisGroupEurope.",
  },
  foundation: {
    id: "fundament-h",
    eyebrow: "Das Fundament",
    title: "Fünf geplante Bausteine für das Fundament.",
    lead: "Das ist unser Zielbild: eine eigene Infrastruktur in Europa. Die Bausteine sind ein Plan und noch nicht vorhanden, denn wir haben aktuell keine eigene Hardware.",
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
  support: { id: "unterstuetzung-h", eyebrow: "Hardware gesucht", title: "Wir suchen Hardware und nehmen auch gebrauchte gern." },
  alliance: { id: "allianz-h", eyebrow: "Allianz CH & EU", title: "Schweiz und Europa arbeiten zusammen." },
  vylarisGroupEurope: { id: "vylarisgroupeurope-h", eyebrow: "VylarisGroupEurope", title: "Wer hinter VylarisData steht." },
  progress: { id: "stand-h", eyebrow: "Stand und Ausblick", title: "Im Betrieb, im Aufbau, gesucht, geplant." },
  faq: { id: "faq-h", eyebrow: "Häufige Fragen", title: "Was du über VylarisData und die Gruppe wissen willst." },
} as const satisfies Record<string, CopyData>;

/* ------------------------------------------------------------------ Kennzahlen */

export const facts: readonly FactItem[] = [
  {
    icon: "server",
    value: "Im Aufbau",
    label: "Die eigene Infrastruktur von VylarisData entsteht gerade. Aktuell haben wir keine eigene Hardware.",
  },
  {
    icon: "db",
    value: "Gesucht: Hardware",
    label: "Wir nehmen sehr gerne auch ältere oder gebrauchte Hardware entgegen.",
  },
  {
    icon: "network",
    value: "Ziel: Europa",
    label: "Geplant ist eine eigene Infrastruktur in Europa, mit Datensicherung, Netzwerk und Sicherheit.",
  },
  {
    icon: "heart",
    value: "Unterstützung",
    label: "Know-how, Sponsoring und Weitersagen helfen uns genauso wie Hardware.",
  },
];

/* ------------------------------------------------------------------- Übersicht */

export const groupPanel = {
  title: "VylarisGroup",
  subtitle: "Das Dach des Ökosystems",
  text: "Vier Bausteine ergänzen sich unter einem Dach. Unser Beitrag als VylarisData ist die Technik: Software, Technologie und eine Infrastruktur, die wir gerade aufbauen.",
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
    text: "Der offizielle europäische Zweig, geleitet von Lucas Wilms. Seine Aufgabe ist die europäische Rechts- und Unternehmensstruktur sowie Hosting und Serverinfrastruktur für alle seine Dienste. Er bietet freie Open-Source-SaaS-Dienste an, DSGVO-konform und ohne Tracking. Zu ihm gehört die Untermarke VylarisData.",
    action: { href: site.links.eu, label: "vylaris.eu besuchen", icon: "ext" },
  },
  {
    name: "VylarisData",
    sub: "vylarisdata.com",
    icon: "cpu",
    status: { tone: "info", label: "Infrastruktur im Aufbau" },
    text: "Untermarke von VylarisGroupEurope im Geschäftsbereich Software Development & Technology. Die eigene Infrastruktur ist im Aufbau, aktuell haben wir keine eigene Hardware. Mehr unter Infrastruktur.",
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
    status: { tone: "info", label: "Geplant" },
    brand: "Eigene Infrastruktur in Europa",
    text: "Geplant sind eigene Server für unsere Dienste. Aktuell haben wir noch keine.",
    highlight: true,
  },
  {
    icon: "db",
    iconTone: "indigo",
    name: "Speicher",
    status: { tone: "info", label: "Geplant" },
    brand: "Eigener Speicher",
    text: "Geplant ist eigener Speicher für die Daten unserer Dienste.",
  },
  {
    icon: "refresh",
    name: "Datensicherung",
    status: { tone: "info", label: "Geplant" },
    brand: "Backup-System",
    text: "Geplant ist ein eigenes System für die Datensicherung.",
  },
  {
    icon: "network",
    iconTone: "indigo",
    name: "Netzwerk",
    status: { tone: "info", label: "Geplant" },
    brand: "Eigenes Netzwerk",
    text: "Geplant ist ein eigenes Netzwerk, über das wir unsere Anbindung selbst regeln.",
  },
  {
    icon: "shield",
    name: "Sicherheit",
    status: { tone: "info", label: "Geplant" },
    brand: "Sicherheitskonzept",
    text: "Geplant ist ein Sicherheitskonzept für Server und Netz, das wir von Anfang an mitdenken.",
  },
];

export const foundationLink = { href: "/infrastruktur/", label: "Alle Details auf der Seite Infrastruktur" } as const;

/* ------------------------------------------------------------ Unterstützung */

export const supportParagraphs: readonly string[] = [
  "Wir haben aktuell keine eigene Hardware und fangen gerade an. Deshalb suchen wir Hardware und nehmen sehr gerne auch ältere oder gebrauchte Hardware entgegen.",
  "Wir freuen uns außerdem über Know-how, Sponsoring und darüber, wenn du uns weitersagst oder empfiehlst. Angebote und Anfragen laufen über die Kontaktseite.",
];

export const supportHead = ["Wobei wir Hilfe brauchen", "Stand"] as const;

export const supportRows: readonly (readonly [string, string])[] = [
  ["Hardware, auch ältere oder gebrauchte", "Gesucht"],
  ["Know-how", "Willkommen"],
  ["Sponsoring", "Willkommen"],
  ["Weitersagen und Empfehlen", "Willkommen"],
];

export const supportLink = { href: "/unterstuetzen/", label: "Mehr dazu unter Unterstützen" } as const;

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
    <strong>VylarisData</strong> liefert Software und Technologie und baut die technische Plattform gerade auf.
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

/* ------------------------------------------------------------ VylarisGroupEurope */

export const vylarisGroupEuropeParagraphs: readonly string[] = [
  "VylarisData ist eine Untermarke von VylarisGroupEurope und bleibt Teil der VylarisGroup, Geschäftsbereich Software Development & Technology. Die VylarisGroupEurope leitet Lucas Wilms.",
  "Anfragen an VylarisData laufen über die Kontaktseite von VylarisGroupEurope. Eigene Kontaktdaten veröffentlichen wir nicht.",
];

export const vylarisGroupEuropePanel = {
  title: "VylarisGroupEurope",
  subtitle: "Übergeordnete Marke von VylarisData",
} as const;

export const vylarisGroupEuropeRows: readonly DefinitionRow[] = [
  { term: "Untermarke", value: "VylarisData" },
  { term: "Geschäftsbereich", value: "Software Development & Technology" },
  { term: "Zugehörigkeit", value: "VylarisGroup" },
  { term: "Leitung VylarisGroupEurope", value: "Lucas Wilms" },
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
    status: { tone: "info", label: "Im Aufbau" },
    brand: "VylarisData",
    text: "Untermarke von VylarisGroupEurope. Software Development & Technology sowie die technische Plattform der Gruppe, die sich im Aufbau befindet.",
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
  "Wir fangen gerade an: Die Infrastruktur von VylarisData ist im Aufbau, wir suchen Hardware und Unterstützung, und der weitere Ausbau des Ökosystems ist geplant. Termine nennen wir erst, wenn sie feststehen.";

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
        title: "Website von VylarisData",
        text: "Diese Website ist online, ohne Tracking und ohne Cookies.",
      },
    ],
  },
  {
    status: { tone: "info", label: "Im Aufbau" },
    items: [
      {
        title: "Infrastruktur von VylarisData",
        text: "Wir haben aktuell keine eigene Hardware. Die Infrastruktur entsteht gerade, Zielbild ist eine eigene Infrastruktur in Europa.",
      },
    ],
  },
  {
    status: { tone: "info", label: "Gesucht" },
    items: [
      {
        title: "Hardware und Unterstützung",
        text: "Hardware (auch ältere oder gebrauchte), Know-how, Sponsoring und Weitersagen. Angebote nehmen wir über die Kontaktseite entgegen.",
      },
    ],
  },
  {
    status: { tone: "warn", label: "Geplant" },
    items: [
      {
        title: "Datensicherung, Netzwerk und Sicherheit",
        text: "Geplante Bausteine unserer Infrastruktur. Sie sind ein Ziel und noch nicht vorhanden.",
      },
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
    text: "Der Stand unserer Infrastruktur ist auf der Seite Infrastruktur sichtbar. Dort steht auch, was gerade im Aufbau ist.",
  },
];

/* ----------------------------------------------------------------------- Werte */

export const values: readonly FeatureTileData[] = [
  {
    icon: "server",
    title: "Ehrlich beim Aufbau",
    text: "Wir haben aktuell keine eigene Hardware und sagen das offen. Wir fangen gerade an und zeigen, was wir planen.",
  },
  {
    icon: "eye",
    title: "Transparenz",
    text: "Wir zeigen, was schon steht, was im Aufbau ist und was nur geplant ist. Der Stand steht offen auf dieser Seite und auf der Seite Infrastruktur.",
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
    a: "VylarisGroupEurope ist der europäische Zweig der Gruppe. Er kümmert sich um Rechts- und Unternehmensstruktur und bietet freie Open-Source-Dienste an. VylarisData ist ihre Untermarke für Technologie: Wir entwickeln Software und bauen eine eigene Infrastruktur auf.",
  },
  {
    q: "Zu wem gehört VylarisData?",
    a: "VylarisData ist eine Untermarke von VylarisGroupEurope (Leitung: Lucas Wilms) und bleibt Teil der VylarisGroup. Der Geschäftsbereich ist Software Development & Technology.",
  },
  {
    q: "Was für Infrastruktur hat VylarisData?",
    a: (
      <p>
        Aktuell noch keine eigene Hardware: Wir haben keine eigenen Server, keinen eigenen Speicher und kein eigenes Backup-System. Die
        Infrastruktur befindet sich im Aufbau. Unser Ziel ist eine eigene Infrastruktur in Europa, mit Datensicherung, Netzwerk und
        Sicherheit als geplanten Bausteinen. Den Stand zeigt die Seite{" "}
        <A className="link" href="/infrastruktur/">
          Infrastruktur
        </A>
        .
      </p>
    ),
  },
  {
    q: "Nehmt ihr Hardware entgegen, auch gebrauchte?",
    a: (
      <p>
        Ja, sehr gerne, auch ältere oder gebrauchte Hardware. Wir freuen uns außerdem über Know-how, Sponsoring und Weitersagen. Schreib
        uns über die{" "}
        <A className="link" href="/kontakt/">
          Kontaktseite
        </A>
        , was du anbieten kannst.
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
  text: "Lies, wo wir stehen, hilf uns beim Aufbau oder nimm über die Kontaktseite Kontakt auf. Hardware, auch ältere oder gebrauchte, nehmen wir sehr gerne entgegen.",
  primary: { href: "/kontakt/", label: "Zur Kontaktseite", icon: "mail" },
  secondary: { href: "/unterstuetzen/", label: "So kannst du unterstützen" },
} as const;
