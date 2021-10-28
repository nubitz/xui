import { newSpecPage } from '@stencil/core/testing';
import { XTextarea } from '../x-textarea';

describe('x-textarea', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XTextarea],
      html: `<x-textarea></x-textarea>`,
    });
    expect(page.root).toEqualHtml(`
      <x-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-textarea>
    `);
  });
});
