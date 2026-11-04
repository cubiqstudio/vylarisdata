import type { Metadata } from "next";
import { NetworkGraphic } from "@/components/graphics/NetworkGraphic";
import { ChipGroup } from "@/components/sections/index/ChipGroup";
import { ContactCta } from "@/components/sections/index/ContactCta";
import { CopyAction, CopyHead, EcoCta, NoteBox } from "@/components/sections/index/CopyParts";
import { EcoBrandCard } from "@/components/sections/index/EcoBrandCard";
import { HomeHero } from "@/components/sections/index/HomeHero";
import { InfraLayers } from "@/components/sections/index/InfraLayers";
import { SoftGrid } from "@/components/sections/index/SoftGrid";
import {
  Button,
  Callout,
  Cards,
  Checks,
  Dots,
  Facts,
  Faq,
  Gradient,
  Section,
  SectionHead,
  Split,
  Steps,
  Tile,
  Visual,
} from "@/components/ui";
import {
  areas,
  brands,
  chipGroups,
  contactCta,
  facts,
  faq,
  focus,
  hero,
  homeMeta,
  infraChecks,
  layers,
  principles,
  roadmap,
  workPrinciples,
} from "@/content";
import { pageMetadata } from "@/lib/metadata";

const base = pageMetadata(homeMeta);

// Startseite: absoluter Titel, ohne Markenanhang des Layouts
export const metadata: Metadata = {
  ...base,
  title: { absolute: homeMeta.title },
  openGraph: { ...base.openGraph, title: homeMeta.title },
};

