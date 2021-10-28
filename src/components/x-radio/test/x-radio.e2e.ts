import { newE2EPage } from '@stencil/core/testing';

describe('x-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-radio></x-radio>');

    const element = await page.find('x-radio');
    expect(element).toHaveClass('hydrated');
  });
});
