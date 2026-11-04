import { Icon, type IconName } from "@/components/ui";

export type SoftItem = {
  icon: IconName;
  title: string;
  text: string;
};

/** Dreispaltiges Raster aus weichen Karten (.card-soft). */
export function SoftGrid({ items }: { items: readonly SoftItem[] }) {
  return (
    <ul className="grid grid-3">
      {items.map((it) => (
        <li key={it.title}>
          <div className="card-soft">
            <span className="icon">
              <Icon name={it.icon} />
            </span>
            <h3>{it.title}</h3>
            <p>{it.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
