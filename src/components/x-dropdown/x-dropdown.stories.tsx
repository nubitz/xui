import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Dropdown',
    component: 'x-dropdown',
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
        items: {
            control: {
                type: 'array',
                table: {
                    text: 'string',
                    value: 'string'
                }
            }
        },
    },
};

const Template = (props) => (
    <x-dropdown {...props}>
    </x-dropdown>
);
export const Dropdown = Template.bind({});

Dropdown.args = {
    label: '[Label]',
    required: false,
    items: [{
        text: 'text',
        value: 'value'
    }, {
        text: 'text',
        value: 'value'
    }, {
        text: 'text',
        value: 'value'
    }, {
        text: 'text',
        value: 'value'
    }, {
        text: 'text',
        value: 'value'
    }]
}
