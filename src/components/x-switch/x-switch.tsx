import { Component, Element, Event, EventEmitter, Prop, Host, h } from '@stencil/core';
import { Input, InputLabel } from '../../functionals';
import { InputProps } from '../../interface';
import { setCssProperties } from '../../utils';

@Component({
  tag: 'x-switch',
  styleUrl: 'x-switch.scss'
})
export class XSwitch implements Omit<InputProps, 'maxLength' | 'readonly'> {

  @Element() host: HTMLElement;

  @Prop() label: string;

  @Prop() fieldName: string;

  @Prop() fieldId: string = "abc";

  @Prop() value: string;

  @Prop() description: string;

  @Prop() width: string;

  @Prop() height: string;

  @Prop({
    reflect: true
  }) checked: boolean;

  @Prop({
    reflect: true
  }) required: boolean;

  @Event() valueChange: EventEmitter<{ value: string }>

  componentWillLoad() {
    setCssProperties(this.host, {
      '--switch-width': this.width,
      '--switch-height': this.height
    })
  }

  render() {
    return (
      <Host>
        <InputLabel
          id={`${this.fieldId}-label`}
          for={this.fieldId}
          ariaLabel={this.label}
          description={this.description}
          slots={[
            <slot name="input-help" />
          ]}
        >
          <span class="x-switch-line"></span>
          <span class="x-switch"></span>
        </InputLabel>
        <Input
          id={this.fieldId}
          name={this.fieldName}
          value={this.value}
          type="checkbox"
          onCLick={() => {
            this.checked = !this.checked;
            this.valueChange.emit({
              value: this.value
            })
          }}
        />
        <slot></slot>
      </Host>
    );
  }
}
