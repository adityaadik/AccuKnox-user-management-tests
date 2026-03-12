import { expect, test } from '@playwright/test';
import { AdminPage } from '../pages/adminPage';
import { LoginPage } from '../pages/loginPage';

const username = 'aditya';
const password = 'Test@123';

test('1 Login Test', async ({ page }) => {

const loginPage = new LoginPage(page);

await loginPage.gotoLoginPage();
await loginPage.login('Admin', 'admin123');

await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

});

test('2 Navigate to Admin Module', async ({ page }) => {

const loginPage = new LoginPage(page);
const adminPage = new AdminPage(page);

await loginPage.gotoLoginPage();
await loginPage.login('Admin', 'admin123');

await adminPage.openAdminModule();

await expect(page.getByRole('heading', { name: 'Admin' })).toBeVisible();

});

test('3 Add New User', async ({ page }) => {

const loginPage = new LoginPage(page);
const adminPage = new AdminPage(page);

await loginPage.gotoLoginPage();
await loginPage.login('Admin', 'admin123');

await adminPage.openAdminModule();
await adminPage.addUser(username, password);

});

test('4 Search Newly Created User', async ({ page }) => {

const loginPage = new LoginPage(page);
const adminPage = new AdminPage(page);

await loginPage.gotoLoginPage();
await loginPage.login('Admin', 'admin123');

await adminPage.openAdminModule();
await adminPage.searchUser(username);

await expect(page.locator(`text=${username}`)).toBeVisible();

});

test('5 Edit User Details', async ({ page }) => {

const loginPage = new LoginPage(page);
const adminPage = new AdminPage(page);

await loginPage.gotoLoginPage();
await loginPage.login('Admin', 'admin123');

await adminPage.openAdminModule();
await adminPage.searchUser(username);

await adminPage.editUser();

});

test('6 Validate Updated Details', async ({ page }) => {

const loginPage = new LoginPage(page);
const adminPage = new AdminPage(page);

await loginPage.gotoLoginPage();
await loginPage.login('Admin', 'admin123');

await adminPage.openAdminModule();
await adminPage.searchUser(username);

await expect(page.locator(`text=${username}`)).toBeVisible();

});

test('7 Delete User', async ({ page }) => {

const loginPage = new LoginPage(page);
const adminPage = new AdminPage(page);

await loginPage.gotoLoginPage();
await loginPage.login('Admin', 'admin123');

await adminPage.openAdminModule();
await adminPage.searchUser(username);

await adminPage.deleteUser();

});