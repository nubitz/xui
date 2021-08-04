import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'x-dialog',
  styleUrl: 'x-dialog.css',
  shadow: true,
})
export class XDialog {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
