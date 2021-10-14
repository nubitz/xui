import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Link',
    component: 'x-link',
    parameters: {
        layout: 'centered',
        jsx: {
            disable: false
        }
    },
    argTypes: {
        text: {
            control: {
                type: 'text'
            }
        },
        target: {
            control: {
                type: 'text'
            }
        },
        type: {
            control: {
                type: 'boolean'
            }
        },
        href: {
            control: {
                type: 'boolean'
            }
        },
        download: {
            control: {
                type: 'boolean'
            }
        },
        underline: {
            control: {
                type: 'select',
                options: ['none', 'hover', 'always']
            }
        },
    },
};

const Template = (props) => (
    <x-link {...props}></x-link>
);

export const Link = Template.bind({});
Link.args = {
    text: '[Link]'
}
