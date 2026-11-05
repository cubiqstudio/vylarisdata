import type { ReactNode } from "react";
import { A, type FactItem, type FaqItem, type StepItem } from "@/components/ui";
import type { ChipItem } from "@/components/sections/index/ChipGroup";
import type { ContactCtaContent } from "@/components/sections/index/ContactCta";
import type { EcoBrand } from "@/components/sections/index/EcoBrandCard";
import type { HeroContent } from "@/components/sections/index/HomeHero";
import type { IconCardItem } from "@/components/sections/index/SoftGrid";
import { site } from "@/content/site";

/* Typen für Inhalte, die nur die Startseite braucht */

export type CheckItem = { lead: string; text: string };
export type ChipGroupData = { caption: string; items: readonly ChipItem[] };
export type SectionIntro = { eyebrow: string; title: string; lead?: string };

/** Bereitet "Lead: Text"-Paare als Listeneinträge auf (für Checks). */
export function leadItems(items: readonly CheckItem[]): ReactNode[] {
  return items.map((c) => (
    <>
      <strong>{c.lead}</strong> {c.text}
    </>
  ));
}

export const homeMeta = {
  title: "VylarisData – eigene Server-Infrastruktur",
  description:
    "10 Server, 250 TB SSD im Betrieb und ein Speicherausbau auf knapp 1 PB, eigenes Netzwerk und PBS-Backup: die eigene Infrastruktur von VylarisData, einer Marke von CircleUpWilms.",
  path: "/",
} as const;

/* Hero */

export const hero: HeroContent = {
  pill: "Teil der VylarisGroup · Infrastruktur im Aufbau",
  title: "VylarisData – eigene Server-Infrastruktur",
  tagline: site.tagline,
  tri: site.tri,
  sub: "10 Server, aktuell 250 TB SSD im Betrieb, ein eigenes IP-Subnetz mit eigenem Server, ein PBS-Backup-System und ein Sicherheitssystem: Das ist die eigene Infrastruktur von VylarisData. Wir betreiben sie selbst. Der Speicher wird auf knapp 1 Petabyte ausgebaut.",
  stats: ["10 Server", "250 TB SSD im Betrieb", "Eigenes Subnetz"],
  actions: [
    { href: "/infrastruktur/", label: "Die Infrastruktur ansehen", variant: "primary", icon: "arrow" },
    { href: "/leistungen/", label: "Unsere Aufgabenfelder", variant: "secondary" },
  ],
};

/* Überschriften und Einleitungen der Abschnitte */

export const sections = {
  eckdaten: {
    eyebrow: "Auf einen Blick",
    title: "Unsere Infrastruktur auf einen Blick.",
    lead: "Hardware im Betrieb, der Speicher wächst: Der Ausbau läuft.",
  },
  fokus: {
    eyebrow: "Unser Fokus",
    title: "Drei Dinge, für die VylarisData steht.",
    lead: "Technology, Infrastructure und Innovation beschreiben unsere Rolle in der VylarisGroup.",
  },
  infrastruktur: {
    eyebrow: "Was wir betreiben",
    title: "Eigene Hardware. Eigenes Netzwerk. Im Ausbau.",
    lead: "Server, Speicher, Netzwerk, Datensicherung und Sicherheit: Diese Bausteine gehören zu unserer Infrastruktur.",
  },
  speicher: {
    eyebrow: "Speicher",
    title: "250 TB SSD im Betrieb, Ausbau auf knapp 1 PB.",
  },
  leistungen: {
    eyebrow: "Software Development & Technology",
    title: "Von der Software bis zum Server.",
    lead: "Entwickeln und Betreiben der eigenen Hardware: Das ist unser Bereich in der VylarisGroup.",
  },
  zugang: {
    eyebrow: "Sicherheit",
    title: "Sicherheit gehört in die Architektur.",
  },
  prinzipien: {
    eyebrow: "Wie wir arbeiten",
    title: "Eigene Hardware, klare Regeln.",
    lead: "Bevor wir eine Technik wählen, stehen Grundsätze fest. Sie entscheiden, wenn es mehrere Wege gibt.",
  },
  oekosystem: {
    eyebrow: "Das Vylaris-Ökosystem",
    title: "VylarisData im Verbund der VylarisGroup.",
    lead: "VylarisData gehört zur VylarisGroup und ist eine Marke von CircleUpWilms. Die Gruppe arbeitet in der Schweiz und in Europa zusammen.",
  },
  roadmap: {
    eyebrow: "Stand und Ausblick",
    title: "Was läuft, was entsteht, was gewartet wird, was kommt.",
    lead: "Vier Punkte im Überblick. Termine nennen wir bewusst nicht.",
  },
  technologie: {
    eyebrow: "Technologie",
    title: "Technik, die wir selbst betreiben.",
  },
  faq: {
    eyebrow: "Häufige Fragen",
    title: "Was du über unsere Infrastruktur wissen willst.",
  },
} satisfies Record<string, SectionIntro>;

