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

/**
   display: var(--grid-type, grid);
  grid-template-columns: var(--grid-columns, none);
  // masonry
  grid-template-rows: auto;
  // start end  center stretch space-around space-between space-evenly
  justify-content: var(--gird-justify-content);
  align-content: var(--grid-align-content);
  // start end center stretch
  justify-items: var(--gird-justify-items);
  align-items: var(--grid-align-items);
  // row gap, column gap
  gap: var(--grid-gap, 10px);
 */