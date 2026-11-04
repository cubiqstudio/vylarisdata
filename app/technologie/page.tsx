import { AnfrageCta } from "@/components/sections/technologie/AnfrageCta";
import { FaqLayout } from "@/components/sections/technologie/FaqLayout";
import { FlowChips } from "@/components/sections/technologie/FlowChips";
import { LayerStack } from "@/components/sections/technologie/LayerStack";
import { TechBrandCard } from "@/components/sections/technologie/TechBrandCard";
import { TechHead } from "@/components/sections/technologie/TechHead";
import { TechTile } from "@/components/sections/technologie/TechTile";
import {
  Button,
  Callout,
  Cards,
  Checks,
  Faq,
  Gradient,
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
  faq,
  faqSide,
  flow,
  heads,
  meta,
  principles,
  processSteps,
  quality,
  qualityChecks,
  qualityLayers,
  statusItems,
  website,
  websiteSpecs,
} from "@/content/technologie";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(meta);

export default function TechnologiePage() {
  return (
    <div className="tech-page">
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Technologie" }]}
        eyebrow="Software Development & Technology"
        title="Technik, die man verstehen und warten kann."
        lead="Wir bauen Software für das Vylaris-Ökosystem und arbeiten an der Infrastruktur, auf der sie künftig läuft. Hier erfährst du, nach welchen Grundsätzen wir entwickeln, wie aus einer Idee ein Betrieb werden soll und was davon schon sichtbar ist."
        actions={
          <>
            <Button href="#grundsaetze" size="lg" icon="arrow">
              Unsere Grundsätze
            </Button>
            <Button href="#website" variant="secondary" size="lg">
              Diese Website als Beispiel
            </Button>
          </>
        }
      />

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

      <Section id="qualitaet" labelledBy={quality.id} large band>
        <Split
          copy={
            <>
              <p className="eyebrow">{quality.eyebrow}</p>
              <h2 className="h2" id={quality.id}>
                {quality.title}
              </h2>
              <p className="lead">{quality.lead}</p>
              <Checks items={qualityChecks} />
            </>
          }
          visual={
            <Visual>
              <LayerStack layers={qualityLayers} />
            </Visual>
          }
        />
      </Section>

      <Section id="website" labelledBy={website.id} large>
        <Split
          reverse
          copy={
            <>
              <p className="eyebrow">{website.eyebrow}</p>
              <h2 className="h2" id={website.id}>
                {website.title}
              </h2>
              <p className="lead">{website.lead}</p>
              {website.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </>
          }
          visual={
            <Visual soft>
              <SpecTable rows={websiteSpecs} />
            </Visual>
          }
        />
      </Section>

      <Section id="zielbild" labelledBy={heads.status.id} large band>
        <TechHead {...heads.status} />
        <Timeline items={statusItems} />
      </Section>

      <Section id="gruppe" labelledBy={heads.group.id} large>
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

      <Section id="faq" labelledBy={faqSide.id} large band>
        <FaqLayout {...faqSide}>
          <Faq items={faq} />
        </FaqLayout>
      </Section>

      <AnfrageCta
        id="anfrage"
        headingId="cta-h"
        title={
          <>
            Technische Fragen zu <Gradient>VylarisData</Gradient>?
          </>
        }
        text="Du möchtest wissen, wie wir arbeiten? Über die Kontaktseite der VylarisGroup erreichst du uns."
        primary={{ href: site.links.contact, label: "Kontakt aufnehmen", icon: "link" }}
        secondary={{ href: "/infrastruktur/", label: "Zur Infrastruktur" }}
      />
    </div>
  );
}
