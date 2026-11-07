import type { Crumb, FactItem, FaqItem, StepItem } from "@/components/ui";
import { A, Gradient } from "@/components/ui";
import type {
  FaqAside,
  KontaktBrand,
  KontaktTileData,
  LinkAction,
  RequestPoint,
  RuleTileData,
} from "@/components/sections/kontakt/types";
import { site } from "@/content/site";

/** Daten der Seite "Kontakt". Markup liegt in den Komponenten, hier nur Inhalt. */

/** Verlinkte Kurzform des Kontaktwegs für Fließtexte. */
const contactLink = (
  <A className="link" href={site.links.contact}>
    vylaris.eu/contact
  </A>
);

export const meta = {
  title: "Kontakt",
  description:
    "Kontakt zu VylarisData, Untermarke von VylarisGroupEurope: allgemeine Fragen, Hardware spenden oder Unterstützung anbieten, Sicherheitsmeldungen und Partnerschaften über das Ticketsystem.",
  path: "/kontakt/",
} as const;

/* -------------------------------------------------------------------- Hero */

export const crumbs: readonly Crumb[] = [{ label: "Start", href: "/" }, { label: "Kontakt" }];

export const hero = {
  eyebrow: "Offizieller Kontaktweg",
  title: "Sprich mit uns. Wir bauen gerade auf.",
  lead: "VylarisData ist eine Untermarke von VylarisGroupEurope. Unsere eigene Infrastruktur ist im Aufbau, und aktuell haben wir noch keine eigene Hardware. Du erreichst uns über das Kontakt- und Ticketsystem der VylarisGroupEurope, auch wenn du Hardware abgeben oder uns unterstützen möchtest.",
} as const;

export const heroActions: { primary: LinkAction; secondary: LinkAction } = {
  primary: { href: site.links.contact, label: "Kontakt & Tickets öffnen", icon: "ext" },
  secondary: { href: "#anliegen", label: "Thema wählen" },
};

/* ------------------------------------------------------------ Hinter dem Ticket */

export const behindHead = {
  id: "dahinter-h",
  eyebrow: "Hinter dem Ticket",
  title: "Eine Untermarke am Anfang",
  lead: "Wer uns schreibt, erreicht ein Team, das gerade aufbaut: Unsere Infrastruktur ist im Aufbau, wir haben aktuell keine eigene Hardware und freuen uns über Unterstützung.",
} as const;

/** Erste Reihe: wo wir stehen. Bewusst ohne Zahlen. */
export const behindFacts: readonly FactItem[] = [
  { value: "Im Aufbau", label: "Unsere eigene Infrastruktur in Europa entsteht gerade.", icon: "layers" },
  { value: "Keine Hardware", label: "Aktuell haben wir noch keine eigene Hardware.", icon: "server" },
  { value: "Hardware gesucht", label: "Auch ältere oder gebrauchte Geräte sind willkommen.", icon: "hdd" },
  { value: "Untermarke", label: "VylarisData ist eine Untermarke von VylarisGroupEurope.", icon: "building" },
];

/** Zweite Reihe: geplante Bausteine und Wege zu helfen. Den Live-Zustand zeigt nur das Status-Board. */
export const behindMoreFacts: readonly FactItem[] = [
  { value: "Geplante Bausteine", label: "Server, Speicher, Datensicherung, Netzwerk und Sicherheit sind als Ziel vorgesehen.", icon: "db" },
  { value: "Know-how", label: "Wir freuen uns über Wissen und Mitarbeit.", icon: "users" },
  { value: "Sponsoring", label: "Förderung hilft uns beim Aufbau.", icon: "heart" },
  { value: "Weitersagen", label: "Empfehlungen helfen uns, bekannter zu werden.", icon: "globe" },
];

export const behindCallout = (
  <>
    <strong>Offen gezeigt:</strong> Den Stand unseres Aufbaus zeigt das Live-Status-Board auf der Seite{" "}
    <A className="link" href="/infrastruktur/">
      Infrastruktur
    </A>{" "}
    – auch dann, wenn er noch klein ist.
  </>
);

/* ------------------------------------------------------------------ Themen */

