import { Page, Locator, expect } from '@playwright/test';

/**
 * Utility class that encapsulates common Playwright actions and wait operations.
 * Designed to promote code reuse, improve readability, and keep test scripts clean and maintainable.
 */
export class BrowserUtils {

    constructor(private page: Page) {}

    /**
     * Pauses execution for the specified number of seconds.
     * Useful for debugging, waiting on animations, or temporary delays in test flow.
     */
    async waitFor(seconds: number): Promise<void> {
        await this.page.waitForTimeout(Math.round(seconds * 1000));
    }

    /**
     * Waits until the given locator becomes visible on the page.
     * Useful for ensuring elements are ready before interacting with them.
     */
    async waitForVisibility(locator: Locator, timeout: number = 5000): Promise<void> {
        await expect(locator).toBeVisible({ timeout });
    }

    /**
     * Waits until the specified locator is enabled and ready for interaction.
     */
    async  waitForClickability(locator: Locator, timeout: number = 5000): Promise<void> {
        await expect(locator).toBeEnabled({ timeout });
    }

    /**
     * Moves the mouse pointer to hover over the specified element.
     */
    async hover(locator: Locator): Promise<void> {
        await locator.hover();
    }

    /**
     * Clicks the specified locator.
     */
    async click(locator: Locator): Promise<void> {
        await locator.click();
    }

    /**
     * Performs a double-click action on the specified locator.
     */
    async doubleClick(locator: Locator): Promise <void> {
        await locator.dblclick();
    }

    /**
     * Scrolls the page until the specified element is in view.
     */
    async scrollToElement(locator: Locator): Promise<void> {
        await locator.scrollIntoViewIfNeeded();
    }

    /**
     * Returns trimmed text content from element matching the specified locator.
     */
    async getElementText(locator: Locator): Promise<string> {
        const text = await locator.textContent();
        if (text == null) throw new Error('Element has no textContent');
        return text.trim();
    }

    /**
     * Returns an array of trimmed text content from all elements matching the specified locator.
     */
    async getElementsText(locator: Locator): Promise<string[]> {
        const elements = await locator.allTextContents();
        return elements.map(e => e.trim());
    }

    /**
     * Checks or unchecks the specified checkbox based on the provided boolean value.
     */
    async selectCheckbox(locator: Locator, check: boolean): Promise<void> {
        const isChecked = await locator.isChecked();
        if (check !== isChecked) {
            await locator.check();
        }
    }

    /**
     * Waits until the page's document is fully loaded (`document.readyState === 'complete'`).
     */
    async waitForPageToLoad(): Promise<void> {
        await this.page.waitForLoadState("domcontentloaded")
    }

    /**
     * Asserts that the specified element is visible on the page.
     */
    async verifyElementDisplayed(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }

    /**
     * Asserts that the specified element is enabled on the page.
     */
    async verifyElementEnabled(locator: Locator): Promise<void> {
        await expect(locator).toBeEnabled();
    }
    
    /**
     * Asserts that the specified element is hidden or not visible on the page.
     */
    async verifyElementNotDisplayed(locator: Locator): Promise<void> {
        await expect(locator).toBeHidden();
    }

    /**
     * Waits for the specified selector to be present in the DOM, regardless of its visibility.
     * Useful for handling dynamic content or ensuring elements are attached before further actions.
     */
    async verifyForPresenceOfElement(selector: string, timeout: number = 5000): Promise<void> {
        await this.page.waitForSelector(selector, { timeout });
    }

    /**
     * Verifies if page URL is expected.
     */
    async verifyPageUrl(url: string): Promise<void> {
        await expect(this.page).toHaveURL(url)
    }
}