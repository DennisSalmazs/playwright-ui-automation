import { testBase } from './TestBase'; 
import credentials from '../constants/Credentials';

type TestData = {
    username: string;
    password: string;
}
  
type MyFixtures = {
  login: () => Promise<void>;
  testData: TestData;
};
  
export const customTest = testBase.extend<MyFixtures>({
  testData: async ({}, use) => {
    await use({
      username: credentials.standardUser,
      password: credentials.password,
    });
  },

  login: async ({ poManager }, use) => {
    await poManager.getLoginPage().goToLogin();
    await poManager.getLoginPage().login();
    await use(async () => {});
  },
});

export { customTest as test };