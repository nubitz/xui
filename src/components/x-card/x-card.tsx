import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'x-card',
  styleUrl: 'x-card.css'
})
export class XCard {

  @Prop({
    reflect: true
  }) variant: 'default' | 'champion' = 'default'

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
