import type { FaqItem, StepItem, TimelineItem } from "@/components/ui";
import { A } from "@/components/ui";
import type { TechBrand } from "@/components/sections/technologie/TechBrandCard";
import type { TechHeadData } from "@/components/sections/technologie/TechHead";
import type { TechTileData } from "@/components/sections/technologie/TechTile";
import type { StackLayer } from "@/components/sections/technologie/LayerStack";
import { site } from "@/content/site";

/** Daten der Seite "Technologie". Markup liegt in den Komponenten, hier nur Inhalt. */

export const meta = {
  title: "Technologie",
  description:
    "So baut VylarisData Software: Open Source und Eigenentwicklung, Security by Design, Datensparsamkeit und ein fester Ablauf von der Idee bis zum Betrieb.",
  path: "/technologie/",
} as const;

/* ------------------------------------------------------------ Sektionsköpfe */

export const heads = {
  principles: {
    id: "grundsaetze-h",
    eyebrow: "Wie wir Software bauen",
    title: "Sechs Grundsätze, an denen sich jede Entscheidung messen lässt.",
    lead: "Das sind keine Werbeversprechen, sondern die Maßstäbe, die wir an unsere eigene Arbeit anlegen. Widerspricht ein Vorschlag einem dieser Grundsätze, muss er gute Gründe mitbringen.",
  },
  process: {
    id: "prozess-h",
    eyebrow: "Entwicklungsprozess",
    title: "Von der Idee bis zum Betrieb in sechs Schritten.",
    lead: "Jedes Vorhaben soll denselben Weg durchlaufen. Der Umfang unterscheidet sich, die Reihenfolge nicht. Die Schritte beschreiben unser Zielbild, kein bereits erreichtes Verfahren.",
  },
  areas: {
    id: "arbeitsbereiche-h",
    eyebrow: "Arbeitsbereiche",
    title: "Vier Felder, in denen wir Technik für die VylarisGroup entwickeln.",
    lead: "Die Bereiche greifen ineinander: Eine Anwendung braucht Schnittstellen, Schnittstellen brauchen Werkzeuge zum Testen, und alles zusammen braucht eine Infrastruktur, auf der es läuft.",
  },
  status: {
    id: "zielbild-h",
    eyebrow: "Stand und Zielbild",
    title: "Was schon sichtbar ist und was noch entsteht.",
    lead: "Wir trennen offen zwischen dem, was du heute sehen kannst, und dem, was wir uns vornehmen.",
  },
  group: {
    id: "gruppe-h",
    eyebrow: "Zusammenarbeit mit der VylarisGroup",
    title: "Technik im Verbund: Schweiz, Europa und VylarisData.",
    lead: "Wir bauen nicht für uns allein. Die Technologie von VylarisData soll die Dienste der Gruppe tragen. Vorgestellt werden diese auf den Seiten der jeweiligen Marken.",
  },
} as const satisfies Record<string, TechHeadData>;

/* ---------------------------------------------------------------- Grundsätze */

export const principles: readonly TechTileData[] = [
  {
    icon: "git",
    title: "Open Source & Eigenentwicklung",
    text: "Wir wollen verstehen, was unsere Software tut. Deshalb entwickeln wir Kernbausteine selbst und setzen auf offene Software, wenn sie unsere Anforderungen erfüllt und wir sie prüfen können.",
  },
  {
    icon: "shield",
    title: "Security by Design",
    text: "Sicherheit ist Teil des Entwurfs und kein Anstrich am Ende. Wir fragen früh, was schiefgehen kann, und bauen so, dass ein Fehler nicht gleich alles öffnet.",
  },
  {
    icon: "bulb",
    iconTone: "indigo",
    title: "Einfach statt clever",
    text: "Die einfachere Lösung gewinnt, solange sie die Aufgabe erfüllt. Code und Aufbau sollen auch in einem Jahr noch lesbar sein, und zwar auch für andere als die Person, die ihn geschrieben hat.",
  },
  {
    icon: "refresh",
    iconTone: "indigo",
    title: "Automatisierung",
    text: "Was sich wiederholt, gehört in ein Skript oder eine Pipeline. Das spart Zeit und verhindert die Fehler, die bei Handarbeit zuverlässig irgendwann passieren.",
  },
  {
    icon: "book",
    title: "Dokumentation",
    text: "Eine Entscheidung, die nirgends steht, ist bald vergessen. Wir halten fest, was gebaut wurde, warum es so gebaut wurde und wie man es betreibt.",
  },
  {
    icon: "eye",
    title: "Datensparsamkeit",
    text: "Was wir nicht erheben, müssen wir nicht schützen, und es kann auch nicht abfließen. Daten fallen nur an, wenn ein Dienst sie wirklich braucht.",
  },
];

