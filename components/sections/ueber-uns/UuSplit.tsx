import type { ReactNode } from "react";

type UuSplitProps = {
  copy: ReactNode;
  visual: ReactNode;
  /** schmale linke Spalte, oben ausgerichtet (Geschichte, FAQ) */
  narrow?: boolean;
  reverse?: boolean;
  /** gleich hohe Spalten (Sektion "Das ist uns wichtig") */
  wichtig?: boolean;
};

/** Zweispaltiges Layout; die zweite Spalte ist direktes Kind des Grids. */
export function UuSplit({ copy, visual, narrow, reverse, wichtig }: UuSplitProps) {
  const cls = ["split", reverse ? "reverse" : "", narrow ? "uu-narrow uu-top" : "", wichtig ? "uu-wichtig" : ""]
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
