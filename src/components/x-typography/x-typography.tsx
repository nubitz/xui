import { Component, Prop, Element, Host, h } from '@stencil/core';
import { Typography } from '../../functionals';
import { Colors } from '../../interface';
import { setCssProperties } from '../../utils';

@Component({
  tag: 'x-typography',
  styleUrl: 'x-typography.scss'
})
export class XTypography {

  @Element() host: HTMLElement;

  @Prop() text: string;

  @Prop() weight: string;

  @Prop() size: string;

  @Prop() sx: any = {};

  @Prop({
    reflect: true
  }) color: Colors;

  @Prop({
    reflect: true
  }) variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'title' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'link';

  componentWillLoad() {

    if (typeof this.sx == "string") {
      this.sx = JSON?.parse(this.sx) || {};
    }

    setCssProperties(this.host, {
      ...this.sx
    });
  }

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
