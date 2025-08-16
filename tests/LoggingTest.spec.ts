import { test } from "../fixtures/CustomFixtures";
import { expect } from "@playwright/test";
import { POManager } from "../pages/POManager";
import { testBase } from "../fixtures/TestBase";

test('User logs in successfuly', async ({ page, poManager, testData, logger, inventoryPage }) => {
  try {
    const { username } = await poManager.getLoginPage().login();
    logger.pass(`User '${username}' logged in successfully`);
  } catch (error) {
    logger.fail("User login failed");
    throw error;
  }
  await page.waitForLoadState('domcontentloaded');
  try {
    await expect(inventoryPage.products).toBeVisible();
    logger.pass("Products are visible")
  } catch (error) {
    logger.fail("Products are not visible")
  }
});

