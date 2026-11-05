import { Icon } from "@/components/ui";

/** Pfeil nach unten zwischen zwei Ebenen. */
export function LayerArrow() {
  return (
    <div className="layer-arrow" aria-hidden="true">
      <Icon name="down" />
    </div>
  );
}
