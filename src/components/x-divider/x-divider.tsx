import { Component, Host, Element, h, Prop } from '@stencil/core';
import { Colors, Placement } from '../../interface';
import { setCssProperties } from '../../utils';

@Component({
  tag: 'x-divider',
  styleUrl: 'x-divider.scss'
})
export class XDivider {

  @Element() host: HTMLElement;

  @Prop() color: Colors;

  @Prop() placement: Placement;

  constructor() {
    setCssProperties(this.host, {
      '--border-divider-color': this.color
    })
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
