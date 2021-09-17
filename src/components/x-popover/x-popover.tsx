import { Component, Element, Listen, Prop, Host, h } from '@stencil/core';
import { setCssProperties } from '../../utils';

@Component({
  tag: 'x-popover',
  styleUrl: 'x-popover.scss'
})
export class XPopover {

  origin: HTMLSpanElement;

  popover: HTMLDivElement;

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

  openHandler() {
    this.open = !this.open;
  }

  @Listen('resize', { target: 'window' })
  resizeHandler() {
    this.open && this.setPosition();
  }

  @Listen('scroll', { target: 'document' })
  scrollHandler() {
    this.open && this.setPosition();
  }

  setPosition() {

    const { top, left } = this.origin.getBoundingClientRect()

    setCssProperties(this.host, {
      '--popover-top': top + 'px',
      '--popover-left': left + 'px'
    })
  }

  componentDidLoad() {

    setCssProperties(this.host, {
      '--popover-width': this.width,
      '--popover-height': this.height
    });
    this.setPosition();
  }

  render() {
    return (
      <Host>
        <span class="origin" ref={el => this.origin = el} />
        <div role="popover" ref={el => this.popover = el} >
          <slot />
        </div>
        <span
          onClick={() => this.openHandler()}
        >
          <slot name="popover-control" />
        </span>
      </Host>
    );
  }
}
