import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'src/test/resources/features/*.feature',
  steps: [
      'src/test/org/steps/*.ts',
      'src/test/org/fixtures/*.ts'
  ]
});

export default defineConfig({
  testDir,
  reporter: [
      ['allure-playwright']
  ],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