/* Eckdaten */

export const facts: readonly FactItem[] = [
  {
    icon: "server",
    value: "10 Server",
    label: "Insgesamt zehn Server im Betrieb.",
  },
  {
    icon: "db",
    value: "250 TB SSD",
    label: "Aktuell im Betrieb. Der Rest des Speichers (knapp 1 PB als Ziel) ist im Aufbau.",
  },
  {
    icon: "network",
    value: "Eigenes Subnetz",
    label: "Ein eigener IP-Subnetzbereich und ein Server, der unsere Internetanbindung regelt.",
  },
  { icon: "refresh", value: "PBS-Backup", label: "Ein PBS-Backup-System für die Datensicherung." },
  { icon: "shield", value: "Sicherheitssystem", label: "Ein Sicherheitssystem gehört zur Infrastruktur." },
  {
    icon: "eye",
    value: "Keine offenen Ports",
    label: "Diese Website läuft hinter einem Cloudflare Tunnel, ohne offene Ports. Besucher werden nicht getrackt und bekommen keine Cookies.",
  },
];

/* Fokus */

export const focus: readonly IconCardItem[] = [
  {
    icon: "cpu",
    title: "Technology",
    text: "Wir sind der Geschäftsbereich Software Development & Technology der VylarisGroup.",
  },
  {
    icon: "server",
    title: "Infrastructure",
    text: "Wir betreiben eigene Hardware. Die Eckdaten findest du auf der Infrastruktur-Seite.",
  },
  {
    icon: "bulb",
    title: "Innovation",
    text: "Geplant: Wir wollen das Ökosystem weiter ausbauen.",
  },
];

/* Bausteine der Infrastruktur */

export const buildingBlocks: readonly IconCardItem[] = [
  {
    icon: "server",
    title: "10 Server",
    text: "Insgesamt zehn Server, die wir selbst betreiben.",
  },
  {
    icon: "db",
    title: "Speicher",
    text: "Aktuell sind 250 TB SSD in Betrieb. Der Ausbau um vier Server mit je 120 TB SSD und einen Server mit knapp 500 TB HDD ist im Aufbau.",
  },
  {
    icon: "network",
    title: "Eigenes Netzwerk",
    text: "Ein eigener IP-Subnetzbereich und ein Server, der unsere Internetanbindung regelt.",
  },
  {
    icon: "refresh",
    title: "PBS-Backup-System",
    text: "Unser System für die Datensicherung.",
  },
  {
    icon: "shield",
    title: "Sicherheitssystem",
    text: "Ein Sicherheitssystem mit internem Netzwerk-Setup gehört zu unserer Infrastruktur.",
  },
  {
    icon: "globe",
    title: "DNS-Server",
    text: "Derzeit in Wartung.",
  },
];

/* Speicher */

export const storageChips: readonly string[] = ["250 TB SSD im Betrieb", "Rest im Aufbau", "Ziel: knapp 1 PB"];

export const storageRows: readonly (readonly [string, string])[] = [
  ["SSD-Storage im Betrieb", "250 TB SSD"],
  ["Im Aufbau", "Weitere SSD-Kapazität und 1 Server mit knapp 500 TB HDD"],
  ["Ausbauziel", "Knapp 1 PB Rohkapazität"],
  ["Datensicherung", "PBS-Backup-System"],
];

/* Aufgabenfelder */

export const areas: readonly IconCardItem[] = [
  {
    icon: "code",
    title: "Softwareentwicklung",
    text: "Unser Geschäftsbereich Software Development & Technology in der VylarisGroup.",
  },
  {
    icon: "server",
    title: "Server & Speicher",
    text: "Betrieb der eigenen Server. Zahlen und Details stehen auf der Infrastruktur-Seite.",
  },
  {
    icon: "network",
    title: "Netzwerk & Sicherheit",
    text: "Eigenes IP-Subnetz, ein Server für die Internetanbindung und ein Sicherheitssystem.",
  },
  {
    icon: "refresh",
    title: "Datensicherung",
    text: "Ein PBS-Backup-System dient der Datensicherung.",
  },
];

