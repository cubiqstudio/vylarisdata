import type { ReactNode } from "react";

export type TechHeadData = {
  /** id der Überschrift (passend zu aria-labelledby der Sektion) */
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
};

/** Sektionskopf der Technologie-Seite (.sec-head, Breite per tech-page-CSS). */
export function TechHead({ id, eyebrow, title, lead }: TechHeadData) {
  return (
    <div className="sec-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2" id={id}>
        {title}
      </h2>
      <p className="lead">{lead}</p>
    </div>
  );
}
