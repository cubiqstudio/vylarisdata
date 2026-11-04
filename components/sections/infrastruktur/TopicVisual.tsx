import { Checks, Dots, Visual } from "@/components/ui";
import { LayerStack, type Layer } from "./LayerStack";

export type ChipItem = { label: string; blue?: boolean };

/** Rechte Spalte eines Themenabschnitts in drei Varianten. */
export type TopicVisualContent =
  | { kind: "outline"; heading: string; items: readonly string[]; chips: readonly ChipItem[] }
  | { kind: "flow"; heading: string; layers: readonly Layer[]; arrows: boolean }
  | { kind: "checks"; heading: string; items: readonly string[] };

export function TopicVisual({ visual }: { visual: TopicVisualContent }) {
  switch (visual.kind) {
    case "outline":
      return (
        <Visual soft>
          <p className="h4">{visual.heading}</p>
          <Dots items={visual.items} />
          <div className="chips">
            {visual.chips.map((c) => (
              <span key={c.label} className={c.blue ? "chip blue" : "chip"}>
                {c.label}
              </span>
            ))}
          </div>
        </Visual>
      );
    case "flow":
      return (
        <Visual>
          <LayerStack heading={visual.heading} layers={visual.layers} arrows={visual.arrows} />
        </Visual>
      );
    case "checks":
      return (
        <Visual soft>
          <p className="h4">{visual.heading}</p>
          <Checks items={visual.items} />
        </Visual>
      );
  }
}
