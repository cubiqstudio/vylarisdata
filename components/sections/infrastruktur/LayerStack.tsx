import { Fragment } from "react";
import { Icon, type IconName } from "@/components/ui";

export type Layer = {
  icon: IconName;
  /** Farbton des Icon-Kastens (Standard: Marken-Blau) */
  iconTone?: "indigo";
  name: string;
  text: string;
  highlight?: boolean;
};

type LayerStackProps = {
  layers: readonly Layer[];
  /** Pfeile zwischen den Ebenen */
  arrows?: boolean;
  /** Überschrift (.h4) als erstes Element im Stapel */
  heading?: string;
  /** Abstand nach oben wie bei einer Kartenreihe (für den Einsatz direkt unter einem Abschnittskopf) */
  spaced?: boolean;
};

/** Schichtenbild mit flacher Struktur (Pfeile als direkte Geschwister der Ebenen). */
export function LayerStack({ layers, arrows = false, heading, spaced = false }: LayerStackProps) {
  const stack = (
    <div className="stack">
      {heading && <p className="h4">{heading}</p>}
      {layers.map((layer, i) => (
        <Fragment key={layer.name}>
          {arrows && i > 0 && (
            <div className="layer-arrow" aria-hidden="true">
              <Icon name="down" />
            </div>
          )}
          <div className={layer.highlight ? "layer hi" : "layer"}>
            <div className="lname">
              <span className={layer.iconTone ? `icon ${layer.iconTone}` : "icon"}>
                <Icon name={layer.icon} />
              </span>
              {layer.name}
            </div>
            <p className="ldesc">{layer.text}</p>
          </div>
        </Fragment>
      ))}
    </div>
  );
  return spaced ? <div className="cards">{stack}</div> : stack;
}
