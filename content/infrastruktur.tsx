import { A, type FaqItem, type IconName, type TimelineItem } from "@/components/ui";
import type { Fact } from "@/components/sections/infrastruktur/FactList";
import type { Layer } from "@/components/sections/infrastruktur/LayerStack";
import type { TopicContent, TopicPoint } from "@/components/sections/infrastruktur/TopicSection";
import type { TopicVisualContent } from "@/components/sections/infrastruktur/TopicVisual";
import { site } from "@/content/site";

/* Hinweis zum Stand: VylarisData besitzt aktuell keine eigene Hardware. Die Infrastruktur ist im Aufbau.
 * Alle Beschreibungen der Bausteine auf dieser Seite sind Ziel und Plan, ohne Zahlen und ohne Zeitangaben. */

/** Ziel der Seite "Unterstützen" (Aufruf zur Mithilfe). */
const supportHref = "/unterstuetzen/";

/* ------------------------------------------------------------------ Meta */

export const meta = {
  title: "Infrastruktur",
  description:
    "VylarisData baut eine eigene Infrastruktur in Europa auf. Aktuell haben wir noch keine eigene Hardware: Wir fangen gerade an und suchen Hardware, gern auch gebrauchte, sowie Unterstützung. Mit Live-Status zum Stand des Aufbaus.",
  path: "/infrastruktur/",
} as const;

/* ------------------------------------------------------------ Seitentexte */

export const pageText = {
  hero: {
    eyebrow: "Unsere Infrastruktur",
    title: "Wir fangen gerade an. Die Infrastruktur ist im Aufbau.",
    lead: "Ehrlich gesagt: Aktuell haben wir keine eigene Hardware. Keine eigenen Server, keinen eigenen Speicher, kein eigenes Backup-System und kein eigenes Netz. Wir bauen eine eigene Infrastruktur in Europa auf und suchen dafür Hardware, gern auch ältere oder gebrauchte, und Unterstützung. Wie weit der Aufbau ist, zeigen wir live auf dieser Seite.",
    primary: "Hardware und Unterstützung gesucht",
    secondary: "Wo wir stehen",
  },
  stand: {
    eyebrow: "Wo wir stehen",
    title: "Aufbau statt Betrieb: So ist der Stand heute.",
    lead: "Wir sagen offen, was es gibt und was nicht, damit du uns einschätzen kannst.",
    ariaLabel: "Stand des Aufbaus",
  },
  ueberblick: {
    eyebrow: "Das Ziel",
    title: "Was wir aufbauen wollen.",
    lead: "Sechs geplante Schichten, die zusammen unsere Infrastruktur ergeben sollen: von den Diensten über Rechenleistung, Speicher und Datensicherung bis zu Netzwerk und Sicherheit. Das ist unser Zielbild, kein heutiger Bestand.",
  },
  live: {
    eyebrow: "Live",
    title: "Live-Status: wie weit der Aufbau ist.",
    lead: "Der Status zeigt, wie weit der Aufbau der einzelnen Bausteine ist. Aktuell steht alles im Aufbau. Sobald ein Baustein tatsächlich läuft, siehst du es hier. Die Übersicht wird bei jedem Aufruf der Seite neu geladen.",
  },
  warum: {
    eyebrow: "Warum wir eigene Infrastruktur aufbauen",
    title: "Weil wir wissen wollen, worauf wir bauen.",
    lead: "Das ist unsere Zielsetzung: Eigene Infrastruktur soll uns Kontrolle, Transparenz und eigene Grundlagen geben.",
  },
  naechstes: {
    eyebrow: "Stand und Ausblick",
    title: "Heute der Anfang, danach Schritt für Schritt.",
    lead: "Wir planen, unser Ökosystem Schritt für Schritt auszubauen. Jeder Punkt trägt den Status, der heute stimmt, und wir nennen keine Termine.",
  },
  faq: {
    eyebrow: "Häufige Fragen",
    title: "Antworten, ohne Umwege.",
  },
  cta: {
    titleBefore: "",
    titleAccent: "Hardware und Unterstützung",
    titleAfter: " gesucht.",
    text: "Wir fangen gerade an und freuen uns über jede Hilfe: Hardware, gern auch ältere oder gebrauchte, Know-how, Sponsoring oder einfach Weitersagen und Empfehlen. Angebote und Fragen erreichen uns über die Kontaktseite.",
    primary: "So kannst du helfen",
    secondary: "Kontakt aufnehmen",
  },
} as const;

