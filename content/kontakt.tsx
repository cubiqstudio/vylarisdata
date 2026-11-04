import type { Crumb, FaqItem, StepItem } from "@/components/ui";
import { A } from "@/components/ui";
import type { KontaktBrand } from "@/components/sections/kontakt/KontaktBrandCard";
import type { FaqAside } from "@/components/sections/kontakt/FaqSplit";
import type { KontaktTileData } from "@/components/sections/kontakt/KontaktTile";
import type { RuleTileData } from "@/components/sections/kontakt/RuleTile";
import { site } from "@/content/site";

/** Daten der Seite "Kontakt". Markup liegt in den Komponenten, hier nur Inhalt. */

export const meta = {
  title: "Kontakt",
  description:
    "So erreichst du VylarisData: Fragen, Hosting-Anfragen, Sicherheitslücken und Partnerschaften laufen über das Ticketsystem von VylarisGroupEurope.",
  path: "/kontakt/",
} as const;

/* -------------------------------------------------------------------- Hero */

export const crumbs: readonly Crumb[] = [{ label: "Start", href: "/" }, { label: "Kontakt" }];

export const hero = {
  eyebrow: "Offizieller Kontaktweg",
  title: "Kontakt zu VylarisData",
  lead: "Anfragen an VylarisData laufen über das Kontakt- und Ticketsystem von VylarisGroupEurope unter vylaris.eu/contact – für Fragen, Hosting-Anfragen, Sicherheitsmeldungen und Partnerschaften.",
} as const;

/* ------------------------------------------------------------------ Themen */

export const topicsHead = {
  id: "anliegen-h",
  eyebrow: "Vier Themen",
  title: "Worum geht es dir?",
  lead: "Alle vier Themen laufen über dasselbe Ticketsystem unter vylaris.eu/contact. Schreibe im Ticket, worum es geht.",
} as const;

export const topics: readonly KontaktTileData[] = [
  {
    icon: "info",
    title: "Allgemeine Fragen",
    text: "Du willst wissen, was VylarisData ist, wie wir zur VylarisGroup gehören oder wie es mit der Infrastruktur weitergeht? Stelle deine Frage im Ticket.",
  },
  {
    icon: "server",
    title: "Hosting-Anfrage für Projekte",
    text: "Du hast ein Vorhaben, das eines Tages bei uns laufen könnte? Beschreibe es im Ticket. VylarisData soll künftig das Hosting der VylarisGroup werden, die Infrastruktur ist im Aufbau.",
  },
  {
    icon: "shield",
    title: "Sicherheitslücke melden",
    text: (
      <>
        Du hast ein Problem entdeckt, das die Sicherheit dieser Website oder der entstehenden Infrastruktur betrifft?
        Melde es über das Ticketsystem und beachte die{" "}
        <A className="link" href="#sicherheit">
          Hinweise zur Meldung
        </A>
        .
      </>
    ),
  },
  {
    icon: "users",
    title: "Partnerschaften",
    text: "Du möchtest etwas gemeinsam aufbauen, Wissen teilen oder dein Projekt mit dem Vylaris-Ökosystem verbinden? Beschreibe im Ticket, woran du arbeitest und wo eine Zusammenarbeit passen könnte.",
  },
];

/* ------------------------------------------------------------------ Ablauf */

export const flowHead = {
  id: "ablauf-h",
  eyebrow: "Ablauf",
  title: "So erreichst du uns",
  lead: "Drei Schritte genügen. Du brauchst kein Konto auf dieser Website, denn hier gibt es weder Formular noch Login.",
} as const;

export const flowSteps: readonly StepItem[] = [
  {
    title: "Anliegen wählen",
    text: "Überlege, ob es um eine allgemeine Frage, eine Hosting-Anfrage, eine Sicherheitsmeldung oder eine Partnerschaft geht.",
  },
  {
    title: "Ticket eröffnen",
    text: "Öffne das Kontakt- und Ticketsystem von VylarisGroupEurope und beschreibe dein Anliegen in eigenen Worten.",
  },
  {
    title: "Antwort abwarten",
    text: "Unser Ziel ist, auf Anliegen zu antworten. Zusagen zu Reaktionszeiten machen wir nicht.",
  },
];

/* ----------------------------------------------------------------- Anfrage */

export type RequestPoint = { label: string; text: string };

export const requestHead = {
  id: "anfrage-h",
  eyebrow: "Ticket schreiben",
  title: "Was in eine gute Anfrage gehört",
  lead: "Je klarer dein Anliegen beschrieben ist, desto weniger Rückfragen sind nötig. Diese Punkte helfen fast immer:",
} as const;

