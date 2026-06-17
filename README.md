# Lee Yang — Portfolio (Next.js)

A rebuild of [leeyang.netlify.app](https://leeyang.netlify.app/) in **Next.js (App Router) + TypeScript**, with `next/font`, CSS Modules, and a small design-token system. No CSS framework — the styling is intentional and fully yours to edit.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build && npm start   # production build
```

## Project structure

```
app/
  layout.tsx        # fonts + metadata, loads globals
  page.tsx          # composes the sections
  globals.css       # design tokens (colors, type) + base styles
components/
  Nav · Hero · Projects · About · Footer   # each with a .module.css
lib/
  data.ts           # projects, stack, bio, links — edit content here
next.config.mjs     # remote image config (see below)
```

## Design notes

- **Tokens** live in `app/globals.css` under `:root` — change `--accent`, `--paper`, `--ink` to re-skin everything.
- **Fonts**: Space Grotesk (display), Inter (body), JetBrains Mono (labels/code), all via `next/font` (self-hosted, no layout shift).
- **Signature element**: the About section renders your bio as an open `bio.md` file in a code-editor panel.
- Responsive to mobile, visible keyboard focus, and `prefers-reduced-motion` respected.

## Images

To run out of the box, images are still pulled from the original Netlify host
(see `remotePatterns` in `next.config.mjs`). To self-host them:

1. Download the originals into `public/images/`.
2. In `lib/data.ts`, change the `IMG` constant to `"/images"`.
3. Remove the `remotePatterns` block from `next.config.mjs`.

## Edit content

Everything user-facing — projects, tags, links, stack, résumé URL, socials — is in **`lib/data.ts`**. The components just map over it.
