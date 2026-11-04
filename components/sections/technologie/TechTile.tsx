import { Icon, type IconName } from "@/components/ui";

export type TechChip = { label: string; blue?: boolean };

export type TechTileData = {
  icon: IconName;
  /** Farbton des Icon-Kastens (Standard: Marken-Blau) */
  iconTone?: "indigo";
  title: string;
  text: string;
  /** Chips unter dem Text (nur bei Feature-Karten) */
  chips?: readonly TechChip[];
};

type TechTileProps = {
  tile: TechTileData;
  variant: "soft" | "feature";
};

/** Karte (li) mit Icon, Text und optionalen Chips; Icon-Farbton wählbar. */
export function TechTile({ tile, variant }: TechTileProps) {
  const { icon, iconTone, title, text, chips } = tile;
  return (
    <li>
      <div className={`tile ${variant}`}>
        <span className={iconTone ? `icon ${iconTone}` : "icon"}>
          <Icon name={icon} />
        </span>
        <h3>{title}</h3>
        <p>{text}</p>
        {chips && chips.length > 0 && (
          <div className="chips">
            {chips.map((c) => (
              <span key={c.label} className={c.blue ? "chip blue" : "chip"}>
                {c.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
