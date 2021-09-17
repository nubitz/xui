import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Popover',
    component: 'x-popover',
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
        height: {
            control: {
                type: 'text'
            }
        },
        placement: {
            control: {
                type: 'select',
                options: ['top', 'left', 'bottom', 'right']
            }
        }
    },
};

const Template = (props) => (
    <x-popover {...props}>
        <div>
            HERE IS SOME CONTENT
        </div>
        <x-button
            slot="popover-control"
            elevated
            border="none"
        >
            Button
        </x-button>
    </x-popover>
);

export const Popover = Template.bind({});

Popover.args = {
    width: '200px',
    height: '200px'
}