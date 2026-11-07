/** Zentrale, typisierte Stammdaten der Website. */
export const site = {
  name: "VylarisData",
  url: "https://vylarisdata.com",
  tagline: "Powering the Vylaris Ecosystem.",
  tri: "Technology. Infrastructure. Innovation.",
  owner: "VylarisGroupEurope",
  group: "VylarisGroup",
  area: "Software Development & Technology",
  description:
    "VylarisData ist eine Untermarke von VylarisGroupEurope und gehört zur VylarisGroup – Software Development & Technology. Die eigene Infrastruktur ist im Aufbau, Hardware und Unterstützung sind willkommen.",
  links: {
    eu: "https://vylaris.eu",
    ch: "https://vylaris.ch",
    contact: "https://vylaris.eu/contact",
    status: "https://vylaris.eu/status",
    blog: "https://vylaris.eu/blog",
    services: "https://vylaris.eu/services",
    allianz: "https://vylaris.eu/allianz",
  },
} as const;

export type NavItem = { href: string; label: string };

export const nav: readonly NavItem[] = [
  { href: "/", label: "Start" },
  { href: "/leistungen/", label: "Leistungen" },
  { href: "/infrastruktur/", label: "Infrastruktur" },
  { href: "/technologie/", label: "Technologie" },
  { href: "/oekosystem/", label: "Ökosystem" },
  { href: "/ueber-uns/", label: "Über uns" },
  { href: "/unterstuetzen/", label: "Unterstützen" },
  { href: "/kontakt/", label: "Kontakt" },
];

export const footerColumns = [
  {
    title: "Entdecken.",
    links: [
      { href: "/leistungen/", label: "Leistungen" },
      { href: "/infrastruktur/", label: "Infrastruktur" },
      { href: "/technologie/", label: "Technologie" },
      { href: "/oekosystem/", label: "Ökosystem" },
      { href: "/ueber-uns/", label: "Über uns" },
      { href: "/unterstuetzen/", label: "Unterstützen" },
    ],
  },
  {
    title: "Netzwerk.",
    links: [
      { href: site.links.eu, label: "VylarisGroupEurope" },
      { href: site.links.ch, label: "VylarisGroup Schweiz" },
      { href: site.links.status, label: "Systemstatus" },
    ],
  },
  {
    title: "Konto & Recht.",
    links: [
      { href: "/kontakt/", label: "Kontakt" },
      { href: "/impressum/", label: "Impressum" },
      { href: "/datenschutz/", label: "Datenschutz" },
      { href: "/admin/login/", label: "Anmelden" },
    ],
  },
] as const;
