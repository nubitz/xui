import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Textbox',
    component: 'x-textbox',
    parameters: {
        layout: 'centered',
        jsx: {
            disable: false
        }
    },
    argTypes: {
    },
};

const Template = (props) => (
    <x-textbox
        {...props}
    >
        <x-icon name="address-book" slot="input-overlay" />
    </x-textbox>
);
export const Textbox = Template.bind({});

Textbox.args = {
    format: '***-*-*(*)',
    mask: '___-_-_(_)'
}