import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { StatusForm } from "@/components/admin/Forms";
import { Status } from "@/components/ui";
import { AuditTable } from "@/components/admin/AuditTable";
import { getAudit } from "@/lib/server/audit";
import { requireAdmin } from "@/lib/server/guard";
import { getLegal, legalGaps } from "@/lib/server/legal";
import { getStatusBoard, groupLabels, stateLabels, type ComponentState } from "@/lib/server/status";

export const dynamic = "force-dynamic";

const tone = (s: ComponentState) => (s === "operational" ? "ok" : s === "maintenance" || s === "building" ? "info" : "warn");
const time = (iso: string) => new Date(iso).toLocaleString("de-DE", { dateStyle: "short", timeStyle: "medium", timeZone: "Europe/Berlin" });

export default async function AdminHome() {
  const admin = await requireAdmin();
  const [board, events, legal] = await Promise.all([getStatusBoard(), getAudit(8), getLegal()]);
  const gaps = legalGaps(legal);

  return (
    <AdminShell
      user={admin.username}
      active="/admin/"
      title="Übersicht"
      lead="Hier pflegst du den Live-Status der Infrastruktur. Änderungen erscheinen sofort auf der öffentlichen Seite „Infrastruktur“."
    >
      <div className="admin-grid">
        <div className="admin-card">
          <h2>Zwei-Faktor-Anmeldung</h2>
          <p>
            {admin.totp?.enabled ? (
              <Status tone="ok">Aktiv</Status>
            ) : (
              <Status tone="warn">Nicht aktiv</Status>
            )}
          </p>
          <p>
            <Link href="/admin/sicherheit/">{admin.totp?.enabled ? "Sicherheit verwalten" : "Jetzt aktivieren (empfohlen)"}</Link>
          </p>
        </div>
        <div className="admin-card">
          <h2>Rechtliche Angaben</h2>
          <p>{gaps.length === 0 ? <Status tone="ok">Vollständig</Status> : <Status tone="warn">{gaps.length} Angabe(n) fehlen</Status>}</p>
          <p>
            <Link href="/admin/rechtliches/">Impressum und Datenschutz pflegen</Link>
          </p>
        </div>
        <div className="admin-card">
          <h2>Öffentliche Statusseite</h2>
          <p>
            {board.components.filter((c) => c.state === "operational").length} von {board.components.length} Bausteinen im Betrieb,{" "}
            {board.components.filter((c) => c.state === "building").length} im Aufbau.
          </p>
          <p>
            <Link href="/infrastruktur/">Seite ansehen</Link>
          </p>
        </div>
      </div>

      <h2 className="admin-h2">Live-Status verwalten</h2>
      <div className="admin-list">
        {board.components.map((c) => (
          <div className="admin-card" key={c.id}>
            <div className="admin-row-head">
              <div>
                <h3>{c.name}</h3>
                <p className="muted">
                  {groupLabels[c.group]} · {c.detail}
                </p>
              </div>
              <Status tone={tone(c.state)}>{stateLabels[c.state]}</Status>
            </div>
            <StatusForm id={c.id} state={c.state} note={c.note} />
            {c.updatedAt && <p className="muted small">Zuletzt geändert: {time(c.updatedAt)}</p>}
          </div>
        ))}
      </div>

      <h2 className="admin-h2">Letzte Ereignisse</h2>
      <AuditTable events={events} />
      <p>
        <Link href="/admin/protokoll/">Gesamtes Protokoll ansehen</Link>
      </p>
    </AdminShell>
  );
}
