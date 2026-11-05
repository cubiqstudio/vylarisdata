import type { ReactNode } from "react";
import { Button } from "@/components/ui";
import styles from "./CopyParts.module.css";

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

/** Sekundärer Button unter dem Fließtext einer Split-Spalte. */
export function CopyAction({ href, label }: { href: string; label: string }) {
  return (
    <p className={styles.copyAction}>
      <Button href={href} variant="secondary" icon="arrow">
        {label}
      </Button>
    </p>
  );
}

/** Hinweisbox mit Abstand nach oben (role="note"). */
export function NoteBox({ children }: { children: ReactNode }) {
  return (
    <div role="note" className={styles.noteBox}>
      {children}
    </div>
  );
}

/** Zentrierte Button-Reihe am Ende eines Abschnitts. */
export function CtaRow({ children }: { children: ReactNode }) {
  return <div className="eco-cta">{children}</div>;
}
