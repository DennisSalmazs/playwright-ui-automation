import { Page, Locator, expect } from '@playwright/test';
import { URLS } from "../constants/URLS";

export class InventoryPage {
    readonly page: Page;
    readonly productsText: Locator;
    readonly products: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productsText = page.getByText("Products");
        this.products = page.locator(".inventory_item_name");
        this.cartLink = page.locator(".shopping_cart_badge");
    }

    getProducts(): Locator {
        return this.products;
    }

    // card for a given product name
    private card(name: string) {
        return this.page
            .locator('.inventory_item')
            .filter({ has: this.page.locator('.inventory_item_name', { hasText: name }) });
    }

    async addToCart(name: string) {
        const item = this.card(name);
        await item.getByRole('button', { name: /^Add to cart$/ }).click();

        // confirm it switched to "Remove"
        await expect(item.getByRole('button', { name: /^Remove$/ })).toBeVisible();
    }

    getCartBadgeBtn(): Locator {
        return this.cartLink;
    }



}