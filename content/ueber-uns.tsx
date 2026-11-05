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
  title: "Über uns: Eigene Hardware, eigenes Netz",
  description:
    "Wer hinter VylarisData steht: Technikmarke der VylarisGroup mit 10 Servern, fast 1 PB Rohkapazität, eigenem Netz und PBS-Backup-System.",
  path: "/ueber-uns/",
} as const;

/** Seitenkopf: Einleitung. */
export const heroLead =
  "VylarisData ist die Technikmarke der VylarisGroup und betreibt eigene Hardware: 10 Server, fast 1 PB Rohkapazität, ein eigenes IP-Subnetz, ein PBS-Backup-System und ein Sicherheitssystem. Eine Marke von CircleUpWilms.";

/** Statushinweise im Seitenkopf und in den FAQ. */
export const heroStatus: readonly UuStatusItem[] = [
  { tone: "ok", label: "Infrastruktur im Betrieb" },
  { tone: "info", label: "DNS-Server aktuell in Wartung" },
];

/** Offizielle Seite von Lucas Wilms auf vylaris.eu. */
const euAboutUrl = `${site.links.eu}/about`;

/* ------------------------------------------------------------------- Mission */

export const missionHead: UuHeadData = {
  id: "mission-h",
  eyebrow: "Unsere Mission",
  title: "Die Technik hinter der Marke VylarisData. Heute schon in Betrieb.",
};

export const missionCopy = (
  <>
    <p>
      Unser Leitsatz lautet „Powering the Vylaris Ecosystem“. Als Technikmarke der VylarisGroup betreiben wir{" "}
      <strong className="strong">bestehende Hardware</strong>: <strong className="strong">10 Server</strong>, Storage mit{" "}
      <strong className="strong">fast 1 PB Rohkapazität</strong>, ein eigenes Netz und ein PBS-Backup-System.
    </p>
    <p>
      Die Infrastruktur ist in Betrieb. Geplant ist, das Vylaris-Ökosystem weiter auszubauen.
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
      Infrastruktur, die wir selbst betreiben, und Ideen, die wir weiterentwickeln.
    </p>
  </>
);

export const missionChips: readonly UuChip[] = [
  { label: "Software Development & Technology", blue: true },
  { label: "Marke von CircleUpWilms" },
  { label: "Teil der VylarisGroup" },
];

/* ------------------------------------------------------------- Zahlen */

export const numbersHead: UuHeadData = {
  id: "zahlen-h",
  eyebrow: "Heute im Betrieb",
  title: "Hardware, die läuft.",
  lead: "Unsere Infrastruktur ist in Betrieb. Das sind ihre Eckdaten, den aktuellen Stand zeigt der Live-Status.",
};

export const numbers: readonly FactItem[] = [
  { value: "10", label: "Server insgesamt, intern und extern", icon: "server" },
  { value: "4 × 120 TB", label: "SSD auf vier Storage-Servern, zusammen 480 TB", icon: "zap" },
  { value: "knapp 500 TB", label: "HDD auf einem Storage-Server", icon: "hdd" },
  { value: "fast 1 PB", label: "Rohkapazität insgesamt, vor Redundanz gerechnet", icon: "layers" },
];

export const numbersNote =
  "Die Rohkapazität ergibt sich aus 4 × 120 TB SSD und knapp 500 TB HDD, gerechnet vor jeder Redundanz.";

/* ----------------------------------------------------------------- Bestand */

export const assetsHead: UuHeadData = {
  id: "bestand-h",
  eyebrow: "Was wir betreiben",
  title: "Rechnen, Speichern, Sichern, Vernetzen: unsere Systeme.",
  lead: "Vom Server bis zum Sicherheitssystem: Wir betreiben bestehende Hardware und haben ein eigenes Netz.",
};

