import { newE2EPage } from '@stencil/core/testing';

describe('x-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-box></x-box>');

    const element = await page.find('x-box');
    expect(element).toHaveClass('hydrated');
  });
});
