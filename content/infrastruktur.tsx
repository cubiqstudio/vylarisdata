import { A, type FaqItem, type IconName, type TimelineItem } from "@/components/ui";
import type { Fact } from "@/components/sections/infrastruktur/FactList";
import type { Layer } from "@/components/sections/infrastruktur/LayerStack";
import type { TopicContent, TopicPoint } from "@/components/sections/infrastruktur/TopicSection";
import type { TopicVisualContent } from "@/components/sections/infrastruktur/TopicVisual";
import { site } from "@/content/site";

/* ------------------------------------------------------------- Kennzahlen
 * Schreibweise: Zahlen mit Einheit als Ziffern (10 Server, 250 TB SSD, knapp 1 PB).
 * Alle Kennzahlen stehen nur hier und werden in den Texten eingesetzt. */

const serverCount = 10;
const ssdServers = 4;
const ssdTbEach = 120;
const ssdTbTotal = ssdServers * ssdTbEach; // Ausbauziel SSD
const ssdTbNow = 250; // aktuell in Betrieb
const hddServers = 1;
const storageServers = ssdServers + hddServers;

/* ------------------------------------------------------------------ Meta */

export const meta = {
  title: "Infrastruktur",
  description: `${serverCount} Server, aktuell ${ssdTbNow} TB SSD im Betrieb und ein Speicherausbau auf knapp 1 PB, eigenes PBS-Backup-System und IP-Subnetz: Unsere Infrastruktur im Überblick, mit Live-Status.`,
  path: "/infrastruktur/",
} as const;

/* ------------------------------------------------------------ Seitentexte */

export const pageText = {
  hero: {
    eyebrow: "Unsere Infrastruktur",
    title: "Eigene Hardware. Eigenes Netz. Im Aufbau.",
    lead: `${serverCount} Server, aktuell ${ssdTbNow} TB SSD im Betrieb, ein eigenes PBS-Backup-System, ein eigenes IP-Subnetz und ein Sicherheitssystem: Das ist bestehende Hardware. Der Rest des Speichers (Ziel knapp 1 PB) ist im Aufbau, der DNS-Server in Wartung. Den Zustand aller Systeme zeigen wir live auf dieser Seite.`,
    primary: "Live-Status ansehen",
    secondary: "Die Zahlen",
  },
  zahlen: {
    eyebrow: "Die Zahlen",
    title: `${serverCount} Server, ${ssdTbNow} TB SSD, Ziel knapp 1 PB.`,
    lead: "Was heute läuft und was gerade entsteht: die Eckdaten unserer Infrastruktur.",
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
    title: "Heute im Betrieb, der Ausbau läuft.",
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
  { id: "server", value: `${serverCount} Server`, label: "Intern eigene Server, extern ganz normale Server." },
  { id: "ssd", value: `${ssdTbNow} TB SSD`, label: "Aktuell in Betrieb. Das ist unser heutiger Speicher." },
  { id: "hdd", value: "Im Aufbau", label: `Der Rest des Speichers: weitere SSD-Kapazität und ${hddServers} Storage-Server mit knapp 500 TB HDD.` },
  { id: "raw", value: "Ziel: knapp 1 PB", label: "Rohkapazität nach dem Ausbau, vor Redundanz. Die Rechnung steht darunter." },
  { id: "netz", value: "Eigenes IP-Subnetz", label: "Dazu ein Network-Server, der unsere Internetanbindung regelt." },
  { id: "pbs", value: "PBS-Backup-System", label: "Ein eigenes System für Backups." },
  { id: "security", value: "Sicherheitssystem", label: "Ein Sicherheitssystem mit eigenem, internem Netzwerk-Setup." },
  { id: "live", value: "Live-Status", label: "Der Zustand unserer Systeme, von uns gepflegt und direkt auf dieser Seite sichtbar." },
];

export const rawCapacityNote = `Aktuell sind ${ssdTbNow} TB SSD in Betrieb. Der Rest ist im Aufbau: Das Ausbauziel sind ${ssdServers} × ${ssdTbEach} TB SSD (= ${ssdTbTotal} TB) plus knapp 500 TB HDD, zusammen knapp 1 PB Rohkapazität. Gemeint ist die Summe der Laufwerke vor Redundanz, die nutzbare Kapazität liegt je nach Redundanz darunter.`;

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
    text: `${serverCount} Server insgesamt: intern eigene Server, extern ganz normale Server.`,
  },
  {
    icon: "hdd",
    name: "Speicher",
    text: `Aktuell ${ssdTbNow} TB SSD im Betrieb. Der Rest ist im Aufbau: Ziel sind ${storageServers} Storage-Server mit zusammen knapp 1 PB Rohkapazität.`,
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
  title: `${serverCount} Server: intern eigene Server, extern ganz normale Server.`,
  paragraphs: [
    `Unsere Rechenleistung verteilt sich auf insgesamt ${serverCount} Server. Wir unterscheiden zwischen internen und externen Servern. Die internen Server sind unsere eigenen Server, die wir selbst betreiben.`,
    "Die externen Server sind ganz normale Server. Zu ihnen nennen wir keine weiteren Details.",
  ],
  points: [
    point(`${serverCount} Server:`, "Die gesamte Rechenleistung liegt auf eigener Hardware."),
    point("Intern:", "Eigene Server."),
    point("Extern:", "Ganz normale Server."),
  ],
  visual: {
    kind: "flow",
    heading: `Aufteilung der ${serverCount} Server`,
    arrows: false,
    layers: [
      { icon: "cpu", name: "Intern", text: "Eigene Server.", highlight: true },
      { icon: "server", name: "Extern", text: "Ganz normale Server." },
    ],
  },
};

