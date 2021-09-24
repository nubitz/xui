import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'x-appbar',
  styleUrl: 'x-appbar.scss'
})
export class XAppbar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
