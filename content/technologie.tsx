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
    "Technologie und Grundsätze von VylarisData. Die eigene Infrastruktur ist im Aufbau, wir suchen Hardware (auch ältere oder gebrauchte) und Unterstützung.",
  path: "/technologie/",
} as const;

/* ------------------------------------------------------------------- Hero */

export const hero = {
  crumb: "Technologie",
  eyebrow: "Software Development & Technology",
  title: (
    <>
      Klare Grundsätze, <Gradient>Infrastruktur im Aufbau</Gradient>.
    </>
  ),
  lead: "Wir fangen gerade an: VylarisData hat aktuell noch keine eigene Hardware, die Infrastruktur befindet sich im Aufbau. Hier zeigen wir offen, nach welchen Grundsätzen wir Technik für das Vylaris-Ökosystem entwickeln, was wir planen und wobei du uns helfen kannst.",
  primaryAction: { href: "#aufbau", label: "Unser Aufbau" },
  secondaryAction: { href: "/unterstuetzen/", label: "Uns unterstützen" },
} as const;

/* ------------------------------------------------------------ Sektionsköpfe */

export const heads = {
  aufbau: {
    id: "aufbau-h",
    eyebrow: "Infrastruktur im Aufbau",
    title: "Unser Zielbild: eigene Infrastruktur in Europa.",
    lead: "Das ist ein Plan und kein Bestand. Wir haben aktuell keine eigene Hardware. Diese Bausteine wollen wir aufbauen, und für jeden davon suchen wir Unterstützung.",
  },
  bausteine: {
    id: "bausteine-h",
    eyebrow: "Bausteine im Überblick",
    title: "Jeder Baustein mit seinem Stand.",
    lead: "Hier siehst du ehrlich, wo wir stehen: Im Aufbau ist, was gerade entsteht. Geplant ist, was noch kommt. Gesucht ist, wobei wir Hilfe brauchen.",
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
    title: "Was läuft, was entsteht, was wir suchen und was geplant ist.",
    lead: "Wir trennen offen zwischen dem, was schon läuft, dem, was gerade entsteht, dem, was wir suchen, und dem, was wir planen.",
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
    lead: "Die Bereiche greifen ineinander: Eine Anwendung braucht Schnittstellen, Schnittstellen brauchen Werkzeuge zum Testen, und alles zusammen braucht Infrastruktur. Die bauen wir gerade auf.",
  },
  group: {
    id: "gruppe-h",
    eyebrow: "Zusammenarbeit mit der VylarisGroup",
    title: "Technik im Verbund: Schweiz, Europa und VylarisData.",
    lead: "Wir bauen nicht für uns allein: VylarisData ist eine Untermarke von VylarisGroupEurope und der Bereich Software Development & Technology der VylarisGroup. Die Dienste der Gruppe stellen die jeweiligen Marken auf ihren eigenen Seiten vor.",
  },
} as const satisfies Record<string, TechHeadData>;

/* ----------------------------------------------------- Fakten & Zielbild */

export const aufbauFacts: readonly FactItem[] = [
  { value: "Im Aufbau", label: "Die eigene Infrastruktur von VylarisData entsteht gerade" },
  { value: "Gesucht: Hardware", label: "Auch ältere oder gebrauchte Hardware nehmen wir sehr gerne entgegen" },
  { value: "Ziel: Europa", label: "Geplant ist eine eigene Infrastruktur in Europa" },
  { value: "Offen", label: "Wir zeigen ehrlich, was schon steht und was noch fehlt" },
];

