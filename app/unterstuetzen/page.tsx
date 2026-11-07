import {
  Button,
  Callout,
  Cards,
  Checks,
  Chips,
  Cta,
  Faq,
  PageHero,
  Section,
  SectionHead,
  Split,
  Stack,
  Status,
  Steps,
  Tile,
  Visual,
} from "@/components/ui";
import {
  cta,
  crumbs,
  dataCallout,
  expectChecks,
  expectCopy,
  expectHead,
  expectNote,
  faq,
  faqHead,
  flowHead,
  flowSteps,
  helpHead,
  helpItems,
  hero,
  heroActions,
  heroStatus,
  meta,
  seekCallout,
  seekHead,
  seekItems,
  standChips,
  standCopy,
  standHead,
  standLayers,
} from "@/content/unterstuetzen";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(meta);

export default function UnterstuetzenPage() {
  return (
    <>
      <PageHero
        crumbs={[...crumbs]}
        {...hero}
        actions={
          <>
            <Button href={heroActions.primary.href} size="lg" icon="arrow">
              {heroActions.primary.label}
            </Button>
            <Button href={heroActions.secondary.href} variant="secondary" size="lg">
              {heroActions.secondary.label}
            </Button>
          </>
        }
      >
        <p className="mt-6" style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
          {heroStatus.map((s) => (
            <Status key={s.label} tone={s.tone}>
              {s.label}
            </Status>
          ))}
        </p>
      </PageHero>

      <Section id="stand" labelledBy={standHead.id}>
        <Split
          copy={
            <>
              <p className="eyebrow">{standHead.eyebrow}</p>
              <h2 className="h2" id={standHead.id}>
                {standHead.title}
              </h2>
              {standCopy}
            </>
          }
          visual={
            <Visual soft>
              <p className="eyebrow">Ehrlich im Stand</p>
              <Stack layers={standLayers} arrows={false} />
              <Chips items={standChips} blue />
            </Visual>
          }
        />
      </Section>

      <Section id="was-wir-suchen" labelledBy={seekHead.id} band>
        <SectionHead {...seekHead} />
        <Cards cols={4}>
          {seekItems.map((it) => (
            <Tile key={it.title} icon={it.icon} title={it.title} variant="soft">
              {it.text}
            </Tile>
          ))}
        </Cards>
        <div className="mt-8">
          <Callout icon="heart">{seekCallout}</Callout>
        </div>
      </Section>

      <Section id="helfen" labelledBy={helpHead.id}>
        <SectionHead {...helpHead} />
        <Cards cols={4}>
          {helpItems.map((it) => (
            <Tile key={it.title} icon={it.icon} title={it.title}>
              {it.text}
            </Tile>
          ))}
        </Cards>
      </Section>

      <Section id="ablauf" labelledBy={flowHead.id} band>
        <SectionHead {...flowHead} />
        <Steps items={flowSteps} />
        <div className="mt-8">
          <Callout icon="lock">{dataCallout}</Callout>
        </div>
      </Section>

      <Section id="erwarten" labelledBy={expectHead.id}>
        <Split
          copy={
            <>
              <p className="eyebrow">{expectHead.eyebrow}</p>
              <h2 className="h2" id={expectHead.id}>
                {expectHead.title}
              </h2>
              {expectCopy}
              <Checks
                items={expectChecks.map((c) => (
                  <>
                    <strong>{c.lead}</strong> {c.text}
                  </>
                ))}
              />
            </>
          }
          visual={
            <Tile as="div" variant="feature" icon={expectNote.icon} title={expectNote.title}>
              {expectNote.text}
            </Tile>
          }
        />
      </Section>

      <Section id="faq" labelledBy={faqHead.id} band>
        <SectionHead {...faqHead} />
        <div className="mt-8">
          <Faq items={faq} />
        </div>
      </Section>

      <Cta sectionId="kontakt" id="cta-h" {...cta} />
    </>
  );
}
