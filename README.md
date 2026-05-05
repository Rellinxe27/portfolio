# portfolio — Rellinxe Boni

Personal portfolio. Vue 3 + Vite, dark editorial theme, deployed to GitHub Pages.

→ [rellinxe27.github.io/portfolio](https://rellinxe27.github.io/portfolio)

## Stack

```
Vue 3 + Vite                 — build + reactivity
Custom CSS (no UI lib)       — every style hand-written
IntersectionObserver reveals — no animation library
GitHub Actions               — auto-deploy on push to master
```

## Local dev

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # → dist/
npm run preview      # preview the built bundle
```

## Type

- Display: [Fraunces](https://fonts.google.com/specimen/Fraunces) (variable, with WONK + SOFT)
- Body: [Inter](https://fonts.google.com/specimen/Inter)
- Mono: [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

## Palette

```
bg          #0B0C0F   warm charcoal
surface     #15181E
text        #ECE6D7   warm cream
accent      #FF5C2E   vermillion
sage        #86C5B9   used sparingly
```

## Structure

```
src/
├── App.vue
├── main.js
├── styles/main.css
├── data/projects.js          all editable content (projects, principles, metrics)
├── composables/useReveal.js  intersection-observer reveal
└── components/
    ├── TopBar.vue
    ├── Hero.vue
    ├── Manifesto.vue
    ├── Projects.vue
    ├── HowIThink.vue
    ├── Proof.vue
    ├── Stack.vue
    ├── Career.vue
    ├── Contact.vue
    └── Foot.vue
```

## Editing content

All written content lives in [`src/data/projects.js`](src/data/projects.js).
Update the `projects`, `principles`, `metrics`, `career`, and `stack` arrays —
no template changes needed.

## Deployment

Push to `master`. The workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
builds with `vite build` and publishes `dist/` to GitHub Pages.

One-time setup: `Settings → Pages → Source: GitHub Actions`.

The Vite `base` is set to `/portfolio/` in [`vite.config.js`](vite.config.js).
If you rename the repo, update that value.

---

`legacy/` holds the previous hand-coded static version, archived for reference.
