# Prince — Full Stack Developer Portfolio

React 19 + Vite + Tailwind CSS v4 + Framer Motion. Built on top of your
original `myapp` scaffold (same Navbar/Button, same `@theme` design
tokens, same page structure) with full 3D-tilt hover animations and
your four projects wired in.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

Upload the generated `dist/` folder to any static host (Vercel,
Netlify, GitHub Pages, etc).

## What's new vs. your original scaffold

- **Fixed the "Contact me" button** — it had no `onClick` before, so it
  didn't do anything. It now smooth-scrolls to a new Contact section.
- **Fixed the navbar logo** — swapped the external hot-linked PNG for
  a Crown icon + "Prince" text (external image URLs can break/be slow,
  and it keeps everything self-contained).
- **Your uploaded `prince.jpg` logo** now lives in the footer as a
  small "wax seal" badge (`public/prince-seal.jpg`) — its white
  background works there since it's an intentional callout, not the
  main nav (which is dark).
- **Scroll-spy navbar** — the active section now highlights with an
  animated pill (`layoutId` in Framer Motion).
- **3D tilt** (`src/components/Tilt3D.jsx`) — cursor-reactive
  perspective tilt + glare, applied to the hero code card, stat cards,
  skill cards, and project cards.
- **New Contact section + Footer** (you didn't have either before).
- **Projects section** with four fleshed-out, interactive builds:
  Todo app, Weather app, Login/Auth flow, Rock-Paper-Scissors
  (playable, with real win/lose logic).
- Typo fix: `font-family: "Intel"` → `"Inter"` in `index.css`.

## Fixed: white screen on first run

Lucide shipped a breaking `v1.0` release (June 2026) that **removed all
trademarked brand icons** — GitHub, LinkedIn, Facebook, Figma, Slack, and
others — for legal reasons. Your `package.json` pins `lucide-react: ^1.30.0`,
so `import { Github, Linkedin } from "lucide-react"` silently imported
`undefined`, and React threw "Element type is invalid" the moment it tried
to render `<Github />` — a blank white page with no visible cause.

Fixed by swapping those two icons for generic, non-brand equivalents
(`Code2` for the GitHub/repo link, `Briefcase` for LinkedIn) in
`Footer.jsx`, `Contact.jsx`, and `Projects.jsx`. Also added
`src/components/ErrorBoundary.jsx`, wired up in `main.jsx` — if anything
throws again in the future, you'll see the actual error message on screen
instead of a blank page.

## Making it yours

- `src/components/data.js` — your name, email, socials, stats, and
  experience/education timeline live here.
- `src/pages/Projects.jsx` — swap in your real project titles,
  descriptions, and links.
- `src/pages/Home.jsx` — the hero currently shows a 3D-tilt code card
  in place of an image. If you want your own photo/art there instead,
  swap the `<Tilt3D>` block for an `<img>` — just make sure it's art
  you have the rights to use.
- Drop a real `resume.pdf` into `public/` — the hero's resume link
  already points at `/resume.pdf`.
- `main.mp4` (your uploaded screen recording) wasn't used here — I
  can't preview video content, so I left it out rather than guess. If
  you want it as a hero background video, drop it in `public/` and
  say the word.