/* ---------------------------------------------------------------- Fakten */

export const facts: readonly Fact[] = [
  { id: "hardware", value: "Keine eigene Hardware", label: "Aktuell haben wir weder eigene Server noch eigenen Speicher." },
  { id: "aufbau", value: "Im Aufbau", label: "Wir fangen gerade an, unsere Infrastruktur in Europa aufzubauen." },
  { id: "betrieb", value: "Nichts im Betrieb", label: "Backup, Netz und Sicherheit sind geplante Bausteine und laufen noch nicht bei uns." },
  { id: "gesucht", value: "Gesucht: Hardware", label: "Auch ältere oder gebrauchte Hardware nehmen wir sehr gerne entgegen." },
  { id: "unterstuetzung", value: "Gesucht: Unterstützung", label: "Know-how, Sponsoring, Weitersagen und Empfehlen helfen uns genauso." },
  { id: "live", value: "Live-Status", label: "Der Stand des Aufbaus, direkt auf dieser Seite sichtbar." },
];

export const standNote =
  "Was das konkret heißt: Es gibt heute keine Hardware, die uns gehört, und keinen Dienst, der auf eigener Infrastruktur läuft. Alles, was du unten über Rechenleistung, Speicher, Datensicherung, Netzwerk und Sicherheit liest, beschreibt, was wir aufbauen wollen. Wenn du uns dabei helfen möchtest, findest du den Weg auf der Seite „Unterstützen“.";

/* ------------------------------------------------------------ Überblick */

export const overviewLayers: readonly Layer[] = [
  {
    icon: "box",
    name: "Dienste",
    text: "Geplant: Dienste für das Vylaris-Ökosystem auf eigener Infrastruktur. Wie wir arbeiten wollen, zeigt schon diese Website: Sie läuft in gehärteten Containern hinter einem Cloudflare Tunnel, ohne offene Ports am Server, ohne Tracking und ohne Cookies für Besucher.",
    highlight: true,
  },
  {
    icon: "cpu",
    name: "Rechenleistung",
    text: "Geplant: eigene Server in Europa als Grundlage für unsere Dienste.",
  },
  {
    icon: "hdd",
    name: "Speicher",
    text: "Geplant: eigener Speicher für unsere Daten und die Daten des Ökosystems.",
    highlight: true,
  },
  {
    icon: "refresh",
    name: "Datensicherung",
    text: "Geplant: ein eigenes System, das unsere Daten regelmäßig sichert.",
  },
  {
    icon: "network",
    name: "Netzwerk",
    text: "Geplant: ein eigenes Netzwerk mit eigener Anbindung ans Internet.",
  },
  {
    icon: "shield",
    name: "Sicherheit",
    text: "Geplant: ein Sicherheitskonzept, das alle Schichten schützt.",
  },
];

/* ------------------------------------------------------------------ Kacheln */

export type InfoTile = { icon: IconName; title: string; text: string };

export const whyTiles: readonly InfoTile[] = [
  {
    icon: "key",
    title: "Kontrolle",
    text: "Wir wollen unsere Systeme einmal selbst betreiben und ihren Zustand offen zeigen.",
  },
  {
    icon: "eye",
    title: "Transparenz",
    text: "Der Live-Status steht öffentlich auf dieser Seite, auch jetzt, wo noch alles im Aufbau ist.",
  },
  {
    icon: "layers",
    title: "Eigene Grundlagen",
    text: "Eigene Rechenleistung, eigener Speicher, eigene Datensicherung, eigenes Netz: Aufbau und Betrieb dieser Grundlagen sollen bei uns liegen. Für die Erreichbarkeit dieser Website nutzen wir heute einen Cloudflare Tunnel.",
  },
];

/* ---------------------------------------------------------- Themenabschnitte */

const point = (lead: string, text: string): TopicPoint => ({ lead, text });

