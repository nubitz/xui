import { newSpecPage } from '@stencil/core/testing';
import { XLink } from '../x-link';

describe('x-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XLink],
      html: `<x-link></x-link>`,
    });
    expect(page.root).toEqualHtml(`
      <x-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-link>
    `);
  });
});
