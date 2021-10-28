import { Component, Element, Event, EventEmitter, Prop, Host, h } from '@stencil/core';
import { Input, InputLabel } from '../../functionals';
import { InputProps } from '../../interface';
import { debounce } from '../../utils';

@Component({
  tag: 'x-checkbox',
  styleUrl: 'x-checkbox.scss',
})
export class XCheckbox implements Omit<InputProps, 'fieldName' | 'maxLength' | 'readonly' | 'description'> {

  private element;

  @Element() host: HTMLXRadioElement;

  @Prop() value!: string;

  @Prop() label!: string;

  @Prop() fieldId!: string;

  @Prop({
    reflect: true
  }) checked: boolean

  @Prop({
    reflect: true
  }) required: boolean

  @Event({
    bubbles: false
  }) valueChange: EventEmitter<{
    value: string
  }>

  @Event() checkboxDidLoad: EventEmitter<{
    label: string,
    value: string,
    host: HTMLXRadioElement,
    element: HTMLInputElement
  }>

  clickHandler() {
    this.valueChange.emit({
      value: this.value
    })
  }

  componentDidLoad() {

    this.checkboxDidLoad.emit({
      label: this.label,
      value: this.value,
      host: this.host,
      element: this.element
    })
  }

  render() {
    return (
      <Host>
        <Input
          id={this.fieldId}
          ref={(el) => {
            el && (
              this.element = el
            )
          }}
          type="checkbox"
          checked={this.checked}
          onCLick={debounce(() => this.clickHandler())}
        />
        <InputLabel
          label={this.label}
          for={this.fieldId}
          required={this.required}
        />
        <slot></slot>
      </Host>
    );
  }
}
