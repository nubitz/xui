import { FunctionalComponent, h } from '@stencil/core';

export const InputLabel: FunctionalComponent<{ [key: string]: any }> = ({ text, ...props }, children) => (
    <label {...props}>
        {text}  {children}
    </label>
);