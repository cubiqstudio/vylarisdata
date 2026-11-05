import type { ReactNode } from "react";

type SplitPlainProps = {
  eyebrow: string;
  title: string;
  /** id der Überschrift (passend zu Section.labelledBy) */
  headingId: string;
  lead?: string;
  /** Inhalt unter dem Kopf */
  children: ReactNode;
  aside: ReactNode;
};

/** Zweispaltig: links Kopf (Eyebrow, H2, optional Lead) mit Inhalt, rechts eine Begleitspalte. */
export function SplitPlain({ eyebrow, title, headingId, lead, children, aside }: SplitPlainProps) {
  return (
    <div className="split">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h2" id={headingId}>
          {title}
        </h2>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
      {aside}
    </div>
  );
}
