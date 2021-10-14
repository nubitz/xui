import { Component, Element, Prop, Host, h } from '@stencil/core';
import { setCssProperties } from "../../utils"
import { GridContent, GridItem } from '../../interface';

@Component({
  tag: 'x-grid',
  styleUrl: 'x-grid.scss'
})
export class XGrid {

  @Element() host: HTMLElement;

  @Prop() columns: string;

  @Prop() justifyContent: GridContent;

  @Prop() justifyItems: GridContent;

  @Prop() alignedContent: GridItem;

  @Prop() alignedItem: GridItem;

  @Prop({
    reflect: true
  }) dense: boolean;

  componentWillRender() {

    setCssProperties(this.host, {
      '--grid-columns': this.columns
    })
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
