import { defineConfig, devices } from "@playwright/test";
import type { TestOptions } from "./test-options";

require("dotenv").config();

export default defineConfig<TestOptions>({
  // timeout: 10000,
  globalTimeout: 60000,
  expect: {
    timeout: 30000,
  },

  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: "http://localhost:4200",
    globalsQaURL: "https://www.globalsqa.com/demo-site/draganddrop/",
    baseURL: "http://localhost:4200",
  },

  projects: [
    {
      name: "chromium",
    },
  ],
});
