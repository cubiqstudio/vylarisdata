import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { AllianceFlow } from "@/components/sections/oekosystem/AllianceFlow";
import { EcoBrandCard } from "@/components/sections/oekosystem/EcoBrandCard";
import { EcoCta } from "@/components/sections/oekosystem/EcoCta";
import { LayerArrow } from "@/components/sections/oekosystem/LayerArrow";
import { LinkTile } from "@/components/sections/oekosystem/LinkTile";
import { Panel, PanelFacts } from "@/components/sections/oekosystem/Panel";
import { ResponsibilityList } from "@/components/sections/oekosystem/ResponsibilityList";
import {
  A,
  Button,
  Cards,
  Checks,
  Faq,
  Gradient,
  PageHero,
  Section,
  SectionHead,
  Split,
  Tile,
  Timeline,
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
  faq,
  faqText,
  groupPanel,
  heads,
  linkTiles,
  meta,
  progressText,
  responsibilities,
  timeline,
  values,
} from "@/content/oekosystem";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

/* Der Titel nennt den Markennamen bereits, daher ohne Titel-Suffix des Layouts. */
const base = pageMetadata(meta);
export const metadata: Metadata = {
  ...base,
  title: { absolute: meta.title },
  openGraph: { ...base.openGraph, title: meta.title },
};

const flushTop: CSSProperties = { marginTop: 0 };

export default function OekosystemPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Ökosystem" }]}
        eyebrow="Ökosystem der VylarisGroup"
        title="Ein Ökosystem, vier Bausteine."
        lead="Die VylarisGroup besteht aus vier Teilen, die sich ergänzen. Hier siehst du, wer was macht und wo VylarisData steht."
        actions={
          <>
            <Button href="#uebersicht" size="lg" icon="arrow">
              Zur Übersicht
            </Button>
            <Button href="#wer-macht-was" variant="secondary" size="lg">
              Wer macht was
            </Button>
          </>
        }
      />

      <Section id="uebersicht" labelledBy={heads.overview.id} large>
        <SectionHead {...heads.overview} />
        <Panel tone="blue" icon="globe" title={groupPanel.title} subtitle={groupPanel.subtitle} centered>
          <p className="mt-4">{groupPanel.text}</p>
        </Panel>
        <LayerArrow spaced />
        <ul className="cards c2" style={flushTop}>
          {brands.map((brand) => (
            <EcoBrandCard key={brand.name} brand={brand} />
          ))}
        </ul>
      </Section>

      <Section id="allianz" labelledBy={copies.alliance.id} band>
        <Split
          copy={
            <>
              <p className="eyebrow">{copies.alliance.eyebrow}</p>
              <h2 className="h2" id={copies.alliance.id}>
                {copies.alliance.title}
              </h2>
              <p>{allianceParagraph}</p>
              <Checks items={allianceChecks} />
              <p className="mt-6">
                <A className="link" href={allianceLink.href}>
                  {allianceLink.label}
                </A>
              </p>
            </>
          }
          visual={
            <Visual>
              <AllianceFlow top={allianceTop} bottom={allianceBottom} between={allianceBetween} />
            </Visual>
          }
        />
      </Section>

      <Section id="circleupwilms" labelledBy={copies.circleUpWilms.id}>
        <Split
          reverse
          copy={
            <>
              <p className="eyebrow">{copies.circleUpWilms.eyebrow}</p>
              <h2 className="h2" id={copies.circleUpWilms.id}>
                {copies.circleUpWilms.title}
              </h2>
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

      <Section id="wer-macht-was" labelledBy={heads.responsibilities.id} band>
        <SectionHead
          {...heads.responsibilities}
          lead={
            <>
              Vier Aufgaben, klar verteilt. Anfragen laufen gebündelt über{" "}
              <A className="link" href={site.links.contact}>
                vylaris.eu/contact
              </A>
              .
            </>
          }
        />
        <ResponsibilityList items={responsibilities} />
        <p className="mt-6">
          Mehr zur Technik und zum Aufbau findest du auf der Seite{" "}
          <A className="link" href="/infrastruktur/">
            Infrastruktur
          </A>
          , Kontaktmöglichkeiten auf der{" "}
          <A className="link" href="/kontakt/">
            Kontaktseite
          </A>
          .
        </p>
      </Section>

      <Section id="weg" labelledBy={copies.progress.id}>
        <Split
          copy={
            <>
              <p className="eyebrow">{copies.progress.eyebrow}</p>
              <h2 className="h2" id={copies.progress.id}>
                {copies.progress.title}
              </h2>
              <p>{progressText}</p>
            </>
          }
          visual={<Timeline items={timeline} />}
        />
      </Section>

      <Section id="werte" labelledBy={heads.values.id} band>
        <SectionHead {...heads.values} center />
        <Cards cols={4}>
          {values.map((v) => (
            <Tile key={v.title} icon={v.icon} title={v.title} variant="feature">
              {v.text}
            </Tile>
          ))}
        </Cards>
      </Section>

      <Section id="links" labelledBy={heads.links.id}>
        <SectionHead {...heads.links} />
        <Cards cols={3}>
          {linkTiles.map((tile) => (
            <LinkTile key={tile.href} tile={tile} />
          ))}
        </Cards>
      </Section>

      <Section id="faq" labelledBy={copies.faq.id} band>
        <Split
          copy={
            <>
              <p className="eyebrow">{copies.faq.eyebrow}</p>
              <h2 className="h2" id={copies.faq.id}>
                {copies.faq.title}
              </h2>
              <p>{faqText}</p>
            </>
          }
          visual={<Faq items={faq} />}
        />
      </Section>

      <EcoCta
        id="kontakt"
        headingId="cta-h"
        title={
          <>
            Du willst mehr über das <Gradient>Ökosystem</Gradient> wissen?
          </>
        }
        text="Schau dir an, wie wir die Infrastruktur aufbauen, oder nimm über VylarisGroupEurope Kontakt zu uns auf."
        primary={{ href: site.links.contact, label: "Kontakt aufnehmen", icon: "mail" }}
        secondary={{ href: "/infrastruktur/", label: "Zur Infrastruktur" }}
      />
    </>
  );
}
