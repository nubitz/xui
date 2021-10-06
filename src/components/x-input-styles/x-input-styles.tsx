import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'x-input-styles',
  styleUrl: 'x-input-styles.scss'
})
export class XInputStyles {
  @Prop({
    reflect: true
  }) error: boolean;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
