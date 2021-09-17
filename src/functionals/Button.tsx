import { FunctionalComponent, h } from '@stencil/core';

export const Button: FunctionalComponent<{ [key: string]: any }> = (props, children) => (
    <button {...props} >
        {children}
    </button>
);