import { Status } from "@/components/ui";
import {
  getStatusBoard,
  groupLabels,
  stateLabels,
  type ComponentGroup,
  type ComponentState,
  type StatusComponent,
} from "@/lib/server/status";

const tone = (s: ComponentState) => (s === "operational" ? "ok" : s === "maintenance" ? "info" : "warn");

const formatTime = (iso?: string) =>
  iso ? new Date(iso).toLocaleString("de-DE", { dateStyle: "medium", timeStyle: "short", timeZone: "Europe/Berlin" }) : null;

/**
 * Live-Statusübersicht der Infrastruktur (Server-Komponente, liest den Status bei jedem Aufruf).
 * Gepflegt wird sie im Admin-Bereich.
 */
export async function LiveStatus() {
  const board = await getStatusBoard();
  const operational = board.components.filter((c) => c.state === "operational").length;
  const groups = (Object.keys(groupLabels) as ComponentGroup[])
    .map((g) => ({ g, items: board.components.filter((c) => c.group === g) }))
    .filter((x) => x.items.length > 0);
  const allGood = operational === board.components.length;

  return (
    <div className="livestatus" aria-live="polite">
      <div className="livestatus-head">
        <Status tone={allGood ? "ok" : "info"}>
          {allGood ? "Alle Systeme im Betrieb" : `${operational} von ${board.components.length} Systemen im Normalbetrieb`}
        </Status>
        {formatTime(board.updatedAt) && <span className="muted">Zuletzt aktualisiert: {formatTime(board.updatedAt)}</span>}
      </div>
      <div className="livestatus-grid">
        {groups.map(({ g, items }) => (
          <div className="livestatus-group" key={g}>
            <h3>{groupLabels[g]}</h3>
            <ul>
              {items.map((c: StatusComponent) => (
                <li key={c.id}>
                  <div>
                    <strong>{c.name}</strong>
                    <span>{c.note ? `${c.detail} – ${c.note}` : c.detail}</span>
                  </div>
                  <Status tone={tone(c.state)}>{stateLabels[c.state]}</Status>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
