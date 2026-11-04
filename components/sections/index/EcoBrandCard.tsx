import { Button, Icon, Status, type IconName } from "@/components/ui";

export type EcoBrand = {
  name: string;
  sub: string;
  icon: IconName;
  text: string;
  /** Karte der aktuellen Marke ("Du bist hier") */
  current?: { statusLabel: string };
  action: { href: string; label: string; icon: IconName };
};

/** Markenkarte des Ökosystems (li) mit Button am Fuß. */
export function EcoBrandCard({ brand }: { brand: EcoBrand }) {
  const { name, sub, icon, text, current, action } = brand;
  return (
    <li>
      <div className={current ? "brandcard current" : "brandcard"}>
        <div className="top">
          <span className={current ? "icon" : "icon indigo"}>
            <Icon name={icon} />
          </span>
          {current && <Status tone="info">{current.statusLabel}</Status>}
        </div>
        <h3>{name}</h3>
        <p className="sub">{sub}</p>
        <p>{text}</p>
        <Button href={action.href} variant="secondary" icon={action.icon}>
          {action.label}
        </Button>
      </div>
    </li>
  );
}
