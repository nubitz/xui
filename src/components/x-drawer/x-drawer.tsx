import { Component, Element, Prop, Host, h, Watch } from '@stencil/core';
import { Placement } from '../../interface';
import { setCssProperties } from "../../utils";
import { state } from '../x-control/store'

@Component({
  tag: 'x-drawer',
  styleUrl: 'x-drawer.scss'
})
export class XDrawer {

  @Element() host: HTMLElement;

  @Prop() width: string;

  @Prop() minWidth: string;

  @Prop() height: string;

  @Prop() namespace: string;

  @Prop() position: 'fixed' | 'absolute' | 'relative' | 'sticky';

  @Prop({
    reflect: true,
  }) placement: Placement = "left";

  @Prop({
    reflect: true
  }) overlay: boolean;

  @Prop({
    reflect: true,
    mutable: true
  }) open: boolean;

  @Prop({
    reflect: true,
    mutable: true
  }) motion: 'in' | 'out';

  @Watch('open')
  openHandler() {
    this.motion = (this.open)
      ? 'in' : 'out';
  }

  constructor() {
    setCssProperties(this.host, {
      '--drawer-width': this.width,
      '--drawer-height': this.height,
      '--drawer-position': this.position,
      '--drawer-minwidth': this.minWidth
    });
  }

  componentWillLoad() {
    state.registerEvents = {
      ...state.registerEvents,
      [this.namespace]: {
        callback: () => {
          this.open = !this.open;
        }
      }
    }
  }

  render() {
    console.log(this.placement)
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
