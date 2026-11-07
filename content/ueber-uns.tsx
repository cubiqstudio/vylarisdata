import type { AlliancePanelData } from "@/components/sections/ueber-uns/AllianceEco";
import { PanelLink } from "@/components/sections/ueber-uns/AllianceEco";
import type { UuChip } from "@/components/sections/ueber-uns/UuChips";
import type { AssetItem, PartyItem, PrincipleItem } from "@/components/sections/ueber-uns/UuCards";
import type { UuHeadData } from "@/components/sections/ueber-uns/UuHead";
import type { UuStatusItem } from "@/components/sections/ueber-uns/UuHero";
import type { UuLayer } from "@/components/sections/ueber-uns/UuStack";
import type { FactItem, FaqItem, TimelineItem } from "@/components/ui";
import { A, Gradient } from "@/components/ui";
import { site } from "@/content/site";

/** Daten der Seite "Über uns". Markup liegt in den Komponenten, hier nur Inhalt. */

export const meta = {
  title: "Über uns: Untermarke im Aufbau",
  description:
    "Wer hinter VylarisData steht: Untermarke von VylarisGroupEurope und Teil der VylarisGroup. Unsere eigene Infrastruktur ist im Aufbau, aktuell ohne eigene Hardware. Hardware und Unterstützung sind willkommen.",
  path: "/ueber-uns/",
} as const;

/** Seitenkopf: Einleitung. */
export const heroLead =
  "VylarisData ist eine Untermarke von VylarisGroupEurope und Teil der VylarisGroup, im Geschäftsbereich Software Development & Technology. Wir fangen gerade an: Unsere eigene Infrastruktur in Europa ist im Aufbau, und aktuell haben wir noch keine eigene Hardware. Wir freuen uns über Hardware (auch ältere oder gebrauchte), Know-how, Sponsoring und Empfehlungen.";

/** Statushinweise im Seitenkopf und in den FAQ. */
export const heroStatus: readonly UuStatusItem[] = [
  { tone: "info", label: "Infrastruktur im Aufbau" },
  { tone: "info", label: "Aktuell keine eigene Hardware" },
  { tone: "ok", label: "Hardware willkommen" },
];

/** Offizielle Seite von Lucas Wilms auf vylaris.eu. */
const euAboutUrl = `${site.links.eu}/about`;

/* ------------------------------------------------------------------- Mission */

export const missionHead: UuHeadData = {
  id: "mission-h",
  eyebrow: "Unsere Mission",
  title: "Die Technik hinter der Marke VylarisData. Gerade im Aufbau.",
};

export const missionCopy = (
  <>
    <p>
      Unser Leitsatz lautet „Powering the Vylaris Ecosystem“. Als Untermarke von VylarisGroupEurope wollen wir die
      technische Grundlage für das Vylaris-Ökosystem schaffen: eine{" "}
      <strong className="strong">eigene Infrastruktur in Europa</strong>.
    </p>
    <p>
      Ehrlich gesagt: Wir fangen gerade an. Aktuell haben wir{" "}
      <strong className="strong">noch keine eigene Hardware</strong>. Die Infrastruktur ist im Aufbau, und wir suchen
      Unterstützung dafür.
    </p>
    <p>
      Unser Bereich ist Software Development & Technology. Wie wir dabei denken und arbeiten, halten wir auf dieser
      Seite fest.
    </p>
  </>
);

export const missionVisual = (
  <>
    <p className="eyebrow">VylarisData</p>
    <p className="h3 uu-claim">
      <Gradient>{site.tri}</Gradient>
    </p>
    <p className="mt-6">
      Drei Leitbegriffe: Technology, Infrastructure, Innovation. Für uns heißt das: Technik, die wir verstehen,
      Infrastruktur, die wir aufbauen wollen, und Ideen, die wir weiterentwickeln.
    </p>
  </>
);

export const missionChips: readonly UuChip[] = [
  { label: "Software Development & Technology", blue: true },
  { label: "Untermarke von VylarisGroupEurope" },
  { label: "Teil der VylarisGroup" },
];

