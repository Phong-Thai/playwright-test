import { test, expect } from '@playwright/test';

test('Verify Logo and Title', async ({ page }) => {
  await page.goto('https://qa.b3.works/');

  await page.pause();
  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);

  const logo = page.getByAltText('logo');

  await expect(logo).toBeVisible({ timeout: 15000 });

  await expect(logo).toHaveAttribute('src', 'https://ui.b3networks.com/assets/prod/effcf520-88ab-4b15-a243-ecd828447840/plogo-1724665832895.png?random=1724665836950');

  console.log("Logo is visible");

  const title = page.getByText('Sign in');

  await expect(title).toBeVisible({ timeout: 15000 });

  console.log('Header "Sign in" is correct');

  const id = page.locator('input[formcontrolname="credential"]');

  await expect(id).toBeVisible({ timeout: 15000 });

  await id.fill('thaiphong99@yopmail.com');

  const nextBtn = page.getByRole('button', { name: 'Next' });

  await expect(nextBtn).toBeVisible({ timeout: 15000 });

  await expect(nextBtn).toBeEnabled();

  await nextBtn.click();

  const signInPw = page.getByText('Sign in with Password');

  await signInPw.click();

  const pw = page.locator('input[formcontrolname="password"]');

  await expect(pw).toBeVisible({ timeout: 15000 });

  await pw.fill('Phong01-11');

  const signInBtn = page.getByRole('button', { name: 'Sign in' });

  await expect(signInBtn).toBeVisible({ timeout: 15000 });

  await signInBtn.click();

  const listOrg = page.locator('.org-item');


  const specificOrg = page.locator('.org-item').filter({ hasText: 'CPaaS QA Account' });

  await specificOrg.click();

});


