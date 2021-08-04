import { newSpecPage } from '@stencil/core/testing';
import { XPopover } from '../x-popover';

describe('x-popover', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XPopover],
      html: `<x-popover></x-popover>`,
    });
    expect(page.root).toEqualHtml(`
      <x-popover>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-popover>
    `);
  });
});
