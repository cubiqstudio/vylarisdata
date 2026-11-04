import type { FactItem, FaqItem, IconName, TimelineItem } from "@/components/ui";
import { A } from "@/components/ui";
import type { AudienceItem } from "@/components/sections/leistungen/AudienceCards";
import type { FieldContent } from "@/components/sections/leistungen/FieldSection";
import type { OverviewRow } from "@/components/sections/leistungen/OverviewTable";
import type { StrongPoint } from "@/components/sections/leistungen/StrongChecks";
import { site } from "@/content/site";

/** Daten der Seite "Leistungen". Markup liegt in den Komponenten, hier nur Inhalt. */

export const meta = {
  title: "Leistungen",
  description:
    "Softwareentwicklung, Plattform, Sicherheit und Hosting im Aufbau: Auftrag und Zielbild von VylarisData für die VylarisGroup.",
  path: "/leistungen/",
} as const;

/* ----------------------------------------------------------------- Überblick */

export const overview: readonly OverviewRow[] = [
  {
    name: "Softwareentwicklung",
    tone: "info",
    status: "Geschäftsbereich",
    text: "Marken, Dienste und Projekte der VylarisGroup.",
  },
  {
    name: "Hosting & Betrieb",
    tone: "warn",
    status: "Im Aufbau",
    text: "Dienste der gesamten VylarisGroup, sobald die Infrastruktur steht.",
  },
  {
    name: "Plattform & Automatisierung",
    tone: "warn",
    status: "Geplant",
    text: "Alle Dienste, die auf der gemeinsamen Basis laufen sollen.",
  },
  {
    name: "Sicherheit & Datenschutz",
    tone: "info",
    status: "Grundsatz",
    text: "Alle Leistungsfelder. Diese Website setzt keine Cookies und kein Tracking ein.",
  },
  {
    name: "Technologie-Partnerschaft",
    tone: "info",
    status: "Zielbild",
    text: "VylarisGroupEurope und VylarisGroup Schweiz.",
  },
];

/* ----------------------------------------------------------------- Einleitung */

export const introDetail: string =
  "Dazu gehören zwei Dinge. Erstens die Software selbst: Anwendungen, Schnittstellen und Werkzeuge für die Gruppe. Zweitens der Ort, an dem diese Software laufen soll. VylarisData übernimmt künftig das Hosting der VylarisGroup. Die Infrastruktur dafür ist im Aufbau. Deshalb trennen wir auf dieser Seite klar zwischen Ziel und aktuellem Stand.";

export const principles: readonly StrongPoint[] = [
  { lead: "Eigene Hardware in Europa", text: "als Ziel für die Infrastruktur." },
  { lead: "Kein Tracking", text: "und keine unnötige Datenhaltung." },
  { lead: "Verständliche Technik,", text: "die auch andere nach uns noch nachvollziehen können." },
];

export const facts: readonly FactItem[] = [
  { value: "Marke von CircleUpWilms", label: "Teil der VylarisGroup" },
  { value: "Software & Technology", label: "Unser Geschäftsbereich" },
  { value: "Hosting im Aufbau", label: "Künftig das Hosting der VylarisGroup" },
  { value: "Kein Tracking", label: "Keine Cookies auf dieser Website" },
];

/* ------------------------------------------------------------ Leistungsfeld 01 */

export type SoftwareTile = { icon: IconName; title: string; text: string };

export const softwareTiles: readonly SoftwareTile[] = [
  {
    icon: "code",
    title: "Anwendungen",
    text: "Ziel: Dienste und Oberflächen für die Marken und Projekte der VylarisGroup.",
  },
  {
    icon: "link",
    title: "Schnittstellen",
    text: "Schnittstellen, die Dienste klar definiert miteinander verbinden.",
  },
  {
    icon: "wrench",
    title: "Werkzeuge",
    text: "Interne Werkzeuge, die wiederkehrende Arbeit einfacher und weniger fehleranfällig machen sollen.",
  },
  {
    icon: "git",
    title: "Wartbarer Code",
    text: "Grundsatz: lesbar, getestet, dokumentiert und mit nachvollziehbarer Versionsgeschichte.",
  },
];

