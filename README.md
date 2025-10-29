### Ngx-Admin Angular 14 application from akveo.com

This is modified and more lightweight version of original application to practice UI Automation with Playwright.

The original repo is here: https://github.com/akveo/ngx-admin

Playwright key points:
- hooks
- user facing locator
- get child elements
- get parent elements
- reusing elements
- extracting value
- assertions
- auto-waiting
- timeouts (global timeout for entire tests, test timeout, action timeout, navigation timeout, and assertions timeout - only for locator assertion)


- environment:
  - can set the env in `playwright.config.ts` (not recommended). Example:

    ```ts
    {
      name: "dev",
      use: { ...devices["Desktop Chrome"], baseURL: "http://localhost:4201" }
    },
    {
      name: "staging",
      use: { ...devices["Desktop Chrome"], baseURL: "http://localhost:4202" }
    }
    ```

  - using `test-options.ts`
  - using `dotenv` (recommended)
    - from `.env`
    - from command (when running script) or customize the npm scripts