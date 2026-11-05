import { A, Icon, type IconName } from "@/components/ui";
import type { ReactNode } from "react";
import { iconClass, type IconTone } from "./types";

export type AlliancePanelRow = { term: string; text: ReactNode };

export type AlliancePanelData = {
  tone: IconTone | "blue";
  icon: IconName;
  name: string;
  domain: string;
  rows: readonly AlliancePanelRow[];
};

/** Link-Zeile in einem Panel (extern, mit kleinem Icon). */
export function PanelLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <A href={href}>
      {children}
      <Icon name="ext" className="uu-link-ext" />
    </A>
  );
}

function Panel({ panel }: { panel: AlliancePanelData }) {
  return (
    <div className={`panel ${panel.tone}`}>
      <div className="panel-head">
        <span className={iconClass(panel.tone === "indigo" ? "indigo" : undefined)}>
          <Icon name={panel.icon} />
        </span>
        <div>
          <h3>{panel.name}</h3>
          <p>{panel.domain}</p>
        </div>
      </div>
      <dl>
        {panel.rows.map((r) => (
          <div key={r.term}>
            <dt>{r.term}</dt>
            <dd>{r.text}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Zwei Panels (Schweiz / Europa) mit Verbindungsglied. */
export function AllianceEco({ left, right }: { left: AlliancePanelData; right: AlliancePanelData }) {
  return (
    <div className="eco">
      <Panel panel={left} />
      <div className="joint" aria-hidden="true">
        <div className="joint-in">
          <span className="line" />
          <span className="dot">
            <Icon name="link" />
          </span>
          <span className="line" />
        </div>
      </div>
      <Panel panel={right} />
    </div>
  );
}
