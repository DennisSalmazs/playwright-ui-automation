import { Page, Locator } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly products: Locator;
    readonly cartItems: Locator;
    readonly checkoutBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.products = page.locator(".inventory_item_name");
        this.cartItems = page.locator(".cart_item .inventory_item_name");
        this.checkoutBtn = page.locator("#checkout");
    }

    getCartItems(): Locator {
        return this.cartItems;
    }

    getCheckoutBtn(): Locator {
        return this.checkoutBtn;
    }
}