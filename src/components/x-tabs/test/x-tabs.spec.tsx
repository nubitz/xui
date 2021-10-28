import { newSpecPage } from '@stencil/core/testing';
import { XTabs } from '../x-tabs';

describe('x-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XTabs],
      html: `<x-tabs></x-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <x-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-tabs>
    `);
  });
});
