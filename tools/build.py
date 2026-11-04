#!/usr/bin/env python3
"""VylarisData – statischer Seiten-Generator.

Setzt aus den Quellseiten in src/pages/*.html komplette HTML-Seiten zusammen
(Kopf, Navigation, Footer, Meta-Tags) und erzeugt sitemap.xml, robots.txt
und _headers.

Aufruf:
  python3 tools/build.py                  # schreibt die Seiten in das Projektverzeichnis
  python3 tools/build.py --out /pfad      # schreibt in ein anderes Verzeichnis (Vorschau)
  python3 tools/build.py --dist dist      # erzeugt zusätzlich einen auslieferbaren Ordner
  python3 tools/build.py --page infrastruktur --out /tmp/vorschau   # nur eine Seite

Jede Quellseite beginnt mit einem Kommentarblock:
  <!--
  title: Seitentitel
  description: Kurzbeschreibung für Suchmaschinen
  nav: leistungen            (welcher Menüpunkt aktiv ist, optional)
  robots: noindex, follow    (optional)
  -->
Danach folgt reines HTML für den Inhalt von <main>. Verfügbare Makros:
  {{icon:name}}  {{icon:name:klasse}}  {{arrow}}  {{net}}  {{mark}}
"""
import argparse, base64, hashlib, html, os, re, shutil, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src" / "pages"
SITE = "https://vylarisdata.com"

NAV = [
    ("index", "Start"),
    ("leistungen", "Leistungen"),
    ("infrastruktur", "Infrastruktur"),
    ("technologie", "Technologie"),
    ("oekosystem", "Ökosystem"),
    ("ueber-uns", "Über uns"),
    ("kontakt", "Kontakt"),
]

# ----------------------------------------------------------------------------
# Icons (Lucide-Stil, 24x24, Strich)
# ----------------------------------------------------------------------------
I = {
 'cpu': '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
 'server': '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/>',
 'bulb': '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/>',
 'code': '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
 'shield': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
 'db': '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
 'globe': '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>',
 'link': '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
 'building': '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4"/>',
 'ext': '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
 'mail': '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
 'arrow': '<path d="M5 12h14M12 5l7 7-7 7"/>',
 'back': '<path d="M19 12H5M12 19l-7-7 7-7"/>',
 'menu': '<path d="M4 5h16M4 12h16M4 19h16"/>',
 'x': '<path d="M18 6 6 18M6 6l12 12"/>',
 'sun': '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2m-7.07-2.93 1.41-1.41m11.32-11.32 1.41-1.41M2 12h2m16 0h2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41"/>',
 'moon': '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
 'monitor': '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
 'network': '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M12 12V8"/>',
 'lock': '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
 'cloud': '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
 'layers': '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
 'activity': '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
 'git': '<path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
 'terminal': '<path d="m4 17 6-6-6-6M12 19h8"/>',
 'box': '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
 'hdd': '<path d="M22 12H2M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"/><path d="M6 16h.01M10 16h.01"/>',
 'zap': '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
 'key': '<path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>',
 'refresh': '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M8 16H3v5"/>',
 'eye': '<path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0"/><circle cx="12" cy="12" r="3"/>',
 'book': '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>',
 'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
 'pin': '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
 'file': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8"/>',
 'life': '<circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M4.93 19.07l4.24-4.24"/><circle cx="12" cy="12" r="4"/>',
 'rocket': '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
 'wrench': '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
 'clock': '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
 'check': '<path d="M20 6 9 17l-5-5"/>',
 'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
 'heart': '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
 'down': '<path d="M12 5v14M19 12l-7 7-7-7"/>',
}

def ic(name, cls=''):
    if name not in I:
        raise KeyError(f"Unbekanntes Icon: {name}")
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
            'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"%s>%s</svg>'
            % ((' class="%s"' % cls) if cls else '', I[name]))

LOGO = ('<img src="assets/img/logo-mark-on-light.svg" alt="" class="logo-light" width="307" height="123">'
        '<img src="assets/img/logo-mark-on-dark.svg" alt="" class="logo-dark" width="307" height="123">')

