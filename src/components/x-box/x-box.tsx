import { Component, Element, Prop, Host, h } from '@stencil/core';
import { setCssProperties } from '../../utils';

@Component({
  tag: 'x-box',
  styleUrl: 'x-box.scss'
})
export class XBox {

  @Element() host: HTMLElement;

  @Prop() width: string;

  @Prop() alignSelf: string;

  @Prop() justifyContent: 'space-evently' | 'space-between';

  @Prop() alignContent: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-evently' | 'space-between';

  @Prop() alignItems: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'start' | 'end' | 'self-start' | 'self-end' | 'normal';

  constructor() {
    setCssProperties(this.host, {
      '--box-align-items': this.alignItems,
      '--box-align-content': this.alignContent,
      '--box-justify-content': this.justifyContent,
      '--box-width': this.width
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
