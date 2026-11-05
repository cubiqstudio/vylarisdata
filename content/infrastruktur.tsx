import { A, type FaqItem, type IconName, type TimelineItem } from "@/components/ui";
import type { Fact } from "@/components/sections/infrastruktur/FactList";
import type { Layer } from "@/components/sections/infrastruktur/LayerStack";
import type { TopicContent, TopicPoint } from "@/components/sections/infrastruktur/TopicSection";
import type { TopicVisualContent } from "@/components/sections/infrastruktur/TopicVisual";
import { site } from "@/content/site";

/* ------------------------------------------------------------- Kennzahlen
 * Schreibweise: Zahlen mit Einheit als Ziffern (10 Server, 4 × 120 TB, knapp 1 PB).
 * Alle Kennzahlen stehen nur hier und werden in den Texten eingesetzt. */

const serverCount = 10;
const ssdServers = 4;
const ssdTbEach = 120;
const ssdTbTotal = ssdServers * ssdTbEach;
const hddServers = 1;
const storageServers = ssdServers + hddServers;

/* ------------------------------------------------------------------ Meta */

export const meta = {
  title: "Infrastruktur",
  description: `${serverCount} Server, ${ssdTbTotal} TB SSD plus knapp 500 TB HDD, eigenes PBS-Backup-System und IP-Subnetz: Unsere Infrastruktur im Überblick, mit Live-Status.`,
  path: "/infrastruktur/",
} as const;

/* ------------------------------------------------------------ Seitentexte */

export const pageText = {
  hero: {
    eyebrow: "Unsere Infrastruktur",
    title: "Eigene Hardware. Eigenes Netz. Im Betrieb.",
    lead: `${serverCount} Server, knapp 1 PB Rohkapazität, ein eigenes PBS-Backup-System, ein eigenes IP-Subnetz und ein Sicherheitssystem: Das ist keine Planung, sondern bestehende Hardware. Aktuell ist nur der DNS-Server in Wartung. Den Zustand aller Systeme zeigen wir live auf dieser Seite.`,
    primary: "Live-Status ansehen",
    secondary: "Die Zahlen",
  },
  zahlen: {
    eyebrow: "Die Zahlen",
    title: `${serverCount} Server, knapp 1 PB.`,
    lead: "Bestehende Hardware, keine Planung. Hier die Eckdaten unserer Infrastruktur.",
    ariaLabel: "Eckdaten der Infrastruktur",
  },
  ueberblick: {
    eyebrow: "Überblick",
    title: "Was bei uns läuft.",
    lead: "Sechs Schichten, die zusammen unsere Infrastruktur ergeben: von den Diensten über Rechenleistung, Speicher und Datensicherung bis zu Netzwerk und Sicherheit.",
  },
  live: {
    eyebrow: "Live",
    title: "Live-Status unserer Systeme.",
    lead: "Diesen Status pflegen wir selbst in einem geschützten Admin-Bereich. Die Übersicht wird bei jedem Aufruf der Seite neu geladen. Befindet sich ein System in Wartung, siehst du das hier genauso wie eine Störung.",
  },
  warum: {
    eyebrow: "Warum eigene Hardware",
    title: "Weil wir wissen wollen, worauf wir bauen.",
    lead: "Eigene Hardware bedeutet für uns Kontrolle, Transparenz und eigene Grundlagen.",
  },
  naechstes: {
    eyebrow: "Stand und Ausblick",
    title: "Heute im Betrieb, danach der Ausbau.",
    lead: "Wir planen, unser Ökosystem weiter auszubauen. Jeder Punkt trägt den Status, der heute stimmt.",
  },
  faq: {
    eyebrow: "Häufige Fragen",
    title: "Antworten, ohne Umwege.",
  },
  cta: {
    titleBefore: "Du willst mehr über unsere ",
    titleAccent: "Hardware",
    titleAfter: " wissen?",
    text: "Schreib uns über die Kontaktseite der VylarisGroup (Kontakt und Tickets).",
    primary: "Kontakt aufnehmen",
    secondary: "Zum Ökosystem",
  },
} as const;

/* ---------------------------------------------------------------- Fakten */

