import { Component, Prop, Element, Event, EventEmitter, Listen, Host, h, Watch } from '@stencil/core';
import { InputPattern } from '../../functionals';
import { InputProps } from '../../interface';

@Component({
  tag: 'x-radiolist',
  styleUrl: 'x-radiolist.scss'
})
export class XRadiolist implements Omit<InputProps, 'readonly' | 'maxLength' | 'description'> {

  private elementMap: {
    [key: string]: {
      value: string,
      host: HTMLXRadioElement
    }
  }

  @Element() host: HTMLElement;

  @Prop() label: string;

  @Prop() fieldId: string;

  @Prop() fieldName!: string;

  @Prop({
    reflect: true
  }) value: string;

  @Prop() items: Array<{
    fieldId: string,
    label: string,
    value: string,
    checked: boolean
  }>;

  @Prop({
    reflect: true
  }) required: boolean;

  @Event() valueChange: EventEmitter<{
    value: string
  }>

  @Watch('value')
  watchValueHandler() {
    this.valueChange.emit({
      value: this.value
    });
  }

  @Listen("radioDidLoad")
  radioDidLoadHandler({ detail }): void {

    const { host, element, label, value } = detail;

    if (!host) return;

    if (host.checked || this.value == value) {
      host.checked = true;
      this.value = value;
    }

    element.name = this.fieldName;

    this.elementMap = {
      ...this.elementMap, [label]: {
        host: host,
        value: value
      }
    }

    host.addEventListener('valueChange', (
      { detail: { value } }) => {
      this.value = value;
    });
  }

  componentWillUpdate() {
    Object.entries(this.elementMap).forEach(
      ([_, { host: radio, value }]) => {
        if (radio.checked && value != this.value) {
          radio.checked = false;
        } else if (value == this.value) {
          radio.checked = true;
        }
      });
  }

  constructor() {
    if (!this.fieldId) {
      this.fieldId = this.fieldName;
    }
  }

  render() {
    return (
      <Host
        role="radiogroup"
        aria-required={this.required}
      >
        <InputPattern
          id={this.fieldId}
          host={this.host}
          required={this.required}
          value={this.value}
          label={this.label}
          errors={[]}
        >
          {
            this.items?.map(({ fieldId, label, value, checked }) => (
              <x-radio
                fieldId={fieldId}
                label={label}
                value={value}
                checked={checked}
              />
            ))
          }
          <slot></slot>
        </InputPattern>
      </Host>
    );
  }
}
