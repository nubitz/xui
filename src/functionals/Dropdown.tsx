import { FunctionalComponent, h } from '@stencil/core';

export const Dropdown: FunctionalComponent<{
    [key: string]: any,
    items?: Array<{
        text: string,
        value: string,
        selected?: boolean
    }>
}> = ({ items, ...attrs }, children) => (
    <select {...attrs} >
        {
            items?.map(({ value, selected, text }) => (
                <option value={value} selected={selected}>
                    {text}
                </option>
            ))
        }{children}
    </select >
)
