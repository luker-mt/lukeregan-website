# lukeregan.com

Personal site — design system and structure first, Sanity CMS later.

## Structure

- **Design tokens** — `app/design-tokens.css` (colors, type, spacing, motion). Tailwind theme extends these in `tailwind.config.ts`.
- **Components** — `components/ui/` (Button, Text, Heading, Card, VisuallyHidden) and `components/layout/` (Header, Footer).
- **Design system page** — `/design-system` — not linked in the main nav. Use it to preview tokens, type scale, and components before building pages.
- **Pages** — Home, Work, About, Contact, Logos (placeholders). Work detail at `/work/[id]`.

## Commands

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Design system: [http://localhost:3000/design-system](http://localhost:3000/design-system).

## Style

Aesthetic inspired by [Smiling Wolf](https://www.smilingwolf.co.uk/): editorial typography, generous spacing, minimal palette, clear hierarchy. Fonts: Instrument Serif (display), DM Sans (body), IBM Plex Mono (code/captions).

## Deploy (GitHub + Vercel)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/lukeregan-website.git
   git push -u origin main
   ```
   Create the repo at [github.com/new](https://github.com/new) first (no README/license).

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) → **Add New** → **Project**.
   - Import your GitHub repo. Vercel detects Next.js; click **Deploy**.
   - Every push to `main` auto-deploys. Add a custom domain under **Settings → Domains** (e.g. `lukeregan.com`).

## Next steps

- Replace placeholder content with real copy and imagery.
- Add Sanity and fetch content for Work, Journal, etc.
- Optional: add a `noindex` or auth for `/design-system` if you want it fully hidden from production.
