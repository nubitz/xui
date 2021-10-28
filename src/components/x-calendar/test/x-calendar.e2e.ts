import { newE2EPage } from '@stencil/core/testing';

describe('x-calendar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-calendar></x-calendar>');

    const element = await page.find('x-calendar');
    expect(element).toHaveClass('hydrated');
  });
});