/* ------------------------------------------------------------- Stand heute */

export const numbersHead: UuHeadData = {
  id: "zahlen-h",
  eyebrow: "Stand heute",
  title: "Wir fangen gerade an.",
  lead: "Wir nennen hier keine Zahlen für Dinge, die es noch nicht gibt. So sieht es heute aus.",
};

export const numbers: readonly FactItem[] = [
  { value: "Aufbau", label: "Unsere eigene Infrastruktur in Europa entsteht gerade.", icon: "layers" },
  { value: "Keine Hardware", label: "Aktuell haben wir noch keine eigene Hardware.", icon: "server" },
  { value: "Gesucht: Hardware", label: "Auch ältere oder gebrauchte Geräte sind willkommen.", icon: "hdd" },
  { value: "Gemeinsam", label: "Hardware, Know-how, Sponsoring und Empfehlungen helfen uns weiter.", icon: "heart" },
];

export const numbersNote = (
  <>
    Wir nennen bewusst keine Kapazitäten und keine Termine. Wie du uns helfen kannst, steht auf der Seite{" "}
    <A className="link" href="/unterstuetzen/">
      Unterstützen
    </A>
    .
  </>
);

/* ----------------------------------------------------------------- Ziel */

export const assetsHead: UuHeadData = {
  id: "bestand-h",
  eyebrow: "Unser Ziel",
  title: "Rechnen, Speichern, Sichern, Vernetzen: die geplanten Bausteine.",
  lead: "Das ist unser Zielbild und nicht der heutige Bestand: Diese Bausteine wollen wir nach und nach aufbauen.",
};

export const assets: readonly AssetItem[] = [
  {
    icon: "server",
    title: "Eigene Server",
    text: "Geplant: eigene Server in Europa als Grundlage für unsere Dienste.",
    status: { tone: "info", label: "Geplant" },
  },
  {
    icon: "hdd",
    iconTone: "indigo",
    title: "Eigener Speicher",
    text: "Geplant: eigener Speicher für unsere Daten und die Daten des Ökosystems.",
    status: { tone: "info", label: "Geplant" },
  },
  {
    icon: "refresh",
    title: "Datensicherung",
    text: "Geplant: ein eigenes System, das unsere Daten regelmäßig sichert.",
    status: { tone: "info", label: "Geplant" },
  },
  {
    icon: "network",
    iconTone: "indigo",
    title: "Eigenes Netzwerk",
    text: "Geplant: ein eigenes Netzwerk mit eigener Anbindung ans Internet.",
    status: { tone: "info", label: "Geplant" },
  },
  {
    icon: "shield",
    title: "Sicherheit",
    text: "Geplant: ein Sicherheitskonzept, das alle Schichten schützt.",
    status: { tone: "info", label: "Geplant" },
  },
  {
    icon: "cpu",
    iconTone: "indigo",
    title: "Hardware",
    text: "Dafür suchen wir Geräte. Auch ältere und gebrauchte Hardware hilft uns beim Start.",
    status: { tone: "info", label: "Gesucht" },
  },
  {
    icon: "layers",
    title: "Infrastruktur in Europa",
    text: "Der Aufbau hat begonnen. Wir fangen klein an und sagen offen, wo wir stehen.",
    status: { tone: "info", label: "Im Aufbau" },
  },
  {
    icon: "rocket",
    iconTone: "indigo",
    title: "Ökosystem weiter ausbauen",
    text: "Wir wollen das Vylaris-Ökosystem weiter ausbauen. Das ist geplant.",
    status: { tone: "warn", label: "Geplant" },
  },
];

export const assetsNote = (
  <>
    Den aktuellen Stand der einzelnen Bausteine zeigt unser Live-Status auf der{" "}
    <A className="link" href="/infrastruktur/">
      Infrastruktur-Seite
    </A>
    .
  </>
);

/* ------------------------------------------------------------- Transparenz */

