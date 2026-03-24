// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  //testDir: './tests',
  //retries:1,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['line'],
    ['allure-playwright']
  ],

  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    headless: true,
    trace: 'on-first-retry', //retain-on-failure
    video: 'off', //retain-on-failure
    screenshot: 'on-first-failure',
    ignoreHTTPSErrors:true,
    permissions:['geolocation']
  },
  testDir: './tests',
  timeout: 30 * 1000, // 30 seconds
  expect: {
    timeout:10000,
  }
 
,
projects:[

  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
    //use: { ...devices['iPhone 11'] },
  },
  {
    
  }
  // {
  //   name: 'firefox',
  //   use: { ...devices['Desktop Firefox'] },
  // },
  // {
  //   name: 'chromium',
  //   use: { ...devices['Desktop Chrome'], channel: 'chromium' },
  // },
  // {
  //   name: 'chromium',
  //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  // },
  // {
  //   name: 'chromium',
  //   use: { ...devices['Desktop Chrome'], channel: 'msedge' },
  // },    
],

  /* Configure projects for major browsers */ //below configuration is for running the same test in different environments like dev, qa, prod
  // projects: [
  //   {
  //     name: 'dev-chromium',
  //     use: { 
  //       ...devices['Desktop Chrome'],
  //       baseURL: process.env.DEV_URL || 'https://playwright.dev/',
  //     },
  //   },
  //   {
  //     name: 'qa-chromium',
  //     use: { 
  //       ...devices['Desktop Chrome'],
  //       baseURL: process.env.QA_URL || 'https://qa.example.com',
  //     },
  //   },
  //   {
  //     name: 'prod-chromium',
  //     use: { 
  //       ...devices['Desktop Chrome'],
  //       baseURL: process.env.PROD_URL || 'https://prod.example.com',
  //     },
  //   },
  // ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
