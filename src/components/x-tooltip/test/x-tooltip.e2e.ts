import { newE2EPage } from '@stencil/core/testing';

describe('x-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-tooltip></x-tooltip>');

    const element = await page.find('x-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
