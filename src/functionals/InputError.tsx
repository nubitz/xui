import { FunctionalComponent, h } from '@stencil/core';

export const InputError: FunctionalComponent<{ [key: string]: any }> = ({ message, ...props }, children) => (
    <div {...props}>
        {message}  {children}
    </div>
);