/* ------------------------------------------------------------------ Prozess */

export const flow: readonly string[] = ["Idee", "Entwurf", "Review", "Test", "Auslieferung", "Betrieb"];

export const processSteps: readonly StepItem[] = [
  {
    title: "Idee",
    text: "Am Anfang steht die Frage, welches Problem gelöst werden soll und für wen. Ohne klare Antwort wird nichts gebaut.",
  },
  {
    title: "Entwurf",
    text: "Wir skizzieren Aufbau, Schnittstellen und Datenfluss und halten fest, welche Daten überhaupt nötig sind.",
  },
  {
    title: "Umsetzung mit Review",
    text: "Änderungen sollen in kleinen Schritten mit nachvollziehbarer Versionsgeschichte entstehen. Unser Grundsatz: Eine zweite Person liest sie gegen.",
  },
  {
    title: "Test & Prüfung",
    text: "Ziel ist, dass automatisierte Tests und eine Prüfung der Sicherheitsaspekte vor jeder Auslieferung stehen, nicht erst danach.",
  },
  {
    title: "Auslieferung",
    text: "Ausgeliefert werden soll über einen wiederholbaren Ablauf. Das Ziel ist, dass jede Version aus dem Quellcode reproduzierbar entsteht.",
  },
  {
    title: "Betrieb",
    text: "Im Betrieb wollen wir beobachten, Updates einspielen, aus Störungen lernen und das Gelernte in den Entwurf zurücktragen.",
  },
];

/* ------------------------------------------------------------ Arbeitsbereiche */

export const areas: readonly TechTileData[] = [
  {
    icon: "code",
    title: "Webanwendungen",
    text: "Oberflächen und Dienste für die Marken und Projekte der VylarisGroup sind unser Arbeitsfeld. Wir wollen schlanke Seiten bauen, die schnell laden, ohne Skript-Ballast auskommen und sich auch mit Tastatur und Screenreader bedienen lassen.",
    chips: [{ label: "Ziel: zugänglich" }, { label: "Schlank" }, { label: "Datensparsam" }],
  },
  {
    icon: "link",
    title: "Schnittstellen & Integrationen",
    text: "Dienste sollen sauber miteinander sprechen, statt aneinander zu kleben. Dafür definieren wir klare Übergaben, begrenzen, welche Daten fließen, und versionieren die Schnittstellen, damit Änderungen kontrolliert ablaufen.",
    chips: [{ label: "Klar definiert" }, { label: "Versioniert" }, { label: "Minimale Daten" }],
  },
  {
    icon: "terminal",
    iconTone: "indigo",
    title: "Automatisierung & Werkzeuge",
    text: "Interne Helfer für Entwicklung und Betrieb sind ein Ziel: Skripte, Prüfungen und Abläufe, die wiederkehrende Arbeit übernehmen. Gute Werkzeuge machen den richtigen Weg zum einfachsten.",
    chips: [{ label: "Wiederholbar" }, { label: "Nachvollziehbar" }, { label: "Dokumentiert" }],
  },
  {
    icon: "layers",
    iconTone: "indigo",
    title: "Plattform-Bausteine",
    text: "Gemeinsame Grundlagen, damit nicht jedes Projekt bei null beginnt. Sie gehören zum Zielbild des künftigen Hostings der VylarisGroup und sind noch im Aufbau.",
    chips: [{ label: "Im Aufbau", blue: true }, { label: "Wiederverwendbar" }],
  },
];

/* ------------------------------------------------------- Qualität & Sicherheit */

export const quality = {
  eyebrow: "Qualität & Sicherheit",
  id: "qualitaet-h",
  title: "Feste Gewohnheiten tragen die Qualität.",
  lead: "Wir legen fest, wie wir arbeiten wollen, und wollen uns daran messen. Die folgenden Punkte sind unser Anspruch an jedes Vorhaben, keine Zertifizierung und keine bereits geprüfte Praxis. Review, Tests und Builds aus den Prozessschritten fasst die Grafik als Zielablauf zusammen.",
} as const;

