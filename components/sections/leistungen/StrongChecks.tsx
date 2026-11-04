import { Checks } from "@/components/ui";

/** Listenpunkt mit fett gesetztem Anfang. */
export type StrongPoint = {
  /** fetter Teil, inklusive Satzzeichen (z. B. "Ziel:") */
  lead: string;
  text: string;
};

export function StrongChecks({ items }: { items: readonly StrongPoint[] }) {
  return (
    <Checks
      items={items.map((p) => (
        <>
          <strong>{p.lead}</strong> {p.text}
        </>
      ))}
    />
  );
}
