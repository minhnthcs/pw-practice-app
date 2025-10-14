import { test, expect } from "@playwright/test";
import { PageManager } from "../pages/utils/pageManager";
import { faker } from "@faker-js/faker";
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
  const randomFullName = faker.person.fullName();
  const randomEmail = `${randomFullName.replace(" ", "")}${faker.number.int(
    1000
  )}@test.com`;
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
    .inputFormUsingInlineForm(randomFullName, randomEmail, true);

  // await pm.navigateTo().datePickerPage();
  // await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(6);
  // await pm.onDatePickerPage().selectDatePickerWithRangeFromToday(4, 23);
});
