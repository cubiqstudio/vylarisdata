import type { ReactNode } from "react";
import { Status } from "@/components/ui";
import type { StatusInfo } from "./types";

type FieldCopyProps = {
  eyebrow: string;
  title: ReactNode;
  /** id der Überschrift (für aria-labelledby der Section) */
  id: string;
  status?: StatusInfo;
  lead?: ReactNode;
  children?: ReactNode;
};

/** Textspalte eines Leistungsfelds: Eyebrow, Überschrift, Status, Lead, Inhalt. */
export function FieldCopy({ eyebrow, title, id, status, lead, children }: FieldCopyProps) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2" id={id}>
        {title}
      </h2>
      {status && (
        <p className="mt-4">
          <Status tone={status.tone}>{status.label}</Status>
        </p>
      )}
      {lead && <p className="lead">{lead}</p>}
      {children}
    </>
  );
}