export const transparencyHead: UuHeadData = {
  id: "transparenz-h",
  eyebrow: "Transparenz",
  title: "Du siehst, was es gibt. Und was erst entsteht.",
};

export const transparencyCopy = (
  <p>
    Transparenz gehört für uns zum Angebot: Auf unserer Website steht nicht nur, was läuft, sondern auch, was
    gerade aufgebaut wird, was wir suchen und was geplant ist. Den Stand zeigen wir im Live-Status auf der Infrastruktur-Seite.
  </p>
);

export const statusLayers: readonly UuLayer[] = [
  { icon: "check", name: "Im Betrieb", description: "Diese Website, ohne Tracking und ohne offene Ports am Server." },
  { icon: "layers", iconTone: "indigo", name: "Im Aufbau", description: "Unsere eigene Infrastruktur in Europa." },
  { icon: "cpu", name: "Gesucht", description: "Hardware, auch ältere oder gebrauchte, dazu Know-how, Sponsoring und Empfehlungen." },
  { icon: "rocket", name: "Geplant", description: "Das Vylaris-Ökosystem weiter ausbauen.", highlight: true },
];

/* ------------------------------------------------------------------- Werte */

export const valuesHead: UuHeadData = {
  id: "werte-h",
  eyebrow: "Wofür wir stehen",
  title: "Sechs Grundsätze, an denen du uns messen kannst.",
  lead: "Sie gelten schon jetzt, auch mitten im Aufbau.",
};

/** Icon-Töne wechseln sich ab: ohne, indigo, ohne, indigo, ohne, indigo. */
export const principles: readonly PrincipleItem[] = [
  {
    icon: "server",
    title: "Aufbauen statt behaupten",
    text: "Wir sagen, was es gibt und was nicht. Aktuell haben wir keine eigene Hardware, und das steht auch so auf dieser Seite.",
  },
  {
    icon: "eye",
    iconTone: "indigo",
    title: "Transparenz vor Marketing",
    text: "Wir sagen, was im Aufbau ist, was geplant ist und was wir noch suchen.",
  },
  {
    icon: "shield",
    title: "Sicherheit von Anfang an",
    text: "Sicherheit ist ein geplanter Baustein unserer Infrastruktur, kein Nachgedanke.",
  },
  {
    icon: "lock",
    iconTone: "indigo",
    title: "Besucher ohne Tracking",
    text: "Diese Website kommt für Besucher ohne Tracking und ohne Cookies aus und läuft hinter einem Cloudflare Tunnel ohne offene Ports.",
  },
  {
    icon: "refresh",
    title: "Datensicherung mitgedacht",
    text: "Ein eigenes System für Datensicherung gehört zu unserem Zielbild.",
  },
  {
    icon: "code",
    iconTone: "indigo",
    title: "Eigene Werkzeuge",
    text: "Diese Website samt Live-Status ist ein Beispiel für Technik, die wir selbst bauen.",
  },
];

/* ------------------------------------------------------------- Beteiligte */

export const partiesHead: UuHeadData = {
  id: "dahinter-h",
  eyebrow: "Die Beteiligten",
  title: "Wer hinter VylarisData steht.",
  lead: "VylarisData ist eine Untermarke von VylarisGroupEurope und Teil der VylarisGroup. Das sind die Beteiligten.",
};

export const parties: readonly PartyItem[] = [
  {
    icon: "building",
    tag: "Träger",
    name: "VylarisGroupEurope",
    sub: "Übergeordnete Marke",
    text: "VylarisData ist eine Untermarke von VylarisGroupEurope, der offiziellen europäischen Seite der Gruppe. Kontakt und Tickets laufen ebenfalls dort.",
    current: true,
    action: { href: site.links.eu, label: "vylaris.eu besuchen", icon: "ext" },
  },
  {
    icon: "globe",
    iconTone: "indigo",
    tag: "Gruppe",
    name: "VylarisGroup",
    sub: "Gruppe & Ökosystem",
    text: (
      <>
        VylarisData gehört zur VylarisGroup und verantwortet dort den Bereich{" "}
        <strong className="strong">Software Development & Technology</strong>.
      </>
    ),
    action: { href: "/oekosystem/", label: "Zum Ökosystem" },
  },
  {
    icon: "users",
    tag: "Leitung",
    name: "Lucas Wilms",
    sub: "Leitung VylarisGroupEurope",
    text: "Lucas Wilms (CircleUpWilms) leitet VylarisGroupEurope, die offizielle zweite Seite der Gruppe für Europa.",
    action: { href: euAboutUrl, label: "Mehr auf vylaris.eu", icon: "ext" },
  },
];

