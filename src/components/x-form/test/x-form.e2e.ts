import { newE2EPage } from '@stencil/core/testing';

describe('x-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-form></x-form>');

    const element = await page.find('x-form');
    expect(element).toHaveClass('hydrated');
  });
});
