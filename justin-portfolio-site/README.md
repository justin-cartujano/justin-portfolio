[README.md](https://github.com/user-attachments/files/32416409/README.md)
# Justin Cartujano — Portfolio

Website Designer, Meta Ads & AI Automations Specialist.

Single-page portfolio site. Everything lives in `index.html`, so there is no build step and nothing to install.

## Files

| File | What it is |
|---|---|
| `index.html` | The entire website. This is the only file that matters. |
| `_headers` | Cloudflare Pages caching and security rules. Optional. |
| `.gitignore` | Keeps OS junk files out of the repo. |

## Deploying on Cloudflare Pages

1. Push this folder to a GitHub repo.
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo. Leave the build settings empty:
   - Framework preset: **None**
   - Build command: *(blank)*
   - Build output directory: `/`
4. **Save and Deploy.**

Every push to the main branch redeploys automatically.

## Editing

Open `index.html` and search for the ✏️ marks. They flag every spot meant
to be edited: photo, title, copy, social links, booking calendar, projects,
and experience.

Projects live in the `PROJECTS` object inside the `<script>` block near the
bottom. Each one needs a matching card in the Selected Work grid with the same
`data-id`.
