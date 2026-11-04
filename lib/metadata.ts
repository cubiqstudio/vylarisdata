import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMeta = {
  /** Seitentitel ohne Markennamen (wird automatisch ergänzt) */
  title: string;
  description: string;
  /** Pfad mit Slash am Ende, z. B. "/leistungen/" */
  path: string;
  noindex?: boolean;
};

/** Einheitliche Meta-Daten (Titel, Beschreibung, Canonical, Open Graph) für jede Seite. */
export function pageMetadata({ title, description, path, noindex }: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} – ${site.name}`, description, url: path },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
