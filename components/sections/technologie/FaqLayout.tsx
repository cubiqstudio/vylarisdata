import type { ReactNode } from "react";
import { Button } from "@/components/ui";

type FaqLayoutProps = {
  eyebrow: string;
  id: string;
  title: string;
  lead: string;
  action: { href: string; label: string };
  /** die FAQ-Liste */
  children: ReactNode;
};

/** FAQ mit Seitenspalte (Titel, Lead, Link) neben der Liste. */
export function FaqLayout({ eyebrow, id, title, lead, action, children }: FaqLayoutProps) {
  return (
    <div className="faq-layout">
      <div className="faq-side">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h2" id={id}>
          {title}
        </h2>
        <p className="lead">{lead}</p>
        <Button href={action.href} variant="secondary" icon="arrow" className="more">
          {action.label}
        </Button>
      </div>
      {children}
    </div>
  );
}
