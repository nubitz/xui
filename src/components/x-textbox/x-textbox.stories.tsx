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
        label: {
            control: {
                type: 'text'
            }
        },
        fieldId: {
            control: {
                type: 'text'
            }
        },
        fieldName: {
            control: {
                type: 'text'
            }
        },
        value: {
            control: {
                type: 'text'
            }
        },
        type: {
            control: {
                type: 'select',
                options: [
                    'type',
                    'password'
                ]
            }
        },
        required: {
            control: {
                type: 'boolean'
            }
        },
        format: {
            control: {
                type: 'text'
            }
        },
        mask: {
            control: {
                type: 'text'
            }
        },
        overlayAlignment: {
            control: {
                type: 'select',
                options: [
                    'left',
                    'right'
                ]
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

