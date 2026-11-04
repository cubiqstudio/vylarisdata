import type { ReactNode } from "react";
import { A, type FaqItem, type IconName, type TimelineItem } from "@/components/ui";
import type { AllianceTile } from "@/components/sections/oekosystem/AllianceFlow";
import type { EcoBrand } from "@/components/sections/oekosystem/EcoBrandCard";
import type { LinkTileData } from "@/components/sections/oekosystem/LinkTile";
import type { DefinitionRow } from "@/components/sections/oekosystem/Panel";
import type { Responsibility } from "@/components/sections/oekosystem/ResponsibilityList";
import { site } from "@/content/site";

/** Daten der Seite "Ökosystem". Markup liegt in den Komponenten, hier nur Inhalt. */

export const meta = {
  title: "Ökosystem – VylarisGroup und VylarisData",
  description:
    "Wer gehört zur VylarisGroup? VylarisGroup Schweiz, VylarisGroupEurope, VylarisData und VylarisSpace im Überblick – mit Aufgaben und Stand.",
  path: "/oekosystem/",
} as const;

/* ------------------------------------------------------------ Sektionsköpfe */

export type HeadData = { id: string; eyebrow: string; title: string; lead?: string };

export const heads = {
  overview: {
    id: "uebersicht-h",
    eyebrow: "Übersicht",
    title: "Die VylarisGroup im Überblick.",
    lead: "Unter dem Dach der VylarisGroup arbeiten vier Teile zusammen. Jeder hat eine eigene Aufgabe, gemeinsam bilden sie das Vylaris-Ökosystem. Diese Seite gehört zu VylarisData.",
  },
  responsibilities: {
    id: "wmw-h",
    eyebrow: "Zuständigkeiten",
    title: "Wer macht was.",
  },
  values: {
    id: "werte-h",
    eyebrow: "Werte & Grundsätze",
    title: "Woran wir uns orientieren.",
    lead: "Diese vier Werte nennt VylarisGroupEurope für ihre Dienste. Für VylarisData sind sie Orientierung und Ziel, keine Zusage für etwas, das noch im Aufbau ist.",
  },
  links: {
    id: "links-h",
    eyebrow: "Weiterlesen",
    title: "Die VylarisGroup entdecken.",
    lead: "Die meisten Inhalte der Gruppe liegen auf den Websites von VylarisGroup Schweiz und VylarisGroupEurope. Hier sind die wichtigsten Einstiege. Alle Links öffnen in einem neuen Tab.",
  },
} as const satisfies Record<string, HeadData>;

/** Kopf mit Text neben Visual (Eyebrow, Titel, Absätze). */
export type CopyData = { id: string; eyebrow: string; title: string };

export const copies = {
  alliance: { id: "allianz-h", eyebrow: "Allianz CH & EU", title: "Schweiz und Europa arbeiten zusammen." },
  circleUpWilms: { id: "cuw-h", eyebrow: "CircleUpWilms", title: "CircleUpWilms und VylarisData." },
  progress: { id: "weg-h", eyebrow: "Aufbau und Stand", title: "Was besteht und was im Aufbau ist." },
  faq: { id: "faq-h", eyebrow: "Häufige Fragen", title: "Fragen zum Ökosystem." },
} as const satisfies Record<string, CopyData>;

/* ------------------------------------------------------------------- Übersicht */

export const groupPanel = {
  title: "VylarisGroup",
  subtitle: "Das Dach des Ökosystems",
  text: "VylarisData, die Marke von CircleUpWilms, gehört zur VylarisGroup. Darunter ergänzen sich vier Bausteine, die du hier kennenlernst.",
} as const;

