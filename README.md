
# 🎯 Playwright-BDD UI Automation with TypeScript

This repository contains end-to-end tests for UI project using **Playwright-BDD** with **TypeScript**. 
It follows the **Page Object Model** pattern and supports multiple browsers.

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
├── node_modules/                  # deps
├── src/
│   └── test/
│       ├── org/
│       │   ├── constants/
│       │   ├── fixtures/          # app & BDD fixtures (createBdd exports Given/When/Then)
│       │   ├── pages/             # Page Objects
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
tags='@product' npm run test:tag 
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

---

## 🧪 Test Features

* ✅ Multi-browser (Chrome, Firefox)
* ✅ Automatic screenshots, videos, and traces on failure
* ✅ Base test setup with custom fixtures (`AppFixtures`, `ScenarioFixtures`)
* ✅ Headless execution
* ✅ Retry and timeout configurations

---

## 📊 Reporting

* **Allure Report** (`allure-playwright`)
* **HTML Report** (`opens automatically after test run`)

---

## 👨‍💻 Author

* Deniz Salmaz
* Senior Cloud Software Development Engineer in Test

---
