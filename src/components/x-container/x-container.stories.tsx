import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Container',
    component: 'x-container',
    parameters: {
    },
    argTypes: {
        label: {
            description: 'overwritten description',
            table: {
                type: {
                    summary: 'something short',
                    detail: 'something really really long'
                },
            },
            control: {
                type: null,
            },
        },
    },
};

const Template = () => (
    <x-container>
        Conatiner
    </x-container>
);
export const Container = Template.bind({});