export const requestPoints: readonly RequestPoint[] = [
  { label: "Thema:", text: "ein Satz, der das Anliegen zusammenfasst, zum Beispiel „Hosting-Anfrage für ein Open-Source-Projekt“." },
  { label: "Ziel:", text: "dein Ziel, nicht nur die vermutete Lösung." },
  { label: "Kontext:", text: "welche Dienste, Seiten oder Technologien betroffen oder gewünscht sind." },
  { label: "Stand:", text: "Idee, laufendes Projekt oder konkreter Umzug." },
  { label: "Bisherige Schritte:", text: "bei Fragen und Problemen spart das beiden Seiten Zeit." },
  { label: "Erreichbarkeit:", text: "die Angaben, die das Ticketsystem dafür vorsieht." },
];

export const note = {
  eyebrow: "Merksatz",
  text: "Wer dein Ticket liest, kennt dein Projekt nicht. Ziel und Kontext in wenigen Sätzen helfen mehr als eine lange Vorgeschichte.",
  chips: ["Thema", "Ziel", "Kontext", "Stand", "Bisherige Schritte", "Erreichbarkeit"],
} as const;

/* ------------------------------------------------------------- Sicherheit */

export const securityHead = {
  id: "sicherheit-h",
  eyebrow: "Sicherheitshinweise",
  title: "Sicherheitslücken verantwortungsvoll melden",
  lead: "Wer Infrastruktur aufbaut, ist auf Hinweise von außen angewiesen. Wenn du etwas findest, melde es uns bitte, bevor du es öffentlich machst. So können wir es in Ruhe prüfen und gegebenenfalls beheben.",
} as const;

export const securityRules: readonly RuleTileData[] = [
  {
    icon: "check",
    title: "Das hilft uns",
    list: "checks",
    items: [
      <>
        Melde den Fund über <strong>vylaris.eu/contact</strong> und schreibe gleich zu Beginn, dass es um Sicherheit geht.
      </>,
      <>
        Beschreibe, <strong>wo</strong> du das Problem gefunden hast und <strong>wie</strong> man es nachvollziehen kann.
      </>,
      <>
        Schildere die mögliche <strong>Auswirkung</strong> in deinen Worten.
      </>,
      "Gib uns Zeit, den Hinweis zu prüfen.",
      "Beschränke dich auf das, was zum Nachweis nötig ist.",
    ],
  },
  {
    icon: "x",
    iconTone: "indigo",
    title: "Bitte unterlasse",
    list: "dots",
    items: [
      "Daten Dritter auslesen, verändern oder löschen.",
      "Systeme durch Überlastung, Massenabfragen oder Spam beeinträchtigen.",
      "Social Engineering gegen Mitglieder oder Mitwirkende der VylarisGroup betreiben.",
      "Gefundene Zugänge nutzen, um weiter ins System vorzudringen.",
      "Eine Lücke öffentlich machen oder an Dritte weitergeben, bevor wir sie prüfen konnten.",
    ],
  },
];

export const securityCallout = (
  <>
    <strong>Unser Grundsatz:</strong> Wir wollen Meldungen ernst nehmen und prüfen. Feste Reaktionszeiten sagen wir nicht
    zu, weil unsere Infrastruktur noch im Aufbau ist und wir nichts versprechen wollen, was wir nicht belegen können.
  </>
);

/* ----------------------------------------------------------------- Partner */

export const partnerHead = {
  id: "partner-h",
  eyebrow: "Allianz CH & EU",
  title: "Der Kontakt läuft über VylarisGroupEurope",
  lead: "VylarisData gehört zur VylarisGroup. Der Schweizer Verein trägt die Idee, der europäische Zweig stellt Rechtsstruktur und Infrastruktur bereit; beide arbeiten Hand in Hand. Der Kontakt läuft über das Kontakt- und Ticketsystem des europäischen Zweigs.",
} as const;

export const brands: readonly KontaktBrand[] = [
  {
    name: "VylarisGroupEurope",
    sub: "vylaris.eu",
    icon: "globe",
    current: true,
    text: "Der offizielle europäische Zweig der Gruppe, geleitet von Lucas Wilms. Auf seinen Seiten findest du Kontakt & Tickets, den Systemstatus und den Blog.",
    points: [
      "Kontakt & Tickets für Anfragen an VylarisData",
      "Systemstatus von VylarisGroupEurope",
      "Blog von VylarisGroupEurope",
    ],
    action: { href: site.links.eu, label: "vylaris.eu besuchen", icon: "ext" },
  },
  {
    name: "VylarisGroup Schweiz",
    sub: "vylaris.ch",
    icon: "users",
    iconTone: "indigo",
    text: "Der Ursprungsverein der Gruppe ist aus einem Homelab und einem Podcast gewachsen. Auf seiner Idee baut das Vylaris-Ökosystem auf.",
    points: [
      "Ursprung und Idee der VylarisGroup",
      "Verein mit fünf Mitgliedern, davon drei im Vorstand",
      "Partner des europäischen Zweigs",
    ],
    action: { href: site.links.ch, label: "vylaris.ch besuchen", icon: "ext" },
  },
];

