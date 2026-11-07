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
  title: "VylarisData – Infrastruktur im Aufbau",
  description:
    "VylarisData, Untermarke von VylarisGroupEurope, baut eine eigene Infrastruktur in Europa auf. Wir fangen gerade an und suchen Hardware (gern auch gebrauchte), Know-how und Unterstützung.",
  path: "/",
} as const;

/* Hero */

export const hero: HeroContent = {
  title: "VylarisData – wir bauen unsere Infrastruktur auf",
  tagline: site.tagline,
  tri: site.tri,
  sub: "Wir fangen gerade an: VylarisData ist eine Untermarke von VylarisGroupEurope und baut eine eigene Infrastruktur in Europa auf. Aktuell haben wir noch keine eigene Hardware. Dafür suchen wir Unterstützung: Hardware, gern auch ältere oder gebrauchte, Know-how und Sponsoring.",
  stats: ["Im Aufbau", "Gesucht: Hardware", "Untermarke von VylarisGroupEurope"],
  actions: [
    { href: "/unterstuetzen/", label: "VylarisData unterstützen", variant: "primary", icon: "arrow" },
    { href: "/infrastruktur/", label: "Die Infrastruktur ansehen", variant: "secondary" },
  ],
};

/* Aufruf zur Unterstützung (Banner unter dem Hero) */

export const supportBanner = {
  eyebrow: "Mitmachen",
  title: "Wir bauen auf – Hardware und Unterstützung gesucht.",
  lead: "Wir nehmen sehr gerne auch ältere oder gebrauchte Hardware entgegen und freuen uns über jede Unterstützung: Hardware, Know-how, Sponsoring oder einfach Weitersagen.",
  action: { href: "/unterstuetzen/", label: "So kannst du helfen" },
} as const;

/* Überschriften und Einleitungen der Abschnitte */

export const sections = {
  eckdaten: {
    eyebrow: "Auf einen Blick",
    title: "VylarisData auf einen Blick.",
    lead: "Wir fangen gerade an: Die Infrastruktur ist im Aufbau, aktuell haben wir noch keine eigene Hardware.",
  },
  fokus: {
    eyebrow: "Unser Fokus",
    title: "Drei Dinge, für die VylarisData steht.",
    lead: "Technology, Infrastructure und Innovation beschreiben unsere Rolle in der VylarisGroup.",
  },
  infrastruktur: {
    eyebrow: "Was wir aufbauen",
    title: "Eigene Infrastruktur in Europa. Geplant und im Aufbau.",
    lead: "Server, Speicher, Netzwerk, Datensicherung und Sicherheit: Diese Bausteine planen wir. Aktuell ist noch keiner davon im Betrieb.",
  },
  gesucht: {
    eyebrow: "Was wir suchen",
    title: "Hardware, Know-how und Unterstützung.",
  },
  leistungen: {
    eyebrow: "Software Development & Technology",
    title: "Von der Software bis zur eigenen Infrastruktur.",
    lead: "Software entwickeln und eine eigene Infrastruktur aufbauen: Das ist unser Bereich in der VylarisGroup.",
  },
  zugang: {
    eyebrow: "Sicherheit",
    title: "Sicherheit gehört in die Architektur.",
  },
  prinzipien: {
    eyebrow: "Wie wir arbeiten",
    title: "Klare Regeln von Anfang an.",
    lead: "Bevor wir eine Technik wählen, stehen Grundsätze fest. Sie entscheiden, wenn es mehrere Wege gibt.",
  },
  oekosystem: {
    eyebrow: "Das Vylaris-Ökosystem",
    title: "VylarisData im Verbund der VylarisGroup.",
    lead: "VylarisData ist eine Untermarke von VylarisGroupEurope und gehört zur VylarisGroup. Die Gruppe arbeitet in der Schweiz und in Europa zusammen.",
  },
  roadmap: {
    eyebrow: "Stand und Ausblick",
    title: "Was entsteht, was wir suchen, was kommt.",
    lead: "Drei Punkte im Überblick. Termine nennen wir bewusst nicht.",
  },
  technologie: {
    eyebrow: "Technologie",
    title: "Technik mit klaren Grundsätzen.",
  },
  faq: {
    eyebrow: "Häufige Fragen",
    title: "Was du über VylarisData wissen willst.",
  },
} satisfies Record<string, SectionIntro>;

