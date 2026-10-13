# Portfolio design brief (SDET project grid)

Build my portfolio site to match `reference-design.html` (open it in a browser to see the target look).
Rebuild it with Bootstrap 5 and keep it a static site (GitHub Pages).

## Page order
1. Header: name + nav (Projects, Skills, About, Contact)
2. Hero: role label, one-line headline, short intro, buttons: See my projects / GitHub / LinkedIn
3. Featured projects: 2-column card grid
4. Skills: 4 category cards (Automation, Languages, API & data, CI/CD & tools) with badges
5. About: short paragraph (the avatar is shown in the hero)
6. Footer: email, GitHub, LinkedIn

## Project card layout (top to bottom)
- Proof area: test report / pipeline screenshot with a CI status badge in the corner
- Title
- "What it is": one line
- Outcome box (green tint): a real, provable result. Never invent numbers
- Testing approach tags (UI, API, CI, Regression...)
- Stack badges
- Links: Code, Test report / Pipeline runs / Live demo, README

## Look
Modern, futuristic dark theme (replaced the original navy/amber light theme on 2026-10-13).
- Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (labels, nav, badges, links)
- Colors: page bg #070b14, card bg #0c1322, text #e6ebf5, muted text #9ba8bf,
  accent gradient cyan #22d3ee → blue #60a5fa → violet #a78bfa, link #67e8f9,
  stack badges blue tint, approach tags violet tint, outcome box green tint (#9ff0cd text, #34d399 edge)
- Background: faint grid plus soft cyan/violet glows; header is a sticky blurred glass bar
- Cards: 14px radius, dark glass panels with a thin cyan-to-violet gradient edge, lift and glow on hover
- Hero: role pill, large headline, buttons, and the avatar in an animated gradient ring (About is text only)
- Section labels in mono, e.g. "// 01 · Projects"
- Animations must stop under prefers-reduced-motion
- Must work at phone width (cards stack to 1 column), text contrast 4.5:1 or better

## Content rules
- Replace every [placeholder] with my real content. Ask me if something is missing
- Keep 4-6 projects. Each needs a real screenshot, and working Code and README links
- Optionally fill the repo cards from the GitHub REST API

## Also
- Deploy with GitHub Actions to GitHub Pages
- Add a Playwright test suite for the site itself: links work, mobile layout, axe-core accessibility
