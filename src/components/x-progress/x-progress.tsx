import { Component, Element, Event, EventEmitter, Host, h, Prop } from '@stencil/core';
import { InputPattern } from '../../functionals';
import { InputProps } from '../../interface';
import { debounce } from '../../utils';

@Component({
  tag: 'x-progress',
  styleUrl: 'x-progress.scss',
})
export class XProgress implements Omit<InputProps, 'readonly' | 'required' | 'maxLength'> {

  @Element() host: HTMLElement

  @Prop() label: string;

  @Prop() fieldId: string;

  @Prop() fieldName: string;

  @Prop() value: string = "0";

  @Prop() max: number = 100;

  @Prop() description: string;

  @Event() valueChange: EventEmitter<{ value: string }>

  render() {
    return (
      <Host>
        <InputPattern
          id={this.fieldId}
          label={this.label}
          host={this.host}
          errors={[]}
          required={false}
          value={this.value}
          description={this.description}
        >
          <progress
            role="progressbar"
            max={this.max}
            value={this.value}
            aria-valuemin="0"
            aria-valuemax={this.max}
            aria-valuenow={this.value}
            onChange={debounce(() => {
              this.valueChange.emit({ value: this.value })
            })}
          />
          <slot></slot>
        </InputPattern>
      </Host>
    );
  }
}
