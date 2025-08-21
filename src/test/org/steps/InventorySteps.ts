import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures/ScenarioFixtures';
import logger from "../utils/Logger";
import { URLS } from '../constants/URLS';

type UrlKey = keyof typeof URLS;

Given('I am on the {string} page', async ({ page }, url: string) => {
    await page.goto(URLS[url as UrlKey]);
});



