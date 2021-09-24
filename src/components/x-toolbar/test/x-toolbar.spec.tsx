import { newSpecPage } from '@stencil/core/testing';
import { XToolbar } from '../x-toolbar';

describe('x-toolbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XToolbar],
      html: `<x-toolbar></x-toolbar>`,
    });
    expect(page.root).toEqualHtml(`
      <x-toolbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-toolbar>
    `);
  });
});
