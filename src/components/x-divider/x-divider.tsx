import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'x-divider',
  styleUrl: 'x-divider.scss'
})
export class XDivider {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
