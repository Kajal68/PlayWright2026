const { test, expect } = require('@playwright/test');

test.describe('Rahul Shetty Academy Login Flow', () => {
  test('Login, validate dashboard and items, sign out', async ({ page }) => {
    // Navigate to login page
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    // Enter credentials using real placeholders from existing PageObject
    await page.getByPlaceholder("email@example.com").fill('kajalpagare@gmail.com');
    await page.getByPlaceholder("enter your passsword").fill('Kajalpagare@123');

    // Click login
    await page.getByRole('button',{name:"Login"}).click();

    // Wait for dashboard
    await page.waitForLoadState('networkidle');

    // Validate dashboard page loaded
    //await expect(page.locator('h2:has-text("Dashboard")')).toBeVisible();

    // Validate listed items (product cards)
    await expect(page.locator('.card-body')).toBeVisible();
    const itemCount = await page.locator('.card-body').count();
    expect(itemCount).toBeGreaterThan(0);

    // Sign out - common locator for this app
    await page.getByRole('button', { name: 'Sign out of the app' }).click();

    // Validate back to login page
    await expect(page.getByPlaceholder("email@example.com")).toBeVisible();
  });
});
