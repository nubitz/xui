import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'x-datepicker',
  styleUrl: 'x-datepicker.scss'
})
export class XDatepicker {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
