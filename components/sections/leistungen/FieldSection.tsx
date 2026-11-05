import { A, Section, Split, Visual } from "@/components/ui";
import { FieldCopy } from "./FieldCopy";
import { FlowStack, type FlowLayer } from "./FlowStack";
import { StrongChecks, type StrongPoint } from "./StrongChecks";
import type { StatusInfo } from "./types";

/** Ein Leistungsfeld: Text links, Schichtenbild rechts (oder umgekehrt). */
export type FieldContent = {
  id: string;
  eyebrow: string;
  title: string;
  status?: StatusInfo;
  lead?: string;
  paragraphs: readonly string[];
  points: readonly StrongPoint[];
  link?: { href: string; label: string };
  visual: {
    eyebrow?: string;
    layers: readonly FlowLayer[];
    arrows?: boolean;
  };
  band?: boolean;
  reverse?: boolean;
};

export function FieldSection({ field }: { field: FieldContent }) {
  const headId = `${field.id}-h`;
  return (
    <Section id={field.id} labelledBy={headId} band={field.band}>
      <Split
        reverse={field.reverse}
        copy={
          <FieldCopy eyebrow={field.eyebrow} title={field.title} id={headId} status={field.status} lead={field.lead}>
            {field.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <StrongChecks items={field.points} />
            {field.link && (
              <p className="mt-6">
                <A href={field.link.href} className="link">
                  {field.link.label}
                </A>
              </p>
            )}
          </FieldCopy>
        }
        visual={
          <Visual>
            {field.visual.eyebrow && <p className="eyebrow">{field.visual.eyebrow}</p>}
            <FlowStack layers={field.visual.layers} arrows={field.visual.arrows} />
          </Visual>
        }
      />
    </Section>
  );
}
