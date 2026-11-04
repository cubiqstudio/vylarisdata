import type { ReactNode } from "react";
import { A, Icon, type IconName } from "@/components/ui";
import { iconClass, type IconTone } from "./types";

export type KontaktTileData = {
  icon: IconName;
  iconTone?: IconTone;
  title: string;
  text: ReactNode;
  /** macht die Karte klickbar */
  href?: string;
  /** Text des Links am Fuß (nur mit href) */
  more?: string;
  /** Icon des Links am Fuß (Standard: Pfeil) */
  moreIcon?: IconName;
};

/** Feature-Karte (li) mit Icon, Text und optionalem Link am Fuß. */
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
