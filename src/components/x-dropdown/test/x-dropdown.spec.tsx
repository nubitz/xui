import { newSpecPage } from '@stencil/core/testing';
import { XDropdown } from '../x-dropdown';

describe('x-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XDropdown],
      html: `<x-dropdown></x-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <x-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-dropdown>
    `);
  });
});
