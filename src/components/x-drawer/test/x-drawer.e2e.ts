import { newE2EPage } from '@stencil/core/testing';

describe('x-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-drawer></x-drawer>');

    const element = await page.find('x-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