export const facts: readonly Fact[] = [
  { id: "server", value: `${serverCount} Server`, label: "Intern KVM-Server, extern klassische Server." },
  { id: "ssd", value: `${ssdServers} × ${ssdTbEach} TB`, label: `SSD, verteilt auf ${ssdServers} Storage-Server. Zusammen ${ssdTbTotal} TB SSD.` },
  { id: "hdd", value: "Knapp 500 TB", label: `HDD in ${hddServers} eigenen Storage-Server.` },
  { id: "raw", value: "Knapp 1 PB", label: "Summe aller Laufwerke vor Redundanz. Die Rechnung steht darunter." },
  { id: "netz", value: "Eigenes IP-Subnetz", label: "Dazu ein Network-Server, der unsere Internetanbindung regelt." },
  { id: "pbs", value: "PBS-Backup-System", label: "Ein eigenes System für Backups." },
  { id: "security", value: "Sicherheitssystem", label: "Ein Sicherheitssystem mit eigenem, internem Netzwerk-Setup." },
  { id: "live", value: "Live-Status", label: "Der Zustand unserer Systeme, von uns gepflegt und direkt auf dieser Seite sichtbar." },
];

export const rawCapacityNote = `Rohkapazität: ${ssdServers} × ${ssdTbEach} TB SSD (= ${ssdTbTotal} TB) plus knapp 500 TB HDD ergeben knapp 1 PB. Das ist die Summe der verbauten Laufwerke vor Redundanz. Die nutzbare Kapazität liegt je nach Redundanz darunter.`;

/* ------------------------------------------------------------ Überblick */

export const overviewLayers: readonly Layer[] = [
  {
    icon: "box",
    name: "Dienste",
    text: "Diese Website läuft in gehärteten Containern hinter einem Cloudflare Tunnel, ohne offene Ports am Server, ohne Tracking und ohne Cookies für Besucher.",
    highlight: true,
  },
  {
    icon: "cpu",
    name: "Rechenleistung",
    text: `${serverCount} Server insgesamt: intern KVM-Server, extern klassische Server.`,
  },
  {
    icon: "hdd",
    name: "Speicher",
    text: `${ssdServers} Storage-Server mit je ${ssdTbEach} TB SSD und ${hddServers} Storage-Server mit knapp 500 TB HDD. Zusammen knapp 1 PB Rohkapazität.`,
    highlight: true,
  },
  {
    icon: "refresh",
    name: "Datensicherung",
    text: "Ein PBS-Backup-System sichert unsere Daten.",
  },
  {
    icon: "network",
    name: "Netzwerk",
    text: "Eigenes IP-Subnetz und ein Network-Server, der die Internetanbindung regelt.",
  },
  {
    icon: "shield",
    name: "Sicherheit",
    text: "Ein Sicherheitssystem mit internem Netzwerk-Setup.",
  },
];

/* ------------------------------------------------------------------ Kacheln */

export type InfoTile = { icon: IconName; title: string; text: string };

export const whyTiles: readonly InfoTile[] = [
  {
    icon: "key",
    title: "Kontrolle",
    text: "Wir betreiben unsere Systeme selbst und zeigen ihren Zustand offen.",
  },
  {
    icon: "eye",
    title: "Transparenz",
    text: "Der Live-Status steht öffentlich auf dieser Seite, auch dann, wenn ein System in Wartung ist.",
  },
  {
    icon: "layers",
    title: "Eigene Grundlagen",
    text: "Eigene Server, eigener Speicher, eigenes Netz, eigenes PBS-Backup-System: Aufbau und Betrieb der Grundlagen liegen bei uns. Für die Erreichbarkeit dieser Website nutzen wir zusätzlich einen Cloudflare Tunnel.",
  },
];

/* ---------------------------------------------------------- Themenabschnitte */

const point = (lead: string, text: string): TopicPoint => ({ lead, text });

export const rechenleistung: TopicContent = {
  id: "rechenleistung",
  eyebrow: "Rechenleistung",
  title: `${serverCount} Server: KVM-Virtualisierung intern, klassische Server extern.`,
  paragraphs: [
    `Unsere Rechenleistung verteilt sich auf insgesamt ${serverCount} Server. Wir unterscheiden zwischen internen und externen Servern. Die internen Server sind KVM-Server, also Virtualisierung: Mehrere Systeme laufen getrennt voneinander auf derselben Hardware.`,
    "Die externen Server sind ganz normale Server. Zu ihnen nennen wir keine Details zur Virtualisierung.",
  ],
  points: [
    point(`${serverCount} Server:`, "Die gesamte Rechenleistung liegt auf eigener Hardware."),
    point("Intern:", "KVM-Server."),
    point("Extern:", "Ganz normale Server."),
  ],
  visual: {
    kind: "flow",
    heading: `Aufteilung der ${serverCount} Server`,
    arrows: false,
    layers: [
      { icon: "cpu", name: "Intern", text: "KVM-Server.", highlight: true },
      { icon: "server", name: "Extern", text: "Ganz normale Server." },
    ],
  },
};

