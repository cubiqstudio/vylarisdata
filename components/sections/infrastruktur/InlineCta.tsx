import type { ReactNode } from "react";
import { Button, type IconName } from "@/components/ui";

type CtaAction = { href: string; label: string; icon?: IconName };

type InlineCtaProps = {
  /** Anker-ID des Umschlags */
  id: string;
  headingId: string;
  title: ReactNode;
  text: string;
  primary: CtaAction;
  secondary: CtaAction;
};

/** Abschluss-Kasten innerhalb einer bestehenden Section (Umschlag .cards). */
export function InlineCta({ id, headingId, title, text, primary, secondary }: InlineCtaProps) {
  return (
    <div className="cards" id={id}>
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
  );
}
