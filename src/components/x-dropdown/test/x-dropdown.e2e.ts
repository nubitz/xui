import { newE2EPage } from '@stencil/core/testing';

describe('x-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-dropdown></x-dropdown>');

    const element = await page.find('x-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
