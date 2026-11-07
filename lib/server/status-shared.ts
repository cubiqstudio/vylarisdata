/**
 * Typen und Beschriftungen des Live-Status – ohne Server-Abhängigkeiten,
 * damit sie auch in Client-Komponenten (Admin-Formulare) importiert werden können.
 */
export type ComponentState = "operational" | "building" | "maintenance" | "degraded" | "outage";
export type ComponentGroup = "compute" | "storage" | "network" | "backup" | "security";

export const stateLabels: Record<ComponentState, string> = {
  operational: "Im Betrieb",
  building: "Im Aufbau",
  maintenance: "In Wartung",
  degraded: "Eingeschränkt",
  outage: "Störung",
};

export const groupLabels: Record<ComponentGroup, string> = {
  compute: "Rechenleistung",
  storage: "Speicher",
  network: "Netzwerk",
  backup: "Datensicherung",
  security: "Sicherheit",
};

export const componentStates = Object.keys(stateLabels) as ComponentState[];

export type StatusComponent = {
  id: string;
  name: string;
  group: ComponentGroup;
  detail: string;
  state: ComponentState;
  note?: string;
  updatedAt?: string;
};

export type StatusBoard = { components: StatusComponent[]; updatedAt?: string };

/**
 * Version der gespeicherten Überschreibungen (status.json). Wird sie erhöht, werden ältere
 * Überschreibungen beim Lesen ignoriert und die Standardwerte im Code gelten wieder.
 * Version 2: Neustart des Status nach der Klarstellung, dass noch keine eigene Hardware im Betrieb ist.
 */
export const STATUS_VERSION = 2;

export type Override = { state: ComponentState; note?: string; updatedAt: string };
export type StoredStatus = { version?: number; overrides: Record<string, Override>; updatedAt?: string };

/** Ausgangszustand: Die Infrastruktur ist im Aufbau, kein Baustein ist derzeit im Betrieb. Nur Ziele, keine Zahlen. */
export const defaultComponents: readonly StatusComponent[] = [
  { id: "server", name: "Server", group: "compute", detail: "Geplant: eigene Server in Europa", state: "building" },
  { id: "storage", name: "Speicher", group: "storage", detail: "Geplant: eigener Speicher für Daten und Dienste", state: "building" },
  { id: "backup", name: "Datensicherung", group: "backup", detail: "Geplant: eigenes Backup-System für zuverlässige Datensicherung", state: "building" },
  { id: "netzwerk", name: "Netzwerk", group: "network", detail: "Geplant: eigenes Netzwerk mit eigener Internetanbindung", state: "building" },
  { id: "dns", name: "DNS", group: "network", detail: "Geplant: eigene Namensauflösung", state: "building" },
  { id: "security", name: "Sicherheitssystem", group: "security", detail: "Geplant: Schutz der Infrastruktur von Anfang an", state: "building" },
];

/** Gibt gespeicherte Daten nur zurück, wenn sie zur aktuellen Version passen; sonst ein leerer Stand. */
export function currentStored(raw: unknown): StoredStatus {
  const r = raw as Partial<StoredStatus> | null | undefined;
  if (!r || typeof r !== "object" || r.version !== STATUS_VERSION || !r.overrides || typeof r.overrides !== "object") {
    return { version: STATUS_VERSION, overrides: {} };
  }
  return { version: STATUS_VERSION, overrides: r.overrides, updatedAt: r.updatedAt };
}

/** Legt die Überschreibungen über die Standardwerte. */
export function mergeStatus(defaults: readonly StatusComponent[], stored: StoredStatus): StatusBoard {
  const components = defaults.map((c) => {
    const o = Object.hasOwn(stored.overrides, c.id) ? stored.overrides[c.id] : undefined;
    return o ? { ...c, state: o.state, note: o.note, updatedAt: o.updatedAt } : { ...c };
  });
  return { components, updatedAt: stored.updatedAt };
}
