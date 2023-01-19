import { Component, Element, Prop, Event, EventEmitter, forceUpdate, State, Method, Host, h } from '@stencil/core';
import { Input, InputMask, InputOverlay, InputPattern } from '../../functionals';
import { debounce } from '../../utils';
import { InputProps } from '../../interface';

@Component({
  tag: 'x-textbox',
  styleUrl: 'x-textbox.scss',
})
export class XTextbox implements InputProps {

  private nativeInput: HTMLInputElement;

  @Element() host: HTMLElement;

  @State() focus: boolean;

  @Prop() type: 'text' | 'password' = "text";

  @Prop() value: string;

  @Prop({
    reflect: true
  }) readonly: boolean;

  @Prop() label!: string;

  @Prop() fieldId: string;

  @Prop() fieldName: string;

  @Prop() required: boolean;

  @Prop({
    reflect: true
  }) format: string;

  @Prop() mask: string;

  @Prop() overlayAlignment: 'left' | 'right' = 'left'

  @Prop() maxLength: number;

  @Prop() description: string;

  @Event() valueChange: EventEmitter<{ value: any }>

  @Method()
  async getNativeElement(
    callback?: (input: HTMLInputElement) => void): Promise<unknown> {
    return (
      Promise.resolve(
        this.nativeInput
      ).then(input => {
        if (callback) {
          callback(input)
        } else {
          return (input)
        }
      })
    );
  }

  keypressHandler(key: string): void {
    if (this.format) {
      this.value = this.nativeInput.value;
      if (['ArrowLeft', 'ArrowRight'].indexOf(key) != -1) {
        forceUpdate(this.host);
      }
    }
  }

  valueChangedHandler(): void {
    this.value = this.nativeInput.value;
    this.valueChange.emit({
      value: this.value
    });
  }

  constructor() {
    if (!this.fieldId) {
      this.fieldId = this.fieldName
    }
  }

  render() {
    return (
      <Host>
        <InputPattern
          id={this.fieldId}
          label="label"
          value={this.value}
          host={this.host}
          errors={[]}
          required={this.required}
          description={this.description}
          slots={[
            <slot name="label" />,
            <slot name="description" />
          ]}
        >
          <Input
            id={this.fieldId}
            ref={(el) => {
              if (el != null) {
                this.nativeInput = el;
              }
            }}
            type={this.type}
            value={this.value}
            name={this.fieldName}
            maxLength={this.maxLength}
            readonly={this.readonly}
            onChange={debounce(() => {
              this.valueChangedHandler();
            })}
            onKeyup={debounce(
              (evt: KeyboardEvent) => {
                this.keypressHandler(evt.key);
              })}
            onFocus={() => {
              this.focus = true;
            }}
            onBlur={() => {
              this.focus = false;
            }}
          >
            <slot />
          </Input>
          <InputOverlay
            host={this.host}
            align={this.overlayAlignment}
            style={{
              [this.overlayAlignment]: 0
            }}
          >
            <slot name="input-overlay" />
          </InputOverlay>
          <InputMask
            value={this.value}
            focus={this.focus}
            mask={this.mask}
            format={this.format}
            input={this.nativeInput}
          />
        </InputPattern>
      </Host>
    );
  }
}
