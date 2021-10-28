import { newE2EPage } from '@stencil/core/testing';

describe('x-datepicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-datepicker></x-datepicker>');

    const element = await page.find('x-datepicker');
    expect(element).toHaveClass('hydrated');
  });
});
