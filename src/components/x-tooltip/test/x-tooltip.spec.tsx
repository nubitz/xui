import { newSpecPage } from '@stencil/core/testing';
import { XTooltip } from '../x-tooltip';

describe('x-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XTooltip],
      html: `<x-tooltip></x-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <x-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-tooltip>
    `);
  });
});
