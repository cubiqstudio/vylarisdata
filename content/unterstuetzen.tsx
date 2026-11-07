import type { Crumb, FaqItem, IconName, StepItem, Tone } from "@/components/ui";
import { A, Gradient } from "@/components/ui";
import { site } from "@/content/site";

/** Daten der Seite "Unterstützen". Markup liegt in der Seite, hier nur Inhalt. */

export const meta = {
  title: "Unterstützen",
  description:
    "VylarisData baut eine eigene Infrastruktur in Europa auf und hat aktuell keine eigene Hardware. Hardware (auch ältere oder gebrauchte), Know-how, Sponsoring und Empfehlungen sind willkommen.",
  path: "/unterstuetzen/",
} as const;

/** Link auf die Kontaktseite für Fließtexte. */
const kontaktLink = (
  <A className="link" href="/kontakt/">
    Kontaktseite
  </A>
);

/* -------------------------------------------------------------------- Hero */

export const crumbs: readonly Crumb[] = [{ label: "Start", href: "/" }, { label: "Unterstützen" }];

export const hero = {
  eyebrow: "Unterstützen",
  title: (
    <>
      Wir bauen auf. <Gradient>Hilf mit.</Gradient>
    </>
  ),
  lead: "VylarisData baut gerade eine eigene Infrastruktur in Europa auf. Aktuell haben wir noch keine eigene Hardware und freuen uns über jede Unterstützung: Hardware (auch ältere oder gebrauchte), Know-how, Sponsoring und Weitersagen.",
} as const;

export const heroStatus: readonly { tone: Tone; label: string }[] = [
  { tone: "info", label: "Infrastruktur im Aufbau" },
  { tone: "ok", label: "Hardware willkommen" },
];

export const heroActions = {
  primary: { href: "/kontakt/", label: "Kontakt aufnehmen" },
  secondary: { href: "#was-wir-suchen", label: "Was wir suchen" },
} as const;

/* -------------------------------------------------------------- Wo wir stehen */

export const standHead = {
  id: "stand-h",
  eyebrow: "Wo wir stehen",
  title: "Wir fangen gerade an.",
} as const;

export const standCopy = (
  <>
    <p>
      VylarisData ist eine Untermarke von VylarisGroupEurope (Leitung: Lucas Wilms) und gehört zur VylarisGroup, im
      Geschäftsbereich Software Development & Technology. Unser Leitsatz lautet „Powering the Vylaris Ecosystem“.
    </p>
    <p>
      <strong className="strong">Aktuell haben wir keine eigene Hardware:</strong> keine eigenen Server, keinen eigenen
      Speicher und kein eigenes Netz. Die Infrastruktur ist im Aufbau. Das sagen wir lieber offen, als etwas zu
      behaupten.
    </p>
    <p>
      Unser Ziel ist eine eigene Infrastruktur in Europa, mit Datensicherung, Netzwerk und Sicherheit als geplanten
      Bausteinen. Das ist ein Plan, noch kein Bestand. Den Stand zeigen wir auf der Seite{" "}
      <A className="link" href="/infrastruktur/">
        Infrastruktur
      </A>
      .
    </p>
  </>
);

export const standLayers: readonly { icon: IconName; name: string; description: string; highlight?: boolean }[] = [
  { icon: "check", name: "Im Betrieb", description: "Diese Website, ohne Tracking und ohne offene Ports am Server." },
  { icon: "layers", name: "Im Aufbau", description: "Unsere eigene Infrastruktur in Europa." },
  { icon: "cpu", name: "Gesucht", description: "Hardware, Know-how, Sponsoring und Empfehlungen." },
  { icon: "rocket", name: "Geplant", description: "Das Vylaris-Ökosystem weiter ausbauen.", highlight: true },
];

export const standChips: readonly string[] = ["Untermarke von VylarisGroupEurope", "Teil der VylarisGroup"];

/* ---------------------------------------------------------------- Was wir suchen */

