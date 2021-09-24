import { newE2EPage } from '@stencil/core/testing';

describe('x-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-menu></x-menu>');

    const element = await page.find('x-menu');
    expect(element).toHaveClass('hydrated');
  });
});
