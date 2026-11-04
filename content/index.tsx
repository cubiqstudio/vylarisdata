import { A, type FactItem, type FaqItem, type IconName, type LayerItem, type StepItem } from "@/components/ui";
import type { ChipItem } from "@/components/sections/index/ChipGroup";
import type { EcoBrand } from "@/components/sections/index/EcoBrandCard";
import type { HeroContent } from "@/components/sections/index/HomeHero";
import type { SoftItem } from "@/components/sections/index/SoftGrid";
import { site } from "@/content/site";

/* Typen für Inhalte, die nur die Startseite braucht */

export type AreaItem = { icon: IconName; title: string; text: string };
export type PrincipleItem = { icon: IconName; title: string; text: string };
export type CheckItem = { lead: string; text: string };
export type ChipGroupData = { caption: string; items: readonly ChipItem[] };

export const homeMeta = {
  title: "VylarisData – Technologie und künftiges Hosting für das Vylaris-Ökosystem",
  description:
    "VylarisData ist die Technologie-Marke der VylarisGroup und übernimmt künftig das Hosting der Gruppe. Eine Marke von CircleUpWilms.",
  path: "/",
} as const;

/* Hero */

export const hero: HeroContent = {
  pill: "Teil der VylarisGroup",
  title: "VylarisData – Technologie und künftiges Hosting für die VylarisGroup",
  tagline: site.tagline,
  tri: site.tri,
  sub: "Wir entwickeln Software und bauen die technische Basis auf, auf der die Dienste der VylarisGroup laufen sollen – künftig als zentrales Hosting für das gesamte Vylaris-Ökosystem.",
  actions: [
    { href: "/leistungen/", label: "Unsere Aufgabenfelder", variant: "primary", icon: "arrow" },
    { href: "/infrastruktur/", label: "Die Infrastruktur", variant: "secondary" },
  ],
};

/* Eckdaten */

export const facts: readonly FactItem[] = [
  {
    icon: "layers",
    value: "VylarisGroup",
    label: "Wir gehören zur VylarisGroup. Unser Geschäftsbereich ist Software Development & Technology.",
  },
  { icon: "building", value: "CircleUpWilms", label: "CircleUpWilms ist Inhaber der Marke VylarisData." },
  {
    icon: "server",
    value: "Im Aufbau",
    label: "Die Infrastruktur, auf der künftig das Hosting der VylarisGroup laufen soll, wird gerade aufgebaut.",
  },
  {
    icon: "eye",
    value: "Kein Tracking",
    label: "Diese Website setzt keine Cookies. Schriften und Skripte kommen von der eigenen Domain.",
  },
];

/* Fokus */

export const focus: readonly SoftItem[] = [
  {
    icon: "cpu",
    title: "Technology",
    text: "Softwareentwicklung für die Dienste der VylarisGroup. Unser Geschäftsbereich ist Software Development & Technology.",
  },
  {
    icon: "server",
    title: "Infrastructure",
    text: "Ziel: eigenes, kontrolliertes Hosting als technische Grundlage für die Dienste der Gruppe. Die Infrastruktur ist im Aufbau.",
  },
  {
    icon: "bulb",
    title: "Innovation",
    text: "Ziel: Neues zunächst in kleinem Rahmen erproben und erst dann in den Betrieb übernehmen, wenn es sich bewährt hat.",
  },
];

/* Aufgabenfelder */

export const areas: readonly AreaItem[] = [
  {
    icon: "code",
    title: "Softwareentwicklung",
    text: "Softwareentwicklung für die Dienste der VylarisGroup, unser Geschäftsbereich Software Development & Technology.",
  },
  { icon: "server", title: "Hosting", text: "Geplantes Hosting für die Dienste der Gruppe. Noch im Aufbau." },
  {
    icon: "git",
    title: "Plattform & Automatisierung",
    text: "Ziel: gemeinsame Bausteine und automatisierte Abläufe, damit neue Dienste reproduzierbar in den Betrieb gehen.",
  },
  {
    icon: "shield",
    title: "Sicherheit & Datenschutz",
    text: "Ziel: sichere Konfiguration, geordnete Datenhaltung und datensparsamer Betrieb.",
  },
];

