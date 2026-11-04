import type { CSSProperties, ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui";
import { iconClass, type IconTone } from "./types";

type PanelProps = {
  tone: "blue" | "indigo";
  icon: IconName;
  iconTone?: IconTone;
  title: string;
  subtitle: string;
  /** schmale, zentrierte Variante */
  centered?: boolean;
  children: ReactNode;
};

const centeredStyle: CSSProperties = { maxWidth: "40rem", marginLeft: "auto", marginRight: "auto" };

/** Panel mit Kopf (Icon, Titel, Untertitel) und frei wählbarem Inhalt. */
export function Panel({ tone, icon, iconTone, title, subtitle, centered, children }: PanelProps) {
  return (
    <div className={`panel ${tone}${centered ? " mt-12" : ""}`} style={centered ? centeredStyle : undefined}>
      <div className="panel-head">
        <span className={iconClass(iconTone)}>
          <Icon name={icon} />
        </span>
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

export type DefinitionRow = { term: string; value: ReactNode };

/** Definitionsliste im Panel. */
export function PanelFacts({ rows }: { rows: readonly DefinitionRow[] }) {
  return (
    <dl>
      {rows.map((r) => (
        <div key={r.term}>
          <dt>{r.term}</dt>
          <dd>{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
