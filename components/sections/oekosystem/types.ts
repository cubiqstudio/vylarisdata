import type { IconName, Tone } from "@/components/ui";

/** Farbton des Icon-Kastens (Standard: Marken-Blau). */
export type IconTone = "indigo";

export type StatusTag = { tone: Tone; label: string };

export type EcoAction = { href: string; label: string; icon?: IconName };

export function iconClass(tone?: IconTone): string {
  return tone ? `icon ${tone}` : "icon";
}
