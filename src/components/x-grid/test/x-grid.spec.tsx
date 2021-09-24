import { newSpecPage } from '@stencil/core/testing';
import { XGrid } from '../x-grid';

describe('x-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XGrid],
      html: `<x-grid></x-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <x-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-grid>
    `);
  });
});
