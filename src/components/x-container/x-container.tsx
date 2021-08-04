import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'x-container',
  styleUrl: 'x-container.css',
  shadow: true,
})
export class XContainer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
