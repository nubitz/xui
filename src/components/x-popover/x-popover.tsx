import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'x-popover',
  styleUrl: 'x-popover.css',
  shadow: true,
})
export class XPopover {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
