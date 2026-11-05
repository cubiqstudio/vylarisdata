import type { Tone } from "@/components/ui";

/** Statusangabe (Farbton + Beschriftung), gemeinsam genutzt von allen Bausteinen dieser Seite. */
export type StatusInfo = { tone: Tone; label: string };

/** Abgesetzter Farbton für Icon-Kästen. */
export type IconTone = "indigo";
