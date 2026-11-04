import type { ReactNode } from "react";
import { Button, Icon, type IconName } from "@/components/ui";

export type IconTone = "indigo";

/* --------------------------------------------------------------- Grundsätze */

export type PrincipleItem = {
  icon: IconName;
  iconTone?: IconTone;
  title: string;
  text: string;
};

export function PrincipleTile({ item }: { item: PrincipleItem }) {
  return (
    <li>
      <div className="tile soft">
        <span className={item.iconTone ? `icon ${item.iconTone}` : "icon"}>
          <Icon name={item.icon} />
        </span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </li>
  );
}

/* ------------------------------------------------------------- Markenkarten */

export type PartyItem = {
  icon: IconName;
  iconTone?: IconTone;
  tag: string;
  name: string;
  sub: string;
  text: ReactNode;
  current?: boolean;
  action: { href: string; label: string; icon?: IconName };
};

export function PartyCard({ item }: { item: PartyItem }) {
  const { icon, iconTone, tag, name, sub, text, current, action } = item;
  return (
    <li>
      <div className={current ? "brandcard current" : "brandcard"}>
        <div className="top">
          <span className={iconTone ? `icon ${iconTone}` : "icon"}>
            <Icon name={icon} />
          </span>
          <span className="tag">{tag}</span>
        </div>
        <h3>{name}</h3>
        <p className="sub">{sub}</p>
        <p>{text}</p>
        <Button href={action.href} variant="secondary" size="sm" icon={action.icon} className="uu-more">
          {action.label}
        </Button>
      </div>
    </li>
  );
}
