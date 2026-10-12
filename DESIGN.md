# Portfolio design brief (SDET project grid)

Build my portfolio site to match `reference-design.html` (open it in a browser to see the target look).
Rebuild it with Bootstrap 5 and keep it a static site (GitHub Pages).

## Page order
1. Header: name + nav (Projects, Skills, About, Contact)
2. Hero (dark navy): role label, one-line headline, short intro, buttons: See my projects / GitHub / LinkedIn
3. Featured projects: 2-column card grid
4. Skills: 4 category cards (Automation, Languages, API & data, CI/CD & tools) with badges
5. About: round avatar + short paragraph
6. Footer (dark navy): email, GitHub, LinkedIn

## Project card layout (top to bottom)
- Proof area: test report / pipeline screenshot with a CI status badge in the corner
- Title
- "What it is": one line
- Outcome box (green tint): a real, provable result. Never invent numbers
- Testing approach tags (UI, API, CI, Regression...)
- Stack badges
- Links: Code, Test report / Pipeline runs / Live demo, README

## Look
- Fonts: Fraunces (headings), DM Sans (body), IBM Plex Mono (badges)
- Colors: navy #1c2430, amber accent #f2b872, page bg #f7f5f0, cards #ffffff with #e2ded5 border,
  link blue #1f4e79, stack badge bg #e8eef4, approach tag bg #efe6d8, outcome bg #e8f3ec / text #1d4a33
- Cards: 10px radius, 1px border, no heavy shadows
- Must work at phone width (cards stack to 1 column), text contrast 4.5:1 or better

## Content rules
- Replace every [placeholder] with my real content. Ask me if something is missing
- Keep 4-6 projects. Each needs a real screenshot, and working Code and README links
- Optionally fill the repo cards from the GitHub REST API

## Also
- Deploy with GitHub Actions to GitHub Pages
- Add a Playwright test suite for the site itself: links work, mobile layout, axe-core accessibility
