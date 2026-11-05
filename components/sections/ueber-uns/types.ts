/** Gemeinsame Typen der Komponenten für "Über uns". */

/** Farbton eines Icons; ohne Angabe gilt der Standardton. */
export type IconTone = "indigo";

/** CSS-Klasse für ein Icon-Kästchen mit optionalem Farbton. */
export function iconClass(tone?: IconTone): string {
  return tone ? `icon ${tone}` : "icon";
}
