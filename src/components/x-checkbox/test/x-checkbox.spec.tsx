import { newSpecPage } from '@stencil/core/testing';
import { XCheckbox } from '../x-checkbox';

describe('x-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XCheckbox],
      html: `<x-checkbox></x-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <x-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-checkbox>
    `);
  });
});
