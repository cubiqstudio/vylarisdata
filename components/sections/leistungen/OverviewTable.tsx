import { SpecTable, Status } from "@/components/ui";
import type { StatusInfo } from "./types";

export type OverviewRow = {
  name: string;
  /** Stand-Badge; entfällt, wenn der Eintrag keinen Betriebsstand hat */
  status?: StatusInfo;
  text: string;
};

export function OverviewTable({ rows }: { rows: readonly OverviewRow[] }) {
  return (
    <SpecTable
      head={["Leistung", "Stand und Zielgruppe"]}
      rows={rows.map((r) => [
        r.name,
        <>
          {r.status && <Status tone={r.status.tone}>{r.status.label}</Status>}
          <p className={r.status ? "mt-2" : undefined}>{r.text}</p>
        </>,
      ])}
    />
  );
}