/* Sicherheit und Transparenz */

export const accessChecks: readonly CheckItem[] = [
  { lead: "Keine offenen Ports:", text: "Der Server nimmt keine eingehenden Verbindungen an, die Verbindung baut er selbst nach außen auf." },
  { lead: "Cloudflare Tunnel:", text: "Diese Website wird über einen ausgehenden Tunnel erreichbar gemacht." },
  { lead: "Gehärtete Container:", text: "Die Website läuft in gehärteten Containern." },
  { lead: "Kein Tracking:", text: "Besucher werden nicht getrackt und bekommen keine Cookies." },
];

export const transparencyPoints: readonly ReactNode[] = [
  "Ein Live-Statusboard auf der Infrastruktur-Seite zeigt den aktuellen Stand der Infrastruktur",
  <>
    Den Systemstatus von VylarisGroupEurope findest du unter{" "}
    <A className="link" href={site.links.status}>
      vylaris.eu/status
    </A>
  </>,
  "Keine Tracker und keine Werbenetzwerke",
  "Schriften und Skripte kommen von derselben Domain",
];

/* Grundsätze */

export const principles: readonly IconCardItem[] = [
  {
    icon: "server",
    title: "Eigene Hardware",
    text: "Wir betreiben unsere Server selbst. So wissen wir, was läuft, und haben die Technik in der eigenen Hand.",
  },
  {
    icon: "lock",
    title: "Schutz im Design",
    text: "Ein Sicherheitssystem gehört zu unserer Infrastruktur. Bei der eigenen Website setzen wir von Anfang an auf einen Tunnel statt offener Ports.",
  },
  {
    icon: "eye",
    title: "Kein Tracking",
    text: "Keine Tracker, keine Werbenetzwerke. Besucher werden nicht getrackt und bekommen keine Cookies.",
  },
  {
    icon: "refresh",
    title: "Eigene Datensicherung",
    text: "Ein PBS-Backup-System gehört zu unserer Infrastruktur.",
  },
  {
    icon: "network",
    title: "Eigenes Netzwerk",
    text: "Mit eigenem IP-Subnetz und eigenem Server haben wir unsere Internetanbindung selbst in der Hand.",
  },
  {
    icon: "activity",
    title: "Transparent im Betrieb",
    text: "Ein Live-Statusboard auf der Infrastruktur-Seite zeigt den aktuellen Stand der Infrastruktur.",
  },
];

/* Ökosystem */

export const brands: readonly EcoBrand[] = [
  {
    name: "VylarisData",
    sub: "vylarisdata.com",
    icon: "server",
    current: { statusLabel: "Du bist hier" },
    text: "Software Development & Technology. Wir betreiben eigene Hardware; die Eckdaten findest du auf der Infrastruktur-Seite.",
    action: { href: "/ueber-uns/", label: "Über VylarisData", icon: "arrow" },
  },
  {
    name: "VylarisGroupEurope",
    sub: "vylaris.eu",
    icon: "globe",
    text: "Der offizielle europäische Zweig der Gruppe. Er bringt die europäische Rechts- und Unternehmensstruktur mit und bietet kostenlose Open-Source-SaaS-Dienste an.",
    action: { href: site.links.eu, label: "vylaris.eu besuchen", icon: "ext" },
  },
  {
    name: "VylarisGroup Schweiz",
    sub: "vylaris.ch",
    icon: "users",
    text: "Der Schweizer Ursprungsverein mit fünf Mitgliedern, davon drei im Vorstand. Er ist aus einem Homelab und einem Podcast entstanden; von ihm geht die Idee der Gruppe aus.",
    action: { href: site.links.ch, label: "vylaris.ch besuchen", icon: "ext" },
  },
  {
    name: "CircleUpWilms",
    sub: "Markeninhaber",
    icon: "building",
    text: "CircleUpWilms ist Inhaber der Marke VylarisData. Lucas Wilms leitet den europäischen Zweig VylarisGroupEurope.",
    action: { href: "/impressum/", label: "Impressum", icon: "arrow" },
  },
];

/* Roadmap */

