import { newSpecPage } from '@stencil/core/testing';
import { XRadiolist } from '../x-radiolist';

describe('x-radiolist', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XRadiolist],
      html: `<x-radiolist></x-radiolist>`,
    });
    expect(page.root).toEqualHtml(`
      <x-radiolist>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-radiolist>
    `);
  });
});
