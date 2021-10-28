import { newE2EPage } from '@stencil/core/testing';

describe('x-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-textarea></x-textarea>');

    const element = await page.find('x-textarea');
    expect(element).toHaveClass('hydrated');
  });
});
