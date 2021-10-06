import { FunctionalComponent, h } from '@stencil/core';

export const InputHelperText: FunctionalComponent<{ [key: string]: any }> = ({ text, ...props }, children) => (
    <div {...props}>
        {text}  {children}
    </div>
);