# ----------------------------------------------------------------------------
# Hero-Netzwerk
# ----------------------------------------------------------------------------
def net():
    nodes = [(70,150,'Hosting'),(130,70,'Code'),(250,40,'Plattform'),(370,70,'Sicherheit'),
             (430,150,'Daten'),(90,215,'Netzwerk'),(410,215,'Betrieb')]
    lines = ''.join(f'<line class="link" x1="250" y1="150" x2="{x}" y2="{y}"/>' for x, y, _ in nodes)
    g = ''
    for i, (x, y, l) in enumerate(nodes):
        g += (f'<g><circle class="node-halo" cx="{x}" cy="{y}" r="16" style="animation-delay:{i*0.45:.2f}s"/>'
              f'<circle class="node-ring" cx="{x}" cy="{y}" r="9"/><circle class="node-dot" cx="{x}" cy="{y}" r="3.5"/>'
              f'<text x="{x}" y="{y+27}" text-anchor="middle">{l}</text></g>')
    return ('<div class="net" aria-hidden="true"><svg viewBox="0 0 500 262" fill="none" focusable="false">'
            '<defs><radialGradient id="vd-glow" cx="50%" cy="50%" r="50%"><stop offset="0" style="stop-color:var(--brand)" stop-opacity=".45"/>'
            '<stop offset=".55" style="stop-color:var(--brand)" stop-opacity=".12"/><stop offset="1" style="stop-color:var(--brand)" stop-opacity="0"/></radialGradient></defs>'
            '<circle class="glow" cx="250" cy="150" r="150"/>' + lines +
            '<g class="spin"><circle class="ring" cx="250" cy="150" r="118" stroke-opacity=".3" stroke-dasharray="3 7"/></g>'
            '<g class="spin-rev"><circle class="ring" cx="250" cy="150" r="170" stroke-opacity=".2" stroke-dasharray="3 9"/></g>'
            + g + '</svg>' + LOGO + '</div>')

# ----------------------------------------------------------------------------
# Seitenrahmen
# ----------------------------------------------------------------------------
THEME_JS = ('(function(){try{var t=localStorage.getItem("vd-theme");var d=t==="dark"||((t===null||t==="system")'
            '&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.setAttribute'
            '("data-theme",d?"dark":"light")}catch(e){}})();')

def head(title, desc, canon, robots):
    full_title = title if 'VylarisData' in title else f'{title} – VylarisData'
    t, d = html.escape(full_title, quote=True), html.escape(desc, quote=True)
    return f'''<!DOCTYPE html>
<html lang="de" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{t}</title>
<meta name="description" content="{d}">
<meta name="application-name" content="VylarisData">
<meta name="robots" content="{robots}">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" media="(prefers-color-scheme: light)" content="#f5f8ff">
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0b0d11">
<link rel="canonical" href="{canon}">
<meta property="og:title" content="{t}">
<meta property="og:description" content="{d}">
<meta property="og:site_name" content="VylarisData">
<meta property="og:locale" content="de_DE">
<meta property="og:type" content="website">
<meta property="og:url" content="{canon}">
<meta property="og:image" content="{SITE}/assets/img/og-image.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="{SITE}/assets/img/og-image.png">
<link rel="icon" type="image/svg+xml" href="assets/img/favicon.svg">
<link rel="preload" href="assets/fonts/poppins-latin-600.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/css/style.css">
<script>{THEME_JS}</script>
</head>
<body>
<div class="page">
'''

def href(slug):
    return 'index.html' if slug == 'index' else f'{slug}.html'

