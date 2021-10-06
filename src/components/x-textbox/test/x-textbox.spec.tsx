import { newSpecPage } from '@stencil/core/testing';
import { XTextbox } from '../x-textbox';

describe('x-textbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XTextbox],
      html: `<x-textbox></x-textbox>`,
    });
    expect(page.root).toEqualHtml(`
      <x-textbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-textbox>
    `);
  });
});
