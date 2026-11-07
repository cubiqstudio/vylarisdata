import { AudienceCards } from "@/components/sections/leistungen/AudienceCards";
import { BlockCards } from "@/components/sections/leistungen/BlockCards";
import { FieldCopy } from "@/components/sections/leistungen/FieldCopy";
import { FieldSection } from "@/components/sections/leistungen/FieldSection";
import { OverviewTable } from "@/components/sections/leistungen/OverviewTable";
import { SoftwareTiles } from "@/components/sections/leistungen/SoftwareTiles";
import { A, Button, Callout, Cta, Faq, Facts, PageHero, Section, SectionHead, Split, Timeline } from "@/components/ui";
import {
  audiences,
  blocks,
  cta,
  facts,
  faq,
  hero,
  hostingField,
  keyFacts,
  meta,
  netzField,
  overview,
  partnerField,
  sections,
  sicherheitField,
  softwareTiles,
  speicherField,
  standSteps,
  workSteps,
} from "@/content/leistungen";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(meta);

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Leistungen" }]}
        eyebrow={site.area}
        title={hero.title}
        lead={hero.lead}
        actions={
          <>
            <Button href="#bausteine" size="lg" icon="arrow">
              {hero.primary}
            </Button>
            <Button href="#uebersicht" variant="secondary" size="lg">
              {hero.secondary}
            </Button>
          </>
        }
      />

      <Section id="kennzahlen" labelledBy="kennzahlen-h">
        <SectionHead
          eyebrow={sections.kennzahlen.eyebrow}
          id="kennzahlen-h"
          title={sections.kennzahlen.title}
          lead={sections.kennzahlen.lead}
        />
        <Facts items={keyFacts} />
      </Section>

      <Section id="bausteine" labelledBy="bausteine-h" band>
        <SectionHead
          eyebrow={sections.bausteine.eyebrow}
          id="bausteine-h"
          title={sections.bausteine.title}
          lead={sections.bausteine.lead}
        />
        <BlockCards items={blocks} />
        <div className="mt-8">
          <Callout icon="info">
            <p>
              {sections.bausteine.callout}{" "}
              <A href="/infrastruktur/" className="link">
                {sections.bausteine.calloutLink}
              </A>
              .
            </p>
            <p className="mt-2">
              {sections.bausteine.support}{" "}
              <A href="/unterstuetzen/" className="link">
                {sections.bausteine.supportLink}
              </A>
              .
            </p>
          </Callout>
        </div>
      </Section>

      <FieldSection field={hostingField} />
      <FieldSection field={speicherField} />
      <FieldSection field={netzField} />

      <Section id="software" labelledBy="software-h" band>
        <SectionHead
          eyebrow={sections.software.eyebrow}
          id="software-h"
          title={sections.software.title}
          lead={sections.software.lead}
        />
        <p className="max-3xl mt-4">{sections.software.text}</p>
        <SoftwareTiles items={softwareTiles} />
        <div className="mt-8">
          <Facts items={facts} />
        </div>
      </Section>

      <FieldSection field={sicherheitField} />
      <FieldSection field={partnerField} />

      <Section id="uebersicht" labelledBy="uebersicht-h">
        <SectionHead
          eyebrow={sections.uebersicht.eyebrow}
          id="uebersicht-h"
          title={sections.uebersicht.title}
          lead={sections.uebersicht.lead}
        />
        <OverviewTable rows={overview} />
      </Section>

      <Section id="stand" labelledBy="stand-h" band>
        <Split
          even
          copy={
            <FieldCopy
              eyebrow={sections.stand.eyebrow}
              id="stand-h"
              title={sections.stand.title}
              lead={sections.stand.lead}
            />
          }
          visual={<Timeline items={standSteps} />}
        />
      </Section>

      <Section id="arbeitsweise" labelledBy="arbeitsweise-h">
        <Split
          even
          copy={
            <FieldCopy
              eyebrow={sections.arbeitsweise.eyebrow}
              id="arbeitsweise-h"
              title={sections.arbeitsweise.title}
              lead={sections.arbeitsweise.lead}
            />
          }
          visual={<Timeline items={workSteps} />}
        />
      </Section>

      <Section id="fuer-wen" labelledBy="fuer-wen-h" band>
        <SectionHead
          eyebrow={sections.zielgruppen.eyebrow}
          id="fuer-wen-h"
          title={sections.zielgruppen.title}
          lead={sections.zielgruppen.lead}
        />
        <AudienceCards items={audiences} />
      </Section>

      <Section id="faq" labelledBy="faq-h">
        <Split
          even
          copy={
            <FieldCopy
              eyebrow={sections.faq.eyebrow}
              id="faq-h"
              title={sections.faq.title}
              lead={sections.faq.lead}
            />
          }
          visual={<Faq items={faq} openFirst />}
        />
      </Section>

      <Cta
        sectionId="kontakt"
        title={cta.title}
        text={cta.text}
        primary={cta.primary}
        secondary={cta.secondary}
      />
    </>
  );
}
