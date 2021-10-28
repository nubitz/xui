import { newSpecPage } from '@stencil/core/testing';
import { XRadio } from '../x-radio';

describe('x-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XRadio],
      html: `<x-radio></x-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <x-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-radio>
    `);
  });
});
