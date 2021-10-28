import { newE2EPage } from '@stencil/core/testing';

describe('x-box-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-box-item></x-box-item>');

    const element = await page.find('x-box-item');
    expect(element).toHaveClass('hydrated');
  });
});
