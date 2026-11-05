export type Fact = { id: string; value: string; label: string };

/** Fakten-Reihe als Liste (ul/li) mit Beschriftung für Screenreader. */
export function FactList({ items, ariaLabel }: { items: readonly Fact[]; ariaLabel: string }) {
  return (
    <ul className="facts" aria-label={ariaLabel}>
      {items.map((f) => (
        <li className="fact" key={f.id}>
          <b>{f.value}</b>
          <span>{f.label}</span>
        </li>
      ))}
    </ul>
  );
}
