import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'x-typography',
  styleUrl: 'x-typography.scss',
  shadow: true,
})
export class XTypography {

  @Prop({
    reflect: true
  }) variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'title' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption';

  render() {
    return (
      <Host>
        <slot>
        </slot>
      </Host>
    );
  }

}
