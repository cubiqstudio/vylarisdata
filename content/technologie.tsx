import type { ReactNode } from "react";
import type { FactItem, FaqItem, StepItem, TimelineItem } from "@/components/ui";
import { A, Gradient, Status } from "@/components/ui";
import type { TechBrand } from "@/components/sections/technologie/TechBrandCard";
import type { TechHeadData } from "@/components/sections/technologie/TechHead";
import type { TechTileData } from "@/components/sections/technologie/TechTile";
import { site } from "@/content/site";

/** Daten der Seite "Technologie". Markup liegt in den Komponenten, hier nur Inhalt. */

export const meta = {
  title: "Technologie und Infrastruktur",
  description:
    "10 Server, knapp 1 PB Rohkapazität aus SSD und HDD, eigenes IP-Subnetz und PBS-Backup-System: die Infrastruktur und die Grundsätze von VylarisData.",
  path: "/technologie/",
} as const;

/* ------------------------------------------------------------------- Hero */

export const hero = {
  crumb: "Technologie",
  eyebrow: "Software Development & Technology",
  title: (
    <>
      <Gradient>Eigene Hardware</Gradient>, eigene Technik.
    </>
  ),
  lead: "10 Server, knapp 1 PB Rohkapazität, ein eigenes IP-Subnetz und ein PBS-Backup-System: Die Infrastruktur von VylarisData läuft. Wir entwickeln Technik für das Vylaris-Ökosystem und betreiben eigene Hardware, nach klaren Grundsätzen und mit transparentem Stand.",
  primaryAction: { href: "#hardware", label: "Unsere Hardware" },
  secondaryAction: { href: "/infrastruktur/", label: "Live-Status ansehen" },
} as const;

/* ------------------------------------------------------------ Sektionsköpfe */

export const heads = {
  hardware: {
    id: "hardware-h",
    eyebrow: "Eigene Infrastruktur",
    title: "5 Storage-Server, ein PBS-Backup-System, ein eigenes IP-Subnetz: Das ist unsere Infrastruktur.",
    lead: "Wir entwickeln Software und betreiben eigene Hardware. Hier siehst du, woraus sie besteht: Server, Speicher, Backup, Netz und Sicherheit.",
  },
  inventory: {
    id: "bestand-h",
    eyebrow: "Bestand im Überblick",
    title: "Jede Komponente mit ihrem Stand.",
    lead: "Hier siehst du jede Komponente mit ihrem aktuellen Stand: Im Betrieb ist, was läuft. In Wartung ist, was gerade gepflegt wird. Geplant ist, was noch kommt.",
  },
  website: {
    id: "website-h",
    eyebrow: "Diese Website als Beispiel",
    title: "Ohne offene Ports erreichbar, ohne Tracking gebaut.",
    lead: "Die Seite, die du gerade liest, zeigt im Kleinen, wie wir Grundsätze in Technik übersetzen. Du kannst sie als Beispiel für unsere Arbeitsweise nehmen.",
  },
  status: {
    id: "stand-h",
    eyebrow: "Stand heute",
    title: "Was läuft, was in Wartung ist und was geplant ist.",
    lead: "Wir trennen offen zwischen dem, was im Betrieb ist, dem, was gerade gewartet wird, und dem, was wir planen.",
  },
  principles: {
    id: "grundsaetze-h",
    eyebrow: "Wie wir Software bauen",
    title: "Sechs Grundsätze. Jede Entscheidung muss sich daran messen lassen.",
    lead: "So arbeiten wir, und daran wollen wir uns messen lassen. Eine Zertifizierung ist das nicht. Widerspricht ein Vorschlag einem dieser Grundsätze, muss er gute Gründe mitbringen.",
  },
  process: {
    id: "prozess-h",
    eyebrow: "Entwicklungsprozess",
    title: "Von der Idee bis zum Betrieb in sechs Schritten.",
    lead: "Jedes Vorhaben durchläuft denselben Weg. Der Umfang unterscheidet sich, die Reihenfolge nicht. Das ist unser Anspruch an jedes Projekt.",
  },
  areas: {
    id: "arbeitsbereiche-h",
    eyebrow: "Arbeitsbereiche",
    title: "Vier Felder, in denen wir Technik für die VylarisGroup entwickeln.",
    lead: "Die Bereiche greifen ineinander: Eine Anwendung braucht Schnittstellen, Schnittstellen brauchen Werkzeuge zum Testen, und alles zusammen braucht Infrastruktur. Auch die betreiben wir selbst.",
  },
  group: {
    id: "gruppe-h",
    eyebrow: "Zusammenarbeit mit der VylarisGroup",
    title: "Technik im Verbund: Schweiz, Europa und VylarisData.",
    lead: "Wir bauen nicht für uns allein: VylarisData ist der Bereich Software Development & Technology der VylarisGroup. Die Dienste der Gruppe stellen die jeweiligen Marken auf ihren eigenen Seiten vor.",
  },
} as const satisfies Record<string, TechHeadData>;

