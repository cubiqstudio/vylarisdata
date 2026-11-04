export type UuChip = { label: string; blue?: boolean };

/** Chip-Reihe, bei der jeder Chip einzeln blau sein kann. */
export function UuChips({ items }: { items: readonly UuChip[] }) {
  return (
    <div className="chips">
      {items.map((c) => (
        <span key={c.label} className={c.blue ? "chip blue" : "chip"}>
          {c.label}
        </span>
      ))}
    </div>
  );
}
