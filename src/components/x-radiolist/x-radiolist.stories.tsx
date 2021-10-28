import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Radiolist',
    component: 'x-radiolist',
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
    <x-radiolist {...props}>
        <x-radio fieldId="f-1" label="[label-1]" value="0" />
        <x-radio fieldId="f-2" label="[label-2]" value="1" />
        <x-radio fieldId="f-3" label="[label-3]" value="2" />
    </x-radiolist>
);
export const Radiolist = Template.bind({});

Radiolist.args = {
    label: '[Label]',
    required: false
}
