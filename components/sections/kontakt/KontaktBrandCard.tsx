import { Button, Dots, Icon, type IconName } from "@/components/ui";
import { iconClass, type IconTone, type LinkAction } from "./types";

export type KontaktBrand = {
  name: string;
  sub: string;
  icon: IconName;
  iconTone?: IconTone;
  text: string;
  points: readonly string[];
  /** Karte der Marke, über die der Kontakt läuft */
  current?: boolean;
  action: LinkAction;
};

/** Markenkarte mit Titel und Icon in einer Kopfzeile, Stichpunkten und Button. */
export function KontaktBrandCard({ brand }: { brand: KontaktBrand }) {
  const { name, sub, icon, iconTone, text, points, current, action } = brand;
  return (
    <div className={current ? "brandcard current" : "brandcard"}>
      <div className="top">
        <div>
          <h3>{name}</h3>
          <p className="sub">{sub}</p>
        </div>
        <span className={iconClass(iconTone)}>
          <Icon name={icon} />
        </span>
      </div>
      <p>{text}</p>
      <Dots items={points} />
      <Button href={action.href} variant="secondary" icon={action.icon}>
        {action.label}
      </Button>
    </div>
  );
}
