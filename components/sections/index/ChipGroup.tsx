export type ChipItem = { label: string; blue?: boolean };

type ChipGroupProps = {
  caption: string;
  items: readonly ChipItem[];
};

/** Beschriftete Chip-Reihe, einzelne Chips können blau hervorgehoben sein. */
export function ChipGroup({ caption, items }: ChipGroupProps) {
  return (
    <>
      <p className="chips-cap">{caption}</p>
      <div className="chips">
        {items.map((c) => (
          <span key={c.label} className={c.blue ? "chip blue" : "chip"}>
            {c.label}
          </span>
        ))}
      </div>
    </>
  );
}