export const speicher: TopicContent = {
  id: "speicher",
  band: true,
  reverse: true,
  eyebrow: "Speicher",
  title: "Knapp 1 PB Rohkapazität auf zwei Stufen.",
  paragraphs: [
    `${storageServers} Storage-Server tragen unseren Speicher: ${ssdServers} mit je ${ssdTbEach} TB SSD (zusammen ${ssdTbTotal} TB) und ${hddServers} Server mit knapp 500 TB HDD.`,
    "In einfachen Worten: SSDs speichern ohne bewegliche Teile und sind in der Regel schneller im Zugriff. Festplatten (HDD) sind die klassische Technik, um sehr große Datenmengen unterzubringen. Wir haben beides und damit zwei Stufen mit unterschiedlichen Stärken.",
  ],
  points: [
    point("SSD-Stufe:", `${ssdServers} Storage-Server mit je ${ssdTbEach} TB, zusammen ${ssdTbTotal} TB.`),
    point("HDD-Stufe:", `${hddServers} Storage-Server mit knapp 500 TB.`),
    point("Rohkapazität:", "Zusammen knapp 1 PB, gerechnet vor Redundanz."),
  ],
  visual: {
    kind: "outline",
    heading: "Speicher in Zahlen",
    items: [
      `${ssdServers} Storage-Server × ${ssdTbEach} TB SSD = ${ssdTbTotal} TB SSD`,
      `${hddServers} Storage-Server mit knapp 500 TB HDD`,
      "Summe: knapp 1 PB Rohkapazität",
    ],
    chips: [{ label: "SSD", blue: true }, { label: "HDD" }, { label: "Rohkapazität" }],
  },
};

export const datensicherung: TopicContent = {
  id: "datensicherung",
  eyebrow: "Datensicherung",
  title: "Ein eigenes PBS-Backup-System.",
  paragraphs: [
    "Backups sind nur dann etwas wert, wenn sie wirklich laufen. Deshalb betreiben wir ein eigenes PBS-Backup-System, das unsere Daten sichert und im Live-Status als eigener Eintrag steht.",
    "Zu Intervallen und Aufbewahrungszeiten machen wir hier keine Angaben.",
  ],
  points: [
    point("PBS-Backup-System:", "Eigenes System für die Datensicherung."),
    point("Sichtbar:", "Der Zustand steht im Live-Status auf dieser Seite."),
  ],
  visual: {
    kind: "outline",
    heading: "Datensicherung im Überblick",
    items: ["Ein PBS-Backup-System", "Teil unserer Infrastruktur", "Eigener Eintrag im Live-Status"],
    chips: [{ label: "PBS", blue: true }, { label: "Backup" }, { label: "Live-Status" }],
  },
};

export const netzwerk: TopicContent = {
  id: "netzwerk",
  band: true,
  reverse: true,
  eyebrow: "Netzwerk",
  title: "Eigenes IP-Subnetz und ein Network-Server für die Internetanbindung.",
  paragraphs: [
    "Wir betreiben ein eigenes Netzwerk mit einem eigenen IP-Subnetz. Ein Network-Server regelt unsere Internetanbindung.",
    "Wir betreiben auch einen DNS-Server. Er ist aktuell in Wartung. Den Stand zeigt der Live-Status, denn Transparenz gehört zu dem, was wir versprechen.",
  ],
  points: [
    point("Eigenes IP-Subnetz:", "Ein Adressbereich, der zu unserem Netz gehört."),
    point("Network-Server:", "Regelt unsere Internetanbindung."),
    point("DNS-Server:", "Aktuell in Wartung."),
  ],
  visual: {
    kind: "flow",
    heading: "Bausteine des Netzwerks",
    arrows: false,
    layers: [
      { icon: "globe", name: "Network-Server", text: "Regelt unsere Internetanbindung.", highlight: true },
      { icon: "network", name: "Eigenes IP-Subnetz", text: "Der Adressbereich unseres Netzes." },
      { icon: "wrench", name: "DNS-Server", text: "Aktuell in Wartung." },
    ],
  },
};

