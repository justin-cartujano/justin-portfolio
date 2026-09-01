# With Agency Group

A single-file, self-contained website for **With Agency Group**, a boutique marketing/sales agency for health, fitness, and beauty brands. Built as a faux-multipage SPA and shipped as one deployable HTML file, currently live on GoHighLevel.

![Preview](preview.png)

## Live site

[withagencygroup.com](https://withagencygroup.com)

## What this is

One `index.html` file — no build step, no dependencies, no external asset requests. Every image is inlined as base64, and the "pages" are `<div>`s toggled with JavaScript rather than real routes, which is what let it drop cleanly into a page-builder platform (GoHighLevel) with zero server-side setup.

- **5 sections:** Home, Marketing With Agency, Sales With Agency, Gym Content Report, The Pilates Report
- **~1.3MB**, fully self-contained (24 embedded images, 0 external requests)
- **Responsive:** desktop nav collapses to a hamburger menu under 1100px, verified with no horizontal overflow at 1440px or 390px
- **Cross-page CTA routing:** the "Let's Grow" button works from any page — it switches to Home and smooth-scrolls to the booking section, since hidden pages are `display: none` and can't be scrolled to directly
- **Full-bleed embedding:** a `#site-root` breakout technique forces the site to span the full viewport width even when a host platform wraps it in a fixed-width, centered container
- **Embedded favicon:** the tab icon is injected into `<head>` at runtime via a small script, since favicon `<link>` tags in pasted body content are otherwise ignored by the browser

## Stack

Vanilla HTML/CSS/JS. Fonts: Public Sans (body) + Playfair Display (display). No frameworks, no build tooling — the whole thing is designed to be copy-pasted into a page builder or hosted as a static file as-is.

## Design

- Brand color: `#7A0000` (burgundy)
- Palette: cream `#FAF8EE`, ink `#1a1010`, plus a soft blue accent
- Sticker-style nav badges, editorial photography, Playfair italics for emphasis

## Running locally

No build step required — just open the file:

```bash
open index.html
```

Or serve it with any static server:

```bash
python3 -m http.server 8000
```

## Deployment notes

This file is written to survive being pasted into a page-builder platform rather than served as a standalone static file, which is why a couple of things in the code exist specifically for that:

- The full-bleed `#site-root` wrapper and cream fallback background exist to counteract host platforms that wrap embedded code in padded, fixed-width containers.
- The favicon-relocation script exists because embedding platforms typically only paste `<body>` content, so `<head>` tags like `<link rel="icon">` need to be moved at runtime.

If deploying as a genuine standalone static site (e.g. GitHub Pages, Netlify, Vercel), these are harmless no-ops — the site renders identically either way.

## License

© With Agency Group. Code structure and implementation shared here for portfolio purposes; brand name, logo, and copy belong to With Agency Group.
