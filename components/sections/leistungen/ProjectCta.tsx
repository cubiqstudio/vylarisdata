import type { ReactNode } from "react";
import { Button, Gradient } from "@/components/ui";
import { site } from "@/content/site";

/** Abschluss-Block mit Icon vor dem Text und Anker-ID "kontakt". */
export function ProjectCta({ secondary }: { secondary: { href: string; label: string } }) {
  const title: ReactNode = (
    <>
      Du planst ein <Gradient>Projekt</Gradient>?
    </>
  );
  return (
    <section className="section" id="kontakt" aria-labelledby="cta-h">
      <div className="wrap">
        <div className="cta">
          <div className="glow" aria-hidden="true" />
          <div className="in">
            <h2 className="h2" id="cta-h">
              {title}
            </h2>
            <p>Schildere dein Vorhaben über den Kontaktweg der VylarisGroup. Anfragen laufen über Kontakt & Tickets auf vylaris.eu.</p>
            <div className="btns">
              <Button href={site.links.contact} size="lg" icon="mail" iconPosition="start">
                Kontakt aufnehmen
              </Button>
              <Button href={secondary.href} variant="secondary" size="lg">
                {secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
