import { newSpecPage } from '@stencil/core/testing';
import { XAppbar } from '../x-appbar';

describe('x-appbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XAppbar],
      html: `<x-appbar></x-appbar>`,
    });
    expect(page.root).toEqualHtml(`
      <x-appbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-appbar>
    `);
  });
});