/* ----------------------------------------------------- Fakten & Hardware */

export const hardwareFacts: readonly FactItem[] = [
  { value: "10", label: "Server in Betrieb" },
  { value: "4 × 120 TB", label: "SSD-Storage in 4 Storage-Servern" },
  { value: "knapp 500 TB", label: "HDD-Storage in 1 Storage-Server" },
  { value: "knapp 1 PB", label: "Rohkapazität aus SSD und HDD, vor Redundanz" },
];

export const hardwareTiles: readonly TechTileData[] = [
  {
    icon: "server",
    title: "Intern: KVM-Server",
    text: "Unsere internen Server sind KVM-Server. Sie gehören zu den 10 Servern von VylarisData.",
    chips: [{ label: "Intern" }, { label: "KVM" }],
  },
  {
    icon: "cloud",
    iconTone: "indigo",
    title: "Extern: eigene Server",
    text: "Die externen Server sind reguläre Server. Ob KVM oder etwas anderes, geben wir bewusst nicht an.",
    chips: [{ label: "Extern" }],
  },
  {
    icon: "hdd",
    title: "5 Storage-Server",
    text: "4 Storage-Server mit je 120 TB SSD und 1 Storage-Server mit knapp 500 TB HDD. Zusammen sind das knapp 1 PB Rohkapazität.",
    chips: [{ label: "4 × 120 TB SSD" }, { label: "knapp 500 TB HDD" }],
  },
  {
    icon: "life",
    iconTone: "indigo",
    title: "PBS-Backup-System",
    text: "Datensicherung ist bei uns keine Nebensache, sondern ein eigenes System: Wir betreiben ein eigenes PBS-System für Backups.",
    chips: [{ label: "Datensicherung" }],
  },
  {
    icon: "network",
    title: "Eigenes Netz",
    text: "Wir betreiben ein eigenes IP-Subnetz und einen Network-Server, der unsere Internetanbindung regelt.",
    chips: [{ label: "Eigenes IP-Subnetz" }, { label: "Network-Server" }],
  },
  {
    icon: "shield",
    iconTone: "indigo",
    title: "Sicherheitssystem",
    text: "Ein Sicherheitssystem mit internem Netzwerk-Setup gehört zu unserer Infrastruktur und ist im Betrieb.",
    chips: [{ label: "Internes Netzwerk-Setup" }],
  },
];

export const inventoryHead = ["Komponente", "Stand"] as const;

