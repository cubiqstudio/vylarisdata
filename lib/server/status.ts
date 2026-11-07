import { readJson, withLock, writeJson } from "./store";

/**
 * Live-Status der Infrastruktur. Die Standardwerte stehen im Code (status-shared.ts); Änderungen aus dem
 * Admin-Bereich werden als Überschreibungen in status.json (Volume /data) gespeichert. Überschreibungen
 * ohne passende STATUS_VERSION werden ignoriert, damit alte Werte die aktuellen Standardwerte nicht überdecken.
 */
import {
  componentStates,
  currentStored,
  defaultComponents,
  mergeStatus,
  STATUS_VERSION,
  type ComponentState,
  type StatusBoard,
} from "./status-shared";

export * from "./status-shared";

const FILE = "status.json";

export async function getStatusBoard(): Promise<StatusBoard> {
  let raw: unknown;
  try {
    raw = await readJson<unknown>(FILE, null);
  } catch {
    /* defekte Datei: Standardwerte anzeigen, statt die Seite zu stören */
  }
  return mergeStatus(defaultComponents, currentStored(raw));
}

/** Setzt Zustand und Hinweis einer Komponente (nur für den Admin-Bereich). */
export async function setComponentState(id: string, state: ComponentState, note: string): Promise<void> {
  if (!defaultComponents.some((c) => c.id === id)) throw new Error("Unbekannte Komponente");
  if (!componentStates.includes(state)) throw new Error("Unbekannter Zustand");
  const clean = note.trim().slice(0, 200);
  await withLock(async () => {
    // Überschreibungen aus älteren Versionen fallen hier weg und werden nicht weitergeschrieben.
    const stored = currentStored(await readJson<unknown>(FILE, null).catch(() => null));
    const now = new Date().toISOString();
    stored.overrides = { ...stored.overrides, [id]: { state, note: clean || undefined, updatedAt: now } };
    stored.updatedAt = now;
    stored.version = STATUS_VERSION;
    await writeJson(FILE, stored);
  });
}
