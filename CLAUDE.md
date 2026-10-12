# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page SDET portfolio site built with Vite + React 19, styled with Bootstrap 5 and a custom stylesheet, and published as a static site on GitHub Pages. `DESIGN.md` is the authoritative brief (page order, card layout, palette, content rules). `reference-design.html` is the static mockup the site reproduces. Use it as a visual reference only; don't copy its inline styles.

A companion FastAPI backend is a separate repo in the sibling folder `../resume_backend`. It serves the same content as JSON (`/api/v1/content`, `/api/v1/profile`, `/api/v1/projects`, `/api/v1/skills`; Swagger UI at `/docs`) using the same camelCase field names as `src/data/content.js`. The UI loads its content from this API (see Architecture).

## Commands

- `npm run dev`: start the dev server
- `npm run build`: build the production site into `dist/`
- `npm run preview`: serve the built `dist/`

There is no lint or test setup yet. DESIGN.md calls for a Playwright suite (link checks, mobile layout, axe-core accessibility) and a GitHub Actions deploy to Pages, and neither exists yet.

The API base URL comes from `VITE_API_URL` (see `.env.example`). In dev it defaults to `http://localhost:8000`. In a production build, leaving it unset disables the API, and the site runs fully static from `content.js`.

For GitHub Pages project sites, build with `VITE_BASE=/<repo-name>/` (see `vite.config.js`). Asset paths for content images are built from `import.meta.env.BASE_URL`, so they follow the base path automatically.

## Architecture

- **Content flow:** `App.jsx` calls `useContent()` (`src/data/useContent.js`), which fetches `GET /api/v1/content` through `src/data/api.js` (5s timeout, basic shape check). Until the fetch settles, `App` shows a loading screen. If the API is disabled or fails, it falls back to the bundled `src/data/content.js` and logs a `console.warn`. The source used is set on `<html data-content-source="api|bundled">`, which tests can read.
- Components receive `profile` / `projects` / `skills` as **props** from `App` and never import content directly. `content.js` stays the single place to edit content; regenerate the backend's `content.json` from it (command in `../resume_backend/CLAUDE.md`). The field names (camelCase) must match the API's response.
- `src/App.jsx` composes the sections in the order DESIGN.md sets: `Header`, `Hero`, `Projects` (rendering `ProjectCard`s), `Skills`, `About`, `Footer`. The section anchor ids (`#projects`, `#skills`, `#about`, `#contact`) are targets of the nav and hero links, so keep them stable.
- `ProjectCard` renders a screenshot from `public/` when `screenshot` is set. Otherwise it shows a tinted placeholder panel. The CI badge is an image when `badge` (a URL) is set, a text chip when only `badgeLabel` is set, and omitted when neither is.
- **Styling:** Bootstrap provides the grid and utilities (2-column project grid at `lg`, stacking to 1 column below). `src/styles.css` defines the design tokens as CSS custom properties on `:root`, overrides Bootstrap's body and link variables, and holds all component classes. Add new colors as tokens there instead of hard-coding hex values.
- Fonts (Fraunces, DM Sans, IBM Plex Mono) load from Google Fonts in `index.html`.

## Content rules

- Every `[bracketed]` value in `content.js` is a placeholder for the owner's real content. If something is missing, **ask the user**. Do not invent it.
- Outcomes must be real, provable results. **Never invent metrics or numbers.**
- Keep 4–6 projects. Each needs a real screenshot and working Code and README links.
- Text contrast must be at least 4.5:1. Focus outlines use the link blue on light backgrounds and amber on navy.
