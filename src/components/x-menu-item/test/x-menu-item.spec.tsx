import { newSpecPage } from '@stencil/core/testing';
import { XMenuItem } from '../x-menu-item';

describe('x-menu-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XMenuItem],
      html: `<x-menu-item></x-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <x-menu-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-menu-item>
    `);
  });
});
