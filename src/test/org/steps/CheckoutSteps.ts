import { Then } from '../fixtures/ScenarioFixtures';
import { expect } from '@playwright/test';
import { DataTable } from "playwright-bdd";
import logger from "../utils/Logger";

Then('I submit checkout form with values', async ({ poManager, scenario }, data: DataTable) => {
    const form = data.rowsHash();
    await poManager.getCheckoutPage().submitCheckoutForm(data.rowsHash());
    logger.info(`${scenario.user} submits checkout form`)
});

Then('I verify products are ready for payment', async ({ poManager, scenario }) => {
    const expected = scenario.products ?? [];
    const actual = (await poManager.getCheckoutPage().getCheckoutItems().allTextContents()).map(s => s.trim());
    for (const name of expected) {
        expect(actual).toContain(name);
    }
    logger.pass(`${scenario.user} verifies ${scenario.products} are ready for payment`)
});

Then('I complete payment', async ({ poManager, browserUtils, scenario}) => {
    await browserUtils.click(poManager.getCheckoutPage().getFinishBtn());
    logger.info(`${scenario.user} completes payment`)
});

Then('I see {string} message', async ({ poManager, browserUtils, scenario}, thanksMsg: string) => {
    expect(await browserUtils.getElementsText(poManager.getCheckoutPage().getThanksMsg())).toContain(thanksMsg);
    logger.pass(`${scenario.user} verifies message: ${thanksMsg}`)
});
