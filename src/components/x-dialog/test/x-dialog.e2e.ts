import { newE2EPage } from '@stencil/core/testing';

describe('x-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-dialog></x-dialog>');

    const element = await page.find('x-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