export const roadmap: readonly StepItem[] = [
  {
    title: "Eigene Infrastruktur",
    text: "Server, 250 TB SSD-Speicher, Netzwerk, PBS-Backup-System und Sicherheitssystem sind in Betrieb.",
    status: { tone: "ok", label: "Im Betrieb" },
  },
  {
    title: "Speicherausbau",
    text: "Der Rest des Speichers (weitere SSD-Kapazität und ein Server mit HDD, Ziel knapp 1 PB) ist im Aufbau.",
    status: { tone: "info", label: "Im Aufbau" },
  },
  {
    title: "DNS-Server",
    text: "DNS-Server: derzeit in Wartung.",
    status: { tone: "info", label: "In Wartung" },
  },
  {
    title: "Ökosystem weiter ausbauen",
    text: "Das Ökosystem weiter auszubauen ist geplant.",
    status: { tone: "info", label: "Geplant" },
  },
];

/* Technologie */

export const workPrinciples: readonly string[] = [
  "Wir betreiben unsere Hardware selbst",
  "Der Stand der Infrastruktur ist im Live-Statusboard sichtbar",
  "Besucher werden nicht getrackt und bekommen keine Cookies",
];

export const chipGroups: readonly ChipGroupData[] = [
  { caption: "Dienste von VylarisGroupEurope", items: [{ label: "Open Source", blue: true }, { label: "Kostenlos" }, { label: "SaaS" }] },
  { caption: "So läuft diese Website", items: [{ label: "Cloudflare Tunnel" }, { label: "Keine offenen Ports" }, { label: "Kein Tracking" }] },
];

/* FAQ */

export const faq: readonly FaqItem[] = [
  {
    q: "Was betreibt VylarisData an Infrastruktur?",
    a: "10 Server, aktuell 250 TB SSD im Betrieb (der Ausbau um weitere SSD-Kapazität und einen Server mit knapp 500 TB HDD ist im Aufbau), ein PBS-Backup-System, ein eigenes IP-Subnetz mit einem Server für die Internetanbindung und ein Sicherheitssystem mit internem Netzwerk-Setup.",
  },
  {
    q: "Wie viel Speicher habt ihr?",
    a: "Aktuell haben wir 250 TB SSD im Betrieb. Der Rest ist im Aufbau: Ziel sind knapp 1 Petabyte Rohkapazität aus 4 × 120 TB SSD (480 TB) plus knapp 500 TB HDD.",
  },
  {
    q: "Wo stehen die Server?",
    a: "Zu Standorten machen wir hier keine Angaben.",
  },
  {
    q: "Wer steckt hinter VylarisData?",
    a: "VylarisData ist eine Marke von CircleUpWilms und gehört zur VylarisGroup. Unser Geschäftsbereich ist Software Development & Technology.",
  },
  {
    q: "Was ist der Unterschied zu VylarisGroupEurope?",
    a: "VylarisGroupEurope (vylaris.eu) ist der offizielle europäische Zweig der Gruppe. Er bringt die europäische Rechts- und Unternehmensstruktur mit und bietet kostenlose Open-Source-SaaS-Dienste an. VylarisData ist die Marke für Software Development & Technology und betreibt eigene Hardware.",
  },
  {
    q: "Setzt diese Website Cookies oder Tracker ein?",
    a: "Nein, nicht für Besucher. Wir setzen kein Tracking ein und speichern nichts, was dich wiedererkennt. Ein Cookie gibt es nur, wenn sich ein Admin im geschützten Bereich anmeldet. Deine Wahl zwischen hellem, dunklem oder dem Systemdesign speichert dein Browser lokal. Schriften und Skripte kommen von derselben Domain.",
  },
  {
    q: "Wie erreiche ich VylarisData?",
    a: (
      <p>
        Über die Kontaktseite der VylarisGroup unter{" "}
        <A className="link" href={site.links.contact}>
          vylaris.eu/contact
        </A>
        . Dort kannst du Anfragen stellen oder Tickets eröffnen, auch zum Thema Hosting. Eine eigene Kontaktadresse für VylarisData gibt es nicht.
      </p>
    ),
  },
];

/* Abschluss-CTA */

export const contactCta: ContactCtaContent = {
  text: "Fragen zu unserer Infrastruktur oder zu VylarisData? Du erreichst uns über die Kontaktseite der VylarisGroup, wie genau, steht auf unserer Seite „Kontakt“.",
  primary: { href: "/kontakt/", label: "So erreichst du uns", icon: "mail" },
  secondary: { href: "/infrastruktur/", label: "Zur Infrastruktur" },
};
