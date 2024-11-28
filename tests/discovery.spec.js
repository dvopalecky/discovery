import { describe, test, expect } from '@playwright/test';

const viewportDesktop = { width: 1440, height: 900 };
const viewportMobile = { width: 390, height: 844 };

const port = process.env.PORT_DISCOVERY || 8000;
const baseUrl = `http://localhost:${port}`;

describe('discovery', () => {
  const link = `${baseUrl}/`;
  test('desktop', async ({ page }) => {
    await page.setViewportSize(viewportDesktop);
    await page.goto(link);
    await expect(page).toHaveScreenshot();
    await page.click('label[title="Dark mode"]');
    await expect(page).toHaveScreenshot();
  });

  test('mobile', async ({ page }) => {
    await page.setViewportSize(viewportMobile);
    await page.goto(link);
    await expect(page).toHaveScreenshot();

    await page.click('span.swiper-pagination-bullet:has-text("Look up")');
    await expect(page).toHaveScreenshot();

    await page.click('span.swiper-pagination-bullet:has-text("Look forward")');
    await expect(page).toHaveScreenshot();

    await page.click('label[title="Dark mode"]');
    await expect(page).toHaveScreenshot();

  });
});

describe('jak-zacit-discovery', () => {
  const link = `${baseUrl}/jak-zacit-discovery/`;
  test('desktop', async ({ page }) => {
    await page.setViewportSize(viewportDesktop);
    await page.goto(link);
    await expect(page).toHaveScreenshot();
    await page.click('label[title="Dark mode"]');
    await expect(page).toHaveScreenshot();
  });

  test('mobile', async ({ page }) => {
    await page.setViewportSize(viewportMobile);
    await page.goto(link);
    await expect(page).toHaveScreenshot();
    await page.click('label[title="Dark mode"]');
    await expect(page).toHaveScreenshot();
  });
});

describe('texty-ke-cteni', () => {
  const link = `${baseUrl}/texty-ke-cteni/`;
  test('desktop', async ({ page }) => {
    await page.setViewportSize(viewportDesktop);
    await page.goto(link);
    await expect(page).toHaveScreenshot();
    await page.click('label[title="Dark mode"]');
    await expect(page).toHaveScreenshot();
  });

  test('mobile', async ({ page }) => {
    await page.setViewportSize(viewportMobile);
    await page.goto(link);
    await expect(page).toHaveScreenshot();
    await page.click('label[title="Dark mode"]');
    await expect(page).toHaveScreenshot();
  });
});

describe('karticky-k-tisku', () => {
  const link = `${baseUrl}/karticky-k-tisku/`;
  test('desktop', async ({ page }) => {
    await page.setViewportSize(viewportDesktop);
    await page.goto(link);
    await expect(page).toHaveScreenshot();
    await page.click('label[title="Dark mode"]');
    await expect(page).toHaveScreenshot();
  });

  test('mobile', async ({ page }) => {
    await page.setViewportSize(viewportMobile);
    await page.goto(link);
    await expect(page).toHaveScreenshot();
    await page.click('label[title="Dark mode"]');
    await expect(page).toHaveScreenshot();
  });
});

describe('discovery print', () => {
  test('page 1: discovery', async ({ page }) => {
    await page.setViewportSize(viewportDesktop);
    await page.goto(`${baseUrl}/#print`);
    await expect(page).toHaveScreenshot({});
  });

  test('page 2: jak zacit discovery', async ({ page }) => {
    await page.setViewportSize(viewportDesktop);
    await page.goto(`${baseUrl}/jak-zacit-discovery-print/#print`);
    await expect(page).toHaveScreenshot();
  });
});
