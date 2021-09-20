import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'x-container',
  styleUrl: 'x-container.scss',
})
export class XContainer {

  @Prop() background: string;

  @Prop() overlay: boolean;

  render() {
    return (
      <Host>
        <slot name="container-background" />
        <div class="inner-wrapper">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
