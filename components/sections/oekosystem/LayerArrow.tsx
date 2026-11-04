import type { CSSProperties } from "react";
import { Icon } from "@/components/ui";

const spaced: CSSProperties = { margin: ".75rem 0" };

/** Pfeil nach unten zwischen zwei Ebenen. */
export function LayerArrow({ spaced: withSpace }: { spaced?: boolean }) {
  return (
    <div className="layer-arrow" aria-hidden="true" style={withSpace ? spaced : undefined}>
      <Icon name="down" />
    </div>
  );
}
