import { newSpecPage } from '@stencil/core/testing';
import { XDatepicker } from '../x-datepicker';

describe('x-datepicker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XDatepicker],
      html: `<x-datepicker></x-datepicker>`,
    });
    expect(page.root).toEqualHtml(`
      <x-datepicker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-datepicker>
    `);
  });
});
