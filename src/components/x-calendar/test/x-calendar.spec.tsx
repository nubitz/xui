import { newSpecPage } from '@stencil/core/testing';
import { XCalendar } from '../x-calendar';

describe('x-calendar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XCalendar],
      html: `<x-calendar></x-calendar>`,
    });
    expect(page.root).toEqualHtml(`
      <x-calendar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-calendar>
    `);
  });
});