/* ------------------------------------------------------------------ Status */

export const statusHead = {
  id: "status-h",
  eyebrow: "Status, Blog & Rechtliches",
  title: "Erst nachsehen, dann nachfragen",
  lead: "Manche Fragen klären sich vorab. Systemstatus und Blog findest du bei VylarisGroupEurope, Impressum und Datenschutz direkt auf dieser Website.",
} as const;

export const resources: readonly KontaktTileData[] = [
  {
    icon: "activity",
    title: "Systemstatus",
    text: "Hier findest du den Systemstatus der VylarisGroup-Dienste. Wenn etwas nicht erreichbar scheint, schau zuerst dort nach, bevor du ein Ticket öffnest.",
    href: site.links.status,
    more: "vylaris.eu/status öffnen",
    moreIcon: "ext",
  },
  {
    icon: "book",
    title: "Blog",
    text: "Der Blog von VylarisGroupEurope. Ein Blick hinein lohnt sich, bevor du eine allgemeine Frage stellst.",
    href: site.links.blog,
    more: "vylaris.eu/blog öffnen",
    moreIcon: "ext",
  },
  {
    icon: "building",
    title: "Impressum",
    text: "Angaben zum Anbieter dieser Website und zur Marke VylarisData.",
    href: "/impressum/",
    more: "Zum Impressum",
  },
  {
    icon: "lock",
    title: "Datenschutz",
    text: "Welche Daten beim Besuch dieser Website anfallen und wie wir damit umgehen.",
    href: "/datenschutz/",
    more: "Zur Datenschutzerklärung",
  },
];

export const privacyCallout = (
  <>
    <strong>Diese Website kommt ohne Cookies und ohne Tracking aus.</strong> Schriften und Skripte liefern wir von
    derselben Domain aus. Nur deine Wahl zwischen hellem, dunklem oder Geräte-Design bleibt lokal in deinem Browser
    gespeichert.
  </>
);

/* --------------------------------------------------------------------- FAQ */

export const faqHead = {
  id: "faq-h",
  eyebrow: "FAQ",
  title: "Häufige Fragen zum Kontakt",
} as const;

export const faq: readonly FaqItem[] = [
  {
    q: "Warum finde ich hier keine E-Mail-Adresse oder Telefonnummer?",
    a: "Der Kontakt läuft über das Kontakt- und Ticketsystem von VylarisGroupEurope unter vylaris.eu/contact. Eine E-Mail-Adresse oder Telefonnummer geben wir auf dieser Website nicht an.",
  },
  {
    q: "Kann ich schon Hosting bei VylarisData buchen?",
    a: "Noch nicht. VylarisData soll künftig das Hosting der VylarisGroup übernehmen; die Infrastruktur dafür ist im Aufbau. Du kannst dein Vorhaben aber schon im Ticket beschreiben. Unser Grundsatz ist, offen über den Stand zu sprechen.",
  },
  {
    q: "Wie melde ich eine Sicherheitslücke?",
    a: (
      <p>
        Öffne ein Ticket über vylaris.eu/contact und schreibe gleich zu Beginn, dass es um eine Sicherheitslücke geht.
        Beschreibe, wo du das Problem gefunden hast und wie man es nachvollziehen kann. Die{" "}
        <A className="link" href="#sicherheit">
          Hinweise zur Meldung
        </A>{" "}
        weiter oben auf dieser Seite helfen dir dabei.
      </p>
    ),
  },
  {
    q: "Wo finde ich den Systemstatus?",
    a: "Den Systemstatus von VylarisGroupEurope findest du unter vylaris.eu/status. Der Blog liegt unter vylaris.eu/blog.",
  },
  {
    q: "Erfasst diese Website Daten über mich?",
    a: (
      <p>
        Diese Website setzt keine Cookies und nutzt kein Tracking. Mehr dazu steht in der{" "}
        <A className="link" href="/datenschutz/">
          Datenschutzerklärung
        </A>
        .
      </p>
    ),
  },
];

export const faqAside: FaqAside = {
  icon: "shield",
  title: "Der offizielle Weg",
  text: "Der offizielle Weg zu VylarisData ist das Ticketsystem unter vylaris.eu/contact. Wenn dir jemand im Namen von VylarisData über einen anderen Weg schreibt, melde dich bitte über vylaris.eu/contact und frage nach.",
};
