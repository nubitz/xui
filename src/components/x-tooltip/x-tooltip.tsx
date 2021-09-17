import { Component, Element, Listen, Prop, Host, h } from '@stencil/core';
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
  }) placement: 'top' | 'left' | 'bottom' | 'right' = 'top';

  @Listen('mouseover')
  mouseoverHandler(): void {
    this.setPosition();
    this.open = true;
  }

  @Listen('mouseout')
  mouseoutHandler(): void {
    this.open = false;
    this.host.blur()
  }

  @Listen('focus')
  focusHandler(): void {
    this.setPosition();
    this.open = true;
  }

  @Listen('blur')
  blurHandler(): void {
    this.open = false;
  }

  setPosition() {

    const { top, left } = this.origin.getBoundingClientRect()

    setCssProperties(this.host, {
      '--tooltip-top': top + 'px',
      '--tooltip-left': left + 'px'
    })
  }

  componentDidLoad() {

    setCssProperties(this.host, {
      '--tooltip-width': this.width,
      '--tooltip-height': this.height
    });
    this.setPosition();
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
