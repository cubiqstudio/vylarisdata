import { A } from "@/components/ui";
import { Fill, LegalPage, type LegalSection } from "@/components/ui/LegalPage";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Datenschutz",
  description: "Datenschutz von VylarisData, einer Marke von CircleUpWilms.",
  path: "/datenschutz/",
  noindex: true,
});

const sections: LegalSection[] = [
  {
    heading: "Verantwortlicher",
    body: (
      <p>
        {site.owner} (Marke VylarisData), Inhaber Lucas Wilms – Kontaktdaten siehe <A href="/impressum/">Impressum</A>.
      </p>
    ),
  },
  {
    heading: "Keine Cookies, kein Tracking",
    body: (
      <p>
        Diese Website setzt keine Cookies ein und verwendet weder Analyse- noch Tracking-Dienste. Es werden keine
        externen Schriftarten oder Skripte von Drittanbietern nachgeladen – alle Ressourcen werden von dieser Domain
        ausgeliefert.
      </p>
    ),
  },
  {
    heading: "Lokale Einstellungen",
    body: (
      <p>
        Wenn du im Footer zwischen hellem und dunklem Design wählst, speichert dein Browser diese Auswahl lokal (Local
        Storage). Die Information verlässt dein Gerät nicht und wird nicht an uns übertragen.
      </p>
    ),
  },
  {
    heading: "Server-Logfiles",
    body: (
      <p>
        Beim Aufruf der Website verarbeitet der Webserver technisch notwendige Verbindungsdaten (z. B. IP-Adresse, Datum
        und Uhrzeit, aufgerufene Seite, Browsertyp), um die Seite auszuliefern und den sicheren Betrieb zu gewährleisten
        (Art. 6 Abs. 1 lit. f DSGVO). <Fill>Speicherdauer der Logfiles ergänzen</Fill>
      </p>
    ),
  },
  {
    heading: "Externe Links",
    body: (
      <p>
        Wir verlinken auf vylaris.eu, vylaris.ch und weitere Seiten. Beim Anklicken gelten die Datenschutzhinweise der
        jeweiligen Betreiber.
      </p>
    ),
  },
  {
    heading: "Deine Rechte",
    body: (
      <p>
        Du hast nach der DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
        Datenübertragbarkeit und Widerspruch sowie das Recht, dich bei einer Aufsichtsbehörde zu beschweren.
      </p>
    ),
  },
];

export default function DatenschutzPage() {
  return <LegalPage title="Datenschutz" sections={sections} />;
}
