import { Fragment } from "react";
import { Icon, type IconName } from "@/components/ui";

export type StackLayer = {
  icon: IconName;
  name: string;
  description: string;
  highlight?: boolean;
};

/** Schichtenbild mit Pfeilen zwischen den Ebenen. */
export function LayerStack({ layers }: { layers: readonly StackLayer[] }) {
  return (
    <div className="stack">
      {layers.map((layer, i) => (
        <Fragment key={layer.name}>
          {i > 0 && (
            <div className="layer-arrow">
              <Icon name="down" />
            </div>
          )}
          <div className={layer.highlight ? "layer hi" : "layer"}>
            <div className="lname">
              <span className="icon">
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
