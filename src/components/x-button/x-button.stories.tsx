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
        }
    },
};

const Template = (props) => (
    <x-button
        {...props}
    >
        Button
    </x-button>
);
export const Button = Template.bind({});

Button.args = {
    elevated: false,
    rounded: false,
    disabled: false
}