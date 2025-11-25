import { defineConfig, devices } from "@playwright/test";
import type { TestOptions } from "./test-options";

require("dotenv").config();

export default defineConfig<TestOptions>({
  // timeout: 10000,
  globalTimeout: 60000,
  expect: {
    timeout: 30000,
  },
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined, // pw instances 5 worker for 5 specs to run parallel
  reporter: "html",

  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: "http://localhost:4200",
    globalsQaURL: "https://www.globalsqa.com/demo-site/draganddrop/",
    baseURL:
      process.env.DEV === "1"
        ? "http://localhost:4200"
        : process.env.STAGING === "1"
        ? "http://localhost:4201"
        : "http://localhost:4200",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    actionTimeout: 5000,
    navigationTimeout: 5000,
    video: {
      mode: "on",
      size: { width: 1920, height: 1080 },
    }, // video record on each test run, but should run the test using command line, not from test plugin of vscode
  },

  projects: [
    {
      name: "dev",
      use: {
        ...devices["Desktop Chrome"],
        globalsQaURL: "https://www.globalsqa.com/demo-site/draganddrop/",
      },
    },
    {
      name: "chromium",
    },

    {
      name: "firefox",
      use: {
        browserName: "firefox",
      },
      fullyParallel: true,
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: "pageObjectFullScreen",
      testMatch: "usePageObject.spec.ts",
      use: {
        viewport: { width: 1920, height: 1080 },
      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
});
