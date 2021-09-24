import { newSpecPage } from '@stencil/core/testing';
import { XBox } from '../x-box';

describe('x-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XBox],
      html: `<x-box></x-box>`,
    });
    expect(page.root).toEqualHtml(`
      <x-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-box>
    `);
  });
});
