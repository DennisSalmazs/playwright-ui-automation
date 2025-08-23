import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures/ScenarioFixtures';
import logger from "../utils/Logger";
import { URLS } from "../constants/URLS";

type UrlKey = keyof typeof URLS;

Given('I am on the {string} page', async ({ page, browserUtils }, url: string) => {
  await page.goto(URLS[url as UrlKey]);
  await browserUtils.waitForPageToLoad();
});

When('I log in with username {string} and password {string}', async ({ poManager, scenario }, username: string, password: string) => {
  scenario.user = username;
  await poManager.getLoginPage().login(username,password);
  logger.info(`${scenario.user} logs in`)
});

Then('I verify I am on the {string} page', async ({ browserUtils, scenario }, page: string) => {
  await browserUtils.verifyPageUrl(URLS[page as UrlKey]);
  logger.pass(`${scenario.user} is on the ` + page + ` page`);
});

Then('I verify the logging error message {string}', async ({ poManager, browserUtils,scenario }, errorMsg: string) => {
  await expect(poManager.getLoginPage().lockedOutUserErrorMsg).toHaveText(errorMsg);
  logger.pass(`${scenario.user} received logging error message: ` + errorMsg)
});






