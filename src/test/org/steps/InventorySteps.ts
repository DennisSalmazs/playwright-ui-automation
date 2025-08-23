import { When } from '../fixtures/ScenarioFixtures';
import logger from "../utils/Logger";
import { DataTable } from "playwright-bdd";

When('I add products to cart:', async ({ poManager, scenario }, table: DataTable) => {
    const names = table.raw().flat().filter(Boolean);
    scenario.products = names;
    for (const name of names) {
        await poManager.getInventoryPage().addToCart(name);
    }
    logger.info(`${scenario.user} added products to cart: ${scenario.products}`)
});

When('I click on cart link', async ({ poManager, browserUtils, scenario}) => {
    await browserUtils.click(poManager.getInventoryPage().getCartBadgeBtn());
    logger.info(`${scenario.user} clicks on cart link`)
});