import { AnfrageCta } from "@/components/sections/technologie/AnfrageCta";
import { FaqLayout } from "@/components/sections/technologie/FaqLayout";
import { FlowChips } from "@/components/sections/technologie/FlowChips";
import { TechBrandCard } from "@/components/sections/technologie/TechBrandCard";
import { TechHead } from "@/components/sections/technologie/TechHead";
import { TechTile } from "@/components/sections/technologie/TechTile";
import {
  Button,
  Callout,
  Cards,
  Checks,
  Faq,
  Facts,
  PageHero,
  Section,
  SpecTable,
  Split,
  Steps,
  Timeline,
  Visual,
} from "@/components/ui";
import {
  allianceCallout,
  areas,
  brands,
  cta,
  faq,
  faqSide,
  flow,
  hardwareCallout,
  hardwareChecks,
  hardwareFacts,
  hardwareTiles,
  heads,
  hero,
  inventoryHead,
  inventoryRows,
  meta,
  principles,
  processSteps,
  statusItems,
  website,
  websiteChecks,
  websiteSpecHead,
  websiteSpecs,
} from "@/content/technologie";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(meta);

export default function TechnologiePage() {
  return (
    <div className="tech-page">
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: hero.crumb }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        lead={hero.lead}
        actions={
          <>
            <Button href={hero.primaryAction.href} size="lg" icon="arrow">
              {hero.primaryAction.label}
            </Button>
            <Button href={hero.secondaryAction.href} variant="secondary" size="lg">
              {hero.secondaryAction.label}
            </Button>
          </>
        }
      >
        <Facts items={hardwareFacts} />
      </PageHero>

      <Section id="hardware" labelledBy={heads.hardware.id} large>
        <TechHead {...heads.hardware} />
        <Cards cols={3}>
          {hardwareTiles.map((tile) => (
            <TechTile key={tile.title} tile={tile} variant="feature" />
          ))}
        </Cards>
      </Section>

      <Section id="bestand" labelledBy={heads.inventory.id} large band>
        <Split
          copy={
            <>
              <TechHead {...heads.inventory} />
              <Checks items={hardwareChecks} />
            </>
          }
          visual={
            <Visual soft>
              <SpecTable head={[...inventoryHead]} rows={inventoryRows} />
            </Visual>
          }
        />
        <div className="mt-12">
          <Callout icon="info">{hardwareCallout}</Callout>
        </div>
      </Section>

      <Section id="website" labelledBy={heads.website.id} large>
        <Split
          reverse
          copy={
            <>
              <TechHead {...heads.website} />
              {website.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
              <Checks items={websiteChecks} />
              <div className="mt-8">
                <Button href={website.button.href} variant="secondary" icon="arrow">
                  {website.button.label}
                </Button>
              </div>
            </>
          }
          visual={
            <Visual soft>
              <SpecTable head={[...websiteSpecHead]} rows={websiteSpecs} />
            </Visual>
          }
        />
      </Section>

      <Section id="stand" labelledBy={heads.status.id} large band>
        <TechHead {...heads.status} />
        <Timeline items={statusItems} />
      </Section>

      <Section id="grundsaetze" labelledBy={heads.principles.id} large>
        <TechHead {...heads.principles} />
        <Cards cols={3}>
          {principles.map((tile) => (
            <TechTile key={tile.title} tile={tile} variant="soft" />
          ))}
        </Cards>
      </Section>

      <Section id="prozess" labelledBy={heads.process.id} large band>
        <TechHead {...heads.process} />
        <FlowChips items={flow} />
        <Steps items={processSteps} />
      </Section>

      <Section id="arbeitsbereiche" labelledBy={heads.areas.id} large>
        <TechHead {...heads.areas} />
        <Cards cols={2}>
          {areas.map((tile) => (
            <TechTile key={tile.title} tile={tile} variant="feature" />
          ))}
        </Cards>
      </Section>

      <Section id="gruppe" labelledBy={heads.group.id} large band>
        <TechHead {...heads.group} />
        <Cards cols={3}>
          {brands.map((brand) => (
            <TechBrandCard key={brand.name} brand={brand} />
          ))}
        </Cards>
        <div className="mt-12">
          <Callout icon="link">{allianceCallout}</Callout>
        </div>
      </Section>

      <Section id="faq" labelledBy={faqSide.id} large>
        <FaqLayout {...faqSide}>
          <Faq items={faq} />
        </FaqLayout>
      </Section>

      <AnfrageCta {...cta} />
    </div>
  );
}