/* ----------------------------------------------- Leistungsfelder 02 bis 05 */

export const fields: readonly FieldContent[] = [
  {
    id: "hosting",
    band: true,
    reverse: true,
    eyebrow: "Leistungsfeld 02",
    title: "Hosting & Betrieb: Ziel ist eigene Hardware in Europa",
    status: { tone: "warn", label: "Im Aufbau" },
    lead: "VylarisData übernimmt künftig das Hosting der VylarisGroup. Die Infrastruktur dafür bauen wir gerade auf; für Kunden ist sie noch nicht verfügbar.",
    paragraphs: [
      "Unser Ziel ist ein Betrieb, den wir selbst kontrollieren: Hardware, Netzwerk und Betriebsabläufe sollen in unserer Hand liegen, die Server in Europa stehen.",
    ],
    points: [
      { lead: "Ziel:", text: "Hosting für Websites und Anwendungen der VylarisGroup auf eigener Hardware in Europa." },
      { lead: "Ziel:", text: "hohe Verfügbarkeit durch Redundanz und planbare Wartung." },
      { lead: "Grundsatz:", text: "Überwachung und Statusinformationen gehören von Anfang an dazu." },
      { lead: "Ziel:", text: "Dienste der Gruppe schrittweise statt in einem Schritt auf die Infrastruktur zu bringen." },
    ],
    link: { href: "/infrastruktur/", label: "Mehr zur Infrastruktur" },
    visual: {
      eyebrow: "Zielbild",
      layers: [
        { icon: "cloud", name: "Dienste", description: "Websites, Anwendungen und Dienste der VylarisGroup." },
        { icon: "layers", name: "Plattform", description: "Gemeinsame Bausteine für Auslieferung und Betrieb." },
        { icon: "server", name: "Server", description: "Eigene Hardware, im Aufbau.", highlight: true },
        { icon: "globe", name: "Europa", description: "Standort der Infrastruktur laut Zielbild." },
      ],
    },
  },
  {
    id: "plattform",
    eyebrow: "Leistungsfeld 03",
    title: "Plattform & Automatisierung",
    status: { tone: "warn", label: "Geplant" },
    lead: "Zielbild: Neue Dienste sollen schnell und zuverlässig in Betrieb gehen, ohne dass jedes Mal bei null begonnen wird.",
    paragraphs: [
      "Dafür wollen wir gemeinsame Bausteine schaffen, die jeder Dienst nutzen kann. Das Prinzip dahinter: Alles, was sich wiederholt, soll automatisiert werden. Alles, was automatisiert ist, soll beschrieben und versioniert sein.",
    ],
    points: [
      { lead: "Wiederverwendbare Bausteine", text: "für Auslieferung (Deployment), Konfiguration und Betrieb sind das Ziel." },
      {
        lead: "Automatisierte Auslieferung:",
        text: "Zielbild ist der Weg vom geprüften Code bis zum laufenden Dienst, ohne Handarbeit auf dem Server.",
      },
      {
        lead: "Konfiguration als Code:",
        text: "Grundsatz ist, dass Änderungen nachvollziehbar sind und sich rückgängig machen lassen.",
      },
      { lead: "Beobachtbarkeit:", text: "Logs und Kennzahlen sollen zeigen, wie es einem Dienst wirklich geht." },
    ],
    visual: {
      eyebrow: "Zielbild",
      layers: [
        { icon: "git", name: "Code", description: "Änderungen sollen versioniert entstehen und geprüft werden." },
        { icon: "box", name: "Build", description: "Reproduzierbar bauen und automatisiert testen." },
        { icon: "rocket", name: "Auslieferung", description: "Kontrollierte Auslieferung auf die Plattform.", highlight: true },
        { icon: "activity", name: "Betrieb", description: "Überwachung und Rückmeldung in die Entwicklung." },
      ],
    },
  },
  {
    id: "sicherheit",
    band: true,
    reverse: true,
    eyebrow: "Leistungsfeld 04",
    title: "Sicherheit & Datenschutz von Anfang an",
    lead: "Wir bedenken Sicherheit und Datenschutz schon beim Entwurf, nicht erst am Ende.",
    paragraphs: [
      "Dazu gehört auch, so wenige Daten wie möglich zu erheben. Diese Website zeigt es im Kleinen: Sie setzt keine Cookies und kein Tracking ein und lädt Schriften und Skripte nur von der eigenen Domain.",
    ],
    points: [
      { lead: "Datensparsamkeit", text: "als Grundsatz: Was wir nicht erheben, müssen wir nicht schützen." },
      {
        lead: "Sichere Konfiguration:",
        text: "Grundsatz sind geringste Rechte, getrennte Zugänge und nachvollziehbare Änderungen.",
      },
      {
        lead: "Gepflegte Systeme:",
        text: "Updates und Korrekturen sollen fester Teil des Betriebs sein, nicht ein Sonderfall.",
      },
      {
        lead: "Datenschutzrecht:",
        text: "Der Betrieb soll von Anfang an die Datenschutz-Grundverordnung (DSGVO) erfüllen.",
      },
    ],
    visual: {
      arrows: false,
      layers: [
        { icon: "eye", name: "Kein Tracking", description: "Keine Cookies, keine Analysedienste auf dieser Website.", highlight: true },
        { icon: "lock", name: "Zugriff", description: "Grundsatz: geringste Rechte und klar getrennte Zugänge." },
        { icon: "key", name: "Zugangsdaten", description: "Grundsatz: Passwörter und Schlüssel gehören nicht in Code oder Chat." },
        { icon: "refresh", name: "Pflege", description: "Ziel: regelmäßige Updates als fester Teil des Betriebs." },
      ],
    },
  },
  {
    id: "partner",
    eyebrow: "Leistungsfeld 05",
    title: "Technologie-Partnerschaft für die VylarisGroup",
    lead: "VylarisData ist die technische Seite des Ökosystems. Ziel ist eine enge Zusammenarbeit mit VylarisGroup Schweiz und VylarisGroupEurope.",
    paragraphs: [
      "Die beiden Seiten arbeiten Hand in Hand („Allianz CH & EU“): VylarisGroup Schweiz, der Ursprungsverein, trägt die Idee. VylarisGroupEurope bildet die rechtliche Struktur und hat die Aufgabe, hochverfügbares Hosting und Server-Infrastruktur für alle Dienste bereitzustellen. VylarisData soll künftig die technische Grundlage dafür liefern: Software, Plattform und, sobald sie steht, den Betrieb.",
      "VylarisGroupEurope kündigt mit VylarisSpace ein Hosting-Panel für Websites, E-Mail und Datenbanken auf eigener Hardware in Europa an, derzeit mit dem Hinweis „Coming Soon“ (bald verfügbar). Die Infrastruktur im Aufbau soll künftig solche Dienste der Gruppe tragen können.",
    ],
    points: [
      {
        lead: "Abgestimmte Planung:",
        text: "Ziel ist es, die technische Planung mit VylarisGroupEurope und VylarisGroup Schweiz abzustimmen.",
      },
      { lead: "Gemeinsame Bausteine", text: "als Grundsatz statt paralleler Insellösungen in jeder Marke." },
    ],
    link: { href: "/oekosystem/", label: "Mehr zum Ökosystem" },
    visual: {
      layers: [
        {
          icon: "users",
          name: "vylaris.ch",
          description: "VylarisGroup Schweiz: der Ursprungsverein, der die Idee trägt.",
        },
        {
          icon: "building",
          iconTone: "indigo",
          arrowBefore: "link",
          name: "vylaris.eu",
          description: "VylarisGroupEurope: rechtliche Struktur und Hosting-Ziel.",
        },
        {
          icon: "cpu",
          name: "VylarisData",
          description: "Software, Plattform und künftig das Hosting.",
          highlight: true,
        },
      ],
    },
  },
];

