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

  @Prop({
    reflect: true
  }) variant: 'video' | 'img';

  @Prop({
    reflect: true
  }) overlay: boolean;

  @Prop() clipPath: string;

  @Prop() mediaIndex: number;

  componentWillRender() {
    setCssProperties(this.host, {
      '--media-index': `${this.mediaIndex}`,
      '--media-clip-path': this.clipPath
    })
  }

  render() {
    return (
      <Host>
        <img src={this.src} />
        <span class="image-overlay"></span>
        <slot />
      </Host>
    );
  }
}
