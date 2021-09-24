import { newSpecPage } from '@stencil/core/testing';
import { XControl } from '../x-control';

describe('x-control', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XControl],
      html: `<x-control></x-control>`,
    });
    expect(page.root).toEqualHtml(`
      <x-control>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-control>
    `);
  });
});
