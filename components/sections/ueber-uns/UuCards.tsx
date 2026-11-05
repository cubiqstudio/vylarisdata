import type { ReactNode } from "react";
import { Button, Icon, Status, type IconName, type Tone } from "@/components/ui";
import { iconClass, type IconTone } from "./types";

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
        <span className={iconClass(item.iconTone)}>
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
          <span className={iconClass(iconTone)}>
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

/* ------------------------------------------------------- Bestand / Systeme */

export type AssetItem = {
  icon: IconName;
  iconTone?: IconTone;
  title: string;
  text: ReactNode;
  status: { tone: Tone; label: string };
};

/** Kachel für ein System der Infrastruktur, mit Statushinweis. */
export function AssetTile({ item }: { item: AssetItem }) {
  return (
    <li>
      <div className="tile">
        <span className={iconClass(item.iconTone)}>
          <Icon name={item.icon} />
        </span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <div className="mt-4">
          <Status tone={item.status.tone}>{item.status.label}</Status>
        </div>
      </div>
    </li>
  );
}
