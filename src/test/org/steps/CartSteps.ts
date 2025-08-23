import { expect } from '@playwright/test';
import { When, Then } from '../fixtures/ScenarioFixtures';
import logger from "../utils/Logger";

Then('I verify products are added to the cart', async ({ poManager, scenario }) => {
    const expected = scenario.products ?? [];
    const actual = (await poManager.getCartPage().getCartItems().allTextContents()).map(s => s.trim());
    for (const name of expected) {
        expect(actual).toContain(name);
    }
    logger.pass(`${scenario.user} verifies ${scenario.products} are added to the cart`)
});

When('I click on checkout button', async ({ poManager, browserUtils, scenario}) => {
    await browserUtils.click(poManager.getCartPage().getCheckoutBtn());
    logger.info(`${scenario.user} clicks on checkout button`)
});
