import { AllianceEco } from "@/components/sections/ueber-uns/AllianceEco";
import { AssetTile, PartyCard, PrincipleTile } from "@/components/sections/ueber-uns/UuCards";
import { UuChips } from "@/components/sections/ueber-uns/UuChips";
import { UuFacts } from "@/components/sections/ueber-uns/UuFacts";
import { UuHead, UuTitle } from "@/components/sections/ueber-uns/UuHead";
import { UuHero, UuStatus } from "@/components/sections/ueber-uns/UuHero";
import { UuSplit, UuVisual } from "@/components/sections/ueber-uns/UuSplit";
import { UuStack } from "@/components/sections/ueber-uns/UuStack";
import { Button, Callout, Cards, Checks, Cta, Facts, Faq, Gradient, Section, SectionHead, Timeline } from "@/components/ui";
import {
  allianceCh,
  allianceEu,
  allianceHead,
  assets,
  assetsHead,
  assetsNote,
  ctaCopy,
  faq,
  faqHead,
  heroLead,
  heroStatus,
  history,
  historyHead,
  importantChips,
  importantCopy,
  importantHead,
  meta,
  missionChips,
  missionCopy,
  missionHead,
  missionVisual,
  numbers,
  numbersHead,
  numbersNote,
  overviewLayers,
  parties,
  partiesHead,
  partiesNote,
  principles,
  siteFacts,
  statusLayers,
  targetLayers,
  transparencyCopy,
  transparencyHead,
  valuesHead,
  workHead,
  workStyle,
} from "@/content/ueber-uns";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(meta);

export default function UeberUnsPage() {
  return (
    <>
      <UuHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Über uns" }]}
        eyebrow={site.area}
        title={
          <>
            Eine Untermarke im Aufbau. <Gradient>Mit Plan.</Gradient>
          </>
        }
        lead={heroLead}
        status={heroStatus}
        actions={
          <>
            <Button href="/unterstuetzen/" size="lg" icon="arrow">
              Unterstützen
            </Button>
            <Button href="/infrastruktur/" variant="secondary" size="lg">
              Zur Infrastruktur
            </Button>
          </>
        }
      />

      <Section id="mission" labelledBy={missionHead.id}>
        <UuSplit
          copy={
            <>
              <UuTitle {...missionHead} />
              {missionCopy}
            </>
          }
          visual={
            <UuVisual soft>
              {missionVisual}
              <UuChips items={missionChips} />
            </UuVisual>
          }
        />
      </Section>

      <Section id="zahlen" labelledBy={numbersHead.id} band>
        <UuHead {...numbersHead} />
        <Facts items={numbers} />
        <div className="mt-8">
          <Callout>{numbersNote}</Callout>
        </div>
      </Section>

      <Section id="bestand" labelledBy={assetsHead.id}>
        <UuHead {...assetsHead} />
        <Cards cols={4}>
          {assets.map((a) => (
            <AssetTile key={a.title} item={a} />
          ))}
        </Cards>
        <div className="mt-8">
          <Callout>{assetsNote}</Callout>
        </div>
      </Section>

      <Section id="transparenz" labelledBy={transparencyHead.id} band>
        <UuSplit
          reverse
          copy={
            <>
              <UuTitle {...transparencyHead} />
              {transparencyCopy}
              <div className="hero-cta mt-6">
                <Button href="/infrastruktur/" icon="arrow">
                  Live-Status ansehen
                </Button>
              </div>
            </>
          }
          visual={
            <UuVisual soft>
              <p className="eyebrow">Ehrlich im Stand</p>
              <UuStack layers={statusLayers} />
            </UuVisual>
          }
        />
      </Section>

      <Section id="werte" labelledBy={valuesHead.id}>
        <UuHead {...valuesHead} />
        <Cards cols={3}>
          {principles.map((p) => (
            <PrincipleTile key={p.title} item={p} />
          ))}
        </Cards>
      </Section>

      <Section id="dahinter" labelledBy={partiesHead.id} band>
        <UuHead {...partiesHead} />
        <Cards cols={3}>
          {parties.map((p) => (
            <PartyCard key={p.name} item={p} />
          ))}
        </Cards>
        <div className="mt-8">
          <Callout>{partiesNote}</Callout>
        </div>
      </Section>

      <Section id="allianz" labelledBy={allianceHead.id}>
        <SectionHead center {...allianceHead} />
        <AllianceEco left={allianceCh} right={allianceEu} />
      </Section>

      <Section id="geschichte" labelledBy={historyHead.id} band>
        <UuSplit
          narrow
          copy={
            <>
              <UuHead {...historyHead} />
              <UuVisual soft className="mt-8">
                <p className="eyebrow">Die Gruppe im Überblick</p>
                <UuStack layers={overviewLayers} />
              </UuVisual>
            </>
          }
          visual={<Timeline items={history} />}
        />
      </Section>

      <Section id="arbeitsweise" labelledBy={workHead.id}>
        <UuSplit
          copy={
            <>
              <UuHead {...workHead} />
              <Checks
                items={workStyle.map((w) => (
                  <>
                    <strong>{w.lead}</strong> {w.text}
                  </>
                ))}
              />
            </>
          }
          visual={
            <UuVisual>
              <p className="eyebrow">Unsere Ebenen</p>
              <UuStack layers={targetLayers} />
            </UuVisual>
          }
        />
      </Section>

      <Section id="wichtig" labelledBy={importantHead.id} band>
        <UuSplit
          reverse
          equalHeight
          copy={
            <>
              <UuTitle {...importantHead} />
              {importantCopy}
              <UuChips items={importantChips} />
            </>
          }
          visual={
            <UuVisual soft>
              <UuFacts items={siteFacts} />
            </UuVisual>
          }
        />
      </Section>

      <Section id="faq" labelledBy={faqHead.id}>
        <UuSplit
          narrow
          copy={
            <>
              <UuHead {...faqHead} />
              <UuStatus items={heroStatus} />
            </>
          }
          visual={<Faq items={faq} />}
        />
      </Section>

      <Cta
        sectionId="cta"
        id="cta-h"
        title={
          <>
            Hilf uns beim <Gradient>Aufbau</Gradient>.
          </>
        }
        text={ctaCopy.text}
        primary={ctaCopy.primary}
        secondary={ctaCopy.secondary}
      />
    </>
  );
}
