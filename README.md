# Ralph Gonzales · SDET Portfolio

A single-page portfolio site for an SDET / QA automation engineer. It shows featured test automation projects, skills, and contact links. Built with Vite, React 19 and Bootstrap 5, and published as a static site on GitHub Pages.

The content can come from the companion FastAPI backend ([`resume_backend`](../resume_backend)) or from the bundled `src/data/content.js`. If the API is not configured or cannot be reached, the site falls back to the bundled content.

## Tech stack

- [Vite](https://vite.dev/) + [React 19](https://react.dev/)
- [Bootstrap 5](https://getbootstrap.com/) for the grid and utilities, plus a custom stylesheet (`src/styles.css`)
- Fonts: Fraunces, DM Sans and IBM Plex Mono (Google Fonts)

## Getting started

Requires Node.js 20.19+ or 22.12+ (needed by Vite).

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
```

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload          |
| `npm run build`   | Build the production site into `dist/`        |
| `npm run preview` | Serve the built `dist/` locally               |

### Running with the backend

In dev, the site loads content from `http://localhost:8000` by default. Start the API from the sibling `resume_backend` folder:

```bash
cd ../resume_backend
.venv/Scripts/python -m uvicorn app.main:app --reload --port 8000
```

If the API is not running, the site logs a warning and uses the bundled content. The `<html data-content-source>` attribute shows which source was used (`api` or `bundled`).

## Configuration

Copy `.env.example` to `.env.local` to override settings.

| Variable       | Purpose |
| -------------- | ------- |
| `VITE_API_URL` | Base URL of the backend API. In dev it defaults to `http://localhost:8000`. In a production build, leave it unset to build a fully static site from `content.js`. |
| `VITE_BASE`    | Base path for the build. For a GitHub Pages project site, use `/<repo-name>/`. For a user site (`<user>.github.io`), leave it unset (`/`). |

## Project structure

```
src/
  App.jsx            Composes the page sections in order
  components/        Header, Hero, Projects, ProjectCard, Skills, About, Footer
  data/
    content.js       Portfolio content (profile, projects, skills)
    api.js           Fetches GET /api/v1/content (5s timeout)
    useContent.js    Loads content from the API, falling back to content.js
  styles.css         Design tokens and component styles
public/
  screenshots/       Project screenshots referenced from content.js
DESIGN.md            Design brief: page order, card layout, palette, content rules
reference-design.html  Static mockup of the target design
```

## Editing content

All content lives in `src/data/content.js`. Components receive it as props and never import it directly.

- Keep 4–6 featured projects. Each needs a screenshot and working **Code** and **README** links.
- Outcomes must be real, provable results.
- `[bracketed]` values are placeholders still waiting for real content.

After changing `content.js`, regenerate the backend's `content.json` so the API serves the same content. Run this from this folder:

```bash
node --input-type=module -e "import {profile,projects,skills} from './src/data/content.js'; import {writeFileSync} from 'node:fs'; writeFileSync('../resume_backend/app/data/content.json', JSON.stringify({profile,projects,skills},null,2)+'\n')"
```

## Deployment

The site deploys to GitHub Pages as static files. Build with the base path for your repo:

```bash
VITE_BASE=/resume_frontend/ npm run build
```

Then publish the `dist/` folder to GitHub Pages.

## Roadmap

- Playwright test suite: link checks, mobile layout, and axe-core accessibility checks
- GitHub Actions workflow to test and deploy to GitHub Pages
