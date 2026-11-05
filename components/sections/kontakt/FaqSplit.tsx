import type { ReactNode } from "react";
import { Faq, Tile, type FaqItem } from "@/components/ui";
import type { FaqAside } from "./types";

type FaqSplitProps = {
  eyebrow: string;
  id: string;
  title: ReactNode;
  items: readonly FaqItem[];
  aside: FaqAside;
};

/** FAQ-Liste links, Hinweiskarte rechts. */
export function FaqSplit({ eyebrow, id, title, items, aside }: FaqSplitProps) {
  return (
    <div className="split">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h2" id={id}>
          {title}
        </h2>
        <Faq items={items} />
      </div>
      <Tile as="div" variant="feature" icon={aside.icon} title={aside.title}>
        {aside.text}
      </Tile>
    </div>
  );
}
