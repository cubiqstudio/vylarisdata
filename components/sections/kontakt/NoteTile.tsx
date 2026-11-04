import type { ReactNode } from "react";
import { Chips } from "@/components/ui";

type NoteTileProps = {
  eyebrow: string;
  title: ReactNode;
  text: string;
  chips: readonly string[];
};

/** Merksatz-Karte: Eyebrow, Titel, Text und blaue Chips. */
export function NoteTile({ eyebrow, title, text, chips }: NoteTileProps) {
  return (
    <div className="tile feature">
      <div className="eyebrow">{eyebrow}</div>
      <h3>{title}</h3>
      <p className="mt-6">{text}</p>
      <Chips items={chips} blue />
    </div>
  );
}
