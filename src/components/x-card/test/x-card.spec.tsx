import { newSpecPage } from '@stencil/core/testing';
import { XCard } from '../x-card';

describe('x-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XCard],
      html: `<x-card></x-card>`,
    });
    expect(page.root).toEqualHtml(`
      <x-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-card>
    `);
  });
});
