import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'x-tabs',
  styleUrl: 'x-tabs.css',
  shadow: true,
})
export class XTabs {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