/* ---------------------------------------------------------------- Arbeitsweise */

export const workSteps: readonly TimelineItem[] = [
  {
    title: "Schritt 1: Anforderung klären",
    text: "Wir fragen nach, bevor wir bauen: Was soll der Dienst leisten, wer nutzt ihn und was darf er nicht tun?",
  },
  {
    title: "Schritt 2: Konzept & Architektur",
    text: "Wir skizzieren die Lösung, wägen Alternativen ab und halten fest, warum wir uns für welche entschieden haben.",
  },
  {
    title: "Schritt 3: Umsetzung",
    text: "Wir bauen in kleinen, prüfbaren Schritten und liefern erst aus, wenn der Code gelesen, getestet und versioniert ist.",
  },
  {
    title: "Schritt 4: Betrieb & Weiterentwicklung",
    text: "Wir beobachten den Betrieb, pflegen die Dienste und entwickeln sie mit den Anforderungen weiter.",
  },
];

/* ------------------------------------------------------------------ Zielgruppen */

export const audiences: readonly AudienceItem[] = [
  {
    icon: "building",
    iconTone: "indigo",
    title: "VylarisGroupEurope",
    text: "Der europäische Zweig der Gruppe bringt die rechtliche Struktur und die Vorgabe mit, hochverfügbares Hosting anzubieten. VylarisData soll künftig die technische Grundlage dafür liefern.",
  },
  {
    icon: "users",
    title: "VylarisGroup Schweiz",
    text: "Der Ursprungsverein trägt die Idee, die aus einem Homelab und einem Podcast entstanden ist. VylarisData soll ihn künftig mit Software und, sobald sie steht, Infrastruktur unterstützen.",
  },
  {
    icon: "link",
    title: "Weitere Vorhaben",
    text: "Du hast ein Vorhaben, das zur Gruppe passt? Anfragen laufen über Kontakt & Tickets der VylarisGroup. Ob und wie VylarisData dabei beteiligt sein kann, steht nicht fest.",
  },
];

