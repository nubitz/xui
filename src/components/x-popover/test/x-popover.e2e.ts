import { newE2EPage } from '@stencil/core/testing';

describe('x-popover', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-popover></x-popover>');

    const element = await page.find('x-popover');
    expect(element).toHaveClass('hydrated');
  });
});
