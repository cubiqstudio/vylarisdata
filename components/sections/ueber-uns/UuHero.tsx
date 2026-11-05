import type { ReactNode } from "react";
import { Logo } from "@/components/layout/Logo";
import { A, Status, type Crumb, type Tone } from "@/components/ui";

export type UuStatusItem = { tone: Tone; label: string };

type UuHeroProps = {
  crumbs: readonly Crumb[];
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  /** Statushinweise zwischen Lead und Buttons */
  status: readonly UuStatusItem[];
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
        <UuStatus items={status} />
        <div className="hero-cta">{actions}</div>
      </div>
    </section>
  );
}

/** Statuszeile mit einem oder mehreren Hinweisen (Hero und FAQ). */
export function UuStatus({ items }: { items: readonly UuStatusItem[] }) {
  return (
    <p className="uu-status" style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
      {items.map((s) => (
        <Status key={s.label} tone={s.tone}>
          {s.label}
        </Status>
      ))}
    </p>
  );
}
