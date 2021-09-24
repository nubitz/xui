import { newE2EPage } from '@stencil/core/testing';

describe('x-control', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-control></x-control>');

    const element = await page.find('x-control');
    expect(element).toHaveClass('hydrated');
  });
});
