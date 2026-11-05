import type { ReactNode } from "react";
import { Status } from "@/components/ui";
import type { StatusTag } from "./types";

export type StatusEntry = { title: string; text: ReactNode };
export type StatusGroup = { status: StatusTag; items: readonly StatusEntry[] };

type StatusBoardProps = {
  groups: readonly StatusGroup[];
  /** Hinweis unter den Gruppen */
  note?: string;
};

/** Einträge nach Status gruppiert. Die Reihenfolge der Gruppen ist keine Chronologie. */
export function StatusBoard({ groups, note }: StatusBoardProps) {
  return (
    <>
      <div className="stack">
        {groups.map((group) => (
          <div className="tile soft" key={group.status.label}>
            <div>
              <Status tone={group.status.tone}>{group.status.label}</Status>
            </div>
            {group.items.map((item) => (
              <div className="mt-4" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      {note && <p className="muted mt-4">{note}</p>}
    </>
  );
}
