import { newE2EPage } from '@stencil/core/testing';

describe('x-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-divider></x-divider>');

    const element = await page.find('x-divider');
    expect(element).toHaveClass('hydrated');
  });
});