export const sicherheit: TopicContent = {
  id: "sicherheit",
  eyebrow: "Sicherheit",
  title: "Ein Sicherheitssystem und eine Website ohne offene Ports.",
  paragraphs: [
    "Zu unserer Infrastruktur gehört ein Sicherheitssystem mit internem Netzwerk-Setup. Produkte oder Einstellungen nennen wir dazu nicht, weil Details zur Sicherheit nicht auf eine öffentliche Seite gehören.",
    "Diese Website zeigt, wie wir arbeiten: Sie läuft hinter einem Cloudflare Tunnel. Der Server baut die Verbindung nur nach außen auf, deshalb sind am Server keine Ports offen. Die Anwendung läuft in gehärteten Containern. Besucher werden nicht getrackt und bekommen keine Cookies.",
  ],
  points: [
    point("Sicherheitssystem:", "Mit internem Netzwerk-Setup."),
    point("Keine offenen Ports:", "Die Verbindung des Servers zum Tunnel geht nur nach außen."),
    point("Gehärtete Container:", "Die Website läuft in abgesicherten Containern."),
  ],
  action: { href: "/datenschutz/", label: "Zur Datenschutzerklärung", icon: "arrow" },
  visual: {
    kind: "checks",
    heading: "Diese Website",
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
    title: "Heute im Betrieb",
    status: { tone: "ok", label: "Im Betrieb" },
    text: "Alle Systeme außer dem DNS-Server. Details stehen im Live-Status.",
  },
  {
    title: "Wartung des DNS-Servers",
    status: { tone: "info", label: "In Wartung" },
    text: "Unser DNS-Server ist aktuell in Wartung. Wir nennen keinen Termin, zeigen aber jederzeit den Stand im Live-Status.",
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
    "Im Betrieb: Das System ist da und läuft.",
    "In Wartung: Wir arbeiten daran, offen ausgewiesen.",
    "Geplant: Ein Vorhaben, noch nicht umgesetzt.",
  ],
  chips: [{ label: "Im Betrieb", blue: true }, { label: "In Wartung" }, { label: "Geplant" }],
  note: "Für geplante Vorhaben nennen wir keine festen Termine.",
};

/* ------------------------------------------------------------------------ FAQ */

export const faq: readonly FaqItem[] = [
  {
    q: "Wie viele Server habt ihr?",
    a: (
      <p>
        Insgesamt {serverCount} Server. Intern laufen KVM-Server, extern ganz normale Server. Mehr dazu im Abschnitt{" "}
        <A href="#rechenleistung" className="link">
          Rechenleistung
        </A>
        .
      </p>
    ),
  },
  {
    q: "Wie wird gesichert?",
    a: (
      <p>
        Mit einem PBS-Backup-System, das zu unserer eigenen Infrastruktur gehört. Zu Intervallen oder Aufbewahrungszeiten machen
        wir hier keine Angaben.
      </p>
    ),
  },
  {
    q: "Wo sehe ich den Status eurer Systeme?",
    a: (
      <p>
        Direkt auf dieser Seite im Abschnitt{" "}
        <A href="#live-status" className="link">
          Live-Status unserer Systeme
        </A>
        . Den Status der VylarisGroup findest du zusätzlich unter{" "}
        <A href={site.links.status} className="link">
          vylaris.eu/status
        </A>
        .
      </p>
    ),
  },
  {
    q: "Was bedeutet es, dass der DNS-Server in Wartung ist?",
    a: (
      <p>
        Wir arbeiten aktuell an unserem DNS-Server, deshalb steht er im Live-Status als „In Wartung“. Einen Termin für das Ende
        der Wartung nennen wir nicht.
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
        Für Anfragen jeder Art, auch zu Hosting, melde dich über die Kontaktseite der VylarisGroup unter{" "}
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
  heading: "Direkt zu den Seiten der VylarisGroup",
  links: [
    { href: site.links.status, label: "Systemstatus der VylarisGroup" },
    { href: site.links.contact, label: "Kontakt und Tickets" },
    { href: site.links.services, label: "Dienste von VylarisGroupEurope" },
    { href: "/oekosystem/", label: "Ökosystem der VylarisGroup" },
  ],
};
