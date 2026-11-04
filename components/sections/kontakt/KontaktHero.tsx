import type { CSSProperties, ReactNode } from "react";
import { Logo } from "@/components/layout/Logo";
import { A, type Crumb } from "@/components/ui";

type KontaktHeroProps = {
  crumbs: readonly Crumb[];
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  actions: ReactNode;
};

/** Das Logo-Zeichen sitzt hier im Inhaltsbereich, kleiner und höher als im Standard-Seitenkopf. */
const decoStyle: CSSProperties = { top: "24%", width: "24rem" };

/** Seitenkopf der Kontaktseite. */
export function KontaktHero({ crumbs, eyebrow, title, lead, actions }: KontaktHeroProps) {
  return (
    <section className="page-hero">
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
        <div className="hero-cta">{actions}</div>
        <div className="deco" aria-hidden="true" style={decoStyle}>
          <Logo />
        </div>
      </div>
    </section>
  );
}
