import type { PlaywrightTestConfig } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

const config: PlaywrightTestConfig = {
  timeout: 120_000,
  retries: process.env.CI ? 2 : 0,
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,

  reporter: [
    ["allure-playwright"],
    ["html", { outputFolder: "html-report", open: "always" }],
  ],

  use: {
    baseURL: process.env.BASE_URL,
    headless: false,
    viewport: { width: 1500, height: 730 },
    ignoreHTTPSErrors: true,
    acceptDownloads: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
    launchOptions: {
      slowMo: 0,
    },
  },

  projects: [
    {
      name: "Chrome",
      use: {
        browserName: "chromium",
        channel: "chrome",
      },
    },
    {
      name: "Firefox",
      use: {
        browserName: "firefox",
      },
    },
    {
      name: "WebKit",
      use: {
        browserName: "webkit",
      },
    },
  ],
};

export default config;
