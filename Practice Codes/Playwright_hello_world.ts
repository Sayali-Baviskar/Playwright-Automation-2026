import { test, expect } from '@playwright/test';

test('Hello World - Playwright Dev Site', async ({ page }) => {
  // Navigate to the official Playwright website
  await page.goto('https://playwright.dev/');

  // Verify the page title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);

  // Print a success message to the console
  console.log('Hello World! Playwright page title successfully verified.');
});
