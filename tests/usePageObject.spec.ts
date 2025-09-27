import { test, expect } from "@playwright/test";
import { PageManager } from "../pages/utils/pageManager";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200");
});

test("navigate to Form Layout", async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().FormLayoutsPage();
  await pm.navigateTo().datePickerPage();
  await pm.navigateTo().smartTablePage();
  await pm.navigateTo().toastrPage();
  await pm.navigateTo().tooltipPage();
});

test("method parameterized", async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().FormLayoutsPage();
  await pm
    .onFormLayoutsPage()
    .inputFormUsingGridsWithCredentials(
      "test@gamil.com",
      "myPassword",
      "Option 1"
    );
  await pm
    .onFormLayoutsPage()
    .inputFormUsingInlineForm("Minh", "masson@gmail.com", true);

  await pm.navigateTo().datePickerPage();
  await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(6);
  await pm.onDatePickerPage().selectDatePickerWithRangeFromToday(4, 23);
});