export const inventoryRows: readonly (readonly [string, ReactNode])[] = [
  ["Server insgesamt", "10"],
  ["KVM-Server (intern)", <Status key="kvm" tone="ok">Im Betrieb</Status>],
  ["Server (extern)", <Status key="ext" tone="ok">Im Betrieb</Status>],
  ["4 Storage-Server, je 120 TB SSD", <Status key="ssd" tone="ok">Im Betrieb</Status>],
  ["1 Storage-Server, knapp 500 TB HDD", <Status key="hdd" tone="ok">Im Betrieb</Status>],
  ["PBS-Backup-System", <Status key="pbs" tone="ok">Im Betrieb</Status>],
  ["Eigenes IP-Subnetz und Network-Server", <Status key="net" tone="ok">Im Betrieb</Status>],
  ["Sicherheitssystem mit internem Netzwerk-Setup", <Status key="sec" tone="ok">Im Betrieb</Status>],
  ["DNS-Server", <Status key="dns" tone="warn">In Wartung</Status>],
  ["Ökosystem weiter ausbauen", <Status key="eco" tone="info">Geplant</Status>],
];

export const hardwareChecks = [
  <>
    <strong>Eigene Hardware:</strong> Server, Speicher, Backup und Netz betreiben wir selbst.
  </>,
  <>
    <strong>Nachvollziehbare Kapazität:</strong> 4 × 120 TB SSD und knapp 500 TB HDD sind knapp 1 PB Rohkapazität. Das ist die Zahl
    vor Redundanz, nicht die nutzbare Menge.
  </>,
  <>
    <strong>Eigene Netzbasis:</strong> Mit eigenem IP-Subnetz und eigenem Network-Server regeln wir unsere Internetanbindung selbst.
  </>,
];

export const hardwareCallout = (
  <>
    <strong>Der Stand ist live einsehbar.</strong> Den aktuellen Stand aller Komponenten findest du auf der Seite{" "}
    <A className="link" href="/infrastruktur/">
      Infrastruktur
    </A>
    . Wir pflegen ihn selbst in einem geschützten Admin-Bereich.
  </>
);

/* ---------------------------------------------------------------- Grundsätze */

export const principles: readonly TechTileData[] = [
  {
    icon: "git",
    title: "Open Source & Eigenentwicklung",
    text: "Wir wollen verstehen, was unsere Software tut. Deshalb wollen wir Kernbausteine selbst entwickeln und offene Software nutzen, wenn sie unsere Anforderungen erfüllt und wir sie prüfen können.",
  },
  {
    icon: "shield",
    title: "Sicherheit von Anfang an",
    text: "Sicherheit ist Teil des Entwurfs und kein Anstrich am Ende. Jede fremde Komponente ist zusätzliche Angriffsfläche und Wartungslast, deshalb nehmen wir sie nur, wenn sie ihren Platz verdient. Bekannte Lücken beheben wir, Updates planen wir ein, statt sie aufzuschieben.",
  },
  {
    icon: "bulb",
    iconTone: "indigo",
    title: "Einfach schlägt clever",
    text: "Die einfachere Lösung gewinnt, solange sie die Aufgabe erfüllt. Code und Aufbau bleiben auch in einem Jahr lesbar, auch für alle, die sie nicht selbst geschrieben haben.",
  },
  {
    icon: "refresh",
    iconTone: "indigo",
    title: "Automatisiert statt von Hand",
    text: "Was sich wiederholt, gehört in ein Skript oder eine Pipeline. Das spart Zeit und verhindert die Fehler, die bei Handarbeit zuverlässig irgendwann passieren.",
  },
  {
    icon: "book",
    title: "Dokumentiert statt vergessen",
    text: "Eine Entscheidung, die nirgends steht, ist bald vergessen. Wir halten fest, was gebaut wurde, warum es so gebaut wurde und wie man es betreibt.",
  },
  {
    icon: "eye",
    title: "Nur Daten, die nötig sind",
    text: "Was wir nicht erheben, müssen wir nicht schützen, und es kann auch nicht abfließen. Daten fallen nur an, wenn ein Dienst sie braucht.",
  },
];

/* ------------------------------------------------------------------ Prozess */

