import type { AlliancePanelData } from "@/components/sections/ueber-uns/AllianceEco";
import { PanelLink } from "@/components/sections/ueber-uns/AllianceEco";
import type { UuChip } from "@/components/sections/ueber-uns/UuChips";
import type { PartyItem, PrincipleItem } from "@/components/sections/ueber-uns/UuCards";
import type { UuHeadData } from "@/components/sections/ueber-uns/UuHead";
import type { UuLayer } from "@/components/sections/ueber-uns/UuStack";
import type { FactItem, FaqItem, TimelineItem } from "@/components/ui";
import { A } from "@/components/ui";
import { site } from "@/content/site";

/** Daten der Seite "Über uns". Markup liegt in den Komponenten, hier nur Inhalt. */

export const meta = {
  title: "Über uns",
  description:
    "VylarisData ist eine Marke von CircleUpWilms und Teil der VylarisGroup. Wir entwickeln Software und bauen das künftige Hosting des Vylaris-Ökosystems auf.",
  path: "/ueber-uns/",
} as const;

/** Wiederkehrender Statustext (Hero und FAQ). */
export const hostingStatus = "Hosting im Aufbau, noch nicht für Kunden live";

/* ------------------------------------------------------------------- Mission */

export const missionChips: readonly UuChip[] = [
  { label: "Software Development & Technology", blue: true },
  { label: "Marke von CircleUpWilms" },
  { label: "Teil der VylarisGroup" },
];

/* ------------------------------------------------------------------- Werte */

export const valuesHead: UuHeadData = {
  id: "werte-h",
  eyebrow: "Wofür wir stehen",
  title: "Vier Grundsätze, an denen wir uns messen lassen.",
  lead: "Diese Grundsätze sind keine Werbesprüche, sondern bestimmen, wie wir entwickeln und betreiben wollen.",
};

export const principles: readonly PrincipleItem[] = [
  {
    icon: "server",
    title: "Ziel: eigene Hardware in Europa",
    text: "Ziel ist Hosting auf eigener Infrastruktur in Europa, statt auf einer anonymen Kette von Zulieferern.",
  },
  {
    icon: "eye",
    iconTone: "indigo",
    title: "Transparenz vor Marketing",
    text: "Wir benennen offen, was steht und was noch Plan ist. Den Stand der Dinge kennzeichnen wir als „im Aufbau“ oder „geplant“.",
  },
  {
    icon: "shield",
    title: "Standardmäßig datensparsam",
    text: "Grundsatz: Wir wollen nur erheben, was ein Dienst zum Funktionieren braucht. Tracking gehört nicht dazu.",
  },
  {
    icon: "code",
    iconTone: "indigo",
    title: "Eigenentwicklung mit Sorgfalt",
    text: "Was wir selbst bauen, soll wartbar, dokumentiert und von mehr als einer Person verständlich sein.",
  },
];

/* ------------------------------------------------------------- Beteiligte */

export const partiesHead: UuHeadData = {
  id: "dahinter-h",
  eyebrow: "Die Beteiligten",
  title: "Wer hinter VylarisData steht.",
  lead: "VylarisData gehört zu CircleUpWilms und zur VylarisGroup. Hier lernst du die Beteiligten kennen.",
};

export const parties: readonly PartyItem[] = [
  {
    icon: "building",
    tag: "Markeninhaber",
    name: "CircleUpWilms",
    sub: "Hinter der Marke VylarisData",
    text: "VylarisData ist eine Marke von CircleUpWilms. Die rechtlichen Angaben stehen im Impressum.",
    current: true,
    action: { href: "/impressum/", label: "Zum Impressum" },
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
    tag: "Europa",
    name: "Lucas Wilms",
    sub: "Leitung VylarisGroupEurope",
    text: "Lucas Wilms leitet VylarisGroupEurope. Sein Fachgebiet bei CircleUpWilms sind Webhosting und IT-Services.",
    action: { href: `${site.links.eu}/about`, label: "Mehr auf vylaris.eu", icon: "ext" },
  },
];

export const partiesNote =
  "Wir nennen hier nur, was wir belegen können. Wenn du die Menschen hinter der Gruppe erreichen willst, nutze den offiziellen Kontaktweg von VylarisGroupEurope.";

/* ------------------------------------------------------------------ Allianz */

export const allianceIntro =
  "Beide Seiten arbeiten Hand in Hand. Der Schweizer Verein trägt die Idee, die europäische Seite hat die Aufgabe, die rechtliche Struktur und die Infrastruktur bereitzustellen. VylarisData soll dafür die technische Basis liefern.";

export const allianceCh: AlliancePanelData = {
  tone: "indigo",
  icon: "heart",
  name: "VylarisGroup Schweiz",
  domain: "vylaris.ch",
  rows: [
    { term: "Rolle", text: "Der Ursprungsverein und Träger der Idee." },
    { term: "Hintergrund", text: "Fünf Mitglieder, davon drei im Vorstand." },
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
      text: "Offizielle zweite Seite der Gruppe für Europa. Zuständig für die rechtliche und organisatorische Struktur sowie das Hosting.",
    },
    { term: "Leitung", text: "Lucas Wilms, CircleUpWilms." },
    {
      term: "Mehr erfahren",
      text: <PanelLink href={site.links.allianz}>Allianz CH & EU auf vylaris.eu</PanelLink>,
    },
  ],
};

/* ---------------------------------------------------------------- Geschichte */