export const brands: readonly EcoBrand[] = [
  {
    name: "VylarisGroup Schweiz",
    sub: "vylaris.ch",
    icon: "users",
    status: { tone: "ok", label: "Besteht" },
    text: "Der Verein hinter der Idee. Er ist aus einem Homelab und einem Podcast entstanden und hat fünf Mitglieder, davon drei im Vorstand.",
    action: { href: site.links.ch, label: "vylaris.ch besuchen", icon: "ext" },
  },
  {
    name: "VylarisGroupEurope",
    sub: "vylaris.eu",
    icon: "building",
    iconTone: "indigo",
    status: { tone: "ok", label: "Besteht" },
    text: "Der offizielle europäische Zweig, geleitet von Lucas Wilms. Seine Aufgabe ist die offizielle europäische Rechts- und Unternehmensstruktur sowie hochverfügbares Hosting und Serverinfrastruktur für alle Dienste. Er bietet freie Open-Source-SaaS-Dienste auf eigener Infrastruktur in Europa an.",
    action: { href: site.links.eu, label: "vylaris.eu besuchen", icon: "ext" },
  },
  {
    name: "VylarisData",
    sub: "vylarisdata.com · Du bist hier",
    icon: "cpu",
    status: { tone: "warn", label: "Im Aufbau" },
    text: "Geschäftsbereich: Software Development & Technology. VylarisData soll künftig das Hosting der VylarisGroup übernehmen. Die Infrastruktur dafür ist im Aufbau.",
    current: true,
    action: { href: "/infrastruktur/", label: "Zur Infrastruktur" },
  },
  {
    name: "VylarisSpace",
    sub: "Hosting-Panel",
    icon: "server",
    iconTone: "indigo",
    status: { tone: "info", label: "Demnächst" },
    text: "Ein Panel für Websites, E-Mail und Datenbanken, das auf eigener Hardware in Europa betrieben werden soll. Noch ist es nicht verfügbar.",
    action: { href: site.links.services, label: "Dienste ansehen", icon: "ext" },
  },
];

/* --------------------------------------------------------------------- Allianz */

export const allianceParagraph =
  "Die VylarisGroup betreibt mit vylaris.ch und vylaris.eu zwei Websites, die bewusst zusammenarbeiten. Wir nennen das die Allianz CH & EU: Der Schweizer Verein trägt die Idee, der europäische Zweig steuert Rechtsstruktur und Infrastruktur bei.";

export const allianceChecks: readonly ReactNode[] = [
  <>
    <strong>VylarisGroup Schweiz</strong> ist der Verein hinter der Idee.
  </>,
  <>
    <strong>VylarisGroupEurope</strong> hat die offizielle europäische Rechts- und Unternehmensstruktur zur Aufgabe.
  </>,
  <>
    <strong>VylarisData</strong> soll künftig das Hosting der VylarisGroup übernehmen.
  </>,
];

export const allianceLink = { href: site.links.allianz, label: "Allianz CH & EU auf vylaris.eu lesen" } as const;

export const allianceTop: AllianceTile = {
  icon: "users",
  title: "VylarisGroup Schweiz",
  text: "vylaris.ch · der Ursprungsverein, der die Idee trägt.",
};

export const allianceBottom: AllianceTile = {
  icon: "building",
  iconTone: "indigo",
  title: "VylarisGroupEurope",
  text: "vylaris.eu · der europäische Zweig mit Rechtsstruktur und Infrastruktur.",
};

export const allianceBetween = "Hand in Hand";

/* -------------------------------------------------------------- CircleUpWilms */

export const circleUpWilmsParagraphs: readonly string[] = [
  "VylarisData ist eine Marke von CircleUpWilms und gehört zur VylarisGroup. Der Geschäftsbereich heißt Software Development & Technology.",
  "Die VylarisGroupEurope wird von Lucas Wilms (CircleUpWilms) geleitet, Experte für Webhosting und IT-Services.",
];

export const circleUpWilmsPanel = {
  title: "CircleUpWilms",
  subtitle: "Markeninhaber von VylarisData",
} as const;

export const circleUpWilmsRows: readonly DefinitionRow[] = [
  { term: "Marke", value: "VylarisData" },
  { term: "Geschäftsbereich", value: "Software Development & Technology" },
  { term: "Zugehörigkeit", value: "VylarisGroup" },
  { term: "Leitung VylarisGroupEurope", value: "Lucas Wilms (CircleUpWilms), Experte für Webhosting & IT-Services" },
  { term: "Website", value: <A href="/">vylarisdata.com</A> },
];

/* ------------------------------------------------------------ Wer macht was */

