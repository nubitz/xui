import { Component, Host, h, Prop, Event, EventEmitter, Element } from '@stencil/core';
import { Dropdown, InputPattern } from '../../functionals';
import { InputProps } from '../../interface';
import { debounce, fromJSON } from '../../utils';

@Component({
  tag: 'x-dropdown',
  styleUrl: 'x-dropdown.scss'
})
export class XDropdown implements Omit<InputProps, 'maxLength'> {

  private element: HTMLSelectElement;

  @Element() host: HTMLXDropdownElement;

  @Prop() label: string;

  @Prop() fieldId: string;

  @Prop() fieldName: string;

  @Prop() readonly: boolean;

  @Prop() description: string;

  /**
    Array<{
      text: string,
      value: string,
      selected: boolean
    }>
   */
  @Prop() items: any = [];

  @Prop() value: string;

  @Prop() required: boolean;

  @Event() valueChange: EventEmitter<{ value: string }>

  valueChangeHandler() {
    this.value = this.element.value;
    this.valueChange.emit({
      value: this.value
    });
  }

  render() {
    return (
      <Host>
        <InputPattern
          id={this.fieldId}
          value={this.value}
          label={this.label}
          required={this.required}
          host={this.host}
          description={this.description}
          errors={[]}
        >
          <Dropdown
            ref={el => {
              if (el) {
                this.element = el
              }
            }}
            id={this.fieldId}
            name={this.fieldName}
            onChange={debounce(() => this.valueChangeHandler())}
            items={fromJSON(this.items as any) as any}
          >
            <slot></slot>
          </Dropdown>
        </InputPattern>
        <slot name="dropdown-bucket" />
      </Host>
    );
  }
}