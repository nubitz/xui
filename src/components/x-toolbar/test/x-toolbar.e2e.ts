import { newE2EPage } from '@stencil/core/testing';

describe('x-toolbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-toolbar></x-toolbar>');

    const element = await page.find('x-toolbar');
    expect(element).toHaveClass('hydrated');
  });
});
