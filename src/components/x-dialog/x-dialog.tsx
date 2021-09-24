import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'x-dialog',
  styleUrl: 'x-dialog.scss'
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
