import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'x-container',
  styleUrl: 'x-container.css',
})
export class XContainer {

  @Prop() background: string;

  render() {
    return (
      <Host>
        <div class="inner-wrapper">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