/* -------------------------------------------------------------------------- FAQ */

export const faq: readonly FaqItem[] = [
  {
    q: "Ist das Hosting schon verfügbar oder buchbar?",
    a: "Nein. VylarisData übernimmt künftig das Hosting der VylarisGroup, die Infrastruktur dafür ist aber noch im Aufbau. Es gibt noch kein buchbares Angebot und deshalb auch keine Preise. Termine nennen wir erst, wenn sie feststehen.",
  },
  {
    q: "Wo soll die Infrastruktur betrieben werden?",
    a: "Das Ziel ist ein Betrieb auf eigener Hardware in Europa. Konkrete Standorte nennen wir nicht, solange die Infrastruktur im Aufbau ist.",
  },
  {
    q: "Wie geht VylarisData mit Daten und Tracking um?",
    a: "Datensparsamkeit ist ein Grundsatz. Diese Website setzt keine Cookies und kein Tracking ein und lädt Schriften und Skripte von der eigenen Domain. Deine Wahl zwischen „Hell“, „Dunkel“ und „System“ speichert nur dein Browser lokal auf deinem Gerät.",
  },
  {
    q: "Für wen arbeitet VylarisData?",
    a: "In erster Linie für die VylarisGroup, also für VylarisGroupEurope und VylarisGroup Schweiz. Ob und wie wir darüber hinaus Dritte unterstützen, steht nicht fest.",
  },
  {
    q: "Wie erreiche ich VylarisData?",
    a: (
      <p>
        Über den Kontaktweg der VylarisGroup unter{" "}
        <A href={site.links.contact} className="link">
          vylaris.eu/contact
        </A>
        , dort unter „Kontakt & Tickets“. Eine eigene E-Mail-Adresse, Telefonnummer oder Postanschrift für VylarisData gibt
        es nicht. Mehr dazu auf der{" "}
        <A href="/kontakt/" className="link">
          Kontaktseite
        </A>
        .
      </p>
    ),
  },
];
