import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Textarea',
    component: 'x-textarea',
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
        maxLength: {
            control: {
                type: 'number'
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
    <x-textarea {...props} />
);
export const Textarea = Template.bind({});

Textarea.args = {
    label: '[Label]',
    required: false,
    maxLength: 500
}

