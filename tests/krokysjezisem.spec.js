import { describe, test, expect } from '@playwright/test';

const viewportDesktop = { width: 1440, height: 900 };
const viewportMobile = { width: 390, height: 844 };

describe('bozi rodina', () => {
  const link = 'http://localhost:8000/';
  test('desktop', async ({ page }) => {
    await page.setViewportSize(viewportDesktop);
    await page.goto(link);
    await expect(page).toHaveScreenshot();
    await page.click('label[title="Tmavý režim"]');
    await expect(page).toHaveScreenshot();
  });

  test('mobile', async ({ page }) => {
    await page.setViewportSize(viewportMobile);
    await page.goto(link);
    await expect(page).toHaveScreenshot();

    await page.click('span.swiper-pagination-bullet:has-text("Pohled nahoru")');
    await expect(page).toHaveScreenshot();

    await page.click('span.swiper-pagination-bullet:has-text("Pohled dopředu")');
    await expect(page).toHaveScreenshot();

    await page.click('label[title="Tmavý režim"]');
    await expect(page).toHaveScreenshot();

  });
});

describe('posileni-vize', () => {
  const link = 'http://localhost:8000/posileni-vize/';
  test('desktop', async ({ page }) => {
    await page.setViewportSize(viewportDesktop);
    await page.goto(link);
    await expect(page).toHaveScreenshot();
    await page.click('label[title="Tmavý režim"]');
    await expect(page).toHaveScreenshot();
  });

  test('mobile', async ({ page }) => {
    await page.setViewportSize(viewportMobile);
    await page.goto(link);
    await expect(page).toHaveScreenshot();
    await page.click('label[title="Tmavý režim"]');
    await expect(page).toHaveScreenshot();
  });
});

describe('bozi-rodina print', () => {
  test('page 1: bozi-rodina', async ({ page }) => {
    await page.setViewportSize(viewportDesktop);
    await page.goto('http://localhost:8000/#print');
    await expect(page).toHaveScreenshot({});
  });

  test('page 2: posileni-vize', async ({ page }) => {
    await page.setViewportSize(viewportDesktop);
    await page.goto('http://localhost:8000/posileni-vize/#print');
    await expect(page).toHaveScreenshot();
  });
});