def header(active):
    lis = ''.join(
        f'<li><a href="{href(s)}"{" aria-current=\"page\"" if s == active else ""}>{n}</a></li>' for s, n in NAV)
    mob = ''.join(f'<li><a href="{href(s)}">{n}</a></li>' for s, n in NAV)
    brand = (f'<a class="brand" href="index.html" aria-label="VylarisData – zur Startseite">{LOGO}'
             f'<span class="brand-text">Vylaris<span>Data</span></span></a>')
    return f'''<a class="skip" href="#main">Zum Inhalt springen</a>
<header class="header">
  <div class="wrap">
    {brand}
    <nav class="nav" aria-label="Hauptnavigation"><ul>{lis}</ul></nav>
    <div class="header-actions">
      <a class="btn btn-primary btn-sm" href="kontakt.html">Kontakt aufnehmen</a>
      <button class="menu-btn" id="menu-btn" type="button" aria-label="Menü öffnen" aria-expanded="false" aria-controls="mobile-nav">{ic('menu','i-open')}{ic('x','i-close')}</button>
    </div>
  </div>
  <div class="mobile-nav" id="mobile-nav"><div class="wrap"><ul>{mob}</ul></div></div>
</header>
'''

def footer():
    brand = (f'<a class="brand" href="index.html" aria-label="VylarisData – zur Startseite">{LOGO}'
             f'<span class="brand-text">Vylaris<span>Data</span></span></a>')
    return f'''<footer class="footer">
  <div class="wrap cols">
    <div>
      {brand}
      <p>Powering the Vylaris Ecosystem. Technology. Infrastructure. Innovation. VylarisData ist eine Marke von CircleUpWilms und gehört zur VylarisGroup.</p>
    </div>
    <nav aria-label="Seiten">
      <h2>Entdecken.</h2>
      <ul>
        <li><a href="leistungen.html">Leistungen</a></li>
        <li><a href="infrastruktur.html">Infrastruktur</a></li>
        <li><a href="technologie.html">Technologie</a></li>
        <li><a href="oekosystem.html">Ökosystem</a></li>
        <li><a href="ueber-uns.html">Über uns</a></li>
      </ul>
    </nav>
    <nav aria-label="Vylaris-Netzwerk">
      <h2>Netzwerk.</h2>
      <ul>
        <li><a href="https://vylaris.eu" target="_blank" rel="noopener noreferrer">VylarisGroupEurope</a></li>
        <li><a href="https://vylaris.ch" target="_blank" rel="noopener noreferrer">VylarisGroup Schweiz</a></li>
        <li><a href="https://vylaris.eu/status" target="_blank" rel="noopener noreferrer">Systemstatus</a></li>
      </ul>
    </nav>
    <nav aria-label="Rechtliches">
      <h2>Konto &amp; Recht.</h2>
      <ul>
        <li><a href="kontakt.html">Kontakt</a></li>
        <li><a href="impressum.html">Impressum</a></li>
        <li><a href="datenschutz.html">Datenschutz</a></li>
      </ul>
    </nav>
  </div>
  <div class="legal"><div class="wrap">
    <p>Copyright © 2026 VylarisData · eine Marke von CircleUpWilms</p>
    <p>Kein Tracking · Keine Cookies</p>
    <div class="theme" role="group" aria-label="Darstellung">
      <button type="button" data-theme-set="light" aria-pressed="false" title="Hell">{ic('sun')}<span>Hell</span></button>
      <button type="button" data-theme-set="dark" aria-pressed="false" title="Dunkel">{ic('moon')}<span>Dunkel</span></button>
      <button type="button" data-theme-set="system" aria-pressed="true" title="System">{ic('monitor')}<span>System</span></button>
    </div>
  </div></div>
</footer>'''

TAIL = '''
</div>
<script src="assets/js/main.js" defer></script>
</body>
</html>
'''

# ----------------------------------------------------------------------------
# Fragmente
# ----------------------------------------------------------------------------
def parse_fragment(path):
    text = path.read_text(encoding='utf-8')
    meta, body = {}, text
    m = re.match(r'\s*<!--(.*?)-->', text, re.S)
    if m:
        for line in m.group(1).strip().splitlines():
            if ':' in line:
                k, v = line.split(':', 1)
                meta[k.strip().lower()] = v.strip()
        body = text[m.end():]
    return meta, body

