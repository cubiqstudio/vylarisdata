import { FactList } from "@/components/sections/infrastruktur/FactList";
import { InlineCta } from "@/components/sections/infrastruktur/InlineCta";
import { LayerStack } from "@/components/sections/infrastruktur/LayerStack";
import { SplitPlain } from "@/components/sections/infrastruktur/SplitPlain";
import { TopicSection } from "@/components/sections/infrastruktur/TopicSection";
import { TopicVisual } from "@/components/sections/infrastruktur/TopicVisual";
import { LiveStatus } from "@/components/status/LiveStatus";
import { Button, Cards, Faq, Gradient, PageHero, Section, SectionHead, Tile, Timeline } from "@/components/ui";
import {
  datensicherung,
  faq,
  faqLinks,
  facts,
  meta,
  netzwerk,
  overviewLayers,
  pageText,
  rawCapacityNote,
  rechenleistung,
  roadmap,
  roadmapNotes,
  sicherheit,
  speicher,
  whyTiles,
} from "@/content/infrastruktur";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(meta);

/**
 * Die Seite zeigt den Live-Status und muss bei jedem Aufruf neu gerendert werden. Ein Teilbereich (Suspense/PPR)
 * ist mit dem aktuellen Setup (kein cacheComponents) nicht möglich: Eine dynamische Komponente macht die Route ohnehin dynamisch.
 */
export const dynamic = "force-dynamic";

export default function InfrastrukturPage() {
  const t = pageText;
  return (
    <>
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Infrastruktur" }]}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        lead={t.hero.lead}
        actions={
          <>
            <Button href="#live-status" size="lg" icon="arrow">
              {t.hero.primary}
            </Button>
            <Button href="#zahlen" variant="secondary" size="lg">
              {t.hero.secondary}
            </Button>
          </>
        }
      />

      <Section id="zahlen" labelledBy="zahlen-h">
        <SectionHead eyebrow={t.zahlen.eyebrow} id="zahlen-h" title={t.zahlen.title} lead={t.zahlen.lead} />
        <FactList items={facts} ariaLabel={t.zahlen.ariaLabel} />
        <p className="muted mt-6">{rawCapacityNote}</p>
      </Section>

      <Section id="ueberblick" labelledBy="ueberblick-h" band>
        <SectionHead eyebrow={t.ueberblick.eyebrow} id="ueberblick-h" title={t.ueberblick.title} lead={t.ueberblick.lead} />
        <LayerStack layers={overviewLayers} spaced />
      </Section>

      <Section id="live-status" labelledBy="live-h">
        <SectionHead eyebrow={t.live.eyebrow} id="live-h" title={t.live.title} lead={t.live.lead} />
        <LiveStatus />
      </Section>

      <TopicSection topic={rechenleistung} />
      <TopicSection topic={speicher} />
      <TopicSection topic={datensicherung} />
      <TopicSection topic={netzwerk} />
      <TopicSection topic={sicherheit} />

      <Section id="eigene-hardware" labelledBy="hardware-h" band>
        <SectionHead eyebrow={t.warum.eyebrow} id="hardware-h" title={t.warum.title} lead={t.warum.lead} />
        <Cards cols={3}>
          {whyTiles.map((tile) => (
            <Tile key={tile.title} icon={tile.icon} title={tile.title}>
              {tile.text}
            </Tile>
          ))}
        </Cards>
      </Section>

      <Section id="naechstes" labelledBy="naechstes-h">
        <SplitPlain
          eyebrow={t.naechstes.eyebrow}
          title={t.naechstes.title}
          headingId="naechstes-h"
          lead={t.naechstes.lead}
          aside={<TopicVisual visual={roadmapNotes} />}
        >
          <Timeline items={roadmap} />
        </SplitPlain>
      </Section>

      <Section id="faq" labelledBy="faq-h" band>
        <SplitPlain eyebrow={t.faq.eyebrow} title={t.faq.title} headingId="faq-h" aside={<TopicVisual visual={faqLinks} />}>
          <Faq items={faq} />
        </SplitPlain>
      </Section>

      <Section id="kontakt" labelledBy="cta-h">
        <InlineCta
          id="kontakt-cta"
          headingId="cta-h"
          title={
            <>
              {t.cta.titleBefore}
              <Gradient>{t.cta.titleAccent}</Gradient>
              {t.cta.titleAfter}
            </>
          }
          text={t.cta.text}
          primary={{ href: site.links.contact, label: t.cta.primary, icon: "ext" }}
          secondary={{ href: "/oekosystem/", label: t.cta.secondary }}
        />
      </Section>
    </>
  );
}