export const topicsHead = {
  id: "anliegen-h",
  eyebrow: "Fünf Themen",
  title: "Worum geht es dir?",
  lead: "Alle fünf Themen laufen über dasselbe Ticketsystem. Schreibe im Ticket, worum es geht.",
} as const;

export const topics: readonly KontaktTileData[] = [
  {
    icon: "info",
    title: "Allgemeine Fragen",
    text: "Du willst wissen, was VylarisData ist, wie wir zu VylarisGroupEurope und zur VylarisGroup gehören oder wie weit unser Aufbau ist? Stelle deine Frage im Ticket.",
  },
  {
    icon: "heart",
    iconTone: "indigo",
    title: "Hardware spenden / Unterstützung anbieten",
    text: "Du möchtest Hardware abgeben (auch ältere oder gebrauchte), Know-how einbringen, uns sponsern oder uns weiterempfehlen? Beschreibe dein Angebot im Ticket. Was wir suchen und wie es abläuft, steht auf der Seite Unterstützen.",
    href: "/unterstuetzen/",
    more: "Zur Seite Unterstützen",
  },
  {
    icon: "server",
    title: "Fragen zum Aufbau",
    text: "Du hast ein Vorhaben und fragst dich, ob es später zu unserer Infrastruktur passen könnte? Sie ist noch im Aufbau, deshalb können wir aktuell nichts zusagen. Beschreibe dein Vorhaben im Ticket, wir schauen gemeinsam darauf.",
  },
  {
    icon: "shield",
    title: "Sicherheitslücke melden",
    text: (
      <>
        Du hast ein Problem entdeckt, das die Sicherheit dieser Website oder unserer Infrastruktur betrifft?
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

export const topicsCta: LinkAction = { href: site.links.contact, label: "Ticket öffnen", icon: "ext" };

/* ------------------------------------------------------------------ Ablauf */

export const flowHead = {
  id: "ablauf-h",
  eyebrow: "Ablauf",
  title: "So erreichst du uns",
  lead: "Drei Schritte genügen. Als Besucher brauchst du kein Konto und findest hier auch kein Kontaktformular – der Weg läuft über das Ticketsystem.",
} as const;

export const flowSteps: readonly StepItem[] = [
  {
    title: "Anliegen wählen",
    text: "Überlege, ob es um eine allgemeine Frage, ein Angebot (Hardware oder Unterstützung), den Aufbau, eine Sicherheitsmeldung oder eine Partnerschaft geht.",
  },
  {
    title: "Ticket eröffnen",
    text: "Öffne das Kontakt- und Ticketsystem von VylarisGroupEurope und beschreibe dein Anliegen in eigenen Worten.",
  },
  {
    title: "Antwort abwarten",
    text: "Wir lesen dein Ticket und antworten im Ticketsystem. Feste Reaktionszeiten sagen wir nicht zu.",
  },
];

/* ----------------------------------------------------------------- Anfrage */

export const requestHead = {
  id: "anfrage-h",
  eyebrow: "Ticket schreiben",
  title: "Was in eine gute Anfrage gehört",
  lead: "Je klarer dein Anliegen beschrieben ist, desto weniger Rückfragen sind nötig. Diese Punkte helfen fast immer:",
} as const;

export const requestPoints: readonly RequestPoint[] = [
  { label: "Thema:", text: "ein Satz, der das Anliegen zusammenfasst, zum Beispiel „Angebot: gebrauchte Server“ oder „Frage zum Aufbau“." },
  { label: "Ziel:", text: "was du erreichen willst, nicht nur die Lösung, die du dir vorstellst." },
  { label: "Kontext:", text: "welche Dienste, Seiten oder Technologien betroffen oder gewünscht sind." },
  { label: "Stand:", text: "Idee, laufendes Projekt oder konkreter Umzug." },
  { label: "Bisherige Schritte:", text: "was du schon versucht hast – das spart uns beiden Rückfragen." },
  { label: "Bei Hardware:", text: "Art der Geräte, ungefährer Zustand und grob, wo sie sich befinden (Land oder Region). Das hilft bei der Abstimmung zur Übergabe." },
  { label: "Erreichbarkeit:", text: "die Angaben, die das Ticketsystem dafür vorsieht." },
];

export const note = {
  eyebrow: "Merksatz",
  title: (
    <>
      Schreibe für jemanden <Gradient>ohne Vorwissen</Gradient>.
    </>
  ),
  text: "Ziel und Kontext in wenigen Sätzen helfen mehr als eine lange Vorgeschichte.",
  /** Aus der Checkliste abgeleitet, damit beide nicht auseinanderlaufen. */
  chips: requestPoints.map((p) => p.label.replace(/:$/, "")),
};

/* ------------------------------------------------------------- Sicherheit */

export const securityHead = {
  id: "sicherheit-h",
  eyebrow: "Sicherheitshinweise",
  title: "Sicherheitslücken verantwortungsvoll melden",
  lead: "Wir bauen unsere Infrastruktur gerade erst auf und sind auf Hinweise von außen angewiesen. Wenn du etwas findest, melde es uns bitte, bevor du es öffentlich machst. So können wir es in Ruhe prüfen und gegebenenfalls beheben.",
} as const;

export const securityRules: readonly RuleTileData[] = [
  {
    icon: "check",
    title: "Das hilft uns",
    list: "checks",
    items: [
      <>
        Melde den Fund über {contactLink} und schreibe gleich zu Beginn, dass es um Sicherheit geht.
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
    title: "Bitte nicht",
    list: "dots",
    items: [
      "Lies, ändere oder lösche keine Daten Dritter.",
      "Beeinträchtige keine Systeme durch Überlastung, Massenabfragen oder Spam.",
      "Betreibe kein Social Engineering gegen Mitglieder oder Mitwirkende der VylarisGroup.",
      "Nutze gefundene Zugänge nicht, um weiter ins System vorzudringen.",
      "Mache eine Lücke nicht öffentlich und gib sie nicht an Dritte weiter, bevor wir sie prüfen konnten.",
    ],
  },
];

export const securityCallout = (
  <>
    <strong>Unser Grundsatz:</strong> Wir nehmen Meldungen ernst und prüfen sie. Feste Reaktionszeiten sagen wir nicht zu,
    weil wir nichts versprechen wollen, was wir nicht belegen können.
  </>
);

/* ----------------------------------------------------------------- Partner */

export const partnerHead = {
  id: "partner-h",
  eyebrow: "Die Gruppe dahinter",
  title: "Zwei Länder, eine Gruppe",
  lead: "VylarisData gehört zur VylarisGroup. Der Schweizer Verein trägt die Idee, der europäische Zweig stellt die Rechtsstruktur bereit. VylarisData ist eine Untermarke von VylarisGroupEurope, deshalb laufen Anfragen an uns über das Ticketsystem des europäischen Zweigs.",
} as const;

export const brands: readonly KontaktBrand[] = [
  {
    name: "VylarisGroupEurope",
    sub: "vylaris.eu",
    icon: "globe",
    current: true,
    text: "Der offizielle europäische Zweig der Gruppe, geleitet von Lucas Wilms. VylarisData ist seine Untermarke.",
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
    text: "Der Ursprungsverein der Gruppe ging aus einem Homelab und einem Podcast hervor. Auf seiner Idee baut das Vylaris-Ökosystem auf.",
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
  title: "Vielleicht ist deine Antwort schon da",
  lead: "Manche Fragen klären sich vorab. Den Stand unseres Aufbaus zeigt das Live-Status-Board auf der Infrastruktur-Seite, Systemstatus und Blog findest du bei VylarisGroupEurope, Impressum und Datenschutz direkt hier.",
} as const;

export const resources: readonly KontaktTileData[] = [
  {
    icon: "server",
    title: "Live-Status der Infrastruktur",
    text: "Ob ein Baustein im Aufbau, gesucht, geplant oder im Betrieb ist, zeigt unser Status-Board, öffentlich einsehbar.",
    href: "/infrastruktur/",
    more: "Zur Infrastruktur",
  },
  {
    icon: "activity",
    title: "Systemstatus der Gruppe",
    text: "Der Systemstatus der VylarisGroup-Dienste. Prüfe ihn, bevor du bei einer Störung ein Ticket öffnest.",
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
];

/** Rechtliches in eigener Reihe, Sprungziel #rechtliches. */
export const legalTiles: readonly KontaktTileData[] = [
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
    <strong>Für Besucher kommt diese Website ohne Cookies und ohne Tracking aus.</strong> Schriften und Skripte liefern wir
    von derselben Domain aus. Nur deine Wahl zwischen hellem, dunklem oder Geräte-Design bleibt lokal in deinem Browser
    gespeichert. Ein technisch notwendiges Sitzungs-Cookie gibt es nur im geschützten Admin-Bereich nach der Anmeldung.
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
    a: (
      <p>
        Der Kontakt läuft über das Kontakt- und Ticketsystem von VylarisGroupEurope unter {contactLink}. Eine
        E-Mail-Adresse oder Telefonnummer geben wir auf dieser Website nicht an.
      </p>
    ),
  },
  {
    q: "Kann ich Hosting bei VylarisData anfragen?",
    a: (
      <p>
        Hosting auf eigener Infrastruktur gibt es bei uns aktuell nicht, weil sie noch im Aufbau ist. Wenn du ein Vorhaben
        für später hast, beschreibe es gern im Ticket über {contactLink}. Zusagen können wir dazu heute noch nicht machen.
      </p>
    ),
  },
  {
    q: "Wie weit ist euer Aufbau?",
    a: "Wir fangen gerade an. Aktuell haben wir noch keine eigene Hardware. Als geplante Bausteine sehen wir eigene Server, Speicher, Datensicherung, Netzwerk und Sicherheit in Europa vor, ohne feste Zahlen und ohne Termine.",
  },
  {
    q: "Kann ich Hardware spenden oder weitergeben?",
    a: (
      <p>
        Ja, sehr gern, auch ältere oder gebrauchte Geräte. Was wir suchen und wie es abläuft, steht auf der Seite{" "}
        <A className="link" href="/unterstuetzen/">
          Unterstützen
        </A>
        . Melde dich dafür über {contactLink} und beschreibe kurz, was du abgeben möchtest.
      </p>
    ),
  },
  {
    q: "Wo sehe ich den aktuellen Stand?",
    a: (
      <p>
        Den Stand unseres Aufbaus zeigt das Status-Board auf der Seite{" "}
        <A className="link" href="/infrastruktur/">
          Infrastruktur
        </A>
        . Den Systemstatus von VylarisGroupEurope findest du unter vylaris.eu/status, den Blog unter vylaris.eu/blog.
      </p>
    ),
  },
  {
    q: "Was ist als Nächstes geplant?",
    a: "Wir wollen unsere eigene Infrastruktur in Europa aufbauen und das Vylaris-Ökosystem weiter ausbauen. Das sind Pläne, keine Zusagen mit Terminen.",
  },
  {
    q: "Wie melde ich eine Sicherheitslücke?",
    a: (
      <p>
        Öffne ein Ticket über {contactLink} und schreibe gleich zu Beginn, dass es um eine Sicherheitslücke geht.
        Beschreibe, wo du das Problem gefunden hast und wie man es nachvollziehen kann. Die{" "}
        <A className="link" href="#sicherheit">
          Hinweise zur Meldung
        </A>{" "}
        weiter oben auf dieser Seite helfen dir dabei.
      </p>
    ),
  },
  {
    q: "Erfasst diese Website Daten über mich?",
    a: (
      <p>
        Für Besucher setzt diese Website keine Cookies und nutzt kein Tracking. Nur der geschützte Admin-Bereich verwendet
        nach der Anmeldung ein technisch notwendiges Sitzungs-Cookie. Mehr dazu steht in der{" "}
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
  title: "Falsche Absender erkennen",
  text: (
    <>
      Der offizielle Kontaktweg ist das Ticketsystem unter {contactLink}. Wenn dir jemand im Namen von VylarisData über
      einen anderen Weg schreibt, frage bitte dort nach.
    </>
  ),
};

/* --------------------------------------------------------------------- CTA */

export const cta = {
  title: (
    <>
      Du willst beim <Gradient>Aufbau</Gradient> helfen?
    </>
  ),
  text: "Beschreibe dein Anliegen oder dein Angebot im Ticketsystem der VylarisGroupEurope – wir melden uns im Ticket.",
  primary: { href: site.links.contact, label: "Kontakt & Tickets öffnen", icon: "ext" } satisfies LinkAction,
  secondary: { href: "/unterstuetzen/", label: "Zur Seite Unterstützen" } satisfies LinkAction,
};