export const processSteps: readonly StepItem[] = [
  {
    title: "Idee",
    text: "Am Anfang steht die Frage, welches Problem gelöst werden soll und für wen. Ohne klare Antwort wird nichts gebaut.",
  },
  {
    title: "Entwurf",
    text: "Wir skizzieren Aufbau, Schnittstellen und Datenfluss und halten fest, welche Daten überhaupt nötig sind.",
  },
  {
    title: "Umsetzung & Review",
    text: "Änderungen entstehen in kleinen Schritten mit nachvollziehbarer Versionsgeschichte. Eine zweite Person liest sie gegen.",
  },
  {
    title: "Test & Prüfung",
    text: "Automatisierte Tests und eine Prüfung der Sicherheitsaspekte stehen vor jeder Auslieferung, nicht erst danach.",
  },
  {
    title: "Auslieferung",
    text: "Ausgeliefert wird über einen wiederholbaren Ablauf, sodass jede Version aus dem Quellcode reproduzierbar entsteht.",
  },
  {
    title: "Betrieb",
    text: "Im Betrieb beobachten wir, spielen Updates ein, lernen aus Störungen und tragen das Gelernte in den Entwurf zurück.",
  },
];

/** Dekorative Ablaufkette, direkt aus den Schritttiteln abgeleitet. */
export const flow: readonly string[] = processSteps.map((step) => step.title);

/* ------------------------------------------------------------ Arbeitsbereiche */

export const areas: readonly TechTileData[] = [
  {
    icon: "code",
    title: "Webanwendungen",
    text: "Oberflächen und Dienste für die Marken und Projekte der VylarisGroup sind unser Arbeitsfeld. Unser Anspruch sind schlanke Seiten, die schnell laden, ohne Skript-Ballast auskommen und sich auch mit Tastatur und Screenreader bedienen lassen.",
    chips: [{ label: "Zugänglich" }, { label: "Schlank" }, { label: "Datensparsam" }],
  },
  {
    icon: "link",
    title: "Schnittstellen & Integrationen",
    text: "Dienste sollen sauber miteinander sprechen, statt aneinander zu kleben. Dafür definieren wir klare Übergaben, begrenzen, welche Daten fließen, und versionieren die Schnittstellen, damit Änderungen kontrolliert ablaufen.",
    chips: [{ label: "Klar definiert" }, { label: "Versioniert" }, { label: "Minimale Daten" }],
  },
  {
    icon: "terminal",
    iconTone: "indigo",
    title: "Automatisierung & Werkzeuge",
    text: "Interne Helfer für Entwicklung und Betrieb: Skripte, Prüfungen und Abläufe, die wiederkehrende Arbeit übernehmen. Gute Werkzeuge machen den richtigen Weg zum einfachsten.",
    chips: [{ label: "Wiederholbar" }, { label: "Nachvollziehbar" }, { label: "Dokumentiert" }],
  },
  {
    icon: "layers",
    iconTone: "indigo",
    title: "Plattform-Bausteine",
    text: "Gemeinsame Grundlagen, damit nicht jedes Projekt bei null beginnt: Das ist unser Ziel für diesen Bereich. Unabhängig davon betreiben wir eigene Server, Speicher, ein PBS-Backup-System und ein eigenes Netz.",
    chips: [{ label: "Wiederverwendbar" }, { label: "Gemeinsame Grundlagen" }],
  },
];

/* ------------------------------------------------------------ Diese Website */

export const website = {
  paragraphs: [
    "Die Website läuft hinter einem Cloudflare Tunnel: Die Verbindung baut der Server selbst nach außen auf. Der Betrieb läuft in gehärteten Containern.",
    "Dazu kommt ein Live-Statusboard für unsere Infrastruktur. Wir pflegen es in einem geschützten Admin-Bereich, sichtbar ist es auf der Seite Infrastruktur.",
  ],
  button: { href: "/infrastruktur/", label: "Live-Status ansehen" },
} as const;

export const websiteSpecHead = ["Merkmal", "Umsetzung"] as const;