export const qualityChecks = [
  <>
    <strong>Abhängigkeitsarme Bauweise:</strong> Jede fremde Komponente ist zusätzliche Angriffsfläche und Wartungslast.
    Wir wollen sie nur nehmen, wenn sie ihren Platz verdient.
  </>,
  <>
    <strong>Sicherheitsupdates:</strong> Unser Grundsatz: Bekannte Lücken in eingesetzten Komponenten werden behoben,
    Updates werden eingeplant, statt sie aufzuschieben.
  </>,
  <>
    <strong>Gewohnheit statt Einzelaktion:</strong> Review, Tests und reproduzierbare Builds sollen bei jeder Änderung
    dazugehören und nicht von einzelnen Personen oder guten Tagen abhängen.
  </>,
];

export const qualityLayers: readonly StackLayer[] = [
  { icon: "users", name: "Review", description: "Ziel: Jede Änderung wird gegengelesen." },
  { icon: "check", name: "Tests", description: "Ziel: Automatische Prüfung bei jeder Änderung." },
  { icon: "box", name: "Build", description: "Ziel: Reproduzierbar aus dem Quellcode." },
  {
    icon: "shield",
    name: "Betrieb",
    description: "Ziel: Updates einplanen, Störungen auswerten, Wissen zurückspielen.",
    highlight: true,
  },
];

/* ------------------------------------------------------------ Diese Website */

export const website = {
  eyebrow: "Diese Website als Beispiel",
  id: "website-h",
  title: "Wie wir bauen, kannst du hier selbst nachsehen.",
  lead: "Die Seite, die du gerade liest, ist klein und überschaubar. Gerade deshalb zeigt sie gut, wie wir Grundsätze in Technik übersetzen.",
  paragraphs: [
    "Es gibt keine Cookies und kein Tracking. Schriften und Skripte liefern wir von derselben Domain aus. Es werden also keine fremden Server kontaktiert, nur um die Seite darzustellen.",
    "Du kannst zwischen heller, dunkler und der Darstellung deines Systems wählen. Deine Wahl wird nur lokal in deinem Browser gespeichert.",
    "Zugänglichkeit ist uns ein Ziel: sinnvolle Überschriften, ausreichende Kontraste und Bedienung per Tastatur.",
  ],
} as const;

export const websiteSpecs: readonly (readonly [string, string])[] = [
  ["Cookies", "Keine"],
  ["Tracking", "Keines"],
  ["Schriften & Skripte", "Von derselben Domain"],
  ["Darstellung", "Hell, dunkel oder Systemvorgabe; nur im Browser gespeichert"],
  ["Zugänglichkeit", "Ziel: zugängliche Bedienung"],
];

/* ------------------------------------------------------------ Stand & Zielbild */

export const statusItems: readonly TimelineItem[] = [
  {
    status: { tone: "ok", label: "Sichtbar" },
    title: "Diese Website",
    text: (
      <>
        Sie zeigt unsere Arbeitsweise im Kleinen. Die Einzelheiten stehen oben im Abschnitt{" "}
        <A className="link" href="#website">
          Diese Website als Beispiel
        </A>
        .
      </>
    ),
  },
  {
    status: { tone: "warn", label: "Im Aufbau" },
    title: "Infrastruktur für das Hosting der VylarisGroup",
    text: (
      <>
        VylarisData soll künftig das Hosting der VylarisGroup übernehmen. Die technische Grundlage wird aufgebaut,
        Kunden hostet VylarisData damit noch nicht. Details zum Stand findest du auf der Seite{" "}
        <A className="link" href="/infrastruktur/">
          Infrastruktur
        </A>
        .
      </>
    ),
  },
  {
    status: { tone: "info", label: "Zielbild" },
    title: "Gemeinsame Plattform-Bausteine",
    text: "Deployments, Automatisierung und wiederverwendbare Grundlagen, damit neue Dienste der Gruppe nicht bei null anfangen. Das ist unser Ziel, keine fertige Funktion.",
  },
];

/* ---------------------------------------------------------------- Gruppe */

