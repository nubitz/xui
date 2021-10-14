import { newE2EPage } from '@stencil/core/testing';

describe('x-menu-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-menu-item></x-menu-item>');

    const element = await page.find('x-menu-item');
    expect(element).toHaveClass('hydrated');
  });
});
