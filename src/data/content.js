// All site content lives here. Every [bracketed] value is a placeholder to replace
// with real content. Outcomes must be real, provable results; never invent numbers.

export const profile = {
  name: 'Ralph Gonzales',
  initials: 'RG',
  role: 'SDET / QA Automation Engineer',
  headline: 'I build test automation that cuts regression cycles from weeks to days.',
  intro: 'SDET with 10+ years designing and maintaining test automation frameworks for web, mobile, API and database testing, primarily in Java. [SDET / QA Automation Engineer /  Software Engineer]',
  about: "I build reusable Selenium, Playwright, Cucumber (BDD) and Rest-Assured frameworks, and I wire them into CI/CD pipelines in Jenkins, GitLab and Azure DevOps so every change gets tested. My Java and Spring Boot development background helps me review code, test from the inside out and work closely with developers. Lately I've been applying AI to quality engineering: I use GitHub Copilot and Claude Code to generate tests and review code, and I built a Java AI agent that turns requirements into test plans, test cases and Playwright scripts. [SDET / QA Automation Engineer /  Software Engineer]",
  avatar: 'avatar.jpg',
  email: 'rjdgonzales@gmail.com',
  github: 'https://github.com/rjdgonzales0513',
  linkedin: 'https://www.linkedin.com/in/ralph-gonzales-887987171',
}

// Keep 4-6 projects. `screenshot` is a path under public/ (e.g. 'screenshots/ui-framework.png').
// `badge` is an optional CI status badge image URL (e.g. a GitHub Actions workflow badge.svg);
// `badgeLabel` is its alt text, or the text shown when no image is set.
export const projects = [
  {
    title: 'Selenium and REST Assured Framework',
    whatItIs: 'Java Cucumber (BDD) framework testing the Sauce Demo shop UI end to end (login, cart, checkout, full purchase) and the reqres.in users API.',
    outcome: '19 Gherkin scenarios (15 UI, 4 API) run on every push in GitHub Actions with headless Chrome, producing an Extent report with failure screenshots.',
    approach: ['UI', 'API', 'BDD', 'CI'],
    stack: ['Java', 'Selenium', 'Cucumber', 'REST Assured', 'ExtentReports', 'GitHub Actions'],
    screenshot: null,
    screenshotAlt: 'Test report screenshot',
    badge: 'https://github.com/rjdgonzales0513/selenium/actions/workflows/tests.yml/badge.svg',
    badgeLabel: 'Tests workflow status',
    links: [
      { label: 'Code', href: 'https://github.com/rjdgonzales0513/selenium' },
      {
        label: 'Test report',
        href: 'https://github.com/rjdgonzales0513/selenium/actions/workflows/tests.yml',
      },
      { label: 'README', href: 'https://github.com/rjdgonzales0513/selenium/blob/main/README.md' },
    ],
  },
  {
    title: 'Playwright + pytest-bdd Framework',
    whatItIs: 'Python framework that tests the UI and REST API of two shop apps (automationexercise.com and saucedemo.com) from one code base, with Gherkin scenarios on top of pytest.',
    outcome: 'CI runs lint and type checks first, then the API tests and the UI/BDD tests on Chromium and Firefox, uploading an HTML report and Playwright traces for failed tests.',
    approach: ['UI', 'API', 'BDD', 'CI'],
    stack: ['Python', 'Playwright', 'pytest-bdd', 'pydantic', 'GitHub Actions'],
    screenshot: null,
    screenshotAlt: 'Test report screenshot',
    badge: 'https://github.com/rjdgonzales0513/pw-bdd-framework/actions/workflows/ci.yml/badge.svg',
    badgeLabel: 'CI workflow status',
    links: [
      { label: 'Code', href: 'https://github.com/rjdgonzales0513/pw-bdd-framework' },
      {
        label: 'Test report',
        href: 'https://github.com/rjdgonzales0513/pw-bdd-framework/actions/workflows/ci.yml',
      },
      {
        label: 'README',
        href: 'https://github.com/rjdgonzales0513/pw-bdd-framework/blob/main/README.md',
      },
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
  {
    category: 'Automation',
    items: ['Selenium WebDriver', 'Playwright', 'Cucumber (BDD)', 'Appium', 'JMeter'],
  },
  {
    category: 'Languages',
    items: ['Java', 'SQL', 'JavaScript', 'Python'],
  },
  {
    category: 'API & data',
    items: ['Rest-Assured', 'Postman', 'PostgreSQL', 'Oracle SQL', 'Kafka'],
  },
  {
    category: 'CI/CD & cloud',
    items: [
      'Jenkins',
      'GitLab CI',
      'Azure DevOps',
      'GitHub Actions',
      'Docker',
      'Kubernetes',
      'Azure',
      'AWS',
      'Git',
    ],
  },
  {
    category: 'AI for testing',
    items: ['GitHub Copilot', 'Claude Code', 'LangChain4j', 'OpenAI', 'Prompt engineering'],
  },
  {
    category: 'Development',
    items: ['Spring Boot', 'Spring Security', 'REST APIs', 'Microservices', 'React'],
  },
]
