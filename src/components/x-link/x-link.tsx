import { Component, Prop, Element, Event, EventEmitter, Host, h } from '@stencil/core';
import { debounce } from '../../utils';

@Component({
  tag: 'x-link',
  styleUrl: 'x-link.scss',
})
export class XLink {

  @Element() host: HTMLLinkElement;

  @Prop() target: string;

  @Prop() type: string;

  @Prop() download: boolean;

  @Prop() href: string = 'javascript:void(0)';

  @Prop() text: string;

  @Prop({
    reflect: true
  }) underline: 'none' | 'hover' | 'always' = 'none';

  @Event() linkClick: EventEmitter;

  clickHandler(evt): void {
    this.linkClick.emit(evt);
  }

  componentWillLoad() {
    this.type = (
      this.type == 'external' &&
      this.target == '_blank')
      ? `${this.type} noopener noreffer`
      : this.type;
  }

  render() {
    return (
      <Host>
        <x-typography>
          <a
            href={this.href}
            target={this.target}
            rel={this.type}
            download={this.download}
            onClick={debounce((evt): void => this.clickHandler(evt))}
          >
            {this.text}
            <slot />
          </a>
        </x-typography>
      </Host>
    );
  }
}
