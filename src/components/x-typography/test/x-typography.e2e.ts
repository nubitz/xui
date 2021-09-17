import { newE2EPage } from '@stencil/core/testing';

describe('x-typography', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-typography></x-typography>');

    const element = await page.find('x-typography');
    expect(element).toHaveClass('hydrated');
  });
});