/* Eckdaten */

export const facts: readonly FactItem[] = [
  {
    icon: "server",
    value: "Im Aufbau",
    label: "Wir fangen gerade an. Aktuell betreiben wir noch keine eigene Hardware.",
  },
  {
    icon: "db",
    value: "Gesucht: Hardware",
    label: "Server, Speicher und Netzwerktechnik – gern auch ältere oder gebrauchte Geräte.",
  },
  {
    icon: "network",
    value: "Ziel: Infrastruktur in Europa",
    label: "Eigene Infrastruktur, Datensicherung, Netzwerk und Sicherheit sind als Bausteine geplant.",
  },
  {
    icon: "heart",
    value: "Unterstützung willkommen",
    label: "Hardware, Know-how, Sponsoring oder Weitersagen: Wir freuen uns über jede Hilfe.",
  },
  {
    icon: "building",
    value: "Untermarke",
    label: "VylarisData ist eine Untermarke von VylarisGroupEurope und gehört zur VylarisGroup.",
  },
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
    text: "Geplant: eine eigene Infrastruktur in Europa. Sie ist im Aufbau; den Stand findest du auf der Infrastruktur-Seite.",
  },
  {
    icon: "bulb",
    title: "Innovation",
    text: "Geplant: Wir wollen das Ökosystem weiter ausbauen.",
  },
];

/* Bausteine der Infrastruktur (alle geplant bzw. im Aufbau) */

export const buildingBlocks: readonly IconCardItem[] = [
  {
    icon: "server",
    title: "Server",
    text: "Geplant: eigene Server in Europa. Aktuell haben wir noch keine.",
  },
  {
    icon: "db",
    title: "Speicher",
    text: "Geplant: eigener Speicher für Daten und Dienste. Dafür suchen wir Hardware.",
  },
  {
    icon: "network",
    title: "Netzwerk",
    text: "Geplant: ein eigenes Netzwerk mit eigener Internetanbindung.",
  },
  {
    icon: "refresh",
    title: "Datensicherung",
    text: "Geplant: ein eigenes Backup-System für zuverlässige Datensicherung.",
  },
  {
    icon: "shield",
    title: "Sicherheit",
    text: "Geplant: ein Sicherheitssystem, das von Anfang an zur Infrastruktur gehört.",
  },
  {
    icon: "globe",
    title: "Namensauflösung (DNS)",
    text: "Geplant: eigene DNS-Server. Auch sie sind noch nicht im Betrieb.",
  },
];

/* Was wir suchen */

export const wantedChips: readonly string[] = ["Hardware gesucht", "Auch gebraucht willkommen", "Know-how", "Sponsoring"];

