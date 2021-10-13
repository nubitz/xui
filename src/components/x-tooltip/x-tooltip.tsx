import { Component, Element, Listen, Prop, Host, h } from '@stencil/core';
import { Placement } from '../../interface';
import { setCssProperties } from '../../utils';

@Component({
  tag: 'x-tooltip',
  styleUrl: 'x-tooltip.scss'
})
export class XTooltip {

  origin: HTMLSpanElement;

  tooltip: HTMLDivElement;

  @Element() host: HTMLElement;

  @Prop() width: string;

  @Prop() height: string;

  @Prop({
    reflect: true,
    mutable: true
  }) open: boolean;

  @Prop({
    reflect: true
  }) placement: Placement = 'top';

  @Listen('mouseover')
  mouseoverHandler(): void {
    this.open = true;
  }

  @Listen('mouseout')
  mouseoutHandler(): void {
    this.open = false;
    this.host.blur()
  }

  @Listen('focus')
  focusHandler(): void {
    this.open = true;
  }

  @Listen('blur')
  blurHandler(): void {
    this.open = false;
  }

  componentDidLoad() {
    setCssProperties(this.host, {
      '--tooltip-width': this.width,
      '--tooltip-height': this.height
    });
  }

  render() {
    return (
      <Host
        tabindex="0"
      >
        <span
          class="origin"
          ref={el => this.origin = el}
        />
        <div
          role="tooltip"
          ref={el => this.tooltip = el}
          onClick={(e) => e.stopImmediatePropagation()}
        >
          <slot />
          <span class="caret"></span>
        </div>
        <slot name="tooltip-control" />
      </Host>
    );
  }
}
