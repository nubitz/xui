import { newSpecPage } from '@stencil/core/testing';
import { XForm } from '../x-form';

describe('x-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XForm],
      html: `<x-form></x-form>`,
    });
    expect(page.root).toEqualHtml(`
      <x-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-form>
    `);
  });
});
