// All site content lives here. Every [bracketed] value is a placeholder to replace
// with real content. Outcomes must be real, provable results; never invent numbers.

export const profile = {
  name: '[Your Name]',
  initials: 'YN',
  role: '[SDET · Software Developer in Test]',
  headline: '[One line on the quality problems you solve.]',
  intro:
    '[Two short sentences: the kinds of systems you test and automate, and the role you want next.]',
  about:
    '[A short paragraph in your own voice: how you approach quality, what you enjoy automating, and what you are looking for.]',
  avatar: null, // e.g. 'avatar.jpg' placed in public/
  email: '[you@email.com]',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
}

// Keep 4-6 projects. `screenshot` is a path under public/ (e.g. 'screenshots/ui-framework.png').
// `badge` is an optional CI status badge image URL (e.g. a GitHub Actions workflow badge.svg);
// `badgeLabel` is its alt text, or the text shown when no image is set.
export const projects = [
  {
    title: '[UI test automation framework]',
    whatItIs: '[One line on the app or flows it covers.]',
    outcome: '[A real, provable result, e.g. time saved or flows automated.]',
    approach: ['UI', 'CI'],
    stack: ['[Playwright]', '[Language]', '[GitHub Actions]'],
    screenshot: null,
    screenshotAlt: 'Test report screenshot',
    badge: null,
    badgeLabel: '[CI status badge]',
    links: [
      { label: 'Code', href: 'https://github.com/' },
      { label: 'Test report', href: 'https://github.com/' },
      { label: 'README', href: 'https://github.com/' },
    ],
  },
  {
    title: '[API test suite]',
    whatItIs: '[One line on the services or endpoints it covers.]',
    outcome: '[A real, provable result, e.g. defects caught or coverage gained.]',
    approach: ['API', 'Contract'],
    stack: ['[REST Assured / Pytest]', '[Allure]'],
    screenshot: null,
    screenshotAlt: 'Test report screenshot',
    badge: null,
    badgeLabel: '[CI status badge]',
    links: [
      { label: 'Code', href: 'https://github.com/' },
      { label: 'Test report', href: 'https://github.com/' },
      { label: 'README', href: 'https://github.com/' },
    ],
  },
  {
    title: '[CI/CD pipeline: code → tests → report]',
    whatItIs: '[One line on the stages the pipeline runs on each push.]',
    outcome: '[A real, provable result, e.g. feedback time or release confidence.]',
    approach: ['CI', 'Regression'],
    stack: ['[Jenkins / GitHub Actions]', '[Docker]'],
    screenshot: null,
    screenshotAlt: 'Pipeline run screenshot',
    badge: null,
    badgeLabel: '[CI status badge]',
    links: [
      { label: 'Code', href: 'https://github.com/' },
      { label: 'Pipeline runs', href: 'https://github.com/' },
      { label: 'README', href: 'https://github.com/' },
    ],
  },
  {
    title: '[Developer project or tool]',
    whatItIs: '[One line on the app, library or tool you built.]',
    outcome: '[What it does for users, or what you learned.]',
    approach: ['Unit', 'Integration'],
    stack: ['[Language]', '[Framework]'],
    screenshot: null,
    screenshotAlt: 'App screenshot',
    badge: null,
    badgeLabel: null,
    links: [
      { label: 'Code', href: 'https://github.com/' },
      { label: 'Live demo', href: 'https://github.com/' },
      { label: 'README', href: 'https://github.com/' },
    ],
  },
]

export const skills = [
  { category: 'Automation', items: ['[Selenium]', '[Playwright]', '[Cypress]'] },
  { category: 'Languages', items: ['[Java]', '[Python]', '[JavaScript]'] },
  { category: 'API & data', items: ['[Postman]', '[REST Assured]', '[SQL]'] },
  { category: 'CI/CD & tools', items: ['[Jenkins]', '[GitHub Actions]', '[Docker]', 'Git'] },
]