export const brands: readonly TechBrand[] = [
  {
    name: "VylarisData",
    sub: "vylarisdata.com",
    icon: "cpu",
    tag: "Diese Seite",
    current: true,
    text: "Software Development & Technology. Wir entwickeln Software und bauen die Hosting-Infrastruktur auf, die künftig die Dienste der VylarisGroup tragen soll.",
    action: { href: "/infrastruktur/", label: "Zur Infrastruktur" },
  },
  {
    name: "VylarisGroupEurope",
    sub: "vylaris.eu",
    icon: "globe",
    iconTone: "indigo",
    tag: "Europäischer Standort",
    text: "Die offizielle zweite Website der Gruppe für Europa. Sie bietet kostenlose Open-Source-SaaS-Dienste an. Außerdem verantwortet sie die europäische Rechts- und Unternehmensstruktur.",
    action: { href: site.links.eu, label: "vylaris.eu besuchen", icon: "ext" },
  },
  {
    name: "VylarisGroup Schweiz",
    sub: "vylaris.ch",
    icon: "users",
    tag: "Ursprungsverein",
    text: "Das ist der ursprüngliche Verein mit fünf Mitgliedern, davon drei im Vorstand. Er ging aus einem Homelab und einem Podcast hervor und ist die Keimzelle der VylarisGroup.",
    action: { href: site.links.ch, label: "vylaris.ch besuchen", icon: "ext" },
  },
];

export const allianceCallout = (
  <>
    <strong>Allianz Schweiz &amp; Europa.</strong> Die Schweizer Seite trägt die Idee, die europäische Seite die
    rechtliche Struktur. VylarisData liefert Software und technische Basis, einschließlich der künftigen
    Hosting-Infrastruktur. Mehr dazu findest du unter{" "}
    <A className="link" href="/oekosystem/">
      Ökosystem
    </A>
    .
  </>
);

/* ---------------------------------------------------------------------- FAQ */

export const faqSide = {
  eyebrow: "FAQ",
  id: "faq-h",
  title: "Häufige Fragen zur Technologie.",
  lead: "Kurze Antworten zum Stand des Hostings, zu Open Source, zur Sicherheit und zum Kontakt.",
  action: { href: "/kontakt/", label: "Zur Kontaktseite" },
} as const;

export const faq: readonly FaqItem[] = [
  {
    q: "Hostet VylarisData schon Dienste oder Websites?",
    a: (
      <p>
        Nein, nicht für Kunden. Wie weit der Aufbau ist, wollen wir auf der Seite{" "}
        <A className="link" href="/infrastruktur/">
          Infrastruktur
        </A>{" "}
        nachführen.
      </p>
    ),
  },
  {
    q: "Ist eure Software Open Source?",
    a: "Open Source und Eigenentwicklung sind unser Grundsatz, eine Zusage für einzelne Projekte ist das noch nicht. Wir wollen offene Software nutzen und selbst entwickeln, was wir verstehen und anpassen müssen. Veröffentlichen wir ein Projekt, sagen wir das ausdrücklich dazu.",
  },
  {
    q: "Wie geht ihr mit Sicherheitslücken um?",
    a: (
      <p>
        Unser Grundsatz ist, Updates einzuplanen und bekannte Lücken zu beheben. Wenn du eine Sicherheitslücke gefunden
        hast, wende dich über die{" "}
        <A className="link" href={site.links.contact}>
          Kontaktseite der VylarisGroup
        </A>{" "}
        an uns und gib an, dass es um eine Sicherheitslücke geht. Auf dieser Website selbst setzen wir weder Cookies
        noch Tracking ein.
      </p>
    ),
  },
  {
    q: "Wo laufen eure Dienste?",
    a: "Unser Ziel ist eigene Hardware in Europa. Konkrete Standorte oder technische Daten wollen wir nennen, sobald die Infrastruktur steht und wir sie belegen können. Bis dahin beschreiben wir lieber Grundsätze als Zahlen.",
  },
  {
    q: "Warum verzichtet ihr auf Cookies und Tracking?",
    a: "Weil wir sie nicht brauchen. Datensparsamkeit ist einer unserer Grundsätze, und eine Website, die nichts über dich speichert, muss auch nichts erklären oder absichern. Nur deine Wahl für hell, dunkel oder Systemvorgabe merkt sich dein Browser lokal.",
  },
  {
    q: "Wie erreiche ich euch?",
    a: (
      <p>
        Über die Kontaktseite der VylarisGroup unter{" "}
        <A className="link" href={site.links.contact}>
          vylaris.eu/contact
        </A>
        . Dort kannst du auch Tickets eröffnen. Darüber hinaus hat VylarisData keine eigenen Kontaktwege; auch unsere
        Seite{" "}
        <A className="link" href="/kontakt/">
          Kontakt
        </A>{" "}
        verweist dorthin.
      </p>
    ),
  },
];
