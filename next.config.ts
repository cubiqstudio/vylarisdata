import type { NextConfig } from "next";

/**
 * Statischer Export: `next build` erzeugt den Ordner `out/`,
 * der 1:1 auf Cloudflare Pages ausgeliefert wird.
 */
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default config;