def expand(body):
    def rep(m):
        parts = m.group(1).split(':')
        if parts[0] == 'icon':
            return ic(parts[1], parts[2] if len(parts) > 2 else '')
        if parts[0] == 'arrow':
            return ic('arrow')
        if parts[0] == 'net':
            return net()
        if parts[0] == 'mark':
            return LOGO
        raise KeyError(f"Unbekanntes Makro: {m.group(0)}")
    return re.sub(r'\{\{\s*([a-z0-9:_-]+)\s*\}\}', rep, body)

def build_page(slug, outdir):
    meta, body = parse_fragment(SRC / f'{slug}.html')
    title = meta.get('title', slug)
    desc = meta.get('description', 'VylarisData – Powering the Vylaris Ecosystem.')
    canon = SITE + ('/' if slug == 'index' else f'/{slug}.html')
    robots = meta.get('robots', 'index, follow')
    nav = meta.get('nav', slug)
    page = (head(title, desc, canon, robots) + header(nav) + '\n<main id="main">\n' + expand(body) + '\n</main>\n' + footer() + TAIL)
    (outdir / f'{slug}.html').write_text(page, encoding='utf-8')
    return robots

def write_support(outdir, slugs, robots_map):
    urls = [s for s in slugs if 'noindex' not in robots_map.get(s, '') and s != '404']
    sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for s in urls:
        loc = SITE + ('/' if s == 'index' else f'/{s}.html')
        sm.append(f'  <url><loc>{loc}</loc></url>')
    sm.append('</urlset>')
    (outdir / 'sitemap.xml').write_text('\n'.join(sm) + '\n', encoding='utf-8')
    (outdir / 'robots.txt').write_text(f'User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n', encoding='utf-8')
    h = base64.b64encode(hashlib.sha256(THEME_JS.encode()).digest()).decode()
    (outdir / '_headers').write_text(f'''/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  Content-Security-Policy: default-src 'self'; script-src 'self' 'sha256-{h}'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'

/assets/fonts/*
  Cache-Control: public, max-age=31536000, immutable

/assets/*
  Cache-Control: public, max-age=3600, must-revalidate
''', encoding='utf-8')

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--out', default=str(ROOT), help='Ausgabeverzeichnis (Standard: Projektwurzel)')
    ap.add_argument('--page', help='nur diese Seite bauen (Slug, z. B. infrastruktur)')
    ap.add_argument('--dist', help='zusätzlich einen auslieferbaren Ordner erzeugen (z. B. dist)')
    a = ap.parse_args()
    out = Path(a.out).resolve(); out.mkdir(parents=True, exist_ok=True)
    slugs = sorted(p.stem for p in SRC.glob('*.html'))
    if a.page:
        if a.page not in slugs:
            sys.exit(f'Seite nicht gefunden: {a.page}')
        build_page(a.page, out)
        # Assets für die Vorschau bereitstellen
        if out != ROOT and not (out / 'assets').exists():
            shutil.copytree(ROOT / 'assets', out / 'assets')
        print(f'OK  {out / (a.page + ".html")}')
        return
    robots_map = {s: build_page(s, out) for s in slugs}
    write_support(out, slugs, robots_map)
    if out != ROOT and not (out / 'assets').exists():
        shutil.copytree(ROOT / 'assets', out / 'assets')
    print(f'OK  {len(slugs)} Seiten -> {out}')
    if a.dist:
        d = Path(a.dist)
        d = d if d.is_absolute() else ROOT / d
        if d.exists():
            shutil.rmtree(d)
        d.mkdir(parents=True)
        for s in slugs:
            shutil.copy2(out / f'{s}.html', d / f'{s}.html')
        for f in ('sitemap.xml', 'robots.txt', '_headers'):
            shutil.copy2(out / f, d / f)
        shutil.copytree(ROOT / 'assets', d / 'assets')
        print(f'OK  dist -> {d}')

if __name__ == '__main__':
    main()