export const partiesNote = (
  <>
    Wir nennen hier nur, was wir belegen können. Die rechtlichen Angaben stehen im{" "}
    <A className="link" href="/impressum/">
      Impressum
    </A>
    . Wenn du die Menschen hinter der Gruppe erreichen willst, nutze den offiziellen Kontaktweg von VylarisGroupEurope.
  </>
);

/* ------------------------------------------------------------------ Allianz */

export const allianceHead = {
  id: "allianz-h",
  eyebrow: "Allianz CH & EU",
  title: "Zwei Seiten, eine Gruppe.",
  lead: "Der Schweizer Verein trägt die Idee, die europäische Seite stellt die rechtliche Struktur bereit. VylarisData ist als Untermarke von VylarisGroupEurope für Software Development & Technology zuständig.",
} as const;

export const allianceCh: AlliancePanelData = {
  tone: "indigo",
  icon: "heart",
  name: "VylarisGroup Schweiz",
  domain: "vylaris.ch",
  rows: [
    { term: "Rolle", text: "Der Ursprungsverein und Träger der Idee." },
    { term: "Hintergrund", text: "Fünf Mitglieder, davon drei im Vorstand. Entstanden aus einem Homelab und einem Podcast." },
    { term: "Mehr erfahren", text: <PanelLink href={site.links.ch}>vylaris.ch</PanelLink> },
  ],
};

export const allianceEu: AlliancePanelData = {
  tone: "blue",
  icon: "pin",
  name: "VylarisGroupEurope",
  domain: "vylaris.eu",
  rows: [
    {
      term: "Rolle",
      text: "Offizielle zweite Seite der Gruppe für Europa. Zuständig für die europäische rechtliche Struktur. VylarisData ist ihre Untermarke.",
    },
    { term: "Leitung", text: "Lucas Wilms, CircleUpWilms." },
    {
      term: "Mehr erfahren",
      text: <PanelLink href={site.links.allianz}>Allianz CH & EU auf vylaris.eu</PanelLink>,
    },
  ],
};

/* ---------------------------------------------------------------- Geschichte */

export const historyHead: UuHeadData = {
  id: "geschichte-h",
  eyebrow: "Unsere Geschichte",
  title: "Woher wir kommen, wo wir stehen.",
  lead: "Die Gruppe, die Technik von heute und das, was geplant ist.",
};

export const overviewLayers: readonly UuLayer[] = [
  { icon: "heart", iconTone: "indigo", name: "Schweiz", description: "VylarisGroup Schweiz, der Ursprungsverein." },
  { icon: "pin", name: "Europa", description: "VylarisGroupEurope, die offizielle europäische Seite und Träger von VylarisData." },
  {
    icon: "server",
    name: "Technik",
    description: "VylarisData, die Untermarke für Software Development & Technology. Infrastruktur im Aufbau.",
    highlight: true,
  },
];

