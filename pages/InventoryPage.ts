import { Page, Locator } from '@playwright/test';

export class InventoryPage {

    readonly page: Page;
    readonly products: Locator;

    constructor(page: Page) {
        this.page = page;
        this.products = page.getByText("Products");
    }
}