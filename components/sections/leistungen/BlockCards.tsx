import { Cards, Icon, Status, type IconName } from "@/components/ui";
import type { StatusInfo } from "./types";

export type BlockItem = {
  icon: IconName;
  title: string;
  status: StatusInfo;
  /** Kennzahl oder Kurzangabe, fett gesetzt */
  figure: string;
  text: string;
};

/** Kacheln für die Bausteine der Infrastruktur, jeweils mit Statusanzeige und Kennzahl. */
export function BlockCards({ items }: { items: readonly BlockItem[] }) {
  return (
    <Cards cols={4}>
      {items.map((it) => (
        <li key={it.title}>
          <div className="tile">
            <span className="icon">
              <Icon name={it.icon} />
            </span>
            <h3>{it.title}</h3>
            <p>
              <Status tone={it.status.tone}>{it.status.label}</Status>
            </p>
            <p>
              <strong>{it.figure}</strong>
            </p>
            <p>{it.text}</p>
          </div>
        </li>
      ))}
    </Cards>
  );
}