export const aufbauTiles: readonly TechTileData[] = [
  {
    icon: "server",
    title: "Eigene Infrastruktur in Europa",
    text: "Geplant: eigene Server für unsere Dienste und Projekte, betrieben in Europa. Aktuell haben wir noch keine.",
    chips: [{ label: "Geplant" }],
  },
  {
    icon: "hdd",
    iconTone: "indigo",
    title: "Speicher",
    text: "Geplant: eigener Speicher für die Daten unserer Dienste. Aktuell gibt es noch keinen.",
    chips: [{ label: "Geplant" }],
  },
  {
    icon: "life",
    title: "Datensicherung",
    text: "Geplant: ein eigenes Backup-System. Datensicherung soll bei uns keine Nebensache sein, sondern ein eigener Baustein.",
    chips: [{ label: "Geplant" }],
  },
  {
    icon: "network",
    iconTone: "indigo",
    title: "Netzwerk",
    text: "Geplant: ein eigenes Netzwerk, über das wir unsere Anbindung selbst regeln.",
    chips: [{ label: "Geplant" }],
  },
  {
    icon: "shield",
    title: "Sicherheit",
    text: "Geplant: ein Sicherheitskonzept für Server und Netz, das wir von Anfang an mitdenken.",
    chips: [{ label: "Geplant" }],
  },
  {
    icon: "cloud",
    iconTone: "indigo",
    title: "Gesucht: Hardware und Unterstützung",
    text: "Wir suchen Hardware und nehmen sehr gerne auch ältere oder gebrauchte Hardware entgegen. Wir freuen uns außerdem über Know-how, Sponsoring und Weitersagen.",
    chips: [{ label: "Gesucht" }, { label: "Auch gebraucht" }],
  },
];

export const bausteineHead = ["Baustein", "Stand"] as const;

export const bausteineRows: readonly (readonly [string, ReactNode])[] = [
  ["Eigene Infrastruktur insgesamt", <Status key="all" tone="info">Im Aufbau</Status>],
  ["Eigene Server in Europa", <Status key="srv" tone="info">Geplant</Status>],
  ["Eigener Speicher", <Status key="sto" tone="info">Geplant</Status>],
  ["Datensicherung (Backup-System)", <Status key="bak" tone="info">Geplant</Status>],
  ["Eigenes Netzwerk", <Status key="net" tone="info">Geplant</Status>],
  ["Sicherheitskonzept", <Status key="sec" tone="info">Geplant</Status>],
  ["Hardware, Know-how und Sponsoring", <Status key="sup" tone="info">Gesucht</Status>],
  ["Ökosystem weiter ausbauen", <Status key="eco" tone="info">Geplant</Status>],
];

export const aufbauChecks = [
  <>
    <strong>Ehrlicher Stand:</strong> Wir haben aktuell keine eigene Hardware. Die Infrastruktur befindet sich im Aufbau.
  </>,
  <>
    <strong>Klares Zielbild:</strong> Eigene Infrastruktur in Europa, mit Datensicherung, Netzwerk und Sicherheit als geplanten Bausteinen.
  </>,
  <>
    <strong>Hilfe willkommen:</strong> Hardware (auch ältere oder gebrauchte), Know-how, Sponsoring und Weitersagen bringen uns voran.
  </>,
];

export const aufbauCallout = (
  <>
    <strong>Du möchtest helfen?</strong> Angebote und Fragen erreichen uns über die{" "}
    <A className="link" href="/kontakt/">
      Kontaktseite
    </A>
    , mehr dazu steht unter{" "}
    <A className="link" href="/unterstuetzen/">
      Unterstützen
    </A>
    . Den aktuellen Stand der Bausteine zeigt die Seite{" "}
    <A className="link" href="/infrastruktur/">
      Infrastruktur
    </A>
    .
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
    text: "Gemeinsame Grundlagen, damit nicht jedes Projekt bei null beginnt: Das ist unser Ziel für diesen Bereich. Dazu gehört als Plan eine eigene Infrastruktur, die wir gerade aufbauen.",
    chips: [{ label: "Wiederverwendbar" }, { label: "Gemeinsame Grundlagen" }, { label: "Im Aufbau" }],
  },
];

/* ------------------------------------------------------------ Diese Website */

export const website = {
  paragraphs: [
    "Die Website läuft hinter einem Cloudflare Tunnel: Die Verbindung baut der Server selbst nach außen auf. Der Betrieb läuft in gehärteten Containern.",
    "Dazu kommt ein Statusboard für unsere Infrastruktur. Sichtbar ist es auf der Seite Infrastruktur.",
  ],
  button: { href: "/infrastruktur/", label: "Zum Statusboard" },
} as const;

export const websiteSpecHead = ["Merkmal", "Umsetzung"] as const;

