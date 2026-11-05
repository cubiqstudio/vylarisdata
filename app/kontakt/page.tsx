import { FaqSplit } from "@/components/sections/kontakt/FaqSplit";
import { KontaktTile } from "@/components/sections/kontakt/KontaktTile";
import { NoteTile } from "@/components/sections/kontakt/NoteTile";
import { PartnerBrands } from "@/components/sections/kontakt/PartnerBrands";
import { RequestChecks } from "@/components/sections/kontakt/RequestChecks";
import { RuleTile } from "@/components/sections/kontakt/RuleTile";
import { CalloutRow, SectionAction } from "@/components/sections/kontakt/SectionAction";
import { Button, Callout, Cards, Cta, Facts, PageHero, Section, SectionHead, Split, Steps } from "@/components/ui";
import {
  behindCallout,
  behindFacts,
  behindHead,
  behindMoreFacts,
  brands,
  crumbs,
  cta,
  faq,
  faqAside,
  faqHead,
  flowHead,
  flowSteps,
  hero,
  heroActions,
  legalTiles,
  meta,
  note,
  partnerHead,
  privacyCallout,
  requestHead,
  requestPoints,
  resources,
  securityCallout,
  securityHead,
  securityRules,
  statusHead,
  topics,
  topicsCta,
  topicsHead,
} from "@/content/kontakt";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(meta);

export default function KontaktPage() {
  return (
    <>
      <PageHero
        crumbs={[...crumbs]}
        {...hero}
        actions={
          <>
            <Button href={heroActions.primary.href} size="lg" icon={heroActions.primary.icon}>
              {heroActions.primary.label}
            </Button>
            <Button href={heroActions.secondary.href} variant="secondary" size="lg">
              {heroActions.secondary.label}
            </Button>
          </>
        }
      />

      <Section id="dahinter" labelledBy={behindHead.id} large>
        <SectionHead {...behindHead} />
        <Facts items={behindFacts} />
        <Facts items={behindMoreFacts} />
        <CalloutRow>
          <Callout icon="activity">{behindCallout}</Callout>
        </CalloutRow>
      </Section>

      <Section id="anliegen" labelledBy={topicsHead.id} band>
        <SectionHead {...topicsHead} />
        <Cards cols={2}>
          {topics.map((t) => (
            <KontaktTile key={t.title} tile={t} />
          ))}
        </Cards>
        <SectionAction action={topicsCta} />
      </Section>

      <Section id="ablauf" labelledBy={flowHead.id}>
        <SectionHead {...flowHead} />
        <Steps items={flowSteps} />
      </Section>

      <Section id="anfrage" labelledBy={requestHead.id} large band>
        <Split
          copy={
            <>
              <p className="eyebrow">{requestHead.eyebrow}</p>
              <h2 className="h2" id={requestHead.id}>
                {requestHead.title}
              </h2>
              <p className="lead">{requestHead.lead}</p>
              <RequestChecks points={requestPoints} />
            </>
          }
          visual={<NoteTile {...note} />}
        />
      </Section>

      <Section id="sicherheit" labelledBy={securityHead.id} large>
        <SectionHead {...securityHead} />
        <Cards cols={2}>
          {securityRules.map((r) => (
            <RuleTile key={r.title} tile={r} />
          ))}
        </Cards>
        <CalloutRow>
          <Callout icon="shield">{securityCallout}</Callout>
        </CalloutRow>
      </Section>

      <Section id="partner" labelledBy={partnerHead.id} large band>
        <SectionHead {...partnerHead} />
        <PartnerBrands brands={brands} />
      </Section>

      <Section id="status" labelledBy={statusHead.id}>
        <SectionHead {...statusHead} />
        <Cards cols={3}>
          {resources.map((r) => (
            <KontaktTile key={r.title} tile={r} />
          ))}
        </Cards>
        <div id="rechtliches">
          <Cards cols={2}>
            {legalTiles.map((r) => (
              <KontaktTile key={r.title} tile={r} />
            ))}
          </Cards>
        </div>
        <CalloutRow>
          <Callout icon="lock">{privacyCallout}</Callout>
        </CalloutRow>
      </Section>

      <Section id="faq" labelledBy={faqHead.id} band>
        <FaqSplit {...faqHead} items={faq} aside={faqAside} />
      </Section>

      <Cta sectionId="cta" id="cta-h" {...cta} />
    </>
  );
}