export const history: readonly TimelineItem[] = [
  {
    status: { tone: "info", label: "Ursprung" },
    title: "Homelab und Podcast",
    text: "VylarisGroup Schweiz ist aus einem Homelab und einem Podcast hervorgegangen.",
  },
  {
    status: { tone: "info", label: "Schweiz" },
    title: "Der Verein in der Schweiz",
    text: "VylarisGroup Schweiz ist der Ursprungsverein und trägt die Idee der Allianz CH & EU.",
  },
  {
    status: { tone: "info", label: "Europa" },
    title: "Eine zweite Seite in Europa",
    text: "VylarisGroupEurope ist die offizielle europäische Seite. Sie stellt die rechtliche Struktur bereit, und VylarisData ist ihre Untermarke.",
  },
  {
    status: { tone: "info", label: "Im Aufbau" },
    title: "Die Infrastruktur von VylarisData",
    text: "Wir fangen gerade an: VylarisData baut eine eigene Infrastruktur in Europa auf. Aktuell haben wir noch keine eigene Hardware und suchen Unterstützung.",
  },
  {
    status: { tone: "warn", label: "Geplant" },
    title: "Das Ökosystem weiter ausbauen",
    text: "Der nächste Schritt: Wir wollen das Vylaris-Ökosystem weiter ausbauen.",
  },
];

/* ------------------------------------------------------------ Arbeitsweise */

export const workHead: UuHeadData = {
  id: "arbeit-h",
  eyebrow: "Wie wir arbeiten",
  title: "Fünf Grundsätze im Aufbau: sichern, schützen, offen sagen.",
  lead: "Diese Grundsätze prägen, wie wir unsere Infrastruktur aufbauen wollen.",
};

export type WorkStyleItem = { lead: string; text: string };

export const workStyle: readonly WorkStyleItem[] = [
  {
    lead: "Daten sichern.",
    text: "Geplant: ein eigenes System für Datensicherung.",
  },
  {
    lead: "Eigenes Netz.",
    text: "Geplant: ein eigenes Netzwerk mit eigener Anbindung ans Internet.",
  },
  {
    lead: "Schutz im Netz.",
    text: "Sicherheit ist als Baustein eingeplant. Diese Website ist schon heute ohne offene Ports am Server erreichbar.",
  },
  {
    lead: "Selbst aufbauen.",
    text: "Unser Ziel ist eine eigene Infrastruktur in Europa. Dafür fangen wir klein an und suchen Hardware, Know-how und Unterstützung.",
  },
  {
    lead: "Klare Statusangaben.",
    text: "Was wir gerade aufbauen, kennzeichnen wir als „Im Aufbau“, was wir noch suchen, als „Gesucht“, was wir vorhaben, als „Geplant“. „Im Betrieb“ steht erst dort, wo es wirklich läuft.",
  },
];

/** Von unten nach oben: Infrastruktur, Ökosystem, Entwicklung. Kein Ablauf, daher ohne Pfeile. */
export const targetLayers: readonly UuLayer[] = [
  {
    icon: "server",
    name: "Infrastruktur",
    description: "Geplant: eigene Infrastruktur in Europa. Aktuell im Aufbau, Hardware gesucht.",
  },
  {
    icon: "layers",
    name: "Ökosystem",
    description: "Das Vylaris-Ökosystem weiter ausbauen. Geplant.",
    highlight: true,
  },
  {
    icon: "code",
    name: "Entwicklung",
    description: "Eigene Software und Werkzeuge, zum Beispiel diese Website mit ihrem Live-Status.",
  },
];

/* ----------------------------------------------------------------- Wichtig */

export const importantHead: UuHeadData = {
  id: "wichtig-h",
  eyebrow: "Das ist uns wichtig",
  title: "Ohne Tracking, ohne offene Ports.",
};

export const importantCopy = (
  <>
    <p>
      VylarisGroupEurope setzt auf kostenlose Open-Source-Dienste und verzichtet auf Tracking. Diese Website zeigt, wie
      wir selbst arbeiten.
    </p>
    <p>
      Diese Website läuft hinter einem <strong className="strong">Cloudflare Tunnel ohne offene Ports</strong> am
      Server. Die Verbindung geht nur nach außen. Dazu kommen gehärtete Container,{" "}
      <strong className="strong">keine Cookies</strong> für Besucher und <strong className="strong">kein Tracking</strong>.
      Nur der Login im geschützten Bereich setzt ein Sitzungs-Cookie.
    </p>
  </>
);

