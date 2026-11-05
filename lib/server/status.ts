import { readJson, withLock, writeJson } from "./store";

/**
 * Live-Status der Infrastruktur. Die Standardwerte stehen hier im Code; Änderungen aus dem
 * Admin-Bereich werden als Überschreibungen in status.json (Volume /data) gespeichert.
 */
import {
  componentStates,
  type ComponentState,
  type StatusBoard,
  type StatusComponent,
} from "./status-shared";

export * from "./status-shared";

/** Ausgangszustand laut Betreiber-Angaben. */
export const defaultComponents: readonly StatusComponent[] = [
  { id: "kvm", name: "KVM-Server (intern)", group: "compute", detail: "Interne Server mit KVM", state: "operational" },
  { id: "extern", name: "Server (extern)", group: "compute", detail: "Ganz normale Server", state: "operational" },
  { id: "storage-ssd", name: "Storage-Server SSD", group: "storage", detail: "4 Server mit je 120 TB SSD", state: "operational" },
  { id: "storage-hdd", name: "Storage-Server HDD", group: "storage", detail: "1 Server mit knapp 500 TB HDD", state: "operational" },
  { id: "pbs", name: "PBS-Backup-System", group: "backup", detail: "System für Backups", state: "operational" },
  { id: "netzwerk", name: "Netzwerk", group: "network", detail: "Eigenes IP-Subnetz, Network-Server steuert die Internetanbindung", state: "operational" },
  { id: "dns", name: "DNS-Server", group: "network", detail: "Namensauflösung", state: "maintenance", note: "Aktuell in Wartung" },
  { id: "security", name: "Sicherheitssystem", group: "security", detail: "Mit internem Netzwerk-Setup", state: "operational" },
];

type Override = { state: ComponentState; note?: string; updatedAt: string };
type StoredStatus = { overrides: Record<string, Override>; updatedAt?: string };

const FILE = "status.json";

export async function getStatusBoard(): Promise<StatusBoard> {
  let stored: StoredStatus = { overrides: {} };
  try {
    stored = await readJson<StoredStatus>(FILE, { overrides: {} });
  } catch {
    /* defekte Datei: Standardwerte anzeigen, statt die Seite zu stören */
  }
  const components = defaultComponents.map((c) => {
    const o = stored.overrides?.[c.id];
    return o ? { ...c, state: o.state, note: o.note, updatedAt: o.updatedAt } : { ...c };
  });
  return { components, updatedAt: stored.updatedAt };
}

/** Setzt Zustand und Hinweis einer Komponente (nur für den Admin-Bereich). */
export async function setComponentState(id: string, state: ComponentState, note: string): Promise<void> {
  if (!defaultComponents.some((c) => c.id === id)) throw new Error("Unbekannte Komponente");
  if (!componentStates.includes(state)) throw new Error("Unbekannter Zustand");
  const clean = note.trim().slice(0, 200);
  await withLock(async () => {
    const stored = await readJson<StoredStatus>(FILE, { overrides: {} });
    const now = new Date().toISOString();
    stored.overrides = { ...stored.overrides, [id]: { state, note: clean || undefined, updatedAt: now } };
    stored.updatedAt = now;
    await writeJson(FILE, stored);
  });
}
