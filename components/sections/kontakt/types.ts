import type { ReactNode } from "react";
import type { IconName } from "@/components/ui";

/** Daten-Typen der Kontakt-Seite. Das Content-Modul und die Komponenten importieren sie von hier. */

/** Farbton des Icon-Kastens (Standard: Marken-Blau). */
export type IconTone = "indigo";

export type LinkAction = { href: string; label: string; icon?: IconName };

export function iconClass(tone?: IconTone): string {
  return tone ? `icon ${tone}` : "icon";
}

export type KontaktTileData = {
  icon: IconName;
  iconTone?: IconTone;
  title: string;
  text: ReactNode;
  /** macht die Karte klickbar */
  href?: string;
  /** Text des Links am Fuß (nur mit href) */
  more?: string;
  /** Icon des Links am Fuß (Standard: Pfeil) */
  moreIcon?: IconName;
};

export type RuleTileData = {
  icon: IconName;
  iconTone?: IconTone;
  title: string;
  /** "checks" für Empfehlungen, "dots" für Auflistungen ohne Haken */
  list: "checks" | "dots";
  items: readonly ReactNode[];
};

export type KontaktBrand = {
  name: string;
  sub: string;
  icon: IconName;
  text: string;
  points: readonly string[];
  /** Karte der Marke, über die der Kontakt läuft */
  current?: boolean;
  action: LinkAction;
};

export type FaqAside = { icon: IconName; title: string; text: ReactNode };

export type RequestPoint = { label: string; text: ReactNode };
