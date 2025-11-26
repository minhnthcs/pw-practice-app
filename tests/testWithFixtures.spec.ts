import { test } from "../test-options";
import { faker } from "@faker-js/faker";

// test.beforeEach(async ({ page }) => {
//   await page.goto("/");
// });

test("method parameterized", async ({ pageManager }) => {
  const randomFullName = faker.person.fullName();
  const randomEmail = `${randomFullName.replace(" ", "")}${faker.number.int(1000)}@test.com`;

  await pageManager.onFormLayoutsPage().inputFormUsingGridsWithCredentials("test@gamil.com", "myPassword", "Option 1");
  await pageManager.onFormLayoutsPage().inputFormUsingInlineForm(randomFullName, randomEmail, true);
});
