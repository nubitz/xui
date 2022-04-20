import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Datepicker',
    parameters: {
        layout: 'centered',
        jsx: {
            disable: false
        }
    },
    argTypes: {
    },
};

const Template = () => (
    <x-datepicker />
);
export const Datepicker = Template.bind({});