export const websiteSpecs: readonly (readonly [string, string])[] = [
  ["Erreichbarkeit", "Per Cloudflare Tunnel, keine offenen Ports auf dem Server"],
  ["Verbindung", "Nur ausgehend vom Server aufgebaut"],
  ["Betrieb", "In gehärteten Containern"],
  ["Cookies", "Keine"],
  ["Tracking", "Keines"],
  ["Darstellung", "Hell, dunkel oder Systemvorgabe; nur im Browser gespeichert"],
  ["Statusboard", "Live, gepflegt in einem geschützten Admin-Bereich"],
];

export const websiteChecks = [
  <>
    <strong>Keine offenen Ports:</strong> Auf dem Server ist kein Port offen, eingehende Verbindungen sind nicht freigegeben.
  </>,
  <>
    <strong>Gehärtete Container:</strong> Die Website läuft in gehärteten Containern.
  </>,
  <>
    <strong>Keine Cookies, kein Tracking:</strong> Für Besucher setzen wir keine Cookies ein und verfolgen nichts.
  </>,
];

/* ------------------------------------------------------------ Stand heute */

export const statusItems: readonly TimelineItem[] = [
  {
    status: { tone: "ok", label: "Im Betrieb" },
    title: "Eigene Infrastruktur",
    text: (
      <>
        Die Infrastruktur ist im Betrieb, mit Ausnahme des DNS-Servers. Den Live-Stand zeigt die Seite{" "}
        <A className="link" href="/infrastruktur/">
          Infrastruktur
        </A>
        .
      </>
    ),
  },
  {
    status: { tone: "warn", label: "In Wartung" },
    title: "DNS-Server",
    text: "Der DNS-Server wird derzeit gewartet. Den Live-Stand zeigt die Seite Infrastruktur.",
  },
  {
    status: { tone: "info", label: "Geplant" },
    title: "Das Ökosystem weiter ausbauen",
    text: "Geplant ist, das Vylaris-Ökosystem weiter auszubauen. Das ist der einzige Punkt in dieser Liste, der noch vor uns liegt.",
  },
];

/* ---------------------------------------------------------------- Gruppe */

export const brands: readonly TechBrand[] = [
  {
    name: "VylarisData",
    sub: "vylarisdata.com",
    icon: "cpu",
    tag: "Diese Seite",
    current: true,
    text: "Software Development & Technology. Wir entwickeln Software und betreiben eigene Infrastruktur: 10 Server, eigenes IP-Subnetz, PBS-Backup-System.",
    action: { href: "/infrastruktur/", label: "Zur Infrastruktur" },
  },
  {
    name: "VylarisGroupEurope",
    sub: "vylaris.eu",
    icon: "globe",
    iconTone: "indigo",
    tag: "Europäische Website",
    text: "Die offizielle zweite Website der Gruppe für Europa. Sie bietet kostenlose Open-Source-SaaS-Dienste an. Außerdem verantwortet sie die europäische Rechts- und Unternehmensstruktur sowie Hosting und Server-Infrastruktur für ihre Dienste.",
    action: { href: site.links.eu, label: "vylaris.eu besuchen", icon: "ext" },
  },
  {
    name: "VylarisGroup Schweiz",
    sub: "vylaris.ch",
    icon: "users",
    tag: "Ursprungsverein",
    text: "Das ist der ursprüngliche Verein mit fünf Mitgliedern, davon drei im Vorstand. Er ging aus einem Homelab und einem Podcast hervor und ist die Keimzelle der VylarisGroup.",
    action: { href: site.links.ch, label: "vylaris.ch besuchen", icon: "ext" },
  },
];

export const allianceCallout = (
  <>
    <strong>Allianz Schweiz &amp; Europa.</strong> Die Schweizer Seite trägt die Idee, die europäische Seite liefert die
    rechtliche Struktur und die Infrastruktur. VylarisData liefert Software und Technologie. Mehr dazu findest du unter{" "}
    <A className="link" href="/oekosystem/">
      Ökosystem
    </A>
    .
  </>
);

