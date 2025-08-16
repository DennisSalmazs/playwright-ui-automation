import { test } from "../fixtures/CustomFixtures";
import { POManager } from "../pages/POManager";
import { expect } from "@playwright/test";
import { testBase } from "../fixtures/TestBase";

test('User logs in', async ({ page, poManager, testData, logger, inventoryPage }) => {
    try {
        const { username } = await poManager.getLoginPage().login();
        logger.pass(`User '${username}' logged in successfully`);
      } catch (error) {
        logger.fail("User login failed");
        throw error;
      }
      await page.waitForLoadState('domcontentloaded');
      await expect(inventoryPage.products).toBeVisible();

});