export const overviewLayers: readonly UuLayer[] = [
  { icon: "heart", iconTone: "indigo", name: "Schweiz", description: "VylarisGroup Schweiz, der Ursprungsverein." },
  { icon: "pin", name: "Europa", description: "VylarisGroupEurope, die offizielle europäische Seite." },
  {
    icon: "server",
    name: "Hosting",
    description: "VylarisData baut die Infrastruktur auf. Im Aufbau.",
    highlight: true,
  },
];

export const history: readonly TimelineItem[] = [
  {
    status: { tone: "info", label: "Ursprung" },
    title: "Homelab und Podcast",
    text: "Aus einem Homelab und einem Podcast entsteht der Ursprungsverein.",
  },
  {
    status: { tone: "info", label: "Struktur" },
    title: "Der Verein in der Schweiz",
    text: "Aus der Idee wird VylarisGroup Schweiz. Der Ursprungsverein hat fünf Mitglieder, von denen drei im Vorstand sitzen.",
  },
  {
    status: { tone: "info", label: "Ausbau" },
    title: "Eine zweite Seite in Europa",
    text: "Mit VylarisGroupEurope entsteht die offizielle europäische Seite. Ihre Aufgabe ist die Rechtsstruktur sowie Hosting und Serverinfrastruktur für alle Dienste.",
  },
  {
    status: { tone: "warn", label: "Im Aufbau" },
    title: "VylarisData baut das Hosting auf",
    text: "VylarisData, eine Marke von CircleUpWilms, steht für Software Development & Technology und baut die Hosting-Infrastruktur der Gruppe auf. Diese ist noch nicht für Kunden live.",
  },
];

/* ------------------------------------------------------------ Arbeitsweise */

export const workStyle: readonly { lead: string; text: string }[] = [
  {
    lead: "Erst planen, dann bauen.",
    text: "Grundsatz: Architektur und Betriebsprozesse werden festgelegt, bevor Dienste auf die Infrastruktur gehen.",
  },
  {
    lead: "Änderungen dokumentieren.",
    text: "Grundsatz: Konfiguration und Code werden versioniert, damit jede Änderung erklärbar bleibt.",
  },
  {
    lead: "Automatisieren, was sich wiederholt.",
    text: "Grundsatz: Automatisierte Abläufe sparen Handarbeit und verhindern Fehler.",
  },
  {
    lead: "Sicherheit zuerst.",
    text: "Grundsatz: Zugänge sparsam vergeben, Systeme sauber konfigurieren, Daten nur dort speichern, wo sie gebraucht werden.",
  },
  { lead: "Offen über den Stand.", text: "Was geplant ist, kennzeichnen wir als geplant." },
];

export const targetLayers: readonly UuLayer[] = [
  {
    icon: "code",
    name: "Entwicklung",
    description: "Ziel: eigene Software und Werkzeuge, versioniert und nachvollziehbar.",
  },
  {
    icon: "layers",
    name: "Plattform",
    description: "Gemeinsame Bausteine und Automatisierung für neue Dienste. Geplant.",
    highlight: true,
  },
  {
    icon: "server",
    name: "Infrastruktur",
    description: "Ziel: eigene Hardware in Europa als technische Basis. Im Aufbau.",
  },
];

/* ----------------------------------------------------------------- Wichtig */

export const importantChips: readonly UuChip[] = [
  { label: "Open Source & Eigenentwicklung (VylarisGroupEurope)", blue: true },
  { label: "Europäisches Hosting (im Aufbau)", blue: true },
];

export const siteFacts: readonly FactItem[] = [
  { value: "Keine", label: "Cookies auf dieser Website" },
  { value: "Kein", label: "Tracking auf dieser Website" },
  { value: "Eine", label: "Domain für Seite, Schriften und Skripte" },
  { value: "Lokal", label: "gespeichertes Design, nur in deinem Browser" },
];

/* --------------------------------------------------------------------- FAQ */

export const faq: readonly FaqItem[] = [
  {
    q: "Was ist VylarisData?",
    a: "VylarisData ist eine Marke von CircleUpWilms und gehört zur VylarisGroup. Wir decken den Bereich Software Development & Technology ab und bauen die Infrastruktur auf, die künftig das Hosting der Gruppe übernimmt.",
  },
  {
    q: "Kann ich bei euch schon Hosting buchen?",
    a: "Nein. Die Infrastruktur ist im Aufbau und noch nicht für Kunden live. Aktuelle Informationen veröffentlichen wir auf dieser Website.",
  },
  {
    q: "Wie hängen VylarisData und VylarisSpace zusammen?",
    a: (
      <p>
        VylarisSpace ist das Hosting-Panel für Websites, E-Mail und Datenbanken, das auf vylaris.eu als „demnächst“
        angekündigt ist. VylarisData soll dafür künftig die technische Basis liefern. Mehr dazu steht auf der{" "}
        <A className="link" href="/oekosystem/">
          Ökosystem-Seite
        </A>
        .
      </p>
    ),
  },
  {
    q: "Wer ist für VylarisData verantwortlich?",
    a: (
      <p>
        VylarisData ist eine Marke von CircleUpWilms. Die rechtlichen Angaben findest du im{" "}
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
        Der offizielle Weg läuft über VylarisGroupEurope: Kontakt und Ticket-System findest du unter{" "}
        <A className="link" href={site.links.contact}>
          vylaris.eu/contact
        </A>
        . Das gilt auch für Anliegen rund um VylarisData.
      </p>
    ),
  },
];
