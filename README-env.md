<!-- # Environment Stages Setup Complete

## 3 Stages Created:
- **Dev**: `npm run test:dev` (baseURL: https://playwright.dev/ or DEV_URL)
- **QA**: `npm run test:qa` (baseURL: https://qa.example.com or QA_URL)
- **Prod**: `npm run test:prod` (baseURL: https://prod.example.com or PROD_URL)

## Usage:
1. Copy `.env.example` to `.env` and set real URLs.
2. Run e.g. `npm run test:dev` (runs dev-chromium project).
3. Tests using `page.goto('/')` will use the env baseURL.
4. View Allure reports: `npm run allure:generate && npm run allure:open`.
5. example.spec.js updated to demo relative paths.

**Note (Windows/cmd):** Env syntax is `set DEV_URL=... && npm run test:dev` or use PowerShell/cross-platform scripts below.

## Cross-platform Scripts (Optional):
Add to package.json if needed:
```
"test:dev:win": "set DEV_URL=http://localhost:3000&& playwright test --project=dev-chromium",
"test:dev:cross": "cross-env DEV_URL=http://localhost:3000 playwright test --project=dev-chromium"
```
(Install: `npm i -D cross-env`)
 -->
