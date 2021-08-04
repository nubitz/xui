import { newSpecPage } from '@stencil/core/testing';
import { XDialog } from '../x-dialog';

describe('x-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XDialog],
      html: `<x-dialog></x-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <x-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-dialog>
    `);
  });
});
