import { newE2EPage } from '@stencil/core/testing';

describe('x-input-styles', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-input-styles></x-input-styles>');

    const element = await page.find('x-input-styles');
    expect(element).toHaveClass('hydrated');
  });
});