export default function HomePage() {
  return (
    <div className="home-page">
      <HomeHero {...hero} art={<NetworkGraphic />} />

      <Section id="eckdaten" labelledBy="eckdaten-h" large>
        <SectionHead
          center
          eyebrow="Auf einen Blick"
          id="eckdaten-h"
          title="Wer wir sind und wo wir stehen."
          lead="Vier Eckdaten zum Einstieg. Alles Weitere steht auf den folgenden Seiten."
        />
        <Facts items={facts} />
      </Section>

      <Section id="fokus" labelledBy="fokus-h" large band>
        <SectionHead
          center
          eyebrow="Unser Fokus"
          id="fokus-h"
          title="Drei Dinge, auf denen das Vylaris-Ökosystem aufbaut."
          lead="Technology, Infrastructure und Innovation beschreiben unsere Rolle in der Gruppe: Wir entwickeln Software, bauen die Infrastruktur auf und denken beides weiter."
        />
        <SoftGrid items={focus} />
      </Section>

      <Section id="leistungen" labelledBy="leistungen-h" large>
        <SectionHead
          center
          eyebrow="Software Development & Technology"
          id="leistungen-h"
          title="Unsere Aufgabenfelder."
          lead="Von der Entwicklung bis zum geplanten Betrieb: Das ist unser Beitrag zur Technik der VylarisGroup. Vieles davon ist Zielbild und noch im Aufbau."
        />
        <Cards cols={4}>
          {areas.map((a) => (
            <Tile key={a.title} icon={a.icon} title={a.title} href="/leistungen/" more="Mehr dazu">
              {a.text}
            </Tile>
          ))}
        </Cards>
      </Section>

      <Section id="infrastruktur" labelledBy="infra-h" large band>
        <Split
          copy={
            <>
              <CopyHead eyebrow="Infrastruktur im Überblick" id="infra-h" title="Die künftige Infrastruktur für die Dienste der VylarisGroup." />
              <p>
                VylarisData wird zukünftig das Hosting der VylarisGroup. Die Infrastruktur dafür ist im Aufbau; wir beschreiben
                deshalb Zielbild und Grundsätze, keinen fertigen Betrieb.
              </p>
              <p>
                Wir denken von oben nach unten: Dienste laufen auf einer Plattform, diese auf Rechen-, Speicher- und
                Netzwerkschicht, und das Ganze soll auf eigener Hardware in Europa stehen.
              </p>
              <Checks
                items={infraChecks.map((c) => (
                  <>
                    <strong>{c.lead}</strong> {c.text}
                  </>
                ))}
              />
              <CopyAction href="/infrastruktur/" label="Zur Infrastruktur" />
            </>
          }
          visual={
            <InfraLayers
              statusLabel="Zielbild"
              label="Die Schichten der Infrastruktur"
              ariaLabel="Zielbild der Schichten"
              layers={layers}
            />
          }
        />
      </Section>

      <Section id="prinzipien" labelledBy="warum-h" large>
        <SectionHead
          center
          eyebrow="Warum VylarisData"
          id="warum-h"
          title="Sechs Grundsätze, nach denen wir arbeiten."
          lead="Bevor wir eine Technik wählen, stehen Grundsätze fest. Sie entscheiden, wenn es mehrere Wege gibt."
        />
        <Cards cols={3}>
          {principles.map((p) => (
            <Tile key={p.title} icon={p.icon} title={p.title}>
              {p.text}
            </Tile>
          ))}
        </Cards>
      </Section>

      <Section id="oekosystem" labelledBy="eco-h" large band>
        <SectionHead
          center
          eyebrow="Das Vylaris-Ökosystem"
          id="eco-h"
          title="Ein Ökosystem, mehrere Partner."
          lead="VylarisData gehört zur VylarisGroup und ist eine Marke von CircleUpWilms. Die Gruppe arbeitet in der Schweiz und in Europa zusammen."
        />
        <Cards cols={2}>
          {brands.map((b) => (
            <EcoBrandCard key={b.name} brand={b} />
          ))}
        </Cards>
        <NoteBox>
          <Callout icon="link">
            <p>
              <strong>Schweiz und Europa.</strong> Der Schweizer Verein und der europäische Zweig arbeiten Hand in Hand: Die
              Schweiz trägt die Idee, Europa stellt Rechtsstruktur und Infrastruktur. VylarisData wird zukünftig das Hosting
              der VylarisGroup.
            </p>
          </Callout>
        </NoteBox>
        <EcoCta>
          <Button href="/oekosystem/" icon="arrow">
            Mehr zum Ökosystem
          </Button>
        </EcoCta>
      </Section>

      <Section id="roadmap" labelledBy="roadmap-h" large>
        <SectionHead
          center
          eyebrow="Zielbild"
          id="roadmap-h"
          title="Die geplante Reihenfolge."
          lead="Unverbindliches Zielbild: Wir wollen der Reihe nach vorgehen – zuerst ein tragfähiges Fundament, dann die Übernahme der Dienste, dann der dauerhafte Betrieb. Termine nennen wir bewusst nicht."
        />
        <Steps items={roadmap} />
        <EcoCta>
          <Button href="/infrastruktur/" variant="secondary" icon="arrow">
            Details zur Infrastruktur
          </Button>
        </EcoCta>
      </Section>

      <Section id="technologie" labelledBy="tech-h" large band>
        <Split
          reverse
          copy={
            <>
              <CopyHead eyebrow="Technologie" id="tech-h" title="Open Source und Eigenentwicklung." />
              <p>
                Open Source und Eigenentwicklung gehören zu den Werten der VylarisGroup. Wir verstehen unsere Rolle darin als
                technischen Unterbau: Wir entwickeln Software für die Dienste der Gruppe und wollen sie wartbar halten.
              </p>
              <p>
                Auf der Technologie-Seite beschreiben wir unsere Arbeitsweise: wie wir Code verwalten und Änderungen prüfen
                und wie wir Systeme künftig automatisiert ausrollen wollen.
              </p>
              <CopyAction href="/technologie/" label="Zur Technologie" />
            </>
          }
          visual={
            <Visual soft>
              <p className="h4">Grundsätze der Arbeitsweise</p>
              <Dots items={workPrinciples} />
              {chipGroups.map((g) => (
                <ChipGroup key={g.caption} caption={g.caption} items={g.items} />
              ))}
            </Visual>
          }
        />
      </Section>

      <Section id="faq" labelledBy="faq-h" large>
        <SectionHead center eyebrow="Häufige Fragen" id="faq-h" title="Kurze Antworten zu VylarisData." />
        <Faq items={faq} />
      </Section>

      <ContactCta
        id="kontakt"
        headingId="cta-h"
        title={
          <>
            Fragen zu <Gradient>VylarisData</Gradient>?
          </>
        }
        text={contactCta.text}
        primary={contactCta.primary}
        secondary={contactCta.secondary}
      />
    </div>
  );
}
