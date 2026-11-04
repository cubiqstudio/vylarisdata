import type { ReactNode } from "react";
import { Button, type IconName } from "@/components/ui";

type CtaAction = { href: string; label: string; icon?: IconName };

type AnfrageCtaProps = {
  id: string;
  headingId: string;
  title: ReactNode;
  text: string;
  /** Icon des primären Buttons steht vor dem Text */
  primary: CtaAction;
  secondary: CtaAction;
};

/** Abschluss-Block mit Anker-id und Icon vor dem primären Button-Text. */
export function AnfrageCta({ id, headingId, title, text, primary, secondary }: AnfrageCtaProps) {
  return (
    <section className="section" id={id} aria-labelledby={headingId}>
      <div className="wrap">
        <div className="cta">
          <div className="glow" aria-hidden="true" />
          <div className="in">
            <h2 className="h2" id={headingId}>
              {title}
            </h2>
            <p>{text}</p>
            <div className="btns">
              <Button href={primary.href} size="lg" icon={primary.icon} iconPosition="start">
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
