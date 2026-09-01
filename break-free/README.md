# Break Free Movement landing page (portfolio version)

The Sculpt Teacher Training landing page, set up for hosting as a portfolio piece.
The design is unchanged. The only difference from the original is that the pieces
still tied to the client's live accounts are swapped for safe placeholders, so no
real bookings or client data flow through the portfolio version.

## Client-connected pieces

Four things in the original page point at the client's live setup. Three are
replaced with placeholders; one is standard and stays.

**1. VSL video**
Streams from the client's CDN (`assets.cdn.filesafe.space`). The placeholder empties
the video source. The dark video frame, play button, and caption remain, so the
section still looks complete. A demo clip can be dropped in later.

**2. Booking calendar** (highest priority)
A live GoHighLevel widget on the client's account (`portal.supafitgyms.com`). If left
in place, a visitor could book a real call. It is replaced with a styled "Booking
Calendar" box, and its companion widget script is removed.

**3. Footer legal links**
Privacy Policy and Terms both point to `thebreakfreemovement.com`. Both are set to
`#` so they no longer link to the client's live site.

**4. Google Fonts** (leave as-is)
The page loads the Josefin Sans font from Google. This is standard and safe to keep.

The logo and trainer photo are embedded directly in the page, so they work with no
extra steps.

## Setup: two options

Only one is needed.

### Option A: build script (cleaner repo)

Extracts the two images into an `assets/` folder and applies all placeholder swaps
automatically.

1. Place the original landing page in this folder, named `index.html`.
2. Run:

   ```
   python3 build.py
   ```

3. The output is a `dist/` folder, ready to push to GitHub.

### Option B: manual edits (keeps the page as a single file)

Open `index.html` in any text editor and make these four changes. The images stay as
they are.

- **Video:** locate the `https://assets.cdn.filesafe.space/...` link inside the
  `<source>` tag and delete just the link, leaving the empty quotes (`src=""`).

- **Booking calendar:** find the `<iframe ...>` that points to
  `portal.supafitgyms.com` and replace the entire iframe with:

  ```html
  <div style="min-height:740px;display:flex;align-items:center;justify-content:center;text-align:center;color:var(--muted);padding:40px;">
    <div>
      <p style="font-weight:600;color:var(--sage-dark);margin-bottom:8px;">Booking Calendar</p>
      <p style="font-size:.95rem;">Live scheduling widget goes here.<br>Placeholder for the portfolio version.</p>
    </div>
  </div>
  ```

  Then delete this line further down:

  ```html
  <script src="https://portal.supafitgyms.com/js/form_embed.js" type="text/javascript"></script>
  ```

- **Footer links:** change both `https://www.thebreakfreemovement.com/privacy-policy`
  and `https://www.thebreakfreemovement.com/terms-of-service` to `#`.

Save the file. It is ready to push.

## Hosting on GitHub Pages

1. Create a new public repository on GitHub.
2. Add the files. For Option A, upload everything inside `dist/` (the `index.html`,
   the `assets` folder, and the `.nojekyll` file). For Option B, upload the edited
   `index.html`.
3. In the repository, open **Settings > Pages**.
4. Under **Build and deployment**, set **Source** to "Deploy from a branch," select
   the `main` branch and the `/ (root)` folder, and save.
5. After a short wait, the page is live at
   `https://<username>.github.io/<repo-name>/`.

Pushing new changes to the repository updates the live page automatically.

## Files in this folder

- `build.py` — optional script for Option A.
- `README.md` — this file.
