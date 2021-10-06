import { FunctionalComponent, h } from '@stencil/core';

export const Input: FunctionalComponent<{ [key: string]: any }> = (props, children) => (
    [
        <input {...props} />, children
    ]
);