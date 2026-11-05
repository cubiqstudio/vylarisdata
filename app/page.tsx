import type { Metadata } from "next";
import { NetworkGraphic } from "@/components/graphics/NetworkGraphic";
import { ChipGroup } from "@/components/sections/index/ChipGroup";
import { ContactCta } from "@/components/sections/index/ContactCta";
import { CopyAction, CopyHead, CtaRow, NoteBox } from "@/components/sections/index/CopyParts";
import { EcoBrandCard } from "@/components/sections/index/EcoBrandCard";
import { HomeHero } from "@/components/sections/index/HomeHero";
import { SoftGrid } from "@/components/sections/index/SoftGrid";
import {
  Button,
  Callout,
  Cards,
  Checks,
  Chips,
  Dots,
  Facts,
  Faq,
  Gradient,
  Section,
  SectionHead,
  Split,
  SpecTable,
  Status,
  Steps,
  Tile,
  Visual,
} from "@/components/ui";
import {
  accessChecks,
  areas,
  brands,
  buildingBlocks,
  chipGroups,
  contactCta,
  facts,
  faq,
  focus,
  hero,
  homeMeta,
  leadItems,
  principles,
  roadmap,
  sections,
  storageChips,
  storageRows,
  transparencyPoints,
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
        <SectionHead center {...sections.eckdaten} id="eckdaten-h" />
        <Facts items={facts} />
      </Section>

      <Section id="fokus" labelledBy="fokus-h" large band>
        <SectionHead center {...sections.fokus} id="fokus-h" />
        <SoftGrid items={focus} />
      </Section>

      <Section id="infrastruktur" labelledBy="infrastruktur-h" large>
        <SectionHead center {...sections.infrastruktur} id="infrastruktur-h" />
        <Cards cols={3}>
          {buildingBlocks.map((b) => (
            <Tile key={b.title} icon={b.icon} title={b.title} href="/infrastruktur/" more="Zur Infrastruktur">
              {b.text}
            </Tile>
          ))}
        </Cards>
        <CtaRow>
          <Button href="/infrastruktur/" icon="arrow">
            Zur Infrastruktur und zum Live-Status
          </Button>
        </CtaRow>
      </Section>

      <Section id="speicher" labelledBy="speicher-h" large band>
        <Split
          reverse
          copy={
            <>
              <CopyHead {...sections.speicher} id="speicher-h" />
              <p>
                Aktuell sind 250 TB SSD in Betrieb. Der Rest ist im Aufbau: vier Server mit je 120 TB SSD und ein
                Server mit knapp 500 TB HDD ergeben als Ausbauziel knapp 1 Petabyte Rohkapazität.
              </p>
              <p>Es ist die Rohkapazität vor Redundanz; die nutzbare Menge nennen wir hier nicht.</p>
              <Chips items={storageChips} blue />
            </>
          }
          visual={
            <Visual soft>
              <p className="h4">Speicher im Detail</p>
              <SpecTable head={["Speicherklasse", "Umfang"]} rows={storageRows} />
            </Visual>
          }
        />
      </Section>

      <Section id="leistungen" labelledBy="leistungen-h" large>
        <SectionHead center {...sections.leistungen} id="leistungen-h" />
        <Cards cols={4}>
          {areas.map((a) => (
            <Tile key={a.title} icon={a.icon} title={a.title} href="/leistungen/" more="Mehr dazu">
              {a.text}
            </Tile>
          ))}
        </Cards>
      </Section>

      <Section id="zugang" labelledBy="zugang-h" large band>
        <Split
          copy={
            <>
              <CopyHead {...sections.zugang} id="zugang-h" />
              <p>
                Auch unsere eigene Website läuft hinter einem Cloudflare Tunnel: Der Server hat keine offenen Ports und baut die
                Verbindung ausschließlich nach außen auf.
              </p>
              <Checks items={leadItems(accessChecks)} />
            </>
          }
          visual={
            <Visual soft>
              <p className="h4">Transparent im Betrieb</p>
              <Dots items={transparencyPoints} />
            </Visual>
          }
        />
      </Section>

      <Section id="prinzipien" labelledBy="prinzipien-h" large>
        <SectionHead center {...sections.prinzipien} id="prinzipien-h" />
        <Cards cols={3}>
          {principles.map((p) => (
            <Tile key={p.title} icon={p.icon} title={p.title}>
              {p.text}
            </Tile>
          ))}
        </Cards>
      </Section>

      <Section id="oekosystem" labelledBy="oekosystem-h" large band>
        <SectionHead center {...sections.oekosystem} id="oekosystem-h" />
        <Cards cols={2}>
          {brands.map((b) => (
            <EcoBrandCard key={b.name} brand={b} />
          ))}
        </Cards>
        <NoteBox>
          <Callout icon="link">
            <p>
              <strong>Schweiz und Europa.</strong> Der Schweizer Verein und der europäische Zweig arbeiten Hand in Hand: Die
              Schweiz trägt die Idee, Europa die Rechtsstruktur.
            </p>
          </Callout>
        </NoteBox>
        <NoteBox>
          <Callout icon="rocket">
            <p>
              <Status tone="info">Geplant</Status> <strong>Das Ökosystem weiter ausbauen.</strong> Das ist unser Plan für die Zukunft.
            </p>
          </Callout>
        </NoteBox>
        <CtaRow>
          <Button href="/oekosystem/" icon="arrow">
            Mehr zum Ökosystem
          </Button>
        </CtaRow>
      </Section>

      <Section id="roadmap" labelledBy="roadmap-h" large>
        <SectionHead center {...sections.roadmap} id="roadmap-h" />
        <Steps items={roadmap} />
        <CtaRow>
          <Button href="/infrastruktur/" variant="secondary" icon="arrow">
            Details zur Infrastruktur
          </Button>
        </CtaRow>
      </Section>

      <Section id="technologie" labelledBy="technologie-h" large band>
        <Split
          reverse
          copy={
            <>
              <CopyHead {...sections.technologie} id="technologie-h" />
              <p>
                Die Dienste von VylarisGroupEurope sind kostenlose Open-Source-SaaS-Dienste. VylarisData ist der Geschäftsbereich
                Software Development & Technology der VylarisGroup und betreibt eigene Hardware.
              </p>
              <p>
                Auf der Technologie-Seite beschreiben wir unsere Arbeitsweise. Diese Website selbst ist ein Beispiel: hinter einem
                Tunnel, ohne offene Ports, ohne Tracking.
              </p>
              <CopyAction href="/technologie/" label="Zur Technologie" />
            </>
          }
          visual={
            <Visual soft>
              <p className="h4">So arbeiten wir</p>
              <Dots items={workPrinciples} />
              {chipGroups.map((g) => (
                <ChipGroup key={g.caption} caption={g.caption} items={g.items} />
              ))}
            </Visual>
          }
        />
      </Section>

      <Section id="faq" labelledBy="faq-h" large>
        <SectionHead center {...sections.faq} id="faq-h" />
        <Faq items={faq} />
      </Section>

      <ContactCta
        id="kontakt"
        headingId="kontakt-h"
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
