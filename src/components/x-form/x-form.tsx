import { Component, Prop, Listen, Host, h } from '@stencil/core';

@Component({
  tag: 'x-form',
  styleUrl: 'x-form.scss'
})
export class XForm {

  @Prop() errors: [];

  @Listen('valueChange')
  valueChangeHandler({ detail }) {

    console.log(detail)
  }

  submitHandler() {

  }

  render() {
    return (
      <Host>
        <form>
          <slot></slot>
        </form>
      </Host>
    );
  }
}
