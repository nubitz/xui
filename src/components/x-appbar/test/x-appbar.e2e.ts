import { newE2EPage } from '@stencil/core/testing';

describe('x-appbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-appbar></x-appbar>');

    const element = await page.find('x-appbar');
    expect(element).toHaveClass('hydrated');
  });
});
