import { SpecTable, Status, type Tone } from "@/components/ui";

export type OverviewRow = {
  name: string;
  tone: Tone;
  status: string;
  text: string;
};

export function OverviewTable({ rows }: { rows: readonly OverviewRow[] }) {
  return (
    <SpecTable
      head={["Leistung", "Stand und Zielgruppe"]}
      rows={rows.map((r) => [
        r.name,
        <>
          <Status tone={r.tone}>{r.status}</Status>
          <p className="mt-2">{r.text}</p>
        </>,
      ])}
    />
  );
}
