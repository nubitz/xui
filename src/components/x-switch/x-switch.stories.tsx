import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Switch',
    component: 'x-switch',
    parameters: {
        layout: 'centered',
        jsx: {
            disable: false
        }
    },
    argTypes: {
        checked: {
            control: {
                type: 'boolean'
            }
        },
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
    <x-switch {...props} />
);
export const Switch = Template.bind({});

Switch.args = {
    label: '[Label]',
    required: false
}
