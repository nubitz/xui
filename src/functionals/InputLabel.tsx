import { FunctionalComponent, h } from '@stencil/core';

export const InputLabel: FunctionalComponent<{ [key: string]: any }> = ({ label, required, ...props }, children) => (
    <div>
        {required && (
            <x-icon solid name="asterisk" />
        )}
        <label {...props}>
            {label} {children}
        </label>
    </div>
);