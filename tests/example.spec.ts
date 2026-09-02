import{ test, epect) from '@playwright/test';
test('example.comが表示される', async ({page}) => {
  await page.goto('https:example.com');

     await expect(page).toHaveTitle('Example Domain');

     await expect(page.locator('1')).toHAvaText('Example Domain');
});
