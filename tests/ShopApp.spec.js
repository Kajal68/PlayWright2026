import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('Verify Lets shop login page', async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

  const email = page.getByRole('textbox', { name: 'email@example.com' });
  const pass = page.getByRole('textbox', { name: 'enter your passsword' });
  const login = page.getByRole('button', { name: 'Login' });

  await email.fill("kajalpagare@gmail.com");
  await pass.fill("Kajalpagare@123");
  await login.click();

  // Capture screenshot
  const screenshot = await page.screenshot();

  // Attach to Allure
  allure.attachment('Login page screenshot', screenshot, 'image/png');

  await page.getByRole('button', { name: '   ORDERS' }).click();
  await page.getByText('Your OrdersOrder IdProduct').click();
  await page.getByRole('rowheader', { name: '69b5382ff86ba51a6502ea63' }).click();
});
