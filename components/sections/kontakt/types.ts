import type { IconName } from "@/components/ui";

/** Farbton des Icon-Kastens (Standard: Marken-Blau). */
export type IconTone = "indigo";

export type LinkAction = { href: string; label: string; icon?: IconName };

export function iconClass(tone?: IconTone): string {
  return tone ? `icon ${tone}` : "icon";
}
