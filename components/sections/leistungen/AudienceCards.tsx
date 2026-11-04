import { Cards, Icon, type IconName } from "@/components/ui";

export type AudienceItem = {
  icon: IconName;
  iconTone?: "indigo";
  title: string;
  text: string;
};

/** Zielgruppen-Karten (Feature-Kacheln) mit optional abgesetztem Icon-Farbton. */
export function AudienceCards({ items }: { items: readonly AudienceItem[] }) {
  return (
    <Cards cols={3}>
      {items.map((it) => (
        <li key={it.title}>
          <div className="tile feature">
            <span className={it.iconTone ? `icon ${it.iconTone}` : "icon"}>
              <Icon name={it.icon} />
            </span>
            <h3>{it.title}</h3>
            <p>{it.text}</p>
          </div>
        </li>
      ))}
    </Cards>
  );
}
