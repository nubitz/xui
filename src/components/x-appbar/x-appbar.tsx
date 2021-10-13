import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'x-appbar',
  styleUrl: 'x-appbar.scss'
})
export class XAppbar {

  @Prop() width: string;

  @Prop({
    reflect: true
  }) sticky: boolean;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
