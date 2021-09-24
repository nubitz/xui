import { newE2EPage } from '@stencil/core/testing';

describe('x-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-grid></x-grid>');

    const element = await page.find('x-grid');
    expect(element).toHaveClass('hydrated');
  });
});
