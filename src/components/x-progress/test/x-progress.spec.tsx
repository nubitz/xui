import { newSpecPage } from '@stencil/core/testing';
import { XProgress } from '../x-progress';

describe('x-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XProgress],
      html: `<x-progress></x-progress>`,
    });
    expect(page.root).toEqualHtml(`
      <x-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-progress>
    `);
  });
});
