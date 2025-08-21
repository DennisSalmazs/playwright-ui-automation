import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures/ScenarioFixtures';
import logger from "../utils/Logger";

Given('I am on the login page', async ({ poManager, browserUtils }) => {
  await poManager.getLoginPage().goToLogin();
  await browserUtils.waitForVisibility(poManager.getLoginPage().username);
});

When('I log in with {string} with {string}', async ({ poManager, scenario }, username: string, password: string) => {
  scenario.user = username;
  await poManager.getLoginPage().login(username,password);
});

Then('I verify the {string}', async ({ page, browserUtils, scenario }, url: string) => {
  await browserUtils.verifyPageUrl(url);
  logger.pass(`${scenario.user} logged in successfully`);
});

Then('I verify the logging error message {string}', async ({ poManager, browserUtils }, errorMsg: string) => {
  await expect(poManager.getLoginPage().lockedOutUserErrorMsg).toHaveText(errorMsg);
  logger.pass("Received expected error message")
});






