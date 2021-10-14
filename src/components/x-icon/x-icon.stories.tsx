import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Icon',
    component: 'x-icon',
    parameters: {
        layout: 'centered',
        jsx: {
            disable: false
        }
    },
    argTypes: {
        name: {
            control: {
                type: 'text'
            }
        },
        solid: {
            control: {
                type: 'boolean'
            }
        },
        color: {
            control: {
                type: 'boolean'
            }
        },
    },
};

const Template = (props) => (
    <x-icon {...props}></x-icon>
);

export const Icon = Template.bind({});

Icon.args = {
    name: 'arrow-left',
    solid: true
}
