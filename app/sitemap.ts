import type { MetadataRoute } from "next";
import { nav, site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Alle Einträge der Hauptnavigation, darunter auch /unterstuetzen/
  return nav.map((n) => ({ url: `${site.url}${n.href}` }));
}
