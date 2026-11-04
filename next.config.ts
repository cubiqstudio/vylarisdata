import type { NextConfig } from "next";

/**
 * Statischer Export: `next build` erzeugt den Ordner `out/`,
 * der im Docker-Image von nginx ausgeliefert wird (siehe Dockerfile und compose.yaml).
 */
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default config;
