import { Checks, Dots, Icon } from "@/components/ui";
import { iconClass, type RuleTileData } from "./types";

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
        {list === "checks" ? <Checks items={items} /> : <Dots items={items} />}
      </div>
    </li>
  );
}