export const importantChips: readonly UuChip[] = [
  { label: "Kostenlose Open-Source-Dienste (VylarisGroupEurope)", blue: true },
  { label: "Keine offenen Ports", blue: true },
  { label: "Kein Tracking" },
  { label: "Keine Besucher-Cookies" },
];

export const siteFacts: readonly FactItem[] = [
  { value: "0 Ports", label: "offen am Server, die Verbindung läuft nur nach außen über einen Cloudflare Tunnel" },
  { value: "0 Cookies", label: "für Besucher. Nur der Login im geschützten Bereich setzt ein Sitzungs-Cookie." },
  { value: "Kein Tracking", label: "auf dieser Website" },
  { value: "Gehärtet", label: "Container der Website sind gehärtet" },
];

/* --------------------------------------------------------------------- FAQ */

export const faqHead: UuHeadData = {
  id: "faq-h",
  eyebrow: "Häufige Fragen",
  title: "Kurze Antworten zu VylarisData.",
  lead: "Das Wichtigste zu Infrastruktur, Stand und Kontakt.",
};

export const faq: readonly FaqItem[] = [
  {
    q: "Was ist VylarisData?",
    a: "VylarisData ist eine Untermarke von VylarisGroupEurope und gehört zur VylarisGroup. Wir decken den Bereich Software Development & Technology ab und bauen gerade eine eigene Infrastruktur in Europa auf. Aktuell haben wir noch keine eigene Hardware.",
  },
  {
    q: "Habt ihr schon eigene Hardware?",
    a: "Nein, aktuell nicht. Wir fangen gerade an und sagen das offen. Als Bausteine unserer Infrastruktur sind Server, Speicher, Datensicherung, Netzwerk und Sicherheit geplant, ohne feste Zahlen und ohne Termine.",
  },
  {
    q: "Nehmt ihr Hardware an?",
    a: (
      <p>
        Ja, sehr gern, auch ältere oder gebrauchte Geräte. Was wir suchen und wie es abläuft, steht auf der Seite{" "}
        <A className="link" href="/unterstuetzen/">
          Unterstützen
        </A>
        .
      </p>
    ),
  },
  {
    q: "Wo sehe ich den aktuellen Stand?",
    a: (
      <p>
        Im Live-Status auf der{" "}
        <A className="link" href="/infrastruktur/">
          Infrastruktur-Seite
        </A>
        . Dort siehst du, was im Aufbau ist, was wir suchen und was geplant ist.
      </p>
    ),
  },
  {
    q: "Was ist VylarisSpace?",
    a: (
      <p>
        VylarisSpace ist das Hosting-Panel für Websites, E-Mail und Datenbanken, das auf vylaris.eu mit dem Hinweis „Coming
        Soon“ (bald verfügbar) angekündigt ist.
      </p>
    ),
  },
  {
    q: "Wer ist für VylarisData verantwortlich?",
    a: (
      <p>
        VylarisData ist eine Untermarke von VylarisGroupEurope, die Leitung hat Lucas Wilms. Die rechtlichen Angaben
        findest du im{" "}
        <A className="link" href="/impressum/">
          Impressum
        </A>
        .
      </p>
    ),
  },
  {
    q: "Wie erreiche ich euch?",
    a: (
      <p>
        Für alle Anfragen nutze bitte den offiziellen Kontaktweg über VylarisGroupEurope: Kontakt und Tickets findest du
        unter{" "}
        <A className="link" href={site.links.contact}>
          vylaris.eu/contact
        </A>
        . Auf unserer{" "}
        <A className="link" href="/kontakt/">
          Kontaktseite
        </A>{" "}
        erklären wir den Ablauf.
      </p>
    ),
  },
];

/* --------------------------------------------------------------------- CTA */

export const ctaCopy = {
  text: "Wir freuen uns über Hardware, Know-how, Sponsoring und Empfehlungen. Den Stand unseres Aufbaus zeigt der Live-Status.",
  primary: { href: "/unterstuetzen/", label: "Unterstützen" },
  secondary: { href: "/infrastruktur/", label: "Zur Infrastruktur" },
} as const;
