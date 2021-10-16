import { Component, Element, Prop, Host, h } from '@stencil/core';
import { setCssProperties } from '../../utils';

@Component({
  tag: 'x-box',
  styleUrl: 'x-box.scss'
})
export class XBox {

  @Element() host: HTMLElement;

  @Prop() width: string;

  @Prop() height: string;

  @Prop() inline: boolean;

  @Prop() direction: 'row' | 'column';

  @Prop() sx: any = {};

  @Prop() gap: string;

  @Prop() alignSelf: string;

  @Prop() justifyContent: 'space-evently' | 'space-between' | 'end' | 'center' | 'start';

  @Prop() alignContent: 'stretch' | 'center' | 'space-evently' | 'space-between';

  @Prop() alignItems: 'stretch' | 'center' | 'baseline' | 'start' | 'end' | 'self-start' | 'self-end' | 'normal';

  componentWillLoad() {

    if (typeof this.sx == "string") {

      this.sx = JSON?.parse(this.sx) || {};
    }

    setCssProperties(this.host, {
      '--box-align-items': this.alignItems,
      '--box-align-content': this.alignContent,
      '--box-justify-content': this.justifyContent,
      '--box-width': this.width,
      '--box-height': this.height,
      '--box-gap': this.gap,
      '--box-direction': this.direction,
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
