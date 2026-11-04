import { AudienceCards } from "@/components/sections/leistungen/AudienceCards";
import { FieldCopy } from "@/components/sections/leistungen/FieldCopy";
import { FieldSection } from "@/components/sections/leistungen/FieldSection";
import { OverviewTable } from "@/components/sections/leistungen/OverviewTable";
import { ProjectCta } from "@/components/sections/leistungen/ProjectCta";
import { StrongChecks } from "@/components/sections/leistungen/StrongChecks";
import { Button, Cards, Faq, Facts, PageHero, Section, SectionHead, Split, Tile, Timeline, Visual } from "@/components/ui";
import {
  audiences,
  facts,
  faq,
  fields,
  introDetail,
  meta,
  overview,
  principles,
  softwareTiles,
  workSteps,
} from "@/content/leistungen";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(meta);

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Leistungen" }]}
        eyebrow={site.area}
        title="Was wir für das Ökosystem der VylarisGroup tun"
        lead="Wir entwickeln Software, bauen die Hosting-Infrastruktur der VylarisGroup auf und wollen, dass beides sicher, nachvollziehbar und datensparsam betrieben wird."
        actions={
          <>
            <Button href="#uebersicht" size="lg" icon="arrow">
              Alle Leistungen im Überblick
            </Button>
            <Button href="#hosting" variant="secondary" size="lg">
              Zum Hosting
            </Button>
          </>
        }
      />

      <Section id="uebersicht" labelledBy="uebersicht-h">
        <SectionHead
          eyebrow="Überblick"
          id="uebersicht-h"
          title="Alle Leistungen auf einen Blick"
          lead="Die Tabelle zeigt unsere Leistungsfelder und ihren Stand. Das Hosting ist im Aufbau, Plattform und Automatisierung sind geplant."
        />
        <OverviewTable rows={overview} />
      </Section>

      <Section id="einleitung" labelledBy="einleitung-h" band>
        <Split
          copy={
            <FieldCopy eyebrow="Einleitung" id="einleitung-h" title="Eine technische Basis für alle Dienste der Gruppe">
              <p>
                VylarisData ist eine Marke von CircleUpWilms und gehört zur VylarisGroup. Unser Geschäftsbereich heißt{" "}
                <strong>{site.area}</strong>. Das klingt breit, die Aufgabe dahinter ist aber klar: Wir entwickeln die
                Software der Gruppe und bauen die Infrastruktur auf, auf der sie laufen soll.
              </p>
              <p>{introDetail}</p>
            </FieldCopy>
          }
          visual={
            <Visual>
              <p className="eyebrow">Drei Grundsätze</p>
              <StrongChecks items={principles} />
            </Visual>
          }
        />
        <Facts items={facts} />
      </Section>

      <Section id="software" labelledBy="software-h">
        <SectionHead
          eyebrow="Leistungsfeld 01"
          id="software-h"
          title="Softwareentwicklung für die Dienste der Gruppe"
          lead="Unser Geschäftsbereich ist Software Development & Technology. Unser Ziel sind Anwendungen, Schnittstellen und interne Werkzeuge, die sich an den Anforderungen der VylarisGroup orientieren."
        />
        <p className="max-3xl mt-4">
          Eigenentwicklung heißt für uns: Wir verstehen, was unsere Software tut, und können sie jederzeit anpassen, wenn
          sich Anforderungen ändern.
        </p>
        <Cards cols={4}>
          {softwareTiles.map((t) => (
            <Tile key={t.title} icon={t.icon} title={t.title}>
              {t.text}
            </Tile>
          ))}
        </Cards>
      </Section>

      {fields.map((field) => (
        <FieldSection key={field.id} field={field} />
      ))}

      <Section id="arbeitsweise" labelledBy="arbeitsweise-h" band>
        <Split
          even
          copy={
            <FieldCopy
              eyebrow="Arbeitsweise"
              id="arbeitsweise-h"
              title="So wollen wir arbeiten"
              lead="Unser Vorgehen als Grundsatz: vier Schritte, die für Software und Infrastruktur gleichermaßen gelten sollen. Wir wollen keinen davon überspringen, auch wenn es dadurch etwas länger dauert."
            />
          }
          visual={<Timeline items={workSteps} />}
        />
      </Section>

      <Section id="fuer-wen" labelledBy="fuer-wen-h">
        <SectionHead
          eyebrow="Zielgruppen"
          id="fuer-wen-h"
          title="Für wen wir arbeiten"
          lead="Unser Auftrag kommt aus der VylarisGroup. Ob und wie wir darüber hinaus Dritte unterstützen, steht nicht fest."
        />
        <AudienceCards items={audiences} />
      </Section>

      <Section id="faq" labelledBy="faq-h" band>
        <Split
          even
          copy={
            <FieldCopy
              eyebrow="Häufige Fragen"
              id="faq-h"
              title="Was du vor einer Anfrage wissen solltest"
              lead="Kurze Antworten zu Stand, Standort, Daten und Kontakt."
            />
          }
          visual={<Faq items={faq} openFirst />}
        />
      </Section>

      <ProjectCta secondary={{ href: "/infrastruktur/", label: "Zur Infrastruktur" }} />
    </>
  );
}
