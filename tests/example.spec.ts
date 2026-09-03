import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://example.com/');
  await page.getByRole('link', { name: 'Learn more' }).click();
  await page.getByRole('link', { name: 'IANA-managed Reserved Domains' }).click();
  await page.getByText('Certain domains are set aside').click();
  await page.getByRole('heading', { name: 'IANA-managed Reserved Domains' }).click();
  await page.getByRole('heading', { name: 'IANA-managed Reserved Domains' }).click();
  await page.getByRole('heading', { name: 'IANA-managed Reserved Domains' }).click();
  await page.getByRole('heading', { name: 'Example domains' }).click();
  await page.getByRole('link', { name: 'Special-Use Domain Names' }).nth(1).click();
});
