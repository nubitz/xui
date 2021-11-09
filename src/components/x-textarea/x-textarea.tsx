import { Component, Element, EventEmitter, Event, Host, h, Prop, State } from '@stencil/core';
import { InputPattern, Textarea } from '../../functionals';
import { InputProps } from '../../interface';
import { debounce, setCssProperties } from '../../utils';

@Component({
  tag: 'x-textarea',
  styleUrl: 'x-textarea.scss'
})
export class XTextarea implements InputProps {

  nativeInput: HTMLTextAreaElement;

  @Element() host: HTMLElement

  @State() counter: number = 0;

  @Prop() value: string;

  @Prop() label: string;

  @Prop() fieldId: string;

  @Prop() fieldName: string;

  @Prop() maxLength: number;

  @Prop({
    reflect: true
  }) description: string;

  @Prop({
    reflect: true
  }) readonly: boolean;

  @Prop({
    reflect: true
  }) required: boolean;

  @Prop() width: string;

  @Prop() height: string;

  @Event() valueChange: EventEmitter<{ value: string }>

  valueChangeHandler(): void {
    this.value = this.nativeInput.value;
    this.valueChange.emit({
      value: this.value
    });
  }

  textCounter(): void {
    if (this.maxLength) {
      this.value = this.nativeInput.value;
    }
  }

  componentWillLoad() {
    setCssProperties(this.host, {
      width: this.width,
      height: this.height
    })
  }

  componentDidLoad() {
    this.textCounter();
  }

  constructor() {
    if (!this.fieldId) {
      this.fieldId = this.fieldName;
    }
  }

  render() {
    return (
      <Host>
        <InputPattern
          id={this.fieldId}
          label={this.label}
          required={this.required}
          errors={['Error']}
          value={this.value}
          host={this.host}
          slots={[
            <slot name="input-help" />
          ]}
        >
          <Textarea
            id={this.fieldId}
            ref={(el) => {
              if (el != null) {
                this.nativeInput = el;
              }
            }}
            value={this.value}
            name={this.fieldName}
            maxLength={this.maxLength}
            onChange={debounce(() => this.valueChangeHandler())}
            onKeyup={debounce(() => this.textCounter())}
            onPaste={debounce(() => this.textCounter())}
            onCut={debounce(() => this.textCounter())}
          />
          <slot></slot>
        </InputPattern>
        {
          (this.maxLength) && (
            <span
              slot="input-help"
              aria-live="polite"
              aria-atomic="true"
            >
              Characters remaining: {this.maxLength - this.value?.length || 0}
            </span>
          )
        }
      </Host>
    );
  }
}
