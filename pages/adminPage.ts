import { Page } from '@playwright/test';

export class AdminPage {

constructor(private page: Page) {}

async openAdminModule() {

    await this.page.getByRole('link', { name: 'Admin' }).click();

    await this.page.waitForURL('**/admin/viewSystemUsers');

}

async addUser(username: string, password: string) {

    await this.page.getByRole('button', { name: 'Add' }).click();

await this.page.waitForURL('**/admin/saveSystemUser');

    await this.page.locator('.oxd-select-text').first().click();
    await this.page.getByRole('option', { name: 'Admin' }).click();

    await this.page.getByPlaceholder('Type for hints...').fill('aditya');
    await this.page.waitForSelector('.oxd-autocomplete-option');
    await this.page.locator('.oxd-autocomplete-option').first().click();

    await this.page.locator('.oxd-select-text').nth(1).click();
    await this.page.getByRole('option', { name: 'Enabled' }).click();

    await this.page.locator('.oxd-input').nth(4).fill(username);

    await this.page.locator('input[type="password"]').first().fill(password);
    await this.page.locator('input[type="password"]').nth(1).fill(password);

    await this.page.getByRole('button', { name: 'Save' }).click();

    await this.page.waitForURL('**/admin/viewSystemUsers');
}

async searchUser(username: string) {

    await this.page.locator('.oxd-input').nth(1).fill(username);

    await this.page.getByRole('button', { name: 'Search' }).click();

    await this.page.waitForTimeout(2000);

}

async editUser() {

    await this.page.locator('i.bi-pencil-fill').first().click();

    await this.page.waitForSelector('button:has-text("Save")');

    await this.page.getByRole('button', { name: 'Save' }).click();

}

async deleteUser() {

    await this.page.locator('i.bi-trash').first().click();

    await this.page.getByRole('button', { name: 'Yes, Delete' }).click();

}

}