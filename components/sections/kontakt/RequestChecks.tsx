import { Checks } from "@/components/ui";
import type { RequestPoint } from "./types";

/** Checkliste der Angaben für ein gutes Ticket: fettes Label, dann der Hinweistext. */
export function RequestChecks({ points }: { points: readonly RequestPoint[] }) {
  return (
    <Checks
      items={points.map((p) => (
        <>
          <strong>{p.label}</strong> {p.text}
        </>
      ))}
    />
  );
}
