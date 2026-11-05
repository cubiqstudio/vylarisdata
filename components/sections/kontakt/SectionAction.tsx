import type { ReactNode } from "react";
import { Button } from "@/components/ui";
import type { LinkAction } from "./types";

/** Einzelner Button unter einem Abschnittsinhalt, mit festem Abstand. */
export function SectionAction({ action }: { action: LinkAction }) {
  return (
    <div className="mt-8">
      <Button href={action.href} size="lg" icon={action.icon}>
        {action.label}
      </Button>
    </div>
  );
}

/** Zeile mit Abstand nach oben für einen Hinweiskasten (Callout) unter einem Abschnittsinhalt. */
export function CalloutRow({ children }: { children: ReactNode }) {
  return <div className="mt-8">{children}</div>;
}
