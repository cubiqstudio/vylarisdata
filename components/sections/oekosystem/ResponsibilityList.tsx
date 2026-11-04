import { Icon, Status, type IconName } from "@/components/ui";
import { iconClass, type IconTone, type StatusTag } from "./types";

export type Responsibility = {
  icon: IconName;
  iconTone?: IconTone;
  /** Name der Aufgabe */
  name: string;
  status: StatusTag;
  /** Fett gesetzter Markenname */
  brand: string;
  text: string;
  highlight?: boolean;
};

/** Liste der Zuständigkeiten (ul.stack mit Schicht-Zeilen). */
export function ResponsibilityList({ items }: { items: readonly Responsibility[] }) {
  return (
    <ul className="stack mt-8">
      {items.map((r) => (
        <li key={r.brand} className={r.highlight ? "layer hi" : "layer"}>
          <div className="lname">
            <span className={iconClass(r.iconTone)}>
              <Icon name={r.icon} />
            </span>
            {r.name}
          </div>
          <div className="ldesc">
            <Status tone={r.status.tone}>{r.status.label}</Status>
            <div className="mt-2">
              <strong className="strong">{r.brand}</strong>
              <br />
              {r.text}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
