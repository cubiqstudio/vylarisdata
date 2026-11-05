import type { ReactNode } from "react";

export type UuHeadData = {
  id: string;
  eyebrow: string;
  title: string;
  lead?: ReactNode;
};

/** Eyebrow und Überschrift ohne Wrapper, z. B. in der Textspalte eines Splits. */
export function UuTitle({ id, eyebrow, title }: Pick<UuHeadData, "id" | "eyebrow" | "title">) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2" id={id}>
        {title}
      </h2>
    </>
  );
}

/** Sektionskopf mit schmaler Maximalbreite (uu-head). */
export function UuHead({ id, eyebrow, title, lead }: UuHeadData) {
  return (
    <div className="uu-head">
      <UuTitle id={id} eyebrow={eyebrow} title={title} />
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}
