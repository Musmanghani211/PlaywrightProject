import {test, expect} from '@playwright/test';

test ('verify the user is able to go to playwright website', async ({page}) => {

await page.goto ('https://playwright.dev/');
await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');

})

test ('verify the user is unable to login with valid email', async ({page}) => {

await page.goto ('https://www.saucedemo.com/');
await page.locator('#user-name').fill ('standard_user');
await page.locator ('#password').fill ('secret_sauce');
await page.locator('#login-button').click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})

<<<<<<< HEAD
//master added comment to check merge conflict
=======

//this comment is added on login-tests-branch
>>>>>>> Login-tests-branch
