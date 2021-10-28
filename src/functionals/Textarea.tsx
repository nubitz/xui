import { FunctionalComponent, h } from "@stencil/core";

export const Textarea: FunctionalComponent<{
    [key: string]: any
}> = (props, children) => (
    [
        <textarea  {...props} >
        </textarea>,
        children
    ]
);
