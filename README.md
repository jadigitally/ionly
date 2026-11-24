# Ionly website

The marketing / "coming soon" site for Ionly. Plain HTML + CSS, no build step,
no framework — just `index.html` and `styles.css`, so any static host works.

## Running it locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Current state

This is a placeholder landing page, not a download page:

- The "Notify me at launch" form does **not** send anywhere yet. It just
  shows a thank-you message locally (see the `<script>` at the bottom of
  `index.html`). Before launch, wire it to a real signup service — a
  Buttondown / ConvertKit embed form, a Formspree endpoint, or a small
  Cloudflare Worker — and remove the placeholder `preventDefault` handler.
- There is no "Download" button yet. Add one once the macOS build is
  signed and notarized (see the Ionly project's own `CLAUDE.md` for that
  process) — linking to an unsigned build would trigger a scary Gatekeeper
  warning for visitors.
- The app icon in `assets/icon.png` is copied from the Ionly app's
  placeholder icon (`Ionly/packaging/icon-1024.png`). Replace it if the
  app icon changes.

## Deploying

This is a static site, so any of the usual free static hosts work the same
way:

1. Push this repo to GitHub.
2. Connect the repo to **Cloudflare Pages**, **Netlify**, or **Vercel**
   (a few clicks — sign in with GitHub, pick the repo, no build command
   needed since there's no build step).
3. Every push to `main` auto-deploys.
4. Point your own domain at it from the host's dashboard once you've
   bought one.

## Design

Colors and spacing follow the same palette as the Ionly app itself (see
`Ionly/CLAUDE.md`'s "Design" section) — light theme by default, dark theme
via `prefers-color-scheme`, same green accents. Keep the two in sync if
the app's palette changes.