/* Infrastruktur */

export const infraChecks: readonly CheckItem[] = [
  { lead: "Eigene Hardware in Europa als Ziel:", text: "Wir wollen wissen, wo unsere Systeme stehen." },
  { lead: "Automatisiert und reproduzierbar:", text: "Umgebungen sollen sich aus ihrer Beschreibung neu aufbauen lassen." },
  { lead: "Redundanz als Ziel:", text: "Kritische Komponenten sollen redundant ausgelegt werden." },
  { lead: "Sichtbar im Betrieb:", text: "Messwerte und Alarme gehören zum Zielbild." },
];

export const layers: readonly LayerItem[] = [
  { icon: "box", name: "Dienste", description: "Ziel: die Dienste der VylarisGroup.", highlight: true },
  { icon: "git", name: "Plattform", description: "Geplant: ein fester, automatisierter Weg vom Code in den Betrieb." },
  { icon: "cpu", name: "Rechenschicht", description: "Ziel: Dienste voneinander getrennt, Leistung flexibel verteilbar." },
  { icon: "hdd", name: "Speicherschicht", description: "Ziel: redundante Datenhaltung mit regelmäßigen Sicherungen." },
  {
    icon: "network",
    name: "Netzwerk",
    description: "Ziel: getrennte, abgesicherte Wege für internen und öffentlichen Datenverkehr.",
  },
  { icon: "pin", name: "Standort", description: "Ziel: eigene Hardware in Europa.", highlight: true },
];

/* Grundsätze */

export const principles: readonly PrincipleItem[] = [
  {
    icon: "pin",
    title: "Europäisch gedacht",
    text: "Unsere Systeme sollen in Europa stehen und unter europäischem Recht laufen. Das schafft Klarheit über Zuständigkeiten.",
  },
  {
    icon: "lock",
    title: "Datenschutz als Anforderung",
    text: "Wir erheben nur, was ein Dienst für seine Aufgabe braucht. Datenschutz gehört in die Architektur, nicht ans Ende des Projekts.",
  },
  {
    icon: "eye",
    title: "Kein Tracking",
    text: "Keine Tracker, keine Werbenetzwerke. Diese Website zeigt es: keine Cookies, alles von der eigenen Domain.",
  },
  {
    icon: "refresh",
    title: "Reproduzierbar statt Handarbeit",
    text: "Was sich beschreiben lässt, beschreiben wir als Code. Das macht Änderungen nachvollziehbar und Fehlerbehebungen reproduzierbar.",
  },
  {
    icon: "layers",
    title: "Ausfälle einplanen",
    text: "Kritische Komponenten sollen redundant ausgelegt werden. Wir rechnen mit dem Ausfall eines Bauteils, statt darauf zu hoffen, dass er nie eintritt.",
  },
  {
    icon: "book",
    title: "Ehrlich kommunizieren",
    text: "Wir schreiben nur, was stimmt. Was noch im Aufbau ist, nennen wir so und stellen es nicht als fertiges Angebot dar.",
  },
];

/* Ökosystem */

export const brands: readonly EcoBrand[] = [
  {
    name: "VylarisData",
    sub: "vylarisdata.com",
    icon: "server",
    current: { statusLabel: "Du bist hier" },
    text: "Software Development & Technology. Wir bauen die technische Basis auf – VylarisData wird zukünftig das Hosting der VylarisGroup.",
    action: { href: "/ueber-uns/", label: "Über VylarisData", icon: "arrow" },
  },
  {
    name: "VylarisGroupEurope",
    sub: "vylaris.eu",
    icon: "globe",
    text: "Der offizielle europäische Zweig der Gruppe, geleitet von Lucas Wilms. Er stellt die europäische Rechts- und Unternehmensstruktur und bietet kostenlose Open-Source-Dienste auf eigener, DSGVO-konformer Infrastruktur in Europa an.",
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
    text: "CircleUpWilms ist Inhaber der Marke VylarisData. Lucas Wilms, der auch den europäischen Zweig leitet, arbeitet dort im Bereich Webhosting und IT-Services.",
    action: { href: "/impressum/", label: "Impressum", icon: "arrow" },
  },
];

