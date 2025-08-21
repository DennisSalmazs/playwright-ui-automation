---

# 🎯 Playwright-BDD UI Automation with TypeScript

This repository contains end-to-end tests for UI project using **Playwright-BDD** with **TypeScript**. It follows the **Page Object Model** pattern and supports multiple browsers.

---

## 📦 Tech Stack

* [Playwright-BDD] (https://vitalets.github.io/playwright-bdd/#/)
* TypeScript
* Page Object Model
* Allure Reporting

---

## 📁 Project Structure

```
playwright-ui-automation/
├── .features-gen/                 # generated Playwright tests from bddgen (gitignored)
├── allure-results/                # Allure history (all runs)
├── allure-results-tag/            # copy of the latest single-tag run (served by `report:tag`)
├── logs/                          # custom logs (optional)
├── node_modules/                  # deps
├── src/
│   └── test/
│       ├── org/
│       │   ├── constants/
│       │   ├── fixtures/          # app & BDD fixtures (createBdd exports Given/When/Then)
│       │   ├── pages/             # Page Objects
│       │   │   ├── BasePage.ts
│       │   │   ├── Pages.ts
│       │   │   └── POManager.ts
│       │   ├── steps/             # Step definitions
│       │   │   ├── Steps.ts
│       │   │   └── SessionSteps.ts
│       │   └── utils/             # Helpers/utilities
│       │       ├── BrowserUtil.ts
│       │       └── Logger.ts
│       └── resources/
│           └── features/          # Gherkin specs
├── storage/                       # persisted sessions (e.g., standard_user.json)
├── .gitignore
├── package.json                   # scripts (login-first + tag runs), deps
├── playwright.config.ts           # Playwright-BDD config (Allure-only)
├── prettier.config.mjs
├── run-tag.js                     # tag runner (bddgen + PW; mirrors results to allure-results-tag)
└── tsconfig.json

```

---

## ⚙️ Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/DennisSalmazs/playwright-ui-automation.git
cd playwright-ui-automation
```

2. **Install dependencies**

```bash
npm install
npx playwright install
npm i --save-dev @types/node
npm install -D allure-playwright
npm install winston

```

---

## 🚀 Running Tests

### All tests

```bash
npn run test
```

### Particular tests with tag

```bash
npm run test:tag -- @tag
```

### Specific browser

```bash
npm run test --project=chrome
npx run test --project=firefox
```

## 🚀Show Allure Report

### All tests

```bash
npm run report
```

### Particular tests with tag

```bash
npm run report:tag
```

The framework keeps history in allure-results/.
Single-tag runs mirror just the latest results to allure-results-tag/ so you can view that run alone.

---

## 🧪 Test Features

* ✅ Multi-browser (Chrome, Firefox)
* ✅ Automatic screenshots, videos, and traces on failure
* ✅ Base test setup with custom fixtures (`AppFixtures`, `ScenarioFixtures`)
* ✅ Headless execution
* ✅ Retry and timeout configurations

---

## 📊 Reporting

* **Allure** (`allure-playwright`)

---

## 👩‍💻 Author

Deniz Salmaz
Senior Cloud Software Development Engineer in Test  

---
