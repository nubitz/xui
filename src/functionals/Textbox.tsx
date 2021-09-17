import { FunctionalComponent, h } from "@stencil/core";

export const Textbox: FunctionalComponent<{
    [key: string]: any
}> = (props) => (
    <input type="textbox" {...props} />
);