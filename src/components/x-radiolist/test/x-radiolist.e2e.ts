import { newE2EPage } from '@stencil/core/testing';

describe('x-radiolist', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-radiolist></x-radiolist>');

    const element = await page.find('x-radiolist');
    expect(element).toHaveClass('hydrated');
  });
});
