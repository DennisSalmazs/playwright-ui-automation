import { Given, Then } from '../fixtures/ScenarioFixtures';
import fs from 'fs';

Then('I persist the session as {string}', async ({ context }, alias: string) => {
    fs.mkdirSync('storage', { recursive: true });
    await context.storageState({ path: `storage/${alias}.json` });
});

Given('I load session {string}', async ({ context }, alias: string) => {
    const file = `storage/${alias}.json`;
    const { cookies = [] } = JSON.parse(fs.readFileSync(file, 'utf-8'));
    await context.addCookies(cookies);
});
