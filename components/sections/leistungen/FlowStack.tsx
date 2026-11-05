import { Fragment } from "react";
import { Icon, type IconName } from "@/components/ui";
import type { IconTone } from "./types";

export type FlowLayer = {
  icon: IconName;
  /** Farbton des Icon-Kastens (Standard: Marken-Blau) */
  iconTone?: IconTone;
  name: string;
  description: string;
  highlight?: boolean;
  /** Icon des Pfeils über dieser Ebene (Standard: "down") */
  arrowBefore?: IconName;
};

type FlowStackProps = {
  layers: readonly FlowLayer[];
  /** Pfeile zwischen den Ebenen anzeigen */
  arrows?: boolean;
};

/** Schichtenbild mit frei wählbaren Pfeil-Icons und Icon-Farbton je Ebene. */
export function FlowStack({ layers, arrows = true }: FlowStackProps) {
  return (
    <div className="stack">
      {layers.map((layer, i) => (
        <Fragment key={layer.name}>
          {arrows && i > 0 && (
            <div className="layer-arrow" aria-hidden="true">
              <Icon name={layer.arrowBefore ?? "down"} />
            </div>
          )}
          <div className={layer.highlight ? "layer hi" : "layer"}>
            <div className="lname">
              <span className={layer.iconTone ? `icon ${layer.iconTone}` : "icon"}>
                <Icon name={layer.icon} />
              </span>
              {layer.name}
            </div>
            <p className="ldesc">{layer.description}</p>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
