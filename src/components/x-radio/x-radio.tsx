import { Component, Element, Event, EventEmitter, Prop, Host, h } from '@stencil/core';
import { Input, InputLabel } from '../../functionals';
import { InputProps } from '../../interface';
import { debounce } from '../../utils';

@Component({
  tag: 'x-radio',
  styleUrl: 'x-radio.scss',
})
export class XRadio implements Omit<InputProps, 'fieldName' | 'maxLength' | 'required' | 'readonly' | 'description'> {

  private element;

  @Element() host: HTMLXRadioElement;

  @Prop() value!: string;

  @Prop() label!: string;

  @Prop() fieldId!: string;

  @Prop({
    reflect: true
  }) checked: boolean

  @Event({
    bubbles: false
  }) valueChange: EventEmitter<{
    value: string
  }>

  @Event() radioDidLoad: EventEmitter<{
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

    this.radioDidLoad.emit({
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
          type="radio"
          checked={this.checked}
          onCLick={debounce(() => this.clickHandler())}
        />
        <InputLabel
          label={this.label}
          for={this.fieldId}
        />
        <slot></slot>
      </Host>
    );
  }
}
