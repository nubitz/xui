import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'x-calendar',
  styleUrl: 'x-calendar.css',
  shadow: true,
})
export class XCalendar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