export const assets: readonly AssetItem[] = [
  {
    icon: "server",
    title: "10 Server",
    text: "Intern setzen wir auf KVM-Server, extern auf klassische Server. Mehr verraten wir dazu nicht.",
    status: { tone: "ok", label: "Im Betrieb" },
  },
  {
    icon: "zap",
    iconTone: "indigo",
    title: "4 Storage-Server mit SSD",
    text: "Jeder dieser vier Storage-Server hat 120 TB SSD. Zusammen sind das 480 TB SSD-Speicher.",
    status: { tone: "ok", label: "Im Betrieb" },
  },
  {
    icon: "hdd",
    title: "Storage-Server mit HDD",
    text: "Ein Storage-Server mit knapp 500 TB HDD. Mit den SSD-Servern ergibt das fast 1 PB Rohkapazität.",
    status: { tone: "ok", label: "Im Betrieb" },
  },
  {
    icon: "refresh",
    iconTone: "indigo",
    title: "PBS-Backup-System",
    text: "Ein PBS-System kümmert sich bei uns um die Datensicherung.",
    status: { tone: "ok", label: "Im Betrieb" },
  },
  {
    icon: "network",
    title: "Eigenes Netz",
    text: "Wir haben ein eigenes IP-Subnetz und einen Network-Server, der unsere Internetanbindung regelt.",
    status: { tone: "ok", label: "Im Betrieb" },
  },
  {
    icon: "shield",
    iconTone: "indigo",
    title: "Sicherheitssystem",
    text: "Ein Sicherheitssystem mit internem Netzwerk-Setup gehört fest zur Infrastruktur.",
    status: { tone: "ok", label: "Im Betrieb" },
  },
  {
    icon: "globe",
    title: "DNS-Server",
    text: "Unser DNS-Server ist aktuell in Wartung. Das sagen wir offen, statt es zu verstecken.",
    status: { tone: "info", label: "In Wartung" },
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
    Den aktuellen Stand der einzelnen Systeme zeigt unser Live-Status auf der{" "}
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
  title: "Du siehst, was läuft. Und was gerade gewartet wird.",
};

export const transparencyCopy = (
  <p>
    Transparenz gehört für uns zum Angebot: Auf unserer Website steht nicht nur, was in Betrieb ist, sondern auch, was
    gerade gewartet wird und was geplant ist. Den Stand pflegen wir selbst in einem geschützten Bereich und zeigen ihn
    live auf der Infrastruktur-Seite.
  </p>
);

export const statusLayers: readonly UuLayer[] = [
  { icon: "check", name: "Im Betrieb", description: "10 Server, Storage, PBS-Backup, eigenes Netz und Sicherheitssystem." },
  { icon: "wrench", iconTone: "indigo", name: "In Wartung", description: "Der DNS-Server." },
  { icon: "rocket", name: "Geplant", description: "Das Vylaris-Ökosystem weiter ausbauen.", highlight: true },
];

/* ------------------------------------------------------------------- Werte */

export const valuesHead: UuHeadData = {
  id: "werte-h",
  eyebrow: "Wofür wir stehen",
  title: "Sechs Grundsätze, an denen du uns messen kannst.",
  lead: "Jeder Grundsatz lässt sich an unserer Infrastruktur nachvollziehen.",
};

/** Icon-Töne wechseln sich ab: ohne, indigo, ohne, indigo, ohne, indigo. */
export const principles: readonly PrincipleItem[] = [
  {
    icon: "server",
    title: "Eigene Hardware",
    text: "Server, Storage, Backup und Netz betreiben wir selbst, auf bestehender Hardware.",
  },
  {
    icon: "eye",
    iconTone: "indigo",
    title: "Transparenz vor Marketing",
    text: "Wir sagen, was läuft, was in Wartung ist und was geplant ist.",
  },
  {
    icon: "shield",
    title: "Sicherheit im Netz",
    text: "Ein Sicherheitssystem mit internem Netzwerk-Setup ist Teil der Infrastruktur, kein Nachgedanke.",
  },
  {
    icon: "lock",
    iconTone: "indigo",
    title: "Besucher ohne Tracking",
    text: "Diese Website kommt für Besucher ohne Tracking und ohne Cookies aus und läuft hinter einem Cloudflare Tunnel ohne offene Ports.",
  },
  {
    icon: "refresh",
    title: "Datensicherung im Alltag",
    text: "Ein eigenes PBS-Backup-System und ein eigenes Netz mit eigenem Network-Server gehören zu unserem Betrieb.",
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
  lead: "VylarisData ist eine Marke von CircleUpWilms und Teil der VylarisGroup. Das sind die Beteiligten.",
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
    tag: "Leitung",
    name: "Lucas Wilms",
    sub: "Leitung VylarisGroupEurope",
    text: "Lucas Wilms (CircleUpWilms) leitet VylarisGroupEurope, die offizielle zweite Seite der Gruppe für Europa.",
    action: { href: euAboutUrl, label: "Mehr auf vylaris.eu", icon: "ext" },
  },
];

export const partiesNote =
  "Wir nennen hier nur, was wir belegen können. Wenn du die Menschen hinter der Gruppe erreichen willst, nutze den offiziellen Kontaktweg von VylarisGroupEurope.";

/* ------------------------------------------------------------------ Allianz */

export const allianceHead = {
  id: "allianz-h",
  eyebrow: "Allianz CH & EU",
  title: "Zwei Seiten, eine Gruppe.",
  lead: "Der Schweizer Verein trägt die Idee, die europäische Seite stellt die rechtliche Struktur sowie Hosting und Serverinfrastruktur für ihre Dienste bereit. VylarisData ist die Technikmarke der Gruppe im Bereich Software Development & Technology.",
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
      text: "Offizielle zweite Seite der Gruppe für Europa. Zuständig für die europäische rechtliche Struktur sowie Hosting und Serverinfrastruktur für ihre Dienste.",
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
  { icon: "pin", name: "Europa", description: "VylarisGroupEurope, die offizielle europäische Seite." },
  {
    icon: "server",
    name: "Technik",
    description: "VylarisData betreibt eigene Hardware und ein eigenes Netz. Im Betrieb.",
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
    text: "VylarisGroupEurope ist die offizielle europäische Seite. Sie stellt die rechtliche Struktur sowie Hosting und Serverinfrastruktur für ihre Dienste bereit.",
  },
  {
    status: { tone: "ok", label: "Im Betrieb" },
    title: "Die Infrastruktur von VylarisData",
    text: "Heute betreibt VylarisData 10 Server, Storage-Server mit fast 1 PB Rohkapazität, ein PBS-Backup-System, ein eigenes IP-Subnetz mit eigenem Network-Server und ein Sicherheitssystem.",
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
  title: "Fünf Grundsätze im Betrieb: sichern, schützen, offen sagen.",
  lead: "Diese Grundsätze prägen, wie wir Hardware und Netz betreiben.",
};

export type WorkStyleItem = { lead: string; text: string };

export const workStyle: readonly WorkStyleItem[] = [
  {
    lead: "Daten sichern.",
    text: "Ein eigenes PBS-Backup-System gehört fest zu unserem Betrieb.",
  },
  {
    lead: "Eigenes Netz.",
    text: "Wir haben ein eigenes IP-Subnetz und einen Network-Server, der unsere Internetanbindung regelt.",
  },
  {
    lead: "Schutz im Netz.",
    text: "Ein Sicherheitssystem mit internem Netzwerk-Setup gehört dazu. Diese Website ist ohne offene Ports am Server erreichbar.",
  },
  {
    lead: "Selbst betreiben.",
    text: "Server, Storage, Backup und Netz betreiben wir selbst.",
  },
  {
    lead: "Klare Statusangaben.",
    text: "Was läuft, kennzeichnen wir als „Im Betrieb“, was wir vorhaben, als „Geplant“.",
  },
];

/** Von unten nach oben: Infrastruktur, Ökosystem, Entwicklung. Kein Ablauf, daher ohne Pfeile. */
export const targetLayers: readonly UuLayer[] = [
  {
    icon: "server",
    name: "Infrastruktur",
    description: "10 Server, Storage, PBS-Backup, eigenes Netz und Sicherheitssystem. Im Betrieb.",
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
    a: "VylarisData ist eine Marke von CircleUpWilms und gehört zur VylarisGroup. Wir decken den Bereich Software Development & Technology ab und betreiben eigene Infrastruktur: 10 Server, Storage, ein PBS-Backup-System, ein eigenes Netz und ein Sicherheitssystem.",
  },
  {
    q: "Wie groß ist eure Infrastruktur?",
    a: "Wir betreiben 10 Server, intern als KVM-Server und extern als klassische Server. Für den Speicher haben wir vier Storage-Server mit je 120 TB SSD und einen Storage-Server mit knapp 500 TB HDD. Zusammen sind das fast 1 PB Rohkapazität, also vor Redundanz gerechnet.",
  },
  {
    q: "Wo sehe ich den aktuellen Stand der Systeme?",
    a: (
      <p>
        Im Live-Status auf der{" "}
        <A className="link" href="/infrastruktur/">
          Infrastruktur-Seite
        </A>
        . Dort siehst du, was in Betrieb ist, was gewartet wird und was geplant ist.
      </p>
    ),
  },
  {
    q: "Ist euer DNS-Server wirklich in Wartung?",
    a: "Ja. Unser DNS-Server ist aktuell in Wartung. Wir sagen das offen, denn Transparenz über den Stand gehört für uns dazu.",
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
        VylarisData ist eine Marke von CircleUpWilms. Die rechtlichen Angaben findest du im{" "}
        <A className="link" href="/impressum/">
          Impressum
        </A>
        .
      </p>
    ),
  },
  {
    q: "Wie erreiche ich euch, auch bei Hosting-Anfragen?",
    a: (
      <p>
        Für alle Anfragen, auch zu Hosting, nutze bitte den offiziellen Kontaktweg über VylarisGroupEurope: Kontakt und
        Tickets findest du unter{" "}
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
  text: "Der Live-Status zeigt den Stand unserer Systeme. Für Anfragen hilft dir unsere Kontaktseite.",
  primary: { href: "/infrastruktur/", label: "Zur Infrastruktur" },
  secondary: { href: "/kontakt/", label: "Zur Kontaktseite" },
} as const;
