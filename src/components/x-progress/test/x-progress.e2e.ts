import { newE2EPage } from '@stencil/core/testing';

describe('x-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-progress></x-progress>');

    const element = await page.find('x-progress');
    expect(element).toHaveClass('hydrated');
  });
});
