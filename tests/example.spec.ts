import { test, expect } from '@playwright/test';


test('Verify Logo and Title', async ({ page }) => {
  await page.goto('https://qa.b3.works/');

  //await page.pause();
  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);

  // Check logo + title + login
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

  // Select org
  const specificOrg = page.locator('.org-item').filter({ hasText: 'CPaaS QA Account' });

  await specificOrg.click();

  // Click avatar menu
  const avatarBtn = page.locator('[mattooltip = "Profile"]');

  await avatarBtn.hover();

  const tooltip = page.locator('.cdk-overlay-container');

  await expect(tooltip.getByText('Profile')).toBeTruthy();

  const userProfile = page.locator('.user-profile');

  await expect(userProfile).toBeVisible({ timeout: 15000 });

  await userProfile.click();


  // const statusMenuTrigger = page.getByRole('menuitem', { name: 'Available' }).first();

  // await statusMenuTrigger.hover();

  // const subMenuContainer = page.locator('.mat-mdc-menu-pannel');
  // // await expect(subMenuContainer).toBeVisible({ timeout: 5000 });

  // const statuses = ['Available', 'Busy', 'Away', 'Offline'];

  // for (const statusName of statuses) {

  //   const statusItem = subMenuContainer.getByRole('menuitem', { name: new RegExp(statusName, 'i') });

  //   await expect(statusItem).toBeVisible({ timeout: 5000 });

  //   console.log('đã kiểm tra: ${statusName} - hiển thị OK');
  // }

  // Check manage org redirect & click system rules 
  const manageOrg = page.getByRole('menuitem', { name: "Manage organization" });

  //const manageOrg = page.locator('.mat-mdc-menu-item').filter({ hasText: 'Manage organization' });

  await manageOrg.click({ timeout: 15000 });

  const manageOrgIframe = page.frameLocator('#db6d1b97-fed8-4fb4-b4c5-b333d703f579_manage-organization');

  //await expect(page.getByRole('button', { name: 'System rules' })).toBeVisible({ timeout: 15000 });


  const systemRulesBtn = manageOrgIframe.getByRole('button', { name: 'System rules' });

  await expect(systemRulesBtn).toBeVisible({ timeout: 15000 });

  await systemRulesBtn.click();


  //const outboundCallRules = manageOrgIframe.locator('div.link').filter({ hasText: 'Outbound call rules' });
  const outboundCallRules = manageOrgIframe.getByText('Outbound call rules');
  await expect(outboundCallRules).toBeVisible({ timeout: 15000 });

  await outboundCallRules.click();


  const customRuleBtn = manageOrgIframe.getByText('Custom rule');

  await expect(customRuleBtn).toBeVisible({ timeout: 15000 });

  await customRuleBtn.click({ timeout: 15000 });


  const createBtn = manageOrgIframe.locator('.mdc-button');

  await expect(createBtn).toBeVisible({ timeout: 15000 });

  await expect(createBtn).toBeEnabled();

  await createBtn.click({ timeout: 15000 });





  // const popupOutboundCallRule = manageOrgIframe.locator('.mat-mdc-dialog-container');

  // await expect(popupOutboundCallRule).toBeVisible({ timeout: 15000 });

  // Create new rule
  const createOutboundCallRule = manageOrgIframe.locator('input[formcontrolname="name"]');

  await expect(createOutboundCallRule).toBeVisible({ timeout: 15000 });

  await createOutboundCallRule.fill('Test rule 01');

  const createBtn2 = manageOrgIframe.getByRole('button', { name: "Create" });

  await expect(createBtn2).toBeVisible({ timeout: 15000 });

  await expect(createBtn2).toBeEnabled();

  await createBtn2.click({ timeout: 15000 });


  // Close popup
  const closeBtn = manageOrgIframe.getByRole('button', { name: 'Close' });

  await expect(closeBtn).toBeVisible({ timeout: 15000 });

  await expect(closeBtn).toBeEnabled();

  await closeBtn.click({ timeout: 15000 });


  // search field 

  const searchField = manageOrgIframe.getByPlaceholder('Rule name');

  await expect(searchField).toBeVisible({ timeout: 15000 });

  await searchField.fill('Test rule 01');

  // await createBtn2.click({ timeout: 15000 });

  // edit rule

  await page.pause();

  const hoverRow = manageOrgIframe.getByRole('row', { name: 'Test rule 01' });

  await hoverRow.hover({ timeout: 15000 });

  const editBtn = hoverRow.locator('button[mattooltip="Update"]');
  await expect(editBtn).toBeVisible({ timeout: 15000 });
  await editBtn.click({ timeout: 15000 });

});


