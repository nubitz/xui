import { newE2EPage } from '@stencil/core/testing';

describe('x-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-switch></x-switch>');

    const element = await page.find('x-switch');
    expect(element).toHaveClass('hydrated');
  });
});
