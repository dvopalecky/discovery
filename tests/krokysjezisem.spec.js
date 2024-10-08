import { describe, test, expect } from '@playwright/test';

const viewportDesktop = { width: 1440, height: 900 };
const viewportMobile = { width: 390, height: 844 };

const port = process.env.PORT_KROKYSJEZISEM || 8000;
const baseUrl = `http://localhost:${port}`;

describe('bozi rodina', () => {
  const link = `${baseUrl}/`;
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
  const link = `${baseUrl}/posileni-vize/`;
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

describe('karticky-k-tisku', () => {
  const link = `${baseUrl}/karticky-k-tisku/`;
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
    await page.goto(`${baseUrl}/#print`);
    await expect(page).toHaveScreenshot({});
  });

  test('page 2: posileni-vize', async ({ page }) => {
    await page.setViewportSize(viewportDesktop);
    await page.goto(`${baseUrl}/posileni-vize/#print`);
    await expect(page).toHaveScreenshot();
  });
});
