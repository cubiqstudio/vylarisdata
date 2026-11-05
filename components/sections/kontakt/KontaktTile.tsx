import { A, Icon } from "@/components/ui";
import { iconClass, type KontaktTileData } from "./types";

/** Feature-Karte (li) mit Icon, Text und optionalem Link am Fuß. Unterstützt Icon-Ton und Icon am Link-Fuß. */
export function KontaktTile({ tile }: { tile: KontaktTileData }) {
  const { icon, iconTone, title, text, href, more, moreIcon = "arrow" } = tile;
  const body = (
    <>
      <span className={iconClass(iconTone)}>
        <Icon name={icon} />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
      {href && (
        <span className="more">
          {more}
          <Icon name={moreIcon} />
        </span>
      )}
    </>
  );
  return (
    <li>
      {href ? (
        <A href={href} className="tile feature">
          {body}
        </A>
      ) : (
        <div className="tile feature">{body}</div>
      )}
    </li>
  );
}
