import { FaqSplit } from "@/components/sections/kontakt/FaqSplit";
import { KontaktBrandCard } from "@/components/sections/kontakt/KontaktBrandCard";
import { KontaktCta } from "@/components/sections/kontakt/KontaktCta";
import { KontaktHero } from "@/components/sections/kontakt/KontaktHero";
import { KontaktTile } from "@/components/sections/kontakt/KontaktTile";
import { NoteTile } from "@/components/sections/kontakt/NoteTile";
import { RuleTile } from "@/components/sections/kontakt/RuleTile";
import { Button, Callout, Cards, Checks, Gradient, Section, SectionHead, Split, Steps } from "@/components/ui";
import {
  brands,
  crumbs,
  faq,
  faqAside,
  faqHead,
  flowHead,
  flowSteps,
  hero,
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
  topicsHead,
} from "@/content/kontakt";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(meta);

export default function KontaktPage() {
  return (
    <>
      <KontaktHero
        crumbs={crumbs}
        {...hero}
        actions={
          <>
            <Button href={site.links.contact} size="lg" icon="ext">
              Zu Kontakt & Tickets
            </Button>
            <Button href="#anliegen" variant="secondary" size="lg">
              Thema wählen
            </Button>
          </>
        }
      />

      <Section id="anliegen" labelledBy={topicsHead.id} large>
        <SectionHead {...topicsHead} />
        <Cards cols={2}>
          {topics.map((t) => (
            <KontaktTile key={t.title} tile={t} />
          ))}
        </Cards>
        <div className="hero-cta">
          <Button href={site.links.contact} size="lg" icon="ext">
            Ticket öffnen
          </Button>
        </div>
      </Section>

      <Section id="ablauf" labelledBy={flowHead.id} band>
        <SectionHead {...flowHead} />
        <Steps items={flowSteps} />
      </Section>

      <Section id="anfrage" labelledBy={requestHead.id} large>
        <Split
          copy={
            <>
              <p className="eyebrow">{requestHead.eyebrow}</p>
              <h2 className="h2" id={requestHead.id}>
                {requestHead.title}
              </h2>
              <p className="lead">{requestHead.lead}</p>
              <Checks
                items={requestPoints.map((p) => (
                  <>
                    <strong>{p.label}</strong> {p.text}
                  </>
                ))}
              />
            </>
          }
          visual={
            <NoteTile
              eyebrow={note.eyebrow}
              title={
                <>
                  Schreibe so, dass auch jemand <Gradient>ohne Vorwissen</Gradient> dein Anliegen versteht.
                </>
              }
              text={note.text}
              chips={note.chips}
            />
          }
        />
      </Section>

      <Section id="sicherheit" labelledBy={securityHead.id} large band>
        <SectionHead {...securityHead} />
        <Cards cols={2}>
          {securityRules.map((r) => (
            <RuleTile key={r.title} tile={r} />
          ))}
        </Cards>
        <div className="mt-8">
          <Callout icon="shield">{securityCallout}</Callout>
        </div>
      </Section>

      <Section id="partner" labelledBy={partnerHead.id} large>
        <SectionHead {...partnerHead} />
        <div className="grid grid-2">
          {brands.map((b) => (
            <KontaktBrandCard key={b.name} brand={b} />
          ))}
        </div>
      </Section>

      <Section id="status" labelledBy={statusHead.id} band>
        <SectionHead {...statusHead} />
        <Cards cols={2}>
          {resources.map((r) => (
            <KontaktTile key={r.title} tile={r} />
          ))}
        </Cards>
        <div className="mt-8" id="rechtliches">
          <Callout icon="lock">{privacyCallout}</Callout>
        </div>
      </Section>

      <Section id="faq" labelledBy={faqHead.id}>
        <FaqSplit {...faqHead} items={faq} aside={faqAside} />
      </Section>

      <KontaktCta
        id="cta"
        headingId="cta-h"
        title={
          <>
            Bereit, dich zu <Gradient>melden</Gradient>?
          </>
        }
        text="Beschreibe dein Anliegen im Ticketsystem von VylarisGroupEurope."
        primary={{ href: site.links.contact, label: "Kontakt aufnehmen", icon: "ext" }}
        secondary={{ href: "/oekosystem/", label: "Zum Ökosystem" }}
      />
    </>
  );
}
