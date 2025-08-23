import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly firstname: Locator;
    readonly lastname: Locator;
    readonly postcode: Locator;
    readonly continueBtn: Locator;
    readonly checkoutItems: Locator;
    readonly finishBtn: Locator;
    readonly thanksMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstname = page.locator("#first-name");
        this.lastname = page.locator("#last-name");
        this.postcode = page.locator("#postal-code");
        this.continueBtn = page.locator("#continue");
        this.checkoutItems = page.locator(".inventory_item_name");
        this.finishBtn = page.locator("#finish");
        this.thanksMsg = page.locator("[data-test='complete-header']");
    }

    async submitCheckoutForm(form: Record<string, string>): Promise<void> {
        await this.firstname.fill(form.firstname);
        await this.lastname.fill(form.lastname);
        await this.postcode.fill(form.postcode);
        await this.continueBtn.click();
    }

    getCheckoutItems(): Locator {
        return this.checkoutItems;
    }

    getFinishBtn(): Locator {
        return this.finishBtn;
    }

    getThanksMsg(): Locator {
        return this.thanksMsg;
    }
}