export const wantedRows: readonly (readonly [string, string])[] = [
  ["Server", "Gern auch ältere oder gebrauchte Geräte"],
  ["Speicher", "Festplatten, SSDs und Speichersysteme, auch gebraucht"],
  ["Netzwerktechnik", "Switches, Router und Zubehör, auch gebraucht"],
  ["Know-how", "Erfahrung beim Aufbau und Betrieb von Infrastruktur"],
  ["Sponsoring", "Unterstützung, damit wir Schritt für Schritt aufbauen können"],
  ["Weitersagen", "Empfiehl uns an Unternehmen und Menschen mit passender Hardware"],
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
    text: "Geplant: eigene Server und eigener Speicher. Der Aufbau hat gerade erst begonnen.",
  },
  {
    icon: "network",
    title: "Netzwerk & Sicherheit",
    text: "Geplant: ein eigenes Netzwerk und ein Sicherheitssystem.",
  },
  {
    icon: "refresh",
    title: "Datensicherung",
    text: "Geplant: ein eigenes Backup-System für die Datensicherung.",
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
    title: "Eigene Infrastruktur als Ziel",
    text: "Wir wollen unsere Technik selbst in der Hand haben. Dafür bauen wir auf: ehrlich und Schritt für Schritt.",
  },
  {
    icon: "lock",
    title: "Schutz im Design",
    text: "Sicherheit planen wir von Anfang an mit ein. Bei der eigenen Website setzen wir bereits auf einen Tunnel statt offener Ports.",
  },
  {
    icon: "eye",
    title: "Kein Tracking",
    text: "Keine Tracker, keine Werbenetzwerke. Besucher werden nicht getrackt und bekommen keine Cookies.",
  },
  {
    icon: "refresh",
    title: "Datensicherung von Anfang an",
    text: "Eine eigene Datensicherung gehört zu den geplanten Bausteinen unserer Infrastruktur.",
  },
  {
    icon: "network",
    title: "Netzwerk in eigener Hand",
    text: "Geplant: ein eigenes Netzwerk, damit wir unsere Internetanbindung selbst steuern können.",
  },
  {
    icon: "activity",
    title: "Offen über den Stand",
    text: "Ein Live-Statusboard auf der Infrastruktur-Seite zeigt, wie weit der Aufbau ist.",
  },
];

/* Ökosystem */

export const brands: readonly EcoBrand[] = [
  {
    name: "VylarisData",
    sub: "vylarisdata.com",
    icon: "server",
    current: { statusLabel: "Du bist hier" },
    text: "Untermarke von VylarisGroupEurope für Software Development & Technology. Unsere Infrastruktur ist im Aufbau; den Stand findest du auf der Infrastruktur-Seite.",
    action: { href: "/ueber-uns/", label: "Über VylarisData", icon: "arrow" },
  },
  {
    name: "VylarisGroupEurope",
    sub: "vylaris.eu",
    icon: "globe",
    text: "Der offizielle europäische Zweig der Gruppe unter der Leitung von Lucas Wilms. Er bringt die europäische Rechts- und Unternehmensstruktur mit und bietet kostenlose Open-Source-SaaS-Dienste an. VylarisData ist seine Untermarke.",
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
    name: "Mitmachen",
    sub: "Hardware und Unterstützung",
    icon: "heart",
    text: "Wir bauen gerade auf und suchen Hardware (gern auch ältere oder gebrauchte), Know-how und Sponsoring.",
    action: { href: "/unterstuetzen/", label: "So kannst du helfen", icon: "arrow" },
  },
];

/* Roadmap */

export const roadmap: readonly StepItem[] = [
  {
    title: "Eigene Infrastruktur in Europa",
    text: "Server, Speicher, Netzwerk, Datensicherung und Sicherheit sind als Bausteine geplant. Wir fangen gerade an; noch ist keiner davon im Betrieb.",
    status: { tone: "info", label: "Im Aufbau" },
  },
  {
    title: "Hardware und Unterstützung",
    text: "Wir suchen Hardware, gern auch ältere oder gebrauchte, sowie Know-how und Sponsoring für den Aufbau.",
    status: { tone: "info", label: "Gesucht" },
  },
  {
    title: "Ökosystem weiter ausbauen",
    text: "Das Ökosystem weiter auszubauen ist geplant.",
    status: { tone: "info", label: "Geplant" },
  },
];

/* Technologie */

export const workPrinciples: readonly string[] = [
  "Wir wollen unsere Infrastruktur selbst betreiben und bauen sie dafür auf",
  "Der Stand des Aufbaus ist im Live-Statusboard sichtbar",
  "Besucher werden nicht getrackt und bekommen keine Cookies",
];

