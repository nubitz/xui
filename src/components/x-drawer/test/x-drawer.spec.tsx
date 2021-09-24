import { newSpecPage } from '@stencil/core/testing';
import { XDrawer } from '../x-drawer';

describe('x-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XDrawer],
      html: `<x-drawer></x-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <x-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-drawer>
    `);
  });
});
