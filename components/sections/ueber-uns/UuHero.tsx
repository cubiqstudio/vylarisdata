import type { ReactNode } from "react";
import { Logo } from "@/components/layout/Logo";
import { A, Status, type Crumb } from "@/components/ui";

type UuHeroProps = {
  crumbs: readonly Crumb[];
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  /** Statushinweis zwischen Lead und Buttons */
  status: string;
  actions: ReactNode;
};

/** Seitenkopf der Seite "Über uns": mit Statushinweis vor den Buttons. */
export function UuHero({ crumbs, eyebrow, title, lead, status, actions }: UuHeroProps) {
  return (
    <section className="page-hero">
      <div className="deco" aria-hidden="true">
        <Logo />
      </div>
      <div className="wrap">
        <nav className="crumbs" aria-label="Brotkrumen">
          {crumbs.map((c, i) => (
            <span key={c.label} style={{ display: "contents" }}>
              {i > 0 && <span aria-hidden="true">/</span>}
              {c.href ? <A href={c.href}>{c.label}</A> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
        <UuStatus label={status} />
        <div className="hero-cta">{actions}</div>
      </div>
    </section>
  );
}

/** Statuszeile "im Aufbau" (Hero und FAQ). */
export function UuStatus({ label }: { label: string }) {
  return (
    <p className="uu-status">
      <Status tone="warn">{label}</Status>
    </p>
  );
}
