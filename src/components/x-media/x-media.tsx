import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'x-media',
  styleUrl: 'x-media.scss',
})
export class XMedia {

  @Prop() src: string;

  @Prop({
    reflect: true
  }) center: boolean;

  render() {
    return (
      <Host>
        <img src={this.src} />
      </Host>
    );
  }
}
