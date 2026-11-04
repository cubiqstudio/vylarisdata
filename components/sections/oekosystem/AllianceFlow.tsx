import { Icon, type IconName } from "@/components/ui";
import { LayerArrow } from "./LayerArrow";
import { iconClass, type IconTone } from "./types";

export type AllianceTile = { icon: IconName; iconTone?: IconTone; title: string; text: string };

type AllianceFlowProps = {
  top: AllianceTile;
  bottom: AllianceTile;
  /** Beschriftung zwischen den Kacheln */
  between: string;
};

function Tile({ tile }: { tile: AllianceTile }) {
  return (
    <div className="tile">
      <span className={iconClass(tile.iconTone)}>
        <Icon name={tile.icon} />
      </span>
      <h3>{tile.title}</h3>
      <p>{tile.text}</p>
    </div>
  );
}

/** Zwei Kacheln mit Pfeilen und Beschriftung dazwischen. */
export function AllianceFlow({ top, bottom, between }: AllianceFlowProps) {
  return (
    <div className="stack">
      <Tile tile={top} />
      <LayerArrow />
      <p className="center muted">{between}</p>
      <LayerArrow />
      <Tile tile={bottom} />
    </div>
  );
}

