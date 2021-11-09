import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Button',
    component: 'x-button',
    parameters: {
        layout: 'centered',
        jsx: {
            disable: false
        }
    },
    argTypes: {
        value: {
            control: {
                type: 'text'
            }
        },
        name: {
            control: {
                type: 'text'
            }
        },
        allyLabel: {
            control: {
                type: 'text'
            }
        },
        width: {
            control: {
                type: 'text'
            }
        },
        height: {
            control: {
                type: 'text'
            }
        },
        type: {
            control: 'select',
            options: ['submit', 'button']
        },
        shape: {
            control: 'select',
            options: ['circle', 'pill', 'soft', 'none']
        },
        variant: {
            control: 'select',
            options: ['solid', 'outline', 'none']
        },
        color: {
            control: 'select',
            options: [
                'primary',
                'secondary',
                'tertiary',
                'success',
                'error',
                'info',
                'warning'
            ]
        },
        border: {
            control: {
                type: 'text'
            }
        },
    },
};

const Template = ({ text, ...props }) => (
    <x-button
        {...props}
    >
        {text}
    </x-button>
);
export const Button = Template.bind({});

Button.args = {
    elevated: false,
    disabled: false,
    text: '[BUTTON]'
}