export const chipGroups: readonly ChipGroupData[] = [
  { caption: "Dienste von VylarisGroupEurope", items: [{ label: "Open Source", blue: true }, { label: "Kostenlos" }, { label: "SaaS" }] },
  { caption: "So läuft diese Website", items: [{ label: "Cloudflare Tunnel" }, { label: "Keine offenen Ports" }, { label: "Kein Tracking" }] },
];

/* FAQ */

export const faq: readonly FaqItem[] = [
  {
    q: "Betreibt VylarisData schon eigene Hardware?",
    a: "Nein, aktuell haben wir keine eigene Hardware. Wir fangen gerade an und bauen unsere Infrastruktur auf. Server, Speicher, Datensicherung, Netzwerk und Sicherheit sind als Bausteine geplant, aber noch nicht im Betrieb.",
  },
  {
    q: "Was plant VylarisData an Infrastruktur?",
    a: "Das Ziel ist eine eigene Infrastruktur in Europa mit Servern, Speicher, Datensicherung, einem eigenen Netzwerk und einem Sicherheitssystem. Das ist ein Plan, kein Bestand. Den Stand des Aufbaus zeigt das Live-Statusboard auf der Infrastruktur-Seite. Zahlen und Termine nennen wir bewusst nicht.",
  },
  {
    q: "Welche Hardware sucht ihr?",
    a: (
      <p>
        Wir suchen Hardware und nehmen sehr gerne auch ältere oder gebrauchte Geräte entgegen, als Spende oder zur Weitergabe. Was wir im Einzelfall brauchen können, klären wir gern im Gespräch. Angebote richtest du bitte über die{" "}
        <A className="link" href="/kontakt/">
          Kontaktseite
        </A>{" "}
        an uns.
      </p>
    ),
  },
  {
    q: "Wie kann ich VylarisData unterstützen?",
    a: (
      <p>
        Mit Hardware, Know-how, Sponsoring oder indem du uns weiterempfiehlst. Alle Möglichkeiten stehen auf der Seite{" "}
        <A className="link" href="/unterstuetzen/">
          Unterstützen
        </A>
        .
      </p>
    ),
  },
  {
    q: "Wo stehen die Server?",
    a: "Wir haben noch keine eigenen Server. Geplant ist eine eigene Infrastruktur in Europa; zu Standorten machen wir keine Angaben.",
  },
  {
    q: "Wer steckt hinter VylarisData?",
    a: "VylarisData ist eine Untermarke von VylarisGroupEurope (Leitung: Lucas Wilms) und gehört zur VylarisGroup. Unser Geschäftsbereich ist Software Development & Technology.",
  },
  {
    q: "Was ist der Unterschied zu VylarisGroupEurope?",
    a: "VylarisGroupEurope (vylaris.eu) ist der offizielle europäische Zweig der Gruppe. Er bringt die europäische Rechts- und Unternehmensstruktur mit und bietet kostenlose Open-Source-SaaS-Dienste an. VylarisData ist seine Untermarke für Software Development & Technology und baut gerade eine eigene Infrastruktur auf.",
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
        . Dort kannst du Anfragen stellen, Tickets eröffnen oder uns Hardware und Unterstützung anbieten. Eine eigene Kontaktadresse für VylarisData gibt es nicht. Wie es genau geht, steht auf unserer Seite „Kontakt“.
      </p>
    ),
  },
];

/* Abschluss-CTA */

export const contactCta: ContactCtaContent = {
  text: "Fragen zu VylarisData oder ein Angebot für Hardware und Unterstützung? Du erreichst uns über die Kontaktseite der VylarisGroup, wie genau, steht auf unserer Seite „Kontakt“.",
  primary: { href: "/kontakt/", label: "So erreichst du uns", icon: "mail" },
  secondary: { href: "/unterstuetzen/", label: "Wie du helfen kannst" },
};
