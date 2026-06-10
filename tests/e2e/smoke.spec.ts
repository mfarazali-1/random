import { test, expect } from "@playwright/test";

test("home renders the hero and primary nav", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Go Abdullah",
  );
  await expect(
    page.getByRole("link", { name: "Hire Talent" }).first(),
  ).toBeVisible();
});

test("navigates from the blog index into a post", async ({ page }) => {
  await page.goto("/blog");
  await page
    .getByRole("link", { name: /cost of vacancy/i })
    .first()
    .click();
  await expect(page).toHaveURL(/\/blog\/reduce-cost-of-vacancy/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("inquiry form surfaces validation errors on empty submit", async ({
  page,
}) => {
  await page.goto("/hire-talent");
  await page.getByRole("button", { name: "Submit inquiry" }).click();
  await expect(page.getByText("Please enter your company name.")).toBeVisible();
});
