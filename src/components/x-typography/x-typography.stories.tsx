import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Typography',
    component: 'x-typography',
    parameters: {
        layout: 'centered',
        jsx: {
            disable: false
        }
    },
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['top', 'left', 'bottom', 'right']
            }
        }
    },
};

const Template = (props) => (
    <x-typography {...props}>
        Text
    </x-typography>
);

export const Typography = Template.bind({});

Typography.args = {
}