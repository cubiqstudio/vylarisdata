import type { ReactNode } from "react";

export type UuHeadData = {
  id: string;
  eyebrow: string;
  title: string;
  lead: ReactNode;
};

/** Sektionskopf mit schmaler Maximalbreite (uu-head). */
export function UuHead({ id, eyebrow, title, lead }: UuHeadData) {
  return (
    <div className="uu-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2" id={id}>
        {title}
      </h2>
      <p className="lead">{lead}</p>
    </div>
  );
}
