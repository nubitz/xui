import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'x-menu',
  styleUrl: 'x-menu.scss'
})
export class XMenu {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
