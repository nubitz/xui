import { Component, Element, Prop, Host, h } from '@stencil/core';
import { setCssProperties } from "../../utils";

@Component({
  tag: 'x-card',
  styleUrl: 'x-card.scss'
})
export class XCard {

  @Element() host: HTMLElement;

  @Prop() width: string;

  @Prop() height: string;

  @Prop({
    reflect: true
  }) border: boolean;

  @Prop({
    reflect: true
  }) elevated: boolean;

  @Prop({
    reflect: true
  }) rounded: boolean;

  constructor() {
    setCssProperties(this.host, {
      '--card-width': this.width,
      '--card-height': this.height
    });
  }

  render() {
    return (
      <Host>
        {[
          {
            query: '[slot="card-header"]',
            node: [
              <div role="header">
                <slot name="card-header" />
              </div>
            ],
          }, {
            query: '[slot="card-body"]',
            node: [
              <div role="body">
                <slot name="card-body" />
              </div>
            ],
          }, {
            query: '[slot="card-footer"]',
            node: [
              <div role="footer">
                <slot name="card-footer" />
              </div>
            ],
          }
        ].map(({ query, node }) => {
          const x = this.host.querySelector(query);
          if (x) {
            return (
              node
            )
          }
        })}
        <slot />
      </Host >
    );
  }
}
