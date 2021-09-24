import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'x-toolbar',
  styleUrl: 'x-toolbar.scss'
})
export class XToolbar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
