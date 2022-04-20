import { Component, Event, EventEmitter, Prop, Host, h } from '@stencil/core';
import { Calendar } from '../../functionals';
import { InputProps } from '../../interface';
import { debounce } from '../../utils';

@Component({
  tag: 'x-datepicker',
  styleUrl: 'x-datepicker.scss'
})
export class XDatepicker implements Omit<InputProps, 'maxLength'> {

  @Prop() month: number = 1;

  @Prop() year: number = 2021;

  @Prop() fieldName: string;

  @Prop() fieldId: string;

  @Prop() value: string;

  @Prop() label: string;

  @Prop() readonly: boolean;

  @Prop() required: boolean;

  @Prop() description: string;

  @Event() valueChange: EventEmitter<{
    value: string
  }>

  render() {

    const date = new Date(this.year, this.month, 1);
    const [year, month] = [
      date.getFullYear(),
      date.toLocaleString('default',
        { month: 'long' }
      )];

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
          format="**/**/****"
          mask="__/__/____"
        >
          <x-menu
            width="300px"
            placement="bottom-right"
            slot="input-overlay"
          >
            <x-button
              slot="menu-control"
              color="info"
              variant="none"
            >
              <x-icon solid name="calendar" />
            </x-button>
            <x-box
              direction="column"
              sx={{
                border: '1px solid #dadada'
              }}
            >
              <x-box
                direction="row"
              >
                <x-box-item
                  sx={{
                    flex: 1
                  }}
                >
                  <x-button
                    color="info"
                    variant="none"
                    onClick={() => {
                    }}
                  >
                    {month}
                  </x-button>
                </x-box-item>
                <x-box-item
                  sx={{
                    flex: 1
                  }}
                >
                  <x-button
                    color="info"
                    variant="none"
                    onClick={() => {
                    }}
                  >
                    {year}
                  </x-button>
                </x-box-item>
                <x-button
                  color="info"
                  variant="none"
                  onClick={() => {
                    this.month = this.month - 1;
                  }}
                >
                  <x-icon solid name="chevron-left" />
                </x-button>
                <x-button
                  color="info"
                  variant="none"
                  onClick={() => {
                    this.month = this.month + 1;
                  }}
                >
                  <x-icon solid name="chevron-right" />
                </x-button>
              </x-box>
              <Calendar
                month={this.month}
                year={this.year}
                dayClick={debounce(({
                  day, month, year
                }) => {
                  this.value = [
                    `${month}`.padStart(2, '0'), `${day}`.padStart(2, '0'), year
                  ].join('')
                })}
              />
              <slot></slot>
            </x-box>
          </x-menu>
        </x-textbox>
      </Host>
    );
  }
}

