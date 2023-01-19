import { Component, Element, Event, EventEmitter, Prop, Host, h } from '@stencil/core';
import { Button } from '../../functionals';
import { Colors } from '../../interface';
import { debounce, setCssProperties } from '../../utils';

/**
 * XButton
 * 
 * @export
 * @class XButton
 * @extends {Component}
 */
@Component({
    tag: 'x-button',
    styleUrl: './x-button.scss'
})
export class XButton {

    /**
     * Element of the host element
     * 
     * @type {HTMLElement}
     * @memberof XButton
     */
    @Element() host: HTMLElement;

    /**
     * Value of the button
     * 
     * @type {string}
     * @memberof XButton
     */
    @Prop() value: string;

    /**
     * Name of the button
     * 
     * @type {string}
     * @memberof XButton
     */
    @Prop() name: string;

    /**
     * Width of the button
     * 
     * @type {string}
     * @memberof XButton
     */
    @Prop() width: string;

    /**
     * Height of the button
     * 
     * @type {string}
     * @memberof XButton
     */
    @Prop() height: string;

    /**
     * aria-label of the button
     * 
     * @type {string}
     * @memberof XButton
     */
    @Prop({
        reflect: true
    }) allyLabel: string;

    /**
     * Type of the button
     * 
     * @type {('submit' | 'button')}
     * @memberof XButton
     */
    @Prop() type: 'submit' | 'button' = 'button';

    /**
     * Color of the button
     * 
     * @type {Colors}
     * @memberof XButton
     */
    @Prop({
        reflect: true
    }) color: Colors = 'secondary';

    /**
     * Variant of the button
     * 
     * @type {('solid' | 'outline' | 'none')}
     * @memberof XButton
     */
    @Prop({
        reflect: true
    }) variant: 'solid' | 'outline' | 'none' = 'solid';

    /**
     * Elevated of the button
     * 
     * @type {boolean}
     * @memberof XButton
     */
    @Prop({
        reflect: true
    }) elevated: boolean;

    /**
     * Shape of the button
     * 
     * @type {('circle' | 'pill' | 'soft')}
     * @memberof XButton
     */
    @Prop({
        reflect: true
    }) shape: 'circle' | 'pill' | 'soft';

    /**
     * Border of the button
     * 
     * @type {string}
     * @memberof XButton
     */
    @Prop({
        reflect: true
    }) border: string;

    /**
     * Disabled of the button
     * 
     * @type {boolean}
     * @memberof XButton
     */
    @Prop({
        reflect: true
    }) disabled: boolean;

    /**
     * Event that is emitted when the button is clicked
     * 
     * @type {EventEmitter<{ unknown }>}
     * @memberof XButton
     */
    @Event() buttonClicked: EventEmitter<{ unknown }>

    /**
     * Lifecycle hook that is called when the component is about to load
     * 
     * @memberof XButton
     */
    componentWillLoad() {
        setCssProperties(this.host, {
            '--button-width': this.width,
            '--button-height': this.height,
            '--button-border': this.border
        });
    }

    /**
     * Renders the component
     * 
     * @returns {JSX.Element}
     * @memberof XButton
     */
    render() {
        return (
            <Host>
                <Button
                    disabled={this.disabled}
                    type={this.type}
                    name={this.name}
                    value={this.value}
                    ariaLabel={this.allyLabel}
                    onClick={debounce(evt => this.buttonClicked.emit(evt))}
                >
                    <slot></slot>
                </Button>
            </Host>
        );
    }
}
