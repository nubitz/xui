import { Component, Element, Prop, Host, h, Listen, Watch } from '@stencil/core';
import { Placement } from '../../interface';
import { clickAwayListener, setCssProperties } from '../../utils';

@Component({
  tag: 'x-menu',
  styleUrl: 'x-menu.scss'
})
export class XMenu {

  origin: HTMLSpanElement;

  menu: HTMLDivElement;

  events = {
    hover: {},
    click: {}
  }

  @Element() host: HTMLElement;

  @Prop() width: string;

  @Prop() height: string;

  @Prop() activation: "click" | "hover" = "click";

  @Prop({
    reflect: true,
    mutable: true
  }) open: boolean = false;

  @Prop({
    reflect: true
  }) placement: Placement = 'bottom';

  @Listen('keyup', {
    target: "document"
  })
  keyupHandler(evt: KeyboardEvent): void {
    if (evt.key == "Escape") {
      this.open = false;
    }
  }

  @Watch('open')
  openHandler(): void {
    if (this.open && this.activation == 'click') {
      clickAwayListener(this.host, () => {
        this.open = false;
      });
    }
  }

  toggleHandler(): void {
    this.open = !this.open;
  }

  componentWillLoad() {

    let { [this.activation]: event } = {
      click: {
        onClick: (): void => {
          this.toggleHandler();
        }
      },
      hover: {
        onMouseEnter: (): void => {
          this.open = true;
        },
        onMouseLeave: (): void => {
          this.open = false;
        }
      }
    };

    this.events[this.activation] = event;

    setCssProperties(this.host, {
      '--menu-width': this.width,
      '--menu-height': this.height
    });

  }

  render() {

    const { click, hover } = this.events;

    return (
      <Host
        {...hover}
      >
        <span
          class="origin"
          ref={el => this.origin = el}
        />
        <div
          role="menu"
          ref={el => this.menu = el}
        >
          <slot />
        </div>
        <span
          {...click}
        >
          <slot name="menu-control" />
        </span>
      </Host >
    );
  }
}
