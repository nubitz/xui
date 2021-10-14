import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";
export default {
    title: 'Drawer',
    component: 'x-drawer',
    parameters: {
    },
    argTypes: {
        open: {
            control: {
                type: 'boolean',
            }
        },
        width: {
            control: {
                type: 'text',
            }
        },
        minWidth: {
            control: {
                type: 'text',
            }
        },
        height: {
            control: {
                type: 'text',
            }
        },
        minHeight: {
            control: {
                type: 'text',
            }
        },
        overlay: {
            control: {
                type: 'boolean',
            }
        },
        placement: {
            control: {
                type: 'select',
                options: ['top', 'left', 'bottom', 'right']
            }
        },
    },
};
const Template = (props) => (
    <div>
        <x-drawer
            namespace="x-drawer-1"
            {...props}
        >
            <x-typography
                variant="title"
                text="[ Content ]"
            />
        </x-drawer>
        <x-container
            height="100%"
            width="500px"
        >
            <x-box
                alignItems="end"
                width="100%"
                justify-content="end"
            >
                <x-control
                    name="x-drawer-1"
                    trigger="click,mouseneter">
                    <x-button
                        color="warning"
                        variant="solid">
                        Open/Close Drawer 1
                    </x-button>
                </x-control>
            </x-box>
        </x-container>
    </div>
);

export const Drawer = Template.bind({})
