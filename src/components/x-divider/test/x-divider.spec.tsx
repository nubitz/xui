import { newSpecPage } from '@stencil/core/testing';
import { XDivider } from '../x-divider';

describe('x-divider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XDivider],
      html: `<x-divider></x-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <x-divider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-divider>
    `);
  });
});
