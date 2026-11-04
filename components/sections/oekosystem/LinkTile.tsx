import { Icon, A, type IconName } from "@/components/ui";
import { iconClass, type IconTone } from "./types";

export type LinkTileData = {
  icon: IconName;
  iconTone?: IconTone;
  title: string;
  text: string;
  href: string;
  /** Anzeigetext des Links unten */
  more: string;
};

/** Klickbare Kachel (li) zu einer externen Seite. */
export function LinkTile({ tile }: { tile: LinkTileData }) {
  return (
    <li>
      <A href={tile.href} className="tile">
        <span className={iconClass(tile.iconTone)}>
          <Icon name={tile.icon} />
        </span>
        <h3>{tile.title}</h3>
        <p>{tile.text}</p>
        <span className="more">
          {tile.more}
          <Icon name="ext" />
        </span>
      </A>
    </li>
  );
}
