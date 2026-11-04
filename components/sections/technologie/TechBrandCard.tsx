import { Button, Icon, type IconName } from "@/components/ui";

export type TechBrand = {
  name: string;
  sub: string;
  icon: IconName;
  iconTone?: "indigo";
  /** Beschriftung oben rechts */
  tag: string;
  text: string;
  /** Karte der aktuellen Marke */
  current?: boolean;
  action: { href: string; label: string; icon?: IconName };
};

/** Markenkarte (li) mit Tag oben und Button am Fuß. */
export function TechBrandCard({ brand }: { brand: TechBrand }) {
  const { name, sub, icon, iconTone, tag, text, current, action } = brand;
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
        <Button href={action.href} variant="secondary" size="sm" icon={action.icon}>
          {action.label}
        </Button>
      </div>
    </li>
  );
}
