import { test as base } from "playwright-bdd";
import logger from '../utils/Logger';
import type { Logger } from 'winston';
import { BrowserUtils } from '../utils/BrowserUtil';
import { POManager } from "../pages/POManager";

type TestLogger = Logger & {
    pass: (msg: string) => void;
    fail: (msg: string) => void;
};

type AppServices = {
    poManager: POManager;
    browserUtils: BrowserUtils;
    logger: TestLogger;
};

export const testWithApp = base.extend<AppServices>({
    logger: async ({}, use) => {
        await use(logger);
    },
    browserUtils: async ({ page }, use) => {
        await use(new BrowserUtils(page));
    },
    poManager: async ({ page}, use) => {
        await use(new POManager(page));
    }
});
