import { newE2EPage } from '@stencil/core/testing';

describe('x-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-tabs></x-tabs>');

    const element = await page.find('x-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
