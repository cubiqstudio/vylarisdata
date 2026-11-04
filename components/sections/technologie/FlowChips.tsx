/** Ablaufkette aus Chips (rein dekorativ, die Schritte stehen darunter als Liste). */
export function FlowChips({ items }: { items: readonly string[] }) {
  return (
    <ul className="flow" aria-hidden="true">
      {items.map((label) => (
        <li key={label}>
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}
