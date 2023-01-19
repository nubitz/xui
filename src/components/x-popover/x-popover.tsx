import { Component, Element, Prop, Host, h, Event, EventEmitter } from '@stencil/core';
import { Placement } from '../../interface';
import { debounce, setCssProperties } from '../../utils';

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

  @Prop() headerControl: boolean = false;

  @Prop({
    reflect: true,
    mutable: true
  }) open: boolean;

  @Prop({
    reflect: true
  }) placement: Placement = 'top';

  @Prop({
    reflect: true
  }) variant: 'outline' | 'elevation' | 'none' = 'outline';

  openHandler(): void {
    this.open = !this.open;
    this.openPopover.emit({
      open: this.open
    });
  }

  @Event() openPopover: EventEmitter<{
    open: boolean
  }>

  componentDidLoad() {
    setCssProperties(this.host, {
      '--popover-width': this.width,
      '--popover-height': this.height
    });
  }

  render() {
    return (
      <Host>
        <span class="origin" ref={el => this.origin = el} />
        <div role="popover" ref={el => this.popover = el} >
          {this.headerControl && (
            <x-button
              class="x-popover--close"
              variant="none"
              onClick={debounce(() => this.openHandler())}
            >
              <x-icon name="times" solid />
            </x-button>
          )}
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
