import { Page, Locator } from '@playwright/test';
import credentials from "../constants/Credentials";
import { URLS } from '../data/URLS';

export class LoginPage {

    readonly page: Page;
    readonly baseURL: string;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.baseURL = process.env.BASE_URL as string;
        this.username = page.locator("#user-name");
        this.password = page.locator("#password");
        this.loginButton = page.locator("[name='login-button']");
    }

    async login(): Promise<{username: string, password: string}> {
        const username = credentials.standardUser;
        const password = credentials.password;

        await this.goToLogin();
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginBtn();

        return { username, password };
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