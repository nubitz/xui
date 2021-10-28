import { newSpecPage } from '@stencil/core/testing';
import { XSwitch } from '../x-switch';

describe('x-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XSwitch],
      html: `<x-switch></x-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <x-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-switch>
    `);
  });
});