export const rechenleistung: TopicContent = {
  id: "rechenleistung",
  eyebrow: "Rechenleistung",
  title: "Geplant: eigene Server in Europa.",
  paragraphs: [
    "Als Rechenleistung wollen wir eigene Server aufbauen. Heute haben wir keine. Wir fangen gerade an und suchen Hardware, gern auch ältere oder gebrauchte, die dafür infrage kommt.",
    "Was später auf diesen Servern laufen soll, sind die Dienste für das Vylaris-Ökosystem.",
  ],
  points: [
    point("Heute:", "Keine eigenen Server."),
    point("Ziel:", "Eigene Server in Europa."),
    point("Gesucht:", "Hardware, auch ältere oder gebrauchte."),
  ],
  visual: {
    kind: "outline",
    heading: "Rechenleistung im Überblick",
    items: ["Heute: keine eigene Hardware", "Ziel: eigene Server in Europa", "Gesucht: Hardware und Unterstützung"],
    chips: [{ label: "Geplant", blue: true }, { label: "Gesucht: Hardware" }],
  },
};

export const speicher: TopicContent = {
  id: "speicher",
  band: true,
  reverse: true,
  eyebrow: "Speicher",
  title: "Geplant: eigener Speicher.",
  paragraphs: [
    "Wir wollen eigenen Speicher für unsere Daten aufbauen. Heute gibt es ihn nicht, wir fangen gerade erst an. Wie groß er einmal wird, legen wir fest, wenn wir wissen, welche Hardware wir bekommen.",
    "In einfachen Worten: SSDs speichern ohne bewegliche Teile und sind in der Regel schneller im Zugriff. Festplatten (HDD) sind die klassische Technik, um sehr große Datenmengen unterzubringen. Welche Technik wir einsetzen, hängt auch davon ab, was wir geschenkt oder weitergegeben bekommen.",
  ],
  points: [
    point("Heute:", "Kein eigener Speicher."),
    point("Ziel:", "Eigener Speicher für unsere Daten."),
    point("Gesucht:", "Laufwerke und Speichersysteme, gern auch gebrauchte."),
  ],
  visual: {
    kind: "outline",
    heading: "Speicher im Überblick",
    items: ["Heute: kein eigener Speicher", "Ziel: eigener Speicher in unserer Infrastruktur", "Gesucht: Hardware, auch gebrauchte"],
    chips: [{ label: "Geplant", blue: true }, { label: "SSD" }, { label: "HDD" }],
  },
};

export const datensicherung: TopicContent = {
  id: "datensicherung",
  eyebrow: "Datensicherung",
  title: "Geplant: ein eigenes System für Backups.",
  paragraphs: [
    "Backups sind nur dann etwas wert, wenn sie wirklich laufen. Deshalb planen wir ein eigenes System zur Datensicherung. Heute gibt es dieses System noch nicht.",
    "Zu Technik, Intervallen und Aufbewahrungszeiten machen wir erst Angaben, wenn es das System gibt.",
  ],
  points: [
    point("Heute:", "Kein eigenes Backup-System."),
    point("Ziel:", "Ein eigenes System für die Datensicherung."),
    point("Sichtbar:", "Den Stand zeigt der Live-Status auf dieser Seite."),
  ],
  visual: {
    kind: "outline",
    heading: "Datensicherung im Überblick",
    items: ["Heute: noch kein eigenes Backup-System", "Ziel: Teil unserer Infrastruktur", "Eigener Eintrag im Live-Status"],
    chips: [{ label: "Geplant", blue: true }, { label: "Backup" }, { label: "Live-Status" }],
  },
};

export const netzwerk: TopicContent = {
  id: "netzwerk",
  band: true,
  reverse: true,
  eyebrow: "Netzwerk",
  title: "Geplant: ein eigenes Netzwerk.",
  paragraphs: [
    "Wir wollen ein eigenes Netzwerk aufbauen, mit einer eigenen Anbindung ans Internet und einer eigenen Namensauflösung. Heute haben wir weder ein eigenes Netz noch einen eigenen DNS-Server im Betrieb.",
    "Den Stand zeigt der Live-Status, denn Transparenz gehört zu dem, was wir versprechen.",
  ],
  points: [
    point("Heute:", "Kein eigenes Netzwerk."),
    point("Ziel:", "Eigene Anbindung ans Internet."),
    point("Ziel:", "Eigene Namensauflösung (DNS)."),
  ],
  visual: {
    kind: "flow",
    heading: "Geplante Bausteine des Netzwerks",
    arrows: false,
    layers: [
      { icon: "globe", name: "Internetanbindung", text: "Geplant: unsere eigene Anbindung ans Internet.", highlight: true },
      { icon: "network", name: "Eigenes Netz", text: "Geplant: der Rahmen, in dem unsere Systeme verbunden sind." },
      { icon: "wrench", name: "Namensauflösung", text: "Geplant: ein eigener DNS-Server." },
    ],
  },
};

