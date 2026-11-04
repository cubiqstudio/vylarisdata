import { Fragment, type ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui";

export type UuLayer = {
  icon: IconName;
  iconTone?: "indigo";
  name: string;
  description: ReactNode;
  highlight?: boolean;
};

/** Schichtenbild; Icon-Farbton wählbar, Pfeile zwischen den Ebenen optional. */
export function UuStack({ layers, arrows }: { layers: readonly UuLayer[]; arrows?: boolean }) {
  return (
    <div className="stack">
      {layers.map((l, i) => (
        <Fragment key={l.name}>
          {arrows && i > 0 && (
            <div className="layer-arrow">
              <Icon name="down" />
            </div>
          )}
          <div className={l.highlight ? "layer hi" : "layer"}>
            <span className="lname">
              <span className={l.iconTone ? `icon ${l.iconTone}` : "icon"}>
                <Icon name={l.icon} />
              </span>
              {l.name}
            </span>
            <span className="ldesc">{l.description}</span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
