import { Component, Prop, Host, h } from '@stencil/core';
import { Typography } from '../../functionals';
import { Colors } from '../../interface';
@Component({
  tag: 'x-typography',
  styleUrl: 'x-typography.scss'
})
export class XTypography {

  @Prop() text: string;

  @Prop() weight: string;

  @Prop() size: string;

  @Prop({
    reflect: true
  }) color: Colors;

  @Prop({
    reflect: true
  }) variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'title' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'link';

  render() {
    return (
      <Host>
        <Typography
          variant={this.variant}
        >
          {this.text}
          <slot />
        </Typography>
      </Host>
    );
  }
}
