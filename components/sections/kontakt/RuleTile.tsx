import type { CSSProperties, ReactNode } from "react";
import { Checks, Icon, type IconName } from "@/components/ui";
import { iconClass, type IconTone } from "./types";

export type RuleTileData = {
  icon: IconName;
  iconTone?: IconTone;
  title: string;
  /** "checks" für Empfehlungen, "dots" für Auflistungen ohne Haken */
  list: "checks" | "dots";
  items: readonly ReactNode[];
};

const dotsStyle: CSSProperties = { marginTop: "1.5rem", gap: ".75rem" };

/** Feature-Karte (li) mit Icon, Titel und einer Liste. */
export function RuleTile({ tile }: { tile: RuleTileData }) {
  const { icon, iconTone, title, list, items } = tile;
  return (
    <li>
      <div className="tile feature">
        <span className={iconClass(iconTone)}>
          <Icon name={icon} />
        </span>
        <h3>{title}</h3>
        {list === "checks" ? (
          <Checks items={items} />
        ) : (
          <ul className="dots" style={dotsStyle}>
            {items.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
