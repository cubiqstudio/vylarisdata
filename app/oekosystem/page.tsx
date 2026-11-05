import type { Metadata } from "next";
import { AllianceFlow } from "@/components/sections/oekosystem/AllianceFlow";
import { EcoBrandCard } from "@/components/sections/oekosystem/EcoBrandCard";
import { CopyHead } from "@/components/sections/oekosystem/CopyHead";
import { EcoCta } from "@/components/sections/oekosystem/EcoCta";
import { FeatureGrid } from "@/components/sections/oekosystem/FeatureGrid";
import { LayerArrow } from "@/components/sections/oekosystem/LayerArrow";
import { LinkLine } from "@/components/sections/oekosystem/LinkLine";
import { LinkTile } from "@/components/sections/oekosystem/LinkTile";
import { Panel, PanelFacts } from "@/components/sections/oekosystem/Panel";
import { ResponsibilityList } from "@/components/sections/oekosystem/ResponsibilityList";
import { StatusBoard } from "@/components/sections/oekosystem/StatusBoard";
import {
  Button,
  Cards,
  Checks,
  Faq,
  Facts,
  PageHero,
  Section,
  SectionHead,
  Split,
  SpecTable,
  Visual,
} from "@/components/ui";
import {
  allianceBetween,
  allianceBottom,
  allianceChecks,
  allianceLink,
  allianceParagraph,
  allianceTop,
  brands,
  circleUpWilmsPanel,
  circleUpWilmsParagraphs,
  circleUpWilmsRows,
  copies,
  ecoCta,
  facts,
  faq,
  faqText,
  foundation,
  foundationLink,
  groupPanel,
  heads,
  heroLead,
  heroTitle,
  linkTiles,
  meta,
  progressNote,
  progressText,
  responsibilities,
  responsibilitiesFooter,
  siteProofs,
  statusGroups,
  storageParagraphs,
  storageRows,
  values,
} from "@/content/oekosystem";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(meta);

export default function OekosystemPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Ökosystem" }]}
        eyebrow="Ökosystem der VylarisGroup"
        title={heroTitle}
        lead={heroLead}
        actions={
          <>
            <Button href="#fundament" size="lg" icon="arrow">
              Das Fundament ansehen
            </Button>
            <Button href="#uebersicht" variant="secondary" size="lg">
              Zur Übersicht
            </Button>
          </>
        }
      />

      <Section id="zahlen" labelledBy={heads.facts.id}>
        <SectionHead {...heads.facts} />
        <Facts items={facts} />
      </Section>

      <Section id="uebersicht" labelledBy={heads.overview.id} large band>
        <SectionHead {...heads.overview} />
        <Panel tone="blue" icon="globe" title={groupPanel.title} subtitle={groupPanel.subtitle} centered>
          <p className="mt-4">{groupPanel.text}</p>
        </Panel>
        <LayerArrow />
        <Cards cols={2}>
          {brands.map((brand) => (
            <EcoBrandCard key={brand.name} brand={brand} />
          ))}
        </Cards>
      </Section>

      <Section id="fundament" labelledBy={heads.foundation.id} large>
        <SectionHead {...heads.foundation} />
        <ResponsibilityList items={foundation} />
        <LinkLine {...foundationLink} />
      </Section>

      <Section id="speicher" labelledBy={copies.storage.id} band>
        <Split
          copy={
            <>
              <CopyHead {...copies.storage} />
              {storageParagraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </>
          }
          visual={<SpecTable head={["Baustein", "Kapazität"]} rows={storageRows} />}
        />
      </Section>

      <Section id="allianz" labelledBy={copies.alliance.id}>
        <Split
          copy={
            <>
              <CopyHead {...copies.alliance} />
              <p>{allianceParagraph}</p>
              <Checks items={allianceChecks} />
              <LinkLine {...allianceLink} />
            </>
          }
          visual={
            <Visual>
              <AllianceFlow top={allianceTop} bottom={allianceBottom} between={allianceBetween} />
            </Visual>
          }
        />
      </Section>

      <Section id="circleupwilms" labelledBy={copies.circleUpWilms.id} band>
        <Split
          reverse
          copy={
            <>
              <CopyHead {...copies.circleUpWilms} />
              {circleUpWilmsParagraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </>
          }
          visual={
            <Panel tone="indigo" icon="building" iconTone="indigo" {...circleUpWilmsPanel}>
              <PanelFacts rows={circleUpWilmsRows} />
            </Panel>
          }
        />
      </Section>

      <Section id="wer-macht-was" labelledBy={heads.responsibilities.id}>
        <SectionHead {...heads.responsibilities} />
        <ResponsibilityList items={responsibilities} />
        <p className="mt-6">{responsibilitiesFooter}</p>
      </Section>

      <Section id="stand" labelledBy={copies.progress.id} band>
        <Split
          copy={
            <>
              <CopyHead {...copies.progress} />
              <p>{progressText}</p>
            </>
          }
          visual={<StatusBoard groups={statusGroups} note={progressNote} />}
        />
      </Section>

      <Section id="betrieb" labelledBy={heads.site.id}>
        <SectionHead {...heads.site} />
        <FeatureGrid items={siteProofs} />
      </Section>

      <Section id="werte" labelledBy={heads.values.id} band>
        <SectionHead {...heads.values} center />
        <FeatureGrid items={values} />
      </Section>

      <Section id="links" labelledBy={heads.links.id}>
        <SectionHead {...heads.links} />
        <Cards cols={3}>
          {linkTiles.map((tile) => (
            <LinkTile key={tile.href} tile={tile} />
          ))}
        </Cards>
      </Section>

      <Section id="faq" labelledBy={copies.faq.id}>
        <Split
          copy={
            <>
              <CopyHead {...copies.faq} />
              <p>{faqText}</p>
            </>
          }
          visual={<Faq items={faq} />}
        />
      </Section>

      <EcoCta {...ecoCta} />
    </>
  );
}
