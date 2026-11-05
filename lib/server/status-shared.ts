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
