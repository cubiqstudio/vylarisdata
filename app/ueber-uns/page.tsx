import { AllianceEco } from "@/components/sections/ueber-uns/AllianceEco";
import { PartyCard, PrincipleTile } from "@/components/sections/ueber-uns/UuCards";
import { UuChips } from "@/components/sections/ueber-uns/UuChips";
import { UuFacts } from "@/components/sections/ueber-uns/UuFacts";
import { UuHead } from "@/components/sections/ueber-uns/UuHead";
import { UuHero, UuStatus } from "@/components/sections/ueber-uns/UuHero";
import { UuSplit, UuVisual } from "@/components/sections/ueber-uns/UuSplit";
import { UuStack } from "@/components/sections/ueber-uns/UuStack";
import { Button, Callout, Cards, Checks, Cta, Faq, Gradient, Section, Timeline } from "@/components/ui";
import {
  allianceCh,
  allianceEu,
  allianceIntro,
  faq,
  history,
  hostingStatus,
  importantChips,
  meta,
  missionChips,
  overviewLayers,
  parties,
  partiesHead,
  partiesNote,
  principles,
  siteFacts,
  targetLayers,
  valuesHead,
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
        title="Die Technik hinter dem Vylaris-Ökosystem."
        lead="VylarisData ist eine Marke von CircleUpWilms und verantwortet innerhalb der VylarisGroup den Bereich Software Development & Technology. Die Infrastruktur, die künftig das Hosting der Gruppe übernimmt, ist im Aufbau."
        status={hostingStatus}
        actions={
          <>
            <Button href="/oekosystem/" size="lg" icon="arrow">
              Das Ökosystem
            </Button>
            <Button href="/kontakt/" variant="secondary" size="lg">
              Kontakt
            </Button>
          </>
        }
      />

      <Section id="mission" labelledBy="mission-h">
        <UuSplit
          copy={
            <>
              <p className="eyebrow">Unsere Mission</p>
              <h2 className="h2" id="mission-h">
                Das Vylaris-Ökosystem technisch tragen.
              </h2>
              <p>
                Unser Leitsatz lautet „Powering the Vylaris Ecosystem“. Die Dienste der VylarisGroup brauchen eine
                technische Basis, die ihnen gehört und die sie verstehen. Diese wollen wir bauen.
              </p>
              <p>
                VylarisData übernimmt <strong className="strong">künftig das Hosting der VylarisGroup</strong>. Die
                Infrastruktur dafür ist <strong className="strong">im Aufbau</strong>. Wir sagen das so deutlich, weil
                wir nichts versprechen wollen, was noch nicht steht.
              </p>
              <p>
                Unser Bereich ist Software Development & Technology. Die Grundsätze, nach denen später betrieben werden
                soll, halten wir auf dieser Seite fest.
              </p>
            </>
          }
          visual={
            <UuVisual soft>
              <p className="eyebrow">VylarisData</p>
              <p className="h3 uu-claim">
                <Gradient>{site.tri}</Gradient>
              </p>
              <p className="mt-6">
                Drei Wörter als Leitlinie: Technik, die du verstehst, Infrastruktur, die du kontrollierst, und Ideen, die
                wir weiterentwickeln.
              </p>
              <UuChips items={missionChips} />
            </UuVisual>
          }
        />
      </Section>

      <Section id="werte" labelledBy="werte-h" band>
        <UuHead {...valuesHead} />
        <Cards cols={4}>
          {principles.map((p) => (
            <PrincipleTile key={p.title} item={p} />
          ))}
        </Cards>
      </Section>

      <Section id="dahinter" labelledBy="dahinter-h">
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

      <Section id="allianz" labelledBy="allianz-h" band>
        <div className="center">
          <p className="eyebrow">Allianz CH & EU</p>
          <h2 className="h2" id="allianz-h">
            Zwei Seiten, eine Gruppe.
          </h2>
          <p className="lead">{allianceIntro}</p>
        </div>
        <AllianceEco left={allianceCh} right={allianceEu} />
      </Section>

      <Section id="geschichte" labelledBy="geschichte-h">
        <UuSplit
          narrow
          copy={
            <>
              <p className="eyebrow">Unsere Geschichte</p>
              <h2 className="h2" id="geschichte-h">
                Vom Homelab zur gemeinsamen Infrastruktur.
              </h2>
              <p className="lead">Die wichtigsten Etappen, ohne Jahreszahlen.</p>
              <UuVisual soft className="mt-8">
                <p className="eyebrow">Stand im Überblick</p>
                <UuStack layers={overviewLayers} />
              </UuVisual>
            </>
          }
          visual={<Timeline items={history} />}
        />
      </Section>

      <Section id="arbeitsweise" labelledBy="arbeit-h" band>
        <UuSplit
          copy={
            <>
              <p className="eyebrow">Wie wir arbeiten</p>
              <h2 className="h2" id="arbeit-h">
                Ruhig, planvoll, in kleinen Schritten.
              </h2>
              <p>
                Wir orientieren uns an bewährten Grundsätzen aus dem Software- und Serverbetrieb. Sie beschreiben, wie wir
                arbeiten wollen, sobald die Infrastruktur steht.
              </p>
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
              <p className="eyebrow">Zielbild</p>
              <UuStack layers={targetLayers} arrows />
            </UuVisual>
          }
        />
      </Section>

      <Section id="wichtig" labelledBy="wichtig-h">
        <UuSplit
          reverse
          wichtig
          copy={
            <>
              <p className="eyebrow">Das ist uns wichtig</p>
              <h2 className="h2" id="wichtig-h">
                Offen entwickelt, ohne Tracking.
              </h2>
              <p>
                VylarisGroupEurope setzt auf Open-Source-Dienste, die dauerhaft kostenlos nutzbar sind, ohne Tracking und
                auf DSGVO-konformer Infrastruktur in Europa. An diesem Anspruch messen wir uns.
              </p>
              <p>
                Diese Website macht es vor: Sie setzt <strong className="strong">keine Cookies</strong> und nutzt{" "}
                <strong className="strong">kein Tracking</strong>. Schriften und Skripte kommen von derselben Domain, und
                deine Wahl zwischen hellem, dunklem oder dem Systemdesign bleibt lokal in deinem Browser.
              </p>
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

      <Section id="faq" labelledBy="faq-h" band>
        <UuSplit
          narrow
          copy={
            <>
              <p className="eyebrow">Häufige Fragen</p>
              <h2 className="h2" id="faq-h">
                Kurze Antworten zu VylarisData.
              </h2>
              <p className="lead">Das Wichtigste zu Stand, Zusammenhang und Kontakt.</p>
              <UuStatus label={hostingStatus} />
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
            Neugierig auf <Gradient>VylarisData</Gradient>?
          </>
        }
        text="Schau dir unsere Leistungen an oder melde dich über VylarisGroupEurope bei uns."
        primary={{ href: "/leistungen/", label: "Unsere Leistungen" }}
        secondary={{ href: site.links.contact, label: "Kontakt über VylarisGroupEurope", icon: "ext" }}
      />
    </>
  );
}
