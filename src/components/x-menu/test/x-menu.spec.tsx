import { newSpecPage } from '@stencil/core/testing';
import { XMenu } from '../x-menu';

describe('x-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XMenu],
      html: `<x-menu></x-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <x-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-menu>
    `);
  });
});
