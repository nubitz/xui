import { Component, Element, Prop, Host, h } from '@stencil/core';
import { Button } from '../../functionals';
import { Colors } from '../../interface';
import { setCssProperties } from '../../utils';

@Component({
  tag: 'x-button',
  styleUrl: './x-button.scss'
})
export class XButton {

  @Element() host: HTMLElement;

  @Prop() value: string;

  @Prop() name: string;

  @Prop() width: string;

  @Prop() height: string;

  @Prop({
    reflect: true
  }) allyLabel: string;

  @Prop() type: 'submit' | 'button' = 'button';

  @Prop({
    reflect: true
  }) color: Colors = 'secondary';

  @Prop({
    reflect: true
  }) variant: 'solid' | 'outline' | 'none' = 'solid';

  @Prop({
    reflect: true
  }) elevated: boolean;

  @Prop({
    reflect: true
  }) shape: 'circle' | 'pill' | 'soft';

  @Prop({
    reflect: true
  }) border: string;

  @Prop({
    reflect: true
  }) disabled: boolean;

  componentWillLoad() {
    setCssProperties(this.host, {
      '--button-width': this.width,
      '--button-height': this.height,
      '--button-border': this.border
    });
  }

  render() {
    return (
      <Host>
        <Button
          disabled={this.disabled}
          type={this.type}
          name={this.name}
          value={this.value}
          ariaLabel={this.allyLabel}
        >
          <slot></slot>
        </Button>
      </Host>
    );
  }
}
