import type { FactItem } from "@/components/ui";

/** Fakten-Liste (ul) ohne oberen Abstand, einspaltig. */
export function UuFacts({ items }: { items: readonly FactItem[] }) {
  return (
    <ul className="facts uu-facts">
      {items.map((f, i) => (
        <li className="fact" key={`${i}-${f.value}`}>
          <b>{f.value}</b>
          <span>{f.label}</span>
        </li>
      ))}
    </ul>
  );
}
