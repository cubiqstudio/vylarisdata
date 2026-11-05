import { Icon, type IconName } from "@/components/ui";

/** Icon-Karte (Icon, Titel, Text), gemeinsam für alle Kartenlisten der Startseite. */
export type IconCardItem = {
  icon: IconName;
  title: string;
  text: string;
};

/** Dreispaltiges Raster aus weichen Karten (.card-soft). */
export function SoftGrid({ items }: { items: readonly IconCardItem[] }) {
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
