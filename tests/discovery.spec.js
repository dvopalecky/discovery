import { describe, test, expect } from '@playwright/test';

const viewportDesktop = { width: 1440, height: 900 };
const viewportMobile = { width: 390, height: 844 };

describe('discovery', () => {
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

describe('jak-zacit-discovery', () => {
  const link = 'http://localhost:8000/jak-zacit-discovery/';
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

describe('texty-ke-cteni', () => {
  const link = 'http://localhost:8000/texty-ke-cteni/';
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
  const link = 'http://localhost:8000/karticky-k-tisku/';
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

describe('discovery print', () => {
  test('page 1: discovery', async ({ page }) => {
    await page.setViewportSize(viewportDesktop);
    // zoom 150%

    await page.goto('http://localhost:8000/#print');
    await expect(page).toHaveScreenshot({});
  });

  test('page 2: jak zacit discovery', async ({ page }) => {
    await page.setViewportSize(viewportDesktop);
    await page.goto('http://localhost:8000/jak-zacit-discovery-print/#print');
    await expect(page).toHaveScreenshot();
  });
});