export const responsibilities: readonly Responsibility[] = [
  {
    icon: "users",
    name: "Idee & Verein",
    status: { tone: "ok", label: "Besteht" },
    brand: "VylarisGroup Schweiz",
    text: "Der Ursprungsverein trägt die Idee.",
  },
  {
    icon: "building",
    iconTone: "indigo",
    name: "Rechtsstruktur & Infrastruktur",
    status: { tone: "info", label: "Aufgabe" },
    brand: "VylarisGroupEurope",
    text: "Die offizielle europäische Rechts- und Unternehmensstruktur. Dazu gehören hochverfügbares Hosting und Serverinfrastruktur für alle Dienste. Besteht bereits: die Website und das Angebot freier SaaS-Dienste.",
  },
  {
    icon: "cpu",
    name: "Technologie & Hosting-Plattform",
    status: { tone: "warn", label: "Im Aufbau" },
    brand: "VylarisData",
    text: "Software Development & Technology und die technische Plattform. Soll künftig das Hosting der VylarisGroup übernehmen.",
    highlight: true,
  },
  {
    icon: "server",
    iconTone: "indigo",
    name: "Hosting-Panel",
    status: { tone: "info", label: "Demnächst" },
    brand: "VylarisSpace",
    text: "Panel für Websites, E-Mail und Datenbanken, das auf eigener Hardware in Europa betrieben werden soll.",
  },
];

/* ----------------------------------------------------------------------- Stand */

export const progressText =
  "Ein Blick auf den aktuellen Stand der vier Bausteine: was besteht, was im Aufbau ist und was angekündigt wurde. Jahreszahlen und Termine nennen wir nicht.";

export const timeline: readonly TimelineItem[] = [
  {
    title: "Homelab und Podcast",
    status: { tone: "info", label: "Ursprung" },
    text: "Am Anfang stehen ein Homelab und ein Podcast, aus denen der Verein VylarisGroup Schweiz gewachsen ist.",
  },
  {
    title: "VylarisGroup Schweiz",
    status: { tone: "ok", label: "Besteht" },
    text: "Der Ursprungsverein trägt die Idee der Gruppe und arbeitet mit dem europäischen Zweig Hand in Hand.",
  },
  {
    title: "VylarisGroupEurope",
    status: { tone: "ok", label: "Besteht" },
    text: "Der europäische Zweig bietet kostenlose Open-Source-Dienste ohne Tracking auf eigener, DSGVO-konformer Infrastruktur in Europa an. Rechtsstruktur und Hosting für alle Dienste sind seine Aufgabe.",
  },
  {
    title: "VylarisData",
    status: { tone: "warn", label: "Im Aufbau" },
    text: "Die Technologie-Marke baut die Plattform auf, die künftig das Hosting der VylarisGroup übernehmen soll. Wir versprechen nichts, was noch nicht läuft.",
  },
  {
    title: "VylarisSpace",
    status: { tone: "info", label: "Demnächst" },
    text: "Das Hosting-Panel für Websites, E-Mail und Datenbanken ist angekündigt und noch nicht verfügbar.",
  },
];

/* ----------------------------------------------------------------------- Werte */

export type ValueItem = { icon: IconName; title: string; text: string };

export const values: readonly ValueItem[] = [
  {
    icon: "code",
    title: "Open Source",
    text: "„Open Source & Eigenentwicklung“ ist ein erklärter Wert von VylarisGroupEurope. Daran orientieren wir uns.",
  },
  {
    icon: "heart",
    title: "Paywall-frei",
    text: "VylarisGroupEurope garantiert, dass ihre freien SaaS-Dienste kostenlos bleiben (0 EUR). An diesem Maßstab orientieren wir uns.",
  },
  {
    icon: "pin",
    title: "Europäisches Hosting",
    text: "„Hochsicheres europäisches Hosting“ ist ein erklärter Wert von VylarisGroupEurope. Unser Ziel ist, Dienste auf eigener Hardware in Europa zu betreiben, noch keine Zusage.",
  },
  {
    icon: "shield",
    title: "Datenschutz",
    text: "VylarisGroupEurope betreibt ihre Dienste ohne Tracking auf DSGVO-konformer Infrastruktur in Europa; für VylarisData ist das unser Ziel. Diese Website setzt keine Cookies und lädt Schriften und Skripte von der eigenen Domain.",
  },
];

