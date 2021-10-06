import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Menu',
    component: 'x-menu',
    parameters: {
        layout: 'centered',
        jsx: {
            disable: false
        }
    },
    argTypes: {
        open: {
            control: {
                type: 'boolean'
            }
        },
        width: {
            control: {
                type: 'text'
            }
        },
    },
};

const Template = (props) => (
    <x-menu {...props}>
        <div>NAME</div>
        <div>NAME</div>
        <div>NAME</div>
        <div>NAME</div>
        <div>NAME</div>
        <div>NAME</div>
    </x-menu>
);

export const Menu = Template.bind({});

Menu.args = {

}