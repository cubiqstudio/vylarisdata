import { FactList } from "@/components/sections/infrastruktur/FactList";
import { InlineCta } from "@/components/sections/infrastruktur/InlineCta";
import { IntroHead } from "@/components/sections/infrastruktur/IntroHead";
import { LayerStack } from "@/components/sections/infrastruktur/LayerStack";
import { NoteCallout } from "@/components/sections/infrastruktur/NoteCallout";
import { ServiceTile } from "@/components/sections/infrastruktur/ServiceTile";
import { SplitPlain } from "@/components/sections/infrastruktur/SplitPlain";
import { TopicSection } from "@/components/sections/infrastruktur/TopicSection";
import { TopicVisual } from "@/components/sections/infrastruktur/TopicVisual";
import {
  A,
  Button,
  Cards,
  Dots,
  Faq,
  Gradient,
  PageHero,
  Section,
  SectionHead,
  SpecTable,
  Tile,
  Timeline,
  Visual,
} from "@/components/ui";
import {
  architectureLayers,
  computeTiles,
  crossCuttingLayers,
  datenschutz,
  faq,
  facts,
  groupLinks,
  guardrails,
  meta,
  monitoring,
  netzwerk,
  plattform,
  principles,
  publishRows,
  securityTiles,
  services,
  speicher,
  stages,
  standort,
  stateNote,
} from "@/content/infrastruktur";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(meta);

