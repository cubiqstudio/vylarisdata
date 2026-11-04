import type { ReactNode } from "react";
import { Button } from "@/components/ui";

/** Eyebrow und h2 innerhalb einer Split-Textspalte. */
export function CopyHead({ eyebrow, id, title }: { eyebrow: string; id: string; title: string }) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2" id={id}>
        {title}
      </h2>
    </>
  );
}

const copyActionStyle = { marginTop: "1.75rem" } as const;

/** Sekundärer Button unter dem Fließtext einer Split-Spalte. */
export function CopyAction({ href, label }: { href: string; label: string }) {
  return (
    <p style={copyActionStyle}>
      <Button href={href} variant="secondary" icon="arrow">
        {label}
      </Button>
    </p>
  );
}

const noteStyle = { marginTop: "2.5rem" } as const;

/** Hinweisbox mit Abstand nach oben (role="note"). */
export function NoteBox({ children }: { children: ReactNode }) {
  return (
    <div role="note" style={noteStyle}>
      {children}
    </div>
  );
}

/** Zentrierte Button-Reihe am Ende eines Abschnitts. */
export function EcoCta({ children }: { children: ReactNode }) {
  return <div className="eco-cta">{children}</div>;
}
