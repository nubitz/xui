import { Component, Element, Host, h, Prop } from '@stencil/core';
import { setCssProperties } from "../../utils"
@Component({
  tag: 'x-container',
  styleUrl: 'x-container.scss',
})
export class XContainer {

  @Element() host: HTMLElement;

  @Prop() width: string;

  @Prop() height: string;

  @Prop() background: string;

  @Prop() overlay: boolean;

  componentWillLoad() {
    setCssProperties(this.host, {
      '--container-width': this.width,
      '--container-height': this.height,
      '--container-background-color': this.background
    });
  }

  render() {
    return (
      <Host>
        <slot name="container-background" />
        <div class="inner-wrapper">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