export default function InfrastrukturPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Infrastruktur" }]}
        eyebrow="Hosting-Infrastruktur im Aufbau"
        title="Die technische Basis des Ökosystems der VylarisGroup."
        lead="VylarisData wird künftig das Hosting der VylarisGroup übernehmen. Auf dieser Seite zeigen wir, wie wir die Infrastruktur dafür aufbauen: Architektur, Grundsätze und die einzelnen Schichten, vom Standort bis zum laufenden Dienst."
        actions={
          <>
            <Button href="#architektur" size="lg" icon="arrow">
              Architektur ansehen
            </Button>
            <Button href="#ausbaustufen" variant="secondary" size="lg">
              Ausbaustufen
            </Button>
          </>
        }
      />

      <Section id="stand" labelledBy={stateNote.headingId}>
        <NoteCallout headingId={stateNote.headingId} title={stateNote.title} text={stateNote.text} />
        <FactList items={facts} ariaLabel="Gesicherte Eckdaten" />
      </Section>

      <Section id="architektur" labelledBy="architektur-h" band>
        <SectionHead
          eyebrow="Architektur im Überblick · Zielbild"
          id="architektur-h"
          title="Sechs Schichten und zwei, die quer durch alles laufen."
          lead="Wir denken die Infrastruktur von oben nach unten. Oben stehen die Dienste, die Nutzerinnen und Nutzer sehen. Sie sollen auf einer Plattform und einer Rechenschicht laufen, darunter liegen Speicher und Netzwerk. Das Fundament soll eigene Hardware in Europa bilden."
        />
        <div className="cards">
          <LayerStack layers={architectureLayers} arrows />
          <p className="rule">Querschnittsthemen</p>
          <LayerStack layers={crossCuttingLayers} />
        </div>
      </Section>

      <Section id="grundsaetze" labelledBy="grundsaetze-h">
        <SectionHead
          eyebrow="Grundsätze"
          id="grundsaetze-h"
          title="Sechs Grundsätze, nach denen wir bauen."
          lead="Bevor eine einzelne Technik gewählt wird, stehen Grundsätze fest. Sie geben vor, wie wir entscheiden, wenn es mehrere Wege gibt."
        />
        <Cards cols={3}>
          {principles.map((t) => (
            <Tile key={t.title} icon={t.icon} title={t.title}>
              {t.text}
            </Tile>
          ))}
        </Cards>
      </Section>

      <TopicSection topic={standort} />
      <TopicSection topic={netzwerk} />

      <Section id="rechenschicht" labelledBy="rechen-h" band>
        <IntroHead
          eyebrow="Rechenschicht"
          id="rechen-h"
          title="Dienste voneinander getrennt."
          leads={[
            "Auf der Hardware soll eine Rechenschicht aus Virtualisierung und Containern liegen. Sie soll verhindern, dass ein Dienst andere Dienste stört, und Ressourcen dorthin lenken, wo sie gebraucht werden.",
            "Unser Zielbild: Jeder Dienst bekommt seine eigene, klar begrenzte Umgebung. Fällt ein Rechenknoten aus, sollen andere übernehmen. Wartung an einer Maschine soll nicht bedeuten, dass ein Dienst offline geht.",
          ]}
        />
        <Cards cols={3}>
          {computeTiles.map((t) => (
            <Tile key={t.title} icon={t.icon} title={t.title}>
              {t.text}
            </Tile>
          ))}
        </Cards>
      </Section>

      <TopicSection topic={speicher} />
      <TopicSection topic={plattform} />
      <TopicSection topic={monitoring} />

      <Section id="sicherheit" labelledBy="sicherheit-h" band>
        <SectionHead
          eyebrow="Sicherheit"
          id="sicherheit-h"
          title="Mehrere Schichten, kein einzelnes Schloss."
          lead="Wir folgen dem Grundsatz Defense in Depth, also gestaffelter Verteidigung: Fällt eine Schutzmaßnahme aus, soll die nächste den Fehler auffangen. Sicherheit soll deshalb in jeder Schicht gelten, vom Rack bis zur Anwendung."
        />
        <Cards cols={4}>
          {securityTiles.map((t) => (
            <Tile key={t.title} icon={t.icon} title={t.title}>
              {t.text}
            </Tile>
          ))}
        </Cards>
      </Section>

      <TopicSection topic={datenschutz} />

      <Section id="dienste" labelledBy="dienste-h" band>
        <SectionHead
          eyebrow="Ökosystem"
          id="dienste-h"
          title="Dienste der VylarisGroup."
          lead="Diese Dienste gehören zum Ökosystem, in dem VylarisData künftig das Hosting übernehmen soll. Sie sind hier als Kontext aufgeführt. Eine Zusage, dass sie auf die Infrastruktur von VylarisData wechseln, ist damit nicht verbunden."
        />
        <Cards cols={3}>
          {services.map((s) => (
            <ServiceTile key={s.title} item={s} />
          ))}
        </Cards>
      </Section>

      <Section id="ausbaustufen" labelledBy="ausbau-h">
        <SplitPlain
          main={
            <>
              <p className="eyebrow">Ausbaustufen</p>
              <h2 className="h2" id="ausbau-h">
                In drei Stufen zum Betrieb.
              </h2>
              <p className="lead">
                Wir bauen nicht alles auf einmal. Die Stufen zeigen eine mögliche Reihenfolge als Zielbild: Jede Stufe soll tragen,
                bevor die nächste beginnt.
              </p>
              <Timeline items={stages} />
            </>
          }
          aside={<TopicVisual visual={guardrails} />}
        />
      </Section>

      <Section id="veroeffentlichung" labelledBy="veroeff-h" band>
        <SectionHead
          eyebrow="Angekündigte Angaben"
          id="veroeff-h"
          title="Das möchten wir mit dem Start veröffentlichen."
          lead="Wir nennen nur Zahlen, die wir belegen können. Alle Angaben in der Tabelle sind geplant und folgen, sobald die Systeme produktiv sind und gemessen werden."
        />
        <SpecTable head={["Kategorie", "Was dort stehen soll"]} rows={publishRows} />
      </Section>

      <Section id="faq" labelledBy="faq-h">
        <SplitPlain
          main={
            <>
              <p className="eyebrow">Häufige Fragen</p>
              <h2 className="h2" id="faq-h">
                Antworten, auch wenn sie „noch nicht“ lauten.
              </h2>
              <Faq items={faq} />
            </>
          }
          aside={
            <Visual>
              <p className="h4">Direkt zu den Seiten der VylarisGroup</p>
              <Dots
                items={groupLinks.map((l) => (
                  <A key={l.href} href={l.href} className="link">
                    {l.label}
                  </A>
                ))}
              />
            </Visual>
          }
        />

        <InlineCta
          id="kontakt"
          headingId="cta-h"
          title={
            <>
              Fragen zur <Gradient>Infrastruktur</Gradient>?
            </>
          }
          text="Du möchtest wissen, wie weit wir sind, oder hast ein Vorhaben, das später auf unserer Infrastruktur laufen könnte? Melde dich über die Kontaktseite der VylarisGroup (Kontakt & Tickets)."
          primary={{ href: site.links.contact, label: "Kontakt aufnehmen", icon: "ext" }}
          secondary={{ href: "/oekosystem/", label: "Zum Ökosystem" }}
        />
      </Section>
    </>
  );
}
