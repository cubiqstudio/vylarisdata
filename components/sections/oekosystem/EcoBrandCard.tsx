import type { CSSProperties } from "react";
import { Button, Icon, Status, type IconName } from "@/components/ui";
import { iconClass, type EcoAction, type IconTone, type StatusTag } from "./types";

export type EcoBrand = {
  name: string;
  sub: string;
  icon: IconName;
  iconTone?: IconTone;
  status: StatusTag;
  text: string;
  /** Karte der aktuellen Marke ("Du bist hier") */
  current?: boolean;
  action: EcoAction;
};

const textStyle: CSSProperties = { marginBottom: "1.5rem" };

/** Markenkarte (li) mit Status oben rechts und Button am Fuß. */
export function EcoBrandCard({ brand }: { brand: EcoBrand }) {
  const { name, sub, icon, iconTone, status, text, current, action } = brand;
  return (
    <li>
      <div className={current ? "brandcard current" : "brandcard"}>
        <div className="top">
          <span className={iconClass(iconTone)}>
            <Icon name={icon} />
          </span>
          <Status tone={status.tone}>{status.label}</Status>
        </div>
        <h3>{name}</h3>
        <p className="sub">{sub}</p>
        <p style={textStyle}>{text}</p>
        <Button href={action.href} variant="secondary" size="sm" icon={action.icon}>
          {action.label}
        </Button>
      </div>
    </li>
  );
}
