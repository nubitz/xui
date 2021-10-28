import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Checkbox',
    component: 'x-checkbox',
    parameters: {
        layout: 'centered',
        jsx: {
            disable: false
        }
    },
    argTypes: {
        label: {
            control: {
                type: 'text'
            }
        },
        value: {
            control: {
                type: 'text'
            }
        },
        required: {
            control: {
                type: 'boolean'
            }
        },
        description: {
            control: {
                type: 'text'
            }
        },
    },
};

const Template = (props) => (
    <x-checkbox {...props} />
);
export const Checkbox = Template.bind({});

Checkbox.args = {
    label: '[Label]',
    fieldId: 'checkbox-1',
    required: false
}