export const seekHead = {
  id: "was-wir-suchen-h",
  eyebrow: "Was wir suchen",
  title: "Hardware für den Start. Auch gebrauchte.",
  lead: "Diese Beispiele zeigen, wonach wir suchen. Sie sind keine vollständige Liste, und wir nennen bewusst keine Mengen. Schreib uns auch dann, wenn dein Gerät hier nicht genannt ist.",
} as const;

export type SeekItem = { icon: IconName; title: string; text: string };

export const seekItems: readonly SeekItem[] = [
  {
    icon: "server",
    title: "Server und Rechner",
    text: "Server und Rechner, die noch laufen und weiterverwendet werden können.",
  },
  {
    icon: "hdd",
    title: "Speicher",
    text: "Festplatten, SSDs und andere Speichergeräte.",
  },
  {
    icon: "network",
    title: "Netzwerkgeräte",
    text: "Switches, Router und anderes Netzwerkzubehör.",
  },
  {
    icon: "box",
    title: "Racks und Zubehör",
    text: "Racks, Kabel und Zubehör sowie Strom- und Kühlungstechnik.",
  },
];

export const seekCallout = (
  <>
    <strong>Auch ältere und gebrauchte Geräte sind ausdrücklich willkommen.</strong> Ob und wie wir ein Gerät
    verwenden können, klären wir gemeinsam mit dir.
  </>
);

/* ---------------------------------------------------------------- Wie du helfen kannst */

export const helpHead = {
  id: "helfen-h",
  eyebrow: "Wie du helfen kannst",
  title: "Vier Wege, uns beim Aufbau zu unterstützen.",
  lead: "Jede Hilfe zählt, auch eine kleine.",
} as const;

export const helpItems: readonly SeekItem[] = [
  {
    icon: "cpu",
    title: "Hardware spenden oder weitergeben",
    text: "Du hast Geräte, die bei dir nicht mehr gebraucht werden? Bei uns können sie weiterlaufen.",
  },
  {
    icon: "users",
    title: "Know-how und Mitarbeit",
    text: "Du kennst dich mit Servern, Netzwerken, Speicher oder Sicherheit aus und möchtest dein Wissen einbringen?",
  },
  {
    icon: "heart",
    title: "Sponsoring und Förderung",
    text: "Du möchtest den Aufbau finanziell oder durch Sachleistungen fördern? Sprich uns an.",
  },
  {
    icon: "link",
    title: "Empfehlen und Weitersagen",
    text: "Erzähl anderen von uns. Jede Empfehlung hilft uns, die richtigen Menschen und Unternehmen zu erreichen.",
  },
];

/* ---------------------------------------------------------------- So läuft es ab */

export const flowHead = {
  id: "ablauf-h",
  eyebrow: "So läuft es ab",
  title: "Ein freundlicher Ablauf in vier Schritten.",
  lead: "Der Ablauf soll dir die Orientierung erleichtern. Er ist keine Zusage mit Fristen.",
} as const;

export const flowSteps: readonly StepItem[] = [
  {
    title: "Kontakt aufnehmen",
    text: (
      <>
        Melde dich über unsere {kontaktLink}. Sie führt dich zum Kontakt- und Ticketsystem von VylarisGroupEurope.
      </>
    ),
  },
  {
    title: "Gerät oder Angebot kurz beschreiben",
    text: "Schreibe in wenigen Sätzen, was du abgeben oder anbieten möchtest, bei Hardware zum Beispiel die Art der Geräte und ihren ungefähren Zustand.",
  },
  {
    title: "Wir melden uns",
    text: "Wir lesen dein Ticket und antworten dort. Feste Reaktionszeiten sagen wir nicht zu.",
  },
  {
    title: "Abstimmung",
    text: "Gemeinsam klären wir den Zustand der Geräte sowie Übergabe oder Versand.",
  },
];

export const dataCallout = (
  <>
    <strong>Datenträger:</strong> Falls du das wünschst, wollen wir Datenträger vor einer Weiterverwendung sicher löschen.
    Das ist unsere Absicht und kein Zertifikat. Am besten entfernst du persönliche Daten vorab selbst.
  </>
);

/* ---------------------------------------------------------------- Erwartungen */

