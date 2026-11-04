import type { CSSProperties, ReactNode } from "react";
import { Button } from "@/components/ui";
import type { LinkAction } from "./types";

type KontaktCtaProps = {
  id: string;
  headingId: string;
  title: ReactNode;
  text: string;
  primary: LinkAction;
  secondary: LinkAction;
};

const sectionStyle: CSSProperties = { padding: 0 };

/** Abschluss-Block ohne Abstand der Sektion, mit Anker-id. */
export function KontaktCta({ id, headingId, title, text, primary, secondary }: KontaktCtaProps) {
  return (
    <section className="section" id={id} aria-labelledby={headingId} style={sectionStyle}>
      <div className="wrap">
        <div className="cta">
          <div className="glow" aria-hidden="true" />
          <div className="in">
            <h2 className="h2" id={headingId}>
              {title}
            </h2>
            <p>{text}</p>
            <div className="btns">
              <Button href={primary.href} size="lg" icon={primary.icon}>
                {primary.label}
              </Button>
              <Button href={secondary.href} variant="secondary" size="lg" icon={secondary.icon}>
                {secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
