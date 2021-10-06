import { newSpecPage } from '@stencil/core/testing';
import { XInputStyles } from '../x-input-styles';

describe('x-input-styles', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XInputStyles],
      html: `<x-input-styles></x-input-styles>`,
    });
    expect(page.root).toEqualHtml(`
      <x-input-styles>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-input-styles>
    `);
  });
});
