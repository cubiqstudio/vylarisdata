import { A } from "@/components/ui";
import { Fill, LegalPage, type LegalSection } from "@/components/ui/LegalPage";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Impressum",
  description: "Impressum von VylarisData, einer Marke von CircleUpWilms.",
  path: "/impressum/",
  noindex: true,
});

const sections: LegalSection[] = [
  {
    heading: "Anbieter",
    body: (
      <p>
        VylarisData – eine Marke von {site.owner}
        <br />
        Inhaber: Lucas Wilms
        <br />
        <Fill>Straße und Hausnummer</Fill>
        <br />
        <Fill>PLZ Ort</Fill>
        <br />
        <Fill>Land</Fill>
      </p>
    ),
  },
  {
    heading: "Kontakt",
    body: (
      <p>
        E-Mail: <Fill>E-Mail-Adresse</Fill>
        <br />
        Kontaktmöglichkeit über die VylarisGroup: <A href={site.links.contact}>vylaris.eu/contact</A>
      </p>
    ),
  },
  { heading: "Verantwortlich für den Inhalt", body: <p>Lucas Wilms, Anschrift wie oben.</p> },
  {
    heading: "Zugehörigkeit",
    body: (
      <p>
        VylarisData gehört zur {site.group} (Geschäftsbereich {site.area}). Weitere Informationen:{" "}
        <A href={site.links.eu}>vylaris.eu</A> und <A href={site.links.ch}>vylaris.ch</A>.
      </p>
    ),
  },
  {
    heading: "Haftung für externe Links",
    body: (
      <p>
        Diese Seite verlinkt auf externe Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese Inhalte
        ist stets der jeweilige Anbieter verantwortlich.
      </p>
    ),
  },
];

export default function ImpressumPage() {
  return <LegalPage title="Impressum" sections={sections} />;
}
