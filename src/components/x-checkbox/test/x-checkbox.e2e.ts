import { newE2EPage } from '@stencil/core/testing';

describe('x-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-checkbox></x-checkbox>');

    const element = await page.find('x-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
