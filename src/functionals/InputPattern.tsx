import { FunctionalComponent, h } from '@stencil/core';
import { InputError, InputHelperText, InputLabel } from '.';

export const InputPattern: FunctionalComponent<{
    id: string,
    label: string,
    required: boolean,
    errors: string[],
    value: string,
    host: HTMLElement,
    description: string,
    [key: string]: any
}> = ({ id, label, host, errors, description, required, slots, ...props }, children) => (
    <x-input-styles
        error={errors.length > 0}
    >
        {slots}
        <InputLabel
            id={`${id}-label`}
            for={id}
            host={host}
            label={label}
            required={required}
        />
        <div class="input-wrapper" {...props}>
            {children}
        </div>
        <InputError
            id={id}
            host={host}
            error={errors}
        />
        <InputHelperText
            id={`${id}-help`}
            text={description}
        >
            <slot name="input-help" />
        </InputHelperText>
    </x-input-styles>
);