export const speicher: TopicContent = {
  id: "speicher",
  band: true,
  reverse: true,
  eyebrow: "Speicher",
  title: "250 TB SSD im Betrieb, Ausbau auf knapp 1 PB.",
  paragraphs: [
    `Heute tragen ${ssdTbNow} TB SSD unseren Speicher. Der Rest ist im Aufbau: Am Ende sollen ${storageServers} Storage-Server stehen, ${ssdServers} mit je ${ssdTbEach} TB SSD (zusammen ${ssdTbTotal} TB) und ${hddServers} Storage-Server mit knapp 500 TB HDD.`,
    "In einfachen Worten: SSDs speichern ohne bewegliche Teile und sind in der Regel schneller im Zugriff. Festplatten (HDD) sind die klassische Technik, um sehr große Datenmengen unterzubringen. Heute laufen 250 TB SSD, der weitere SSD-Ausbau und die HDD-Stufe entstehen gerade.",
  ],
  points: [
    point("Im Betrieb:", `${ssdTbNow} TB SSD.`),
    point("Im Aufbau:", `SSD-Ausbau auf ${ssdServers} × ${ssdTbEach} TB (${ssdTbTotal} TB) und ${hddServers} Storage-Server mit knapp 500 TB HDD.`),
    point("Ausbauziel:", "Zusammen knapp 1 PB Rohkapazität, gerechnet vor Redundanz."),
  ],
  visual: {
    kind: "outline",
    heading: "Speicher in Zahlen",
    items: [
      `Im Betrieb: ${ssdTbNow} TB SSD`,
      `Im Aufbau: Ausbau auf ${ssdServers} × ${ssdTbEach} TB SSD und ${hddServers} Storage-Server mit knapp 500 TB HDD`,
      "Ausbauziel: knapp 1 PB Rohkapazität",
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
    text: `Server, ${ssdTbNow} TB SSD-Speicher, PBS-Backup, Netzwerk und Sicherheitssystem. Details stehen im Live-Status.`,
  },
  {
    title: "Speicherausbau",
    status: { tone: "info", label: "Im Aufbau" },
    text: "Der Rest des Speichers ist im Aufbau: weitere SSD-Kapazität und ein Storage-Server mit HDD, Ziel knapp 1 PB Rohkapazität. Wir nennen keinen Termin.",
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
    "Im Aufbau: Die Hardware entsteht gerade und ist noch nicht im Betrieb.",
    "In Wartung: Wir arbeiten daran, offen ausgewiesen.",
    "Geplant: Ein Vorhaben, noch nicht umgesetzt.",
  ],
  chips: [{ label: "Im Betrieb", blue: true }, { label: "Im Aufbau" }, { label: "In Wartung" }, { label: "Geplant" }],
  note: "Für geplante Vorhaben nennen wir keine festen Termine.",
};

/* ------------------------------------------------------------------------ FAQ */

export const faq: readonly FaqItem[] = [
  {
    q: "Wie viele Server habt ihr?",
    a: (
      <p>
        Insgesamt {serverCount} Server. Intern laufen eigene Server, extern ganz normale Server. Mehr dazu im Abschnitt{" "}
        <A href="#rechenleistung" className="link">
          Rechenleistung
        </A>
        .
      </p>
    ),
  },
  {
    q: "Wie viel Speicher habt ihr?",
    a: (
      <p>
        Aktuell {ssdTbNow} TB SSD im Betrieb. Der Rest ist im Aufbau: Das Ausbauziel sind knapp 1 PB Rohkapazität aus{" "}
        {ssdServers} × {ssdTbEach} TB SSD und knapp 500 TB HDD, gerechnet vor Redundanz.
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