export const websiteSpecs: readonly (readonly [string, string])[] = [
  ["Erreichbarkeit", "Per Cloudflare Tunnel, keine offenen Ports auf dem Server"],
  ["Verbindung", "Nur ausgehend vom Server aufgebaut"],
  ["Betrieb", "In gehärteten Containern"],
  ["Cookies", "Keine"],
  ["Tracking", "Keines"],
  ["Darstellung", "Hell, dunkel oder Systemvorgabe; nur im Browser gespeichert"],
  ["Statusboard", "Auf der Seite Infrastruktur"],
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
    title: "Diese Website",
    text: "Die Website von VylarisData ist online, ohne Tracking, ohne Cookies und ohne offene Ports am Server.",
  },
  {
    status: { tone: "info", label: "Im Aufbau" },
    title: "Eigene Infrastruktur",
    text: (
      <>
        Wir haben aktuell keine eigene Hardware. Die Infrastruktur entsteht gerade, wir fangen an. Den Stand der einzelnen Bausteine zeigt die Seite{" "}
        <A className="link" href="/infrastruktur/">
          Infrastruktur
        </A>
        .
      </>
    ),
  },
  {
    status: { tone: "info", label: "Gesucht" },
    title: "Hardware und Unterstützung",
    text: (
      <>
        Wir suchen Hardware, sehr gerne auch ältere oder gebrauchte, außerdem Know-how, Sponsoring und Weitersagen. Angebote nehmen wir über die{" "}
        <A className="link" href="/kontakt/">
          Kontaktseite
        </A>{" "}
        entgegen.
      </>
    ),
  },
  {
    status: { tone: "info", label: "Geplant" },
    title: "Datensicherung, Netzwerk und Sicherheit",
    text: "Das sind geplante Bausteine unserer Infrastruktur. Sie sind ein Ziel und noch nicht vorhanden. Zeitpunkte nennen wir erst, wenn wir sie belegen können.",
  },
  {
    status: { tone: "info", label: "Geplant" },
    title: "Das Ökosystem weiter ausbauen",
    text: "Geplant ist, das Vylaris-Ökosystem weiter auszubauen. Das ist ein Vorhaben und keine Zusage.",
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
    text: "Untermarke von VylarisGroupEurope. Software Development & Technology: Wir entwickeln Software und bauen eine eigene Infrastruktur auf, die noch im Aufbau ist.",
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
  lead: "Kurze Antworten zu Infrastruktur, Unterstützung, Open Source, Sicherheit und Kontakt.",
  action: { href: "/kontakt/", label: "Zur Kontaktseite" },
} as const;

export const faq: readonly FaqItem[] = [
  {
    q: "Welche Infrastruktur hat VylarisData?",
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
        Ja, sehr gerne, auch ältere oder gebrauchte Hardware. Wir suchen Hardware und freuen uns über jedes Angebot. Schreib uns über die{" "}
        <A className="link" href="/kontakt/">
          Kontaktseite
        </A>
        , was du anbieten kannst.
      </p>
    ),
  },
  {
    q: "Wie kann ich VylarisData sonst unterstützen?",
    a: (
      <p>
        Mit Know-how, Sponsoring oder indem du uns weiterempfiehlst. Jede Unterstützung hilft uns beim Aufbau. Mehr steht auf der Seite{" "}
        <A className="link" href="/unterstuetzen/">
          Unterstützen
        </A>
        .
      </p>
    ),
  },
  {
    q: "Was bedeutet „Im Aufbau“ im Statusboard?",
    a: "Der Baustein entsteht gerade und läuft noch nicht im Normalbetrieb. Den aktuellen Stand zeigt das Statusboard auf der Seite Infrastruktur.",
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
      Du kannst helfen? <Gradient>Melde dich</Gradient>.
    </>
  ),
  text: "Wir suchen Hardware, auch ältere oder gebrauchte, sowie Know-how und Unterstützung. Auch Fragen zu unserer Technik beantworten wir gern. Über die Kontaktseite erreichst du uns.",
  primary: { href: "/kontakt/", label: "Zur Kontaktseite", icon: "mail" },
  secondary: { href: "/unterstuetzen/", label: "So kannst du unterstützen" },
} as const;
