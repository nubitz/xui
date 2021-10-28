import { Component, Element, Prop, Host, h } from '@stencil/core';
import { fromJSON, setCssProperties } from '../../utils';

@Component({
  tag: 'x-box',
  styleUrl: 'x-box.scss'
})
export class XBox {

  @Element() host: HTMLElement;

  @Prop() width: string;

  @Prop() height: string;

  @Prop() inline: boolean;

  @Prop() direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';

  @Prop() sx: any = {};

  @Prop() gap: string;

  @Prop() justifyContent: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evently';

  @Prop() alignContent: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-around' | 'space-between';

  @Prop() alignItems: 'stretch' | 'start' | 'end' | 'center' | 'baseline';

  componentWillLoad() {

    this.sx = fromJSON(this.sx);

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