/* ---------------------------------------------------------------------- FAQ */

export const faqSide = {
  eyebrow: "FAQ",
  id: "faq-h",
  title: "Häufige Fragen zur Technologie.",
  lead: "Kurze Antworten zu Infrastruktur, Open Source, Sicherheit und Kontakt.",
  action: { href: "/kontakt/", label: "Zur Kontaktseite" },
} as const;

export const faq: readonly FaqItem[] = [
  {
    q: "Welche Infrastruktur betreibt VylarisData?",
    a: (
      <p>
        10 Server, 5 Storage-Server mit knapp 1 PB Rohkapazität, ein PBS-Backup-System, ein eigenes IP-Subnetz mit
        Network-Server und ein Sicherheitssystem mit internem Netzwerk-Setup. Die Details stehen oben, den Live-Stand zeigt die
        Seite{" "}
        <A className="link" href="/infrastruktur/">
          Infrastruktur
        </A>
        .
      </p>
    ),
  },
  {
    q: "Was bedeutet Rohkapazität?",
    a: "Rohkapazität ist die Summe aller Speicherplatten, bevor Redundanz abgezogen wird. Die nutzbare Menge hängt von der Redundanz ab.",
  },
  {
    q: "Was bedeutet „In Wartung“ im Statusboard?",
    a: "Die Komponente wird gerade gewartet und ist nicht im Normalbetrieb. Welche das ist, zeigt das Statusboard auf der Seite Infrastruktur.",
  },
  {
    q: "Wie nehme ich Kontakt auf?",
    a: (
      <p>
        Über die Kontaktseite der VylarisGroup unter{" "}
        <A className="link" href={site.links.contact}>
          vylaris.eu/contact
        </A>
        . Dort kannst du auch ein Ticket eröffnen. Unsere Seite{" "}
        <A className="link" href="/kontakt/">
          Kontakt
        </A>{" "}
        führt dich ebenfalls dorthin.
      </p>
    ),
  },
  {
    q: "Ist eure Software Open Source?",
    a: "Die kostenlosen Open-Source-SaaS-Dienste der VylarisGroup bietet VylarisGroupEurope an. Für Projekte von VylarisData ist Open Source ein Grundsatz, aber keine Zusage: Wir wollen offene Software nutzen und selbst entwickeln, was wir verstehen und anpassen müssen. Veröffentlichen wir ein Projekt, sagen wir das ausdrücklich dazu.",
  },
  {
    q: "Wie geht ihr mit Sicherheitslücken um?",
    a: (
      <p>
        Melde sie über die{" "}
        <A className="link" href={site.links.contact}>
          Kontaktseite der VylarisGroup
        </A>{" "}
        und gib an, dass es um eine Sicherheitslücke geht. Details zur Absicherung dieser Website findest du oben im Abschnitt
        zur Website.
      </p>
    ),
  },
  {
    q: "Warum verzichtet ihr auf Cookies und Tracking?",
    a: "Weil wir sie nicht brauchen. Datensparsamkeit ist einer unserer Grundsätze, und eine Website, die nichts über dich speichert, muss auch nichts erklären oder absichern.",
  },
];

/* ---------------------------------------------------------------------- CTA */

export const cta = {
  id: "anfrage",
  headingId: "cta-h",
  title: (
    <>
      Fragen zu unserer Technik? <Gradient>Sprich mit uns</Gradient>.
    </>
  ),
  text: "Du willst wissen, wie wir arbeiten oder wie unsere Infrastruktur aufgebaut ist? Über die Kontaktseite der VylarisGroup erreichst du uns.",
  primary: { href: site.links.contact, label: "Kontakt aufnehmen", icon: "mail" },
  secondary: { href: "/infrastruktur/", label: "Zur Infrastruktur" },
} as const;