/* Roadmap */

export const roadmap: readonly StepItem[] = [
  {
    title: "Fundament",
    text: "Ziel: Architektur, Infrastruktur und Betriebsprozesse aufbauen und absichern.",
    status: { tone: "info", label: "Im Aufbau" },
  },
  {
    title: "Übernahme der Dienste",
    text: "Ziel: Dienste der VylarisGroup schrittweise auf die neue Infrastruktur bringen.",
    status: { tone: "warn", label: "Geplant" },
  },
  {
    title: "Betrieb & Ausbau",
    text: "Ziel: laufender Betrieb, Überwachung und Weiterentwicklung der Plattform.",
    status: { tone: "warn", label: "Geplant" },
  },
];

/* Technologie */

export const workPrinciples: readonly string[] = [
  "Ziel: Quellcode unter Versionskontrolle, damit jede Änderung nachvollziehbar bleibt",
  "Ziel: automatisierte Abläufe statt manueller Schritte",
  "Ziel: Konfiguration als Code, damit Umgebungen reproduzierbar bleiben",
  "Grundsatz: Sicherheit und Datenschutz von Beginn an mitdenken",
];

export const chipGroups: readonly ChipGroupData[] = [
  { caption: "Werte der VylarisGroup", items: [{ label: "Open Source", blue: true }, { label: "Eigenentwicklung" }] },
  { caption: "Unsere Ziele", items: [{ label: "Automatisierung" }, { label: "Reproduzierbar" }] },
];

/* FAQ */

export const faq: readonly FaqItem[] = [
  {
    q: "Kann ich bei VylarisData schon Hosting buchen?",
    a: "Nein. Die Infrastruktur ist im Aufbau, und VylarisData wird erst zukünftig das Hosting der VylarisGroup übernehmen. Ein fertiges Angebot für Kunden gibt es derzeit nicht.",
  },
  {
    q: "Wer steckt hinter VylarisData?",
    a: "VylarisData ist eine Marke von CircleUpWilms und gehört zur VylarisGroup. Unser Geschäftsbereich ist Software Development & Technology.",
  },
  {
    q: "Wo sollen die Systeme stehen?",
    a: "Wir wollen eigene Systeme in Europa betreiben. Konkrete Standorte nennen wir hier noch nicht. Wir wollen nichts versprechen, was wir noch nicht belegen können.",
  },
  {
    q: "Was ist der Unterschied zu VylarisGroupEurope?",
    a: "VylarisGroupEurope (vylaris.eu) ist der offizielle europäische Zweig der Gruppe. Er bringt die europäische Rechts- und Unternehmensstruktur mit und hat die Aufgabe, hochverfügbares Hosting und Server-Infrastruktur für die Dienste bereitzustellen. VylarisData ist die Marke für Software Development & Technology und wird zukünftig das Hosting der VylarisGroup.",
  },
  {
    q: "Setzt diese Website Cookies oder Tracker ein?",
    a: "Nein. Wir setzen keine Cookies und nutzen kein Tracking. Schriften und Skripte kommen von derselben Domain. Nur deine Wahl zwischen hellem, dunklem oder dem Systemdesign speichert dein Browser lokal.",
  },
  {
    q: "Wie erreiche ich VylarisData?",
    a: (
      <p>
        Über die Kontaktseite der VylarisGroup unter{" "}
        <A className="link" href={site.links.contact}>
          vylaris.eu/contact
        </A>
        . Dort kannst du Anfragen stellen oder Tickets eröffnen. Eine eigene Kontaktadresse für VylarisData gibt es nicht.
      </p>
    ),
  },
];

/* Abschluss-CTA */

export const contactCta = {
  text: "Du hast eine Frage zu VylarisData oder zur Technik der VylarisGroup? Du erreichst uns über die Kontaktseite der VylarisGroup (vylaris.eu/contact). Wie das genau geht, steht auf unserer Seite „Kontakt“.",
  primary: { href: "/kontakt/", label: "So erreichst du uns", icon: "mail" },
  secondary: { href: "/oekosystem/", label: "Zum Ökosystem" },
} as const;
