# Urbn Jungle Fitness — landing page

Static landing page for the **5 Sessions for $5** offer at Urbn Jungle Fitness, St Leonards NSW.

No build step, no dependencies. Open `index.html` and it runs.

---

## What's in here

```
.
├── index.html                  # the whole page
├── favicon.ico
├── assets/
│   ├── css/styles.css          # all styling, design tokens at the top
│   ├── js/main.js              # slider, sticky header, form handling
│   └── img/                    # logo, hero, creatives, icons, OG image
├── .nojekyll                   # tells GitHub Pages to serve files as-is
├── robots.txt
└── .gitignore
```

## Deploy to GitHub Pages

1. Create a new repo on GitHub, e.g. `urbn-jungle-landing`.
2. Push this folder to it:

   ```bash
   git init
   git add .
   git commit -m "Urbn Jungle Fitness landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/urbn-jungle-landing.git
   git push -u origin main
   ```

3. In the repo, go to **Settings → Pages**.
4. Under **Source**, pick **Deploy from a branch**, set branch to `main` and folder to `/ (root)`.
5. Save. The site goes live at `https://YOUR-USERNAME.github.io/urbn-jungle-landing/` in about a minute.

### Custom domain

Add a file called `CNAME` at the root containing just your domain, e.g. `offer.urbnjungle.com.au`, then point a CNAME DNS record at `YOUR-USERNAME.github.io`.

### Other hosts

Drag the folder into Netlify or Vercel and it deploys as-is. Nothing to configure.

---

## Before you go live

### 1. Connect the form

The form validates and shows a success state, but it doesn't send anywhere yet. Open `assets/js/main.js` and find this comment:

```js
/* Swap this for your real endpoint, e.g.
   fetch('https://your-crm/webhook', { method:'POST', body:new FormData(form) }) */
```

Replace the two lines after it with your POST. Fields submitted are `name`, `email`, `phone`, `consent`.

Example for a GoHighLevel / webhook endpoint:

```js
fetch('https://your-endpoint-here', {
  method: 'POST',
  body: new FormData(form)
}).then(function(){
  form.classList.add('is-done');
  form.closest('.card').querySelector('.card__head').style.display = 'none';
});
```

### 2. Fix the map

The Google Maps embed in `index.html` currently points at coordinates in Quezon City, not St Leonards. Carried over from the original build. To fix it: open Google Maps, find the studio, click **Share → Embed a map**, copy the `src` and paste it over the existing one.

### 3. Privacy Policy link

Two links point to `#privacy` as a placeholder. Point them at the real policy page.

### 4. Social sharing URLs

In `index.html`, `og:url`, `og:image` and `twitter:image` use placeholder or relative paths. Once you have a live domain, make them absolute:

```html
<meta property="og:url" content="https://your-domain.com/">
<meta property="og:image" content="https://your-domain.com/assets/img/og-image.jpg">
```

### 5. Phone country code

The phone field is hard-coded to `+63` (Philippines) to match the original build. The studio is in Australia, so you may want `+61`. It's in `index.html`, search for `phone__cc`.

---

## Editing the design

All colours, spacing and radii live as CSS custom properties at the top of `assets/css/styles.css`:

| Token | Value | Used for |
|---|---|---|
| `--lime` | `#C7E633` | the logo green, buttons, accents |
| `--olive` | `#677B03` | deep green from the ad creatives |
| `--gold` | `#F5C518` | review stars |
| `--black` / `--s-0…3` | `#000` → `#1E1E1E` | page and surface layers |
| `--r-sm/md/lg` | `10 / 16 / 24px` | corner radii |
| `--pad` | fluid | vertical section spacing |

Change a token and it updates everywhere.

**Fonts** are Poppins (headings, buttons) and Inter (body), loaded from Google Fonts. To self-host them, download the families, drop the woff2 files in `assets/fonts/`, and swap the `<link>` in `index.html` for `@font-face` rules.

---

## Notes

- Works down to 320px wide. Below 980px the desktop layout stacks and a sticky CTA bar appears at the bottom.
- Keyboard accessible: visible focus rings, the review slider takes arrow keys, all images have alt text.
- Respects `prefers-reduced-motion` — the slider stops auto-advancing and transitions are disabled.
- The hero plays a muted YouTube loop over a still image, so there's never a blank frame while it loads.
