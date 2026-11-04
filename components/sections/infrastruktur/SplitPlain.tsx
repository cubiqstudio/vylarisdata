import type { ReactNode } from "react";

/** Zweispaltig ohne `.copy`-Klasse (Textspalte ist ein einfaches div). */
export function SplitPlain({ main, aside }: { main: ReactNode; aside: ReactNode }) {
  return (
    <div className="split">
      <div>{main}</div>
      {aside}
    </div>
  );
}
