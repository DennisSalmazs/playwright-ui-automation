import { createBdd } from 'playwright-bdd';
import { testWithApp } from './AppFixtures';

type ScenarioFixtures = {
    scenario: ScenarioState;
};

type ScenarioState = {
    user?: string,
    products?: Array<string>
}

export const test = testWithApp.extend<ScenarioFixtures>({
    scenario: async ({}, use) => {
      await use({});
    }
});

export const {Given, When, Then} = createBdd(test);
