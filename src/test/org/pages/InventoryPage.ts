import { Page, Locator } from '@playwright/test';
import { URLS } from "../constants/URLS";

export class InventoryPage {
    readonly page: Page;
    readonly productsText: Locator;
    readonly products: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productsText = page.getByText("Products");
        this.products = page.locator(".inventory_item_name");
    }

    async goToInventory() {
        await this.page.goto(URLS.INVENTORY);
        await this.page.waitForLoadState("domcontentloaded");
    }
}