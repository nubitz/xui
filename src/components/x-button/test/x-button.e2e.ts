import { newE2EPage } from '@stencil/core/testing';

describe('x-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-button></x-button>');

    const element = await page.find('x-button');
    expect(element).toHaveClass('hydrated');
  });
});
