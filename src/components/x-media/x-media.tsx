import { Component, Element, Prop, Host, h } from '@stencil/core';
import { setCssProperties } from "../../utils"
@Component({
  tag: 'x-media',
  styleUrl: 'x-media.scss',
})
export class XMedia {

  @Element() host: HTMLElement;

  @Prop() src: string;

  @Prop({
    reflect: true
  }) center: boolean;

  @Prop() mediaIndex: number;

  @Prop() variant: 'video' | 'img';

  componentWillRender() {
    setCssProperties(this.host, {
      '--media-index': `${this.mediaIndex}`
    })
  }

  render() {
    return (
      <Host>
        <img src={this.src} />
        <slot />
      </Host>
    );
  }
}
