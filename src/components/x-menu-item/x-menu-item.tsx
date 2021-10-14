import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'x-menu-item',
  styleUrl: 'x-menu-item.css',
})
export class XMenuItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
