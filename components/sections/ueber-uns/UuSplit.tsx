import type { ReactNode } from "react";

type UuSplitProps = {
  copy: ReactNode;
  visual: ReactNode;
  /** schmale linke Spalte, oben ausgerichtet (Geschichte, FAQ) */
  narrow?: boolean;
  reverse?: boolean;
  /** gleich hohe Spalten (z. B. Text neben Faktenliste) */
  equalHeight?: boolean;
};

/** Zweispaltiges Layout; die zweite Spalte ist direktes Kind des Grids. */
export function UuSplit({ copy, visual, narrow, reverse, equalHeight }: UuSplitProps) {
  const cls = ["split", reverse ? "reverse" : "", narrow ? "uu-narrow uu-top" : "", equalHeight ? "uu-wichtig" : ""]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls}>
      <div className="copy">{copy}</div>
      {visual}
    </div>
  );
}

/** Visual-Kasten mit kompaktem Innenabstand. */
export function UuVisual({ soft, className, children }: { soft?: boolean; className?: string; children: ReactNode }) {
  const cls = ["visual", soft ? "soft" : "", "uu-visual", className ?? ""].filter(Boolean).join(" ");
  return <div className={cls}>{children}</div>;
}
