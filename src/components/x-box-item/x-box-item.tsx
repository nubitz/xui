import { Component, Prop, Element, Host, h } from '@stencil/core';
import { fromJSON, setCssProperties } from '../../utils';

@Component({
  tag: 'x-box-item',
  styleUrl: 'x-box-item.scss'
})
export class XBoxItem {

  @Element() host: HTMLElement;

  @Prop() width: string;

  @Prop() height: string;

  @Prop() alignSelf: 'stretch' | 'start' | 'end' | 'center' | 'baseline';;

  /**
   * flex
   * order
   * flex-grow
   * flex-shrink
   * flex-basis
   * align-self
   */
  @Prop() sx: any = {};

  componentWillLoad() {

    this.sx = fromJSON(this.sx);

    setCssProperties(this.host, {
      width: this.width,
      height: this.height,
      alignSelf: this.alignSelf,
      ...this.sx
    });
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
