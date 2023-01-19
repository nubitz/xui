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

  resetForm(): void {

  }

  clearForm(): void {

  }

  submitHandler(): void {
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
