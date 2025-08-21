import { type Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { LoginPage } from './LoginPage';
import { InventoryPage } from './InventoryPage';

export class POManager {
    page: Page;
    basePage: BasePage;
    loginPage: LoginPage;
    inventoryPage: InventoryPage;

    constructor(page: Page) {
        this.page = page;
        this.basePage = new BasePage(page);
        this.loginPage = new LoginPage(page);
        this.inventoryPage = new InventoryPage(page);
    }

    getBasePage() {
        return this.basePage;
    }

    getLoginPage() {
        return this.loginPage;
    }

    getInventoryPage() {
        return this.inventoryPage;
    }
}