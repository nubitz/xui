import { newE2EPage } from '@stencil/core/testing';

describe('x-textbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-textbox></x-textbox>');

    const element = await page.find('x-textbox');
    expect(element).toHaveClass('hydrated');
  });
});
