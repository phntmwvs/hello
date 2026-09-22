# Dan — Portfolio

Minimalist, parallax-heavy personal portfolio / contact site. Replaces dandotjs.com.

## Stack

- **Svelte 5** (runes) + **Vite 8** + **TypeScript** — no SvelteKit (single-page static site)
- Vanilla CSS parallax & scroll reveals — no animation library
- Dark-first design (`#000` / charcoal surfaces, cyan `#00e5e5` + magenta `#ff4dd8` accents)

## Develop

```bash
npm install
npm run dev
```

## Build / preview

```bash
npm run build      # → dist/
npm run preview
```

## Validate

```bash
npx svelte-check --tsconfig ./tsconfig.app.json
npx @sveltejs/mcp svelte-autofixer src/lib/components/<File>.svelte
```

## Content

Edit `src/lib/content.ts` — name, summary, jobs, technologies, LinkedIn, email.

> **TODO before launch:** confirm `linkedin` URL and `email` in `src/lib/content.ts` (currently `in/dandotjs` placeholder, email empty/hidden).

## Deploy

Static `dist/` — host free on Cloudflare Pages / GitHub Pages / Netlify. Point `dandotjs.com` DNS at it.

## Structure

```
src/
  App.svelte                  sticky nav + section composition
  app.css                     design tokens + reset
  lib/
    content.ts                all site copy (typed)
    components/
      Parallax.svelte         rAF-throttled translate3d parallax layer
      Reveal.svelte           IntersectionObserver fade/slide reveal
      Hero.svelte             name, role, coordinates, layered blob parallax
      Summary.svelte          editorial statement
      Experience.svelte       numbered job list
      JobRow.svelte           single role + tech tags
      Tech.svelte             technologies marquee
      Footer.svelte           contact / LinkedIn / back-to-top
```

Accessibility: respects `prefers-reduced-motion` (disables parallax/marquee), semantic landmarks, keyboard-focusable links.
