import { newE2EPage } from '@stencil/core/testing';

describe('x-media', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-media></x-media>');

    const element = await page.find('x-media');
    expect(element).toHaveClass('hydrated');
  });
});