/* ----------------------------------------------------------------- Weiterlesen */

export const linkTiles: readonly LinkTileData[] = [
  {
    icon: "layers",
    iconTone: "indigo",
    title: "Dienste",
    text: "Die kostenlosen Open-Source-SaaS-Dienste von VylarisGroupEurope.",
    href: site.links.services,
    more: "vylaris.eu/services",
  },
  {
    icon: "activity",
    iconTone: "indigo",
    title: "Systemstatus",
    text: "Der Systemstatus der Dienste von VylarisGroupEurope.",
    href: site.links.status,
    more: "vylaris.eu/status",
  },
  {
    icon: "mail",
    iconTone: "indigo",
    title: "Kontakt & Tickets",
    text: "So erreichst du die VylarisGroup.",
    href: site.links.contact,
    more: "vylaris.eu/contact",
  },
  {
    icon: "book",
    iconTone: "indigo",
    title: "Blog",
    text: "Neuigkeiten und Hintergründe von VylarisGroupEurope.",
    href: site.links.blog,
    more: "vylaris.eu/blog",
  },
  {
    icon: "info",
    iconTone: "indigo",
    title: "Über VylarisGroupEurope",
    text: "Mehr über den europäischen Zweig der Gruppe.",
    href: `${site.links.eu}/about`,
    more: "vylaris.eu/about",
  },
  {
    icon: "users",
    title: "VylarisGroup Schweiz",
    text: "Der Schweizer Ursprungsverein hinter der Idee.",
    href: site.links.ch,
    more: "vylaris.ch",
  },
];

/* ------------------------------------------------------------------------ FAQ */

export const faqText = "Kurze Antworten zu VylarisData, VylarisGroupEurope und VylarisSpace.";

export const faq: readonly FaqItem[] = [
  {
    q: "Was ist der Unterschied zwischen VylarisData und VylarisGroupEurope?",
    a: "VylarisGroupEurope ist der europäische Zweig der Gruppe: Seine Aufgabe ist die rechtliche Struktur, außerdem bietet er Dienste auf eigener Infrastruktur an. VylarisData ist die Technologie-Marke: Wir entwickeln Software und bauen eine Hosting-Plattform auf.",
  },
  {
    q: "Gehört VylarisData zu CircleUpWilms oder zur VylarisGroup?",
    a: "Zu beiden, auf unterschiedlicher Ebene. VylarisData ist eine Marke von CircleUpWilms und gehört zugleich zur VylarisGroup. Der Geschäftsbereich ist Software Development & Technology.",
  },
  {
    q: "Ist das Hosting von VylarisData schon verfügbar?",
    a: (
      <p>
        Nein. VylarisData soll künftig das Hosting der VylarisGroup übernehmen. Die Infrastruktur dafür ist im Aufbau,
        Termine nennen wir nicht. Aktuelle Informationen zu den bestehenden Diensten der Gruppe findest du im{" "}
        <A className="link" href={site.links.status}>
          Systemstatus von VylarisGroupEurope
        </A>
        .
      </p>
    ),
  },
  {
    q: "Was ist VylarisSpace?",
    a: "VylarisSpace ist ein Hosting-Panel für Websites, E-Mail und Datenbanken, das auf eigener Hardware in Europa laufen soll. Es ist angekündigt, aber noch nicht verfügbar.",
  },
  {
    q: "Wie erreiche ich VylarisData?",
    a: (
      <p>
        Über die Kontaktseite von VylarisGroupEurope unter{" "}
        <A className="link" href={site.links.contact}>
          vylaris.eu/contact
        </A>{" "}
        (Kontakt & Tickets). Eigene Kontaktdaten wie eine E-Mail-Adresse oder Telefonnummer veröffentlichen wir für
        VylarisData nicht. Mehr dazu findest du auf der{" "}
        <A className="link" href="/kontakt/">
          Kontaktseite
        </A>
        .
      </p>
    ),
  },
];
