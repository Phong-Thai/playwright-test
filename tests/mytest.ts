/*



page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


*/



import { test, expect } from "@playwright/test";

test("Verify Playwright Locator", async ({ page }) => {

    await page.goto("https://demo.nopcommerce.com/");

    await page.pause();

    const logo = page.getByAltText("nopCommerce demo store");

    await expect(logo).toBeVisible();

    await expect(logo).toHaveAttribute("src", "https://demo.nopcommerce.com/images/logo.png");

})