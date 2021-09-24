import { Component, Element, Prop, Host, h } from '@stencil/core';
import { state } from './store';

@Component({
  tag: 'x-control',
  styleUrl: 'x-control.css',
})
export class XControl {

  @Element() host: HTMLElement;

  @Prop() name!: string;

  @Prop() target: string;

  @Prop() trigger: string;

  componentWillLoad() {

    this.trigger?.split(',').forEach(action => {

      this.host.addEventListener(action, _ => {
        state.control = {
          ...state.control,
          name: this.name,
          target: this.target,
          trigger: action
        }
      })
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
