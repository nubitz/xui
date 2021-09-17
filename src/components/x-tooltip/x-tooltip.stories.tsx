import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Tooltip',
    component: 'x-tooltip',
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
    <x-tooltip {...props}>
        <div>
            Tooltip Content
        </div>
        <x-button
            slot="tooltip-control"
            elevated
            border="none"
        >
            Button
        </x-button>
    </x-tooltip>
);

export const Tooltip = Template.bind({});

Tooltip.args = {
    width: '200px',
    height: '50px'
}