export const sicherheit: TopicContent = {
  id: "sicherheit",
  eyebrow: "Sicherheit",
  title: "Geplant: Sicherheit für alle Schichten. Schon heute: eine Website ohne offene Ports.",
  paragraphs: [
    "Zu unserer geplanten Infrastruktur gehört ein Sicherheitssystem. Heute haben wir keines im Betrieb. Wenn es soweit ist, nennen wir keine Produkte oder Einstellungen, weil Details zur Sicherheit nicht auf eine öffentliche Seite gehören.",
    "Diese Website zeigt, wie wir arbeiten wollen: Sie läuft hinter einem Cloudflare Tunnel. Der Server baut die Verbindung nur nach außen auf, deshalb sind am Server keine Ports offen. Die Anwendung läuft in gehärteten Containern. Besucher werden nicht getrackt und bekommen keine Cookies.",
  ],
  points: [
    point("Heute:", "Kein eigenes Sicherheitssystem."),
    point("Ziel:", "Ein Sicherheitssystem für unsere Infrastruktur."),
    point("Schon jetzt:", "Diese Website läuft ohne offene Ports in gehärteten Containern."),
  ],
  action: { href: "/datenschutz/", label: "Zur Datenschutzerklärung", icon: "arrow" },
  visual: {
    kind: "checks",
    heading: "Diese Website, schon heute",
    items: [
      "Cloudflare Tunnel, ausgehende Verbindung",
      "Keine offenen Ports am Server",
      "Gehärtete Container",
      "Kein Tracking",
      "Keine Cookies für Besucher",
    ],
  },
};

/* -------------------------------------------------------------- Was kommt */

export const roadmap: readonly TimelineItem[] = [
  {
    title: "Heute: der Anfang",
    status: { tone: "info", label: "Im Aufbau" },
    text: "Wir fangen gerade an. Es ist noch keine eigene Hardware im Betrieb. Den Stand der einzelnen Bausteine zeigt der Live-Status.",
  },
  {
    title: "Hardware und Unterstützung finden",
    status: { tone: "info", label: "Gesucht" },
    text: "Wir suchen Hardware, gern auch ältere oder gebrauchte, sowie Know-how und Unterstützung. Wie du helfen kannst, steht auf der Seite „Unterstützen“.",
  },
  {
    title: "Eigene Infrastruktur in Europa",
    status: { tone: "info", label: "Geplant" },
    text: "Rechenleistung, Speicher, Datensicherung, Netzwerk und Sicherheit als eigene Bausteine. Ein Vorhaben ohne Termin.",
  },
  {
    title: "Ausbau des Ökosystems",
    status: { tone: "info", label: "Geplant" },
    text: "Weiterer Ausbau unseres Ökosystems. Ein Vorhaben ohne Termin.",
  },
];

export const roadmapNotes: TopicVisualContent = {
  kind: "outline",
  heading: "So lesen wir die Zustände",
  items: [
    "Im Betrieb: Der Baustein ist da und läuft. Das trifft aktuell auf keinen Baustein zu.",
    "Im Aufbau: Der Baustein entsteht gerade und ist noch nicht im Betrieb.",
    "Gesucht: Dafür brauchen wir Hardware oder Unterstützung.",
    "Geplant: Ein Vorhaben, noch nicht umgesetzt.",
  ],
  chips: [{ label: "Im Betrieb", blue: true }, { label: "Im Aufbau" }, { label: "Gesucht" }, { label: "Geplant" }],
  note: "Für geplante Vorhaben nennen wir keine festen Termine.",
};

/* ------------------------------------------------------------------------ FAQ */

export const faq: readonly FaqItem[] = [
  {
    q: "Habt ihr eigene Hardware?",
    a: (
      <p>
        Nein, aktuell nicht. Wir haben keine eigenen Server, keinen eigenen Speicher, kein eigenes Backup-System, kein eigenes
        Netz und kein eigenes Sicherheitssystem. Wir fangen gerade an, eine eigene Infrastruktur in Europa aufzubauen. Mehr dazu
        im Abschnitt{" "}
        <A href="#stand" className="link">
          Wo wir stehen
        </A>
        .
      </p>
    ),
  },
  {
    q: "Was habt ihr vor?",
    a: (
      <p>
        Wir wollen eine eigene Infrastruktur aufbauen, mit den Bausteinen Rechenleistung, Speicher, Datensicherung, Netzwerk und
        Sicherheit. Das ist unser Ziel, keine Beschreibung des heutigen Zustands. Termine nennen wir nicht.
      </p>
    ),
  },
  {
    q: "Ich habe Hardware übrig. Kann ich sie euch geben?",
    a: (
      <p>
        Sehr gerne. Wir nehmen auch ältere oder gebrauchte Hardware entgegen und freuen uns über jede Unterstützung. Schreib uns
        einfach über die{" "}
        <A href="/kontakt/" className="link">
          Kontaktseite
        </A>
        , was du hast oder anbieten möchtest. Mehr dazu auf der Seite{" "}
        <A href={supportHref} className="link">
          Unterstützen
        </A>
        .
      </p>
    ),
  },
  {
    q: "Wie kann ich uns sonst helfen?",
    a: (
      <p>
        Neben Hardware helfen uns Know-how, Sponsoring und Weitersagen oder Empfehlen. Alles Weitere steht auf der Seite{" "}
        <A href={supportHref} className="link">
          Unterstützen
        </A>
        .
      </p>
    ),
  },
  {
    q: "Wie wird später gesichert?",
    a: (
      <p>
        Wir planen ein eigenes System zur Datensicherung. Heute gibt es dieses System noch nicht. Zu Technik, Intervallen oder
        Aufbewahrungszeiten machen wir erst Angaben, wenn es das System gibt.
      </p>
    ),
  },
  {
    q: "Wo sehe ich den Status eurer Systeme?",
    a: (
      <p>
        Direkt auf dieser Seite im Abschnitt{" "}
        <A href="#live-status" className="link">
          Live-Status
        </A>
        . Er zeigt, wie weit der Aufbau der einzelnen Bausteine ist. Den Status der VylarisGroup findest du zusätzlich unter{" "}
        <A href={site.links.status} className="link">
          vylaris.eu/status
        </A>
        .
      </p>
    ),
  },
  {
    q: "Was bedeutet „Im Aufbau“ im Live-Status?",
    a: (
      <p>
        Der Baustein entsteht gerade und ist noch nicht im Betrieb. Im Moment steht noch alles im Aufbau. Sobald ein Baustein
        wirklich läuft, ändert sich sein Status. Einen Termin dafür nennen wir nicht.
      </p>
    ),
  },
  {
    q: "Gibt es Tracking auf dieser Website?",
    a: (
      <p>
        Nein. Diese Website setzt für Besucher keine Cookies und bindet keine Tracker ein. Sie läuft hinter einem Cloudflare
        Tunnel ohne offene Ports am Server. Mehr steht in der{" "}
        <A href="/datenschutz/" className="link">
          Datenschutzerklärung
        </A>
        .
      </p>
    ),
  },
  {
    q: "Wie stelle ich eine Anfrage, etwa zu Hosting?",
    a: (
      <p>
        Zu Hosting können wir aktuell noch nichts anbieten, weil unsere Infrastruktur im Aufbau ist. Für alle anderen Anfragen
        und Angebote melde dich über die{" "}
        <A href="/kontakt/" className="link">
          Kontaktseite
        </A>
        . Für die VylarisGroup insgesamt gibt es außerdem die Kontaktseite unter{" "}
        <A href={site.links.contact} className="link">
          vylaris.eu/contact
        </A>{" "}
        (Kontakt und Tickets).
      </p>
    ),
  },
];

export const faqLinks: TopicVisualContent = {
  kind: "links",
  heading: "Direkt weiter",
  links: [
    { href: supportHref, label: "Hardware und Unterstützung gesucht" },
    { href: "/kontakt/", label: "Kontakt aufnehmen" },
    { href: site.links.status, label: "Systemstatus der VylarisGroup" },
    { href: site.links.contact, label: "Kontakt und Tickets der VylarisGroup" },
    { href: site.links.services, label: "Dienste von VylarisGroupEurope" },
    { href: "/oekosystem/", label: "Ökosystem der VylarisGroup" },
  ],
};
