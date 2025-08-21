import { Page, Locator } from '@playwright/test';
import { URLS } from "../constants/URLS";

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly lockedOutUserErrorMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator("#user-name");
        this.password = page.locator("#password");
        this.loginButton = page.locator("[name='login-button']");
        this.lockedOutUserErrorMsg = page.locator("[data-test='error']");
    }

    async login(username: string, password: string): Promise<void> {
        await this.goToLogin();
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginBtn();
    }

    async goToLogin() {
        await this.page.goto(URLS.LOGIN);
        await this.page.waitForLoadState("domcontentloaded");
    }

    async enterUsername(email: string) {
        await this.username.fill(email);
    }

    async enterPassword(passwd: string) {
        await this.password.fill(passwd);
    }

    async clickLoginBtn() {
        await this.loginButton.click();
    }
}