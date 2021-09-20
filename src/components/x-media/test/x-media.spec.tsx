import { newSpecPage } from '@stencil/core/testing';
import { XMedia } from '../x-media';

describe('x-media', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XMedia],
      html: `<x-media></x-media>`,
    });
    expect(page.root).toEqualHtml(`
      <x-media>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-media>
    `);
  });
});
