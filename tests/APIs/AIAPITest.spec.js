const { test, expect, request } = require('@playwright/test');

let token;

test.beforeAll(async () => {
  // Create API context
  const apiContext = await request.newContext();

  // Perform login via API
  const loginResponse = await apiContext.post('https://reqres.in/api/login', {
    data: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }
  });

  expect(loginResponse.ok()).toBeTruthy();

  const body = await loginResponse.json();
  token = body.token;
  console.log("Token:", token);
});

test('Bypass login using API token', async ({ page }) => {
  // Inject token into localStorage before page scripts run
  page.addInitScript(tokenValue => {
    window.localStorage.setItem('authToken', tokenValue);
  }, token);

  // Navigate directly to a protected page (example demo dashboard)
  await page.goto('https://example.com/dashboard');  // replace with your app’s URL

  // Assertions to confirm bypass worked
  await expect(page.locator('h1')).toContainText('Dashboard');
});
