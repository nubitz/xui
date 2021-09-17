import { newSpecPage } from '@stencil/core/testing';
import { XTypography } from '../x-typography';

describe('x-typography', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XTypography],
      html: `<x-typography></x-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <x-typography>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-typography>
    `);
  });
});
