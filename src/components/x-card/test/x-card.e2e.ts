import { newE2EPage } from '@stencil/core/testing';

describe('x-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-card></x-card>');

    const element = await page.find('x-card');
    expect(element).toHaveClass('hydrated');
  });
});
