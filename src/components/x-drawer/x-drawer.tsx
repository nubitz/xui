import { Component, Element, Prop, Host, h } from '@stencil/core';
import { Placement } from '../../interface';
import { setCssProperties } from "../../utils";
import { onChange } from '../x-control/store'

@Component({
  tag: 'x-drawer',
  styleUrl: 'x-drawer.scss'
})
export class XDrawer {

  @Element() host: HTMLElement;

  @Prop() width: string;

  @Prop() height: string;

  @Prop() namespace: string;

  @Prop() position: 'fixed' | 'absolute' | 'relative' | 'sticky';

  @Prop({
    reflect: true
  }) placement: Placement = "left";

  @Prop({
    reflect: true
  }) overlay: boolean;

  @Prop({
    reflect: true
  }) open: boolean;

  constructor() {
    setCssProperties(this.host, {
      '--drawer-width': this.width,
      '--drawer-height': this.height,
      '--drawer-position': this.position
    });
  }

  componentWillLoad() {
    onChange('control', ({ name }) => {
      if (name == this.namespace) {
        this.open = !this.open;
      }
    })
  }

  render() {
    return (
      <Host>
        <div
          aria-hidden="true"
          class="drawer-overlay"
          onClick={() => {
            this.open = false;
          }}
        >
        </div>
        <div class="drawer">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
