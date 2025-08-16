import { test as base, Page } from "@playwright/test";
import logger from '../utils/Logger'; 
import type { Logger } from 'winston';
import { POManager } from "../pages/POManager";
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage  } from "pages/InventoryPage";


type CustomLogger = Logger & {
  pass: (msg: string) => void;
  fail: (msg: string) => void;
};

type MyPages = {
  logger: CustomLogger;
  poManager: POManager;
  basePage: BasePage;
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
};

export const testBase = base.extend<MyPages>({
  logger: async ({}, use) => {
    await use(logger); 
  },
  poManager: async ({ page }, use) => {
    await use(new POManager(page));
  },
  basePage: async ({ page }, use) => { 
    await use(new BasePage(page)); 
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  }  
});