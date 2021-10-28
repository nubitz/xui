import { newSpecPage } from '@stencil/core/testing';
import { XBoxItem } from '../x-box-item';

describe('x-box-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XBoxItem],
      html: `<x-box-item></x-box-item>`,
    });
    expect(page.root).toEqualHtml(`
      <x-box-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-box-item>
    `);
  });
});