export const expectHead = {
  id: "erwarten-h",
  eyebrow: "Was du von uns erwarten kannst",
  title: "Ehrlich, offen und nachvollziehbar.",
} as const;

export const expectCopy = (
  <p>
    Wir stehen am Anfang und wollen genau so auftreten. Deshalb machen wir nur Aussagen, die wir belegen können.
  </p>
);

export const expectChecks: readonly { lead: string; text: string }[] = [
  {
    lead: "Transparenz.",
    text: "Wir nennen auf dieser Website den Stand unseres Aufbaus, auch wenn er noch klein ist.",
  },
  {
    lead: "Rückmeldung auf Wunsch.",
    text: "Wenn du möchtest, melden wir dir zurück, wie wir ein Gerät nutzen.",
  },
  {
    lead: "Klare Aussagen.",
    text: "Wir versprechen nur, was wir belegen können.",
  },
  {
    lead: "Ein fester Kontaktweg.",
    text: "Anfragen laufen über das Ticketsystem von VylarisGroupEurope.",
  },
];

export const expectNote = {
  icon: "info" as IconName,
  title: "Was wir nicht zusagen",
  text: "Spendenquittungen, steuerliche Aussagen, Garantien oder Fristen sagen wir nicht zu.",
};

/* --------------------------------------------------------------------- FAQ */

export const faqHead = {
  id: "faq-h",
  eyebrow: "Häufige Fragen",
  title: "Kurze Antworten zum Unterstützen.",
} as const;

export const faq: readonly FaqItem[] = [
  {
    q: "Was nehmt ihr an?",
    a: "Wir suchen Server und Rechner, Speicher (Festplatten, SSDs), Netzwerkgeräte wie Switches und Router, Racks und Zubehör sowie Strom- und Kühlungstechnik. Das sind Beispiele und keine feste Liste. Beschreibe uns einfach, was du hast.",
  },
  {
    q: "Nehmt ihr auch alte Hardware?",
    a: "Ja, sehr gern. Ältere und gebrauchte Geräte sind ausdrücklich willkommen. Ob und wie sich ein Gerät verwenden lässt, klären wir gemeinsam mit dir.",
  },
  {
    q: "Wie melde ich mich?",
    a: (
      <p>
        Über unsere {kontaktLink}. Dort findest du den Weg zum Kontakt- und Ticketsystem von VylarisGroupEurope unter{" "}
        <A className="link" href={site.links.contact}>
          vylaris.eu/contact
        </A>
        . Beschreibe dein Angebot kurz, wir antworten im Ticket.
      </p>
    ),
  },
  {
    q: "Wo steht der Aufbau?",
    a: (
      <p>
        Wir fangen gerade an. Aktuell haben wir noch keine eigene Hardware. Den Stand zeigt der Live-Status auf der Seite{" "}
        <A className="link" href="/infrastruktur/">
          Infrastruktur
        </A>
        .
      </p>
    ),
  },
  {
    q: "Wer steht dahinter?",
    a: (
      <p>
        VylarisData ist eine Untermarke von VylarisGroupEurope (Leitung: Lucas Wilms) und gehört zur VylarisGroup. Mehr
        dazu steht auf der Seite{" "}
        <A className="link" href="/ueber-uns/">
          Über uns
        </A>
        , die rechtlichen Angaben im{" "}
        <A className="link" href="/impressum/">
          Impressum
        </A>
        .
      </p>
    ),
  },
  {
    q: "Was passiert mit den Daten auf Datenträgern?",
    a: "Falls du das wünschst, wollen wir Datenträger vor einer Weiterverwendung sicher löschen. Das ist unsere Absicht und kein Zertifikat. Am besten entfernst du persönliche Daten vorab selbst.",
  },
];

/* --------------------------------------------------------------------- CTA */

export const cta = {
  title: (
    <>
      Melde dich <Gradient>bei uns</Gradient>.
    </>
  ),
  text: "Beschreibe kurz, was du anbieten möchtest. Wir melden uns im Ticket.",
  primary: { href: "/kontakt/", label: "Zur Kontaktseite" },
  secondary: { href: "/infrastruktur/", label: "Stand des Aufbaus" },
} as const;
