import { Component, Event, EventEmitter, Prop, Host, h } from '@stencil/core';
import { InputProps } from '../../interface';

@Component({
  tag: 'x-datepicker',
  styleUrl: 'x-datepicker.scss'
})
export class XDatepicker implements Omit<InputProps, 'maxLength'> {

  @Prop() month: number = 1;

  @Prop() year: number = 2021;

  @Prop() fieldName: string;

  @Prop() fieldId: string;

  @Prop({
    mutable: true
  }) value: string;

  @Prop() label: string;

  @Prop() readonly: boolean;

  @Prop() required: boolean;

  @Prop() description: string;

  @Prop() format: string = "**/**/****";

  @Prop() mask: string = "__/__/____";

  @Event() valueChange: EventEmitter<{
    value: string
  }>

  render() {
    return (
      <Host>
        <x-textbox
          label={this.label}
          fieldName={this.fieldName}
          fieldId={this.fieldId}
          value={this.value}
          readonly={this.readonly}
          required={this.required}
          overlay-alignment="right"
          format={this.format}
          mask={this.mask}
        >
          <x-datepicker-calendar
            month={this.month}
            year={this.year}
            value={this.value}
            slot="input-overlay"
            onDateChange={({
              detail: { value } }) => {
              this.value = value;
            }}
          />
          <slot />
        </x-textbox>
      </Host>
    );
  }
}
