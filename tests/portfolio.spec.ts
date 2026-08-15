import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const routes = [
  { path: '/', lang: 'en', dir: 'ltr', alternate: '/fa/' },
  { path: '/fa/', lang: 'fa-IR', dir: 'rtl', alternate: '/' },
] as const;

for (const route of routes) {
  test(`${route.path} has localized document metadata`, async ({ page }) => {
    await page.goto(route.path);
    await expect(page.locator('html')).toHaveAttribute('lang', route.lang);
    await expect(page.locator('html')).toHaveAttribute('dir', route.dir);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', new RegExp(`${route.path.replaceAll('/', '\\/')}$`));
    await expect(page.locator('link[hreflang="en"]')).toHaveAttribute('href', 'https://mahdim43.github.io/');
    await expect(page.locator('link[hreflang="fa"]')).toHaveAttribute('href', 'https://mahdim43.github.io/fa/');
    await expect(page.locator('[data-language-switch]')).toHaveAttribute('href', route.alternate);
  });

  test(`${route.path} exposes the complete shared portfolio`, async ({ page }) => {
    await page.goto(route.path);
    await expect(page.locator('.case-card')).toHaveCount(3);
    await expect(page.locator('.timeline-item')).toHaveCount(4);
    await expect(page.locator('.capability-card')).toHaveCount(5);
    await expect(page.locator('.project-card')).toHaveCount(2);
    await expect(page.locator('a[href="/mahdi-hooshmand-cv.pdf"]').first()).toBeVisible();
    await expect(page.locator(`a[href="mailto:hooshmandm43@gmail.com"]`).first()).toBeVisible();
  });

  test(`${route.path} has no serious accessibility violations`, async ({ page }) => {
    await page.goto(route.path);
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter((violation) => ['serious', 'critical'].includes(violation.impact ?? ''));
    expect(serious).toEqual([]);
  });
}

test('public pages omit private and stale employment data', async ({ page }) => {
  for (const path of ['/', '/fa/']) {
    await page.goto(path);
    const html = await page.locator('html').innerText();
    expect(html).not.toContain('+98 936 826 5361');
    expect(html).not.toContain('Hamyar Hooshmand Chabok');
    expect(html).not.toContain('Sazeh Hesab');
    expect(html).not.toContain('Nasim Ertebat Ayandeh');
    expect(html).not.toContain('Shahr IT');
    expect(html).not.toContain('2024 - Present');
    expect(html).not.toContain('5+ years');
    expect(html).not.toContain('6+ years');
  }
});

test('language switch preserves the active section hash', async ({ page }) => {
  await page.goto('/#projects');
  await page.locator('[data-language-switch]').click();
  await expect(page).toHaveURL(/\/fa\/#projects$/);
});

test('mobile menu is keyboard operable and reports state', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto('/');
  const toggle = page.locator('[data-menu-toggle]');
  await expect(toggle).toBeVisible();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('[data-navigation]')).toHaveAttribute('data-open', 'true');
});

test('reduced motion disables nonessential topology animation', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('.signal-path')).toHaveCSS('animation-name', 'none');
  await expect(page.locator('[data-reveal]').first()).toHaveCSS('opacity', '1');
});

test('build artifact includes localized routes, sitemap, CV, and social images', () => {
  const artifacts = [
    'index.html',
    join('fa', 'index.html'),
    'sitemap-index.xml',
    'mahdi-hooshmand-cv.pdf',
    join('og', 'portfolio-en.png'),
    join('og', 'portfolio-fa.png'),
  ];
  for (const artifact of artifacts) expect(existsSync(join(process.cwd(), 'dist', artifact)), artifact).toBe(true);
});
