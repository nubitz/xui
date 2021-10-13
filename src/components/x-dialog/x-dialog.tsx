import { Component, Element, Prop, Host, h } from '@stencil/core';
import { debounce, setCssProperties } from '../../utils';
import { state } from '../x-control/store';

@Component({
  tag: 'x-dialog',
  styleUrl: 'x-dialog.scss'
})
export class XDialog {

  @Element() host: HTMLElement;

  @Prop() name!: string;

  @Prop({
    reflect: true
  }) width: string;

  @Prop({
    reflect: true
  }) height: string;

  @Prop({
    reflect: true,
    mutable: true
  }) open: boolean;

  @Prop({
    reflect: true
  }) disableHeaderControl: boolean;

  @Prop({
    reflect: true
  }) backdrop: boolean;

  @Prop({
    reflect: true
  }) actionRequired: boolean;

  closeHandler() {
    if (!this.actionRequired) {
      this.closeDialog();
    }
  }

  closeDialog() {
    this.open = false;
  }

  openDialog() {
    this.open = true;
  }

  componentWillLoad() {
    state.registerEvents = {
      ...state.registerEvents,
      [this.name]: {
        callback: () => this.openDialog()
      }
    }
    setCssProperties(this.host, {
      '--dialog-width': this.width,
    })
  }



  render() {
    return (
      <Host
        onKeydown={debounce(
          (keyboard: KeyboardEvent): void => {
            if (keyboard?.key == 'Escape') {
              this.closeHandler();
            }
          })
        }
        onClick={debounce((): void => this.closeHandler())}
      >
        <div
          role="dialog"
          class="x-dialog"
          onClick={(e) => e.stopPropagation()}
        >
          {
            [
              {
                name: 'dialog-header',
                html: <div class='dialog-header'>
                  <slot name='dialog-header' />
                  {!this.disableHeaderControl && (
                    <x-button
                      class="x-dialog--close"
                      variant="none"
                      onClick={debounce(() => this.closeDialog())}
                    >
                      <x-icon name="times" solid />
                    </x-button>
                  )}
                </div>
              },
              {
                name: 'dialog-body',
                html: <div class='dialog-body'>
                  <slot name='dialog-body' />
                </div>
              },
              {
                name: 'dialog-footer',
                html: <div class='dialog-footer'>
                  <slot name='dialog-footer' />
                </div>
              }
            ].map(
              ({ name, html }) => {
                const hasSlot = this.host.querySelector(`[slot=${name}]`);
                if (hasSlot) {
                  return (
                    html
                  )
                }
              })
          }
          <slot></slot>
        </div>
      </Host >
    );
  }
}
