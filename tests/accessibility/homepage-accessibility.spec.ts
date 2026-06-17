import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Homepage accesibility tests @accessibility', () => {

  test('Homepage should have no critical accessibility violations', async ({ page }) => {
    test.fail(!!process.env.CI, 'Known accessibility violations to be fixed');
    
    await page.goto('/');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    console.log('Accessibility Violations:', results.violations);
    const serious = results.violations.filter(v => 
      v.impact === 'serious' || v.impact === 'critical'
    );
    expect(serious).toEqual([]);
  });
});
