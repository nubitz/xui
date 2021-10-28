import { FunctionalComponent, h } from '@stencil/core';

export const InputLabel: FunctionalComponent<{ [key: string]: any }> = ({ label, ...props }, children) => (
    <label {...props}>
        {label}  {children}
    </label>
);