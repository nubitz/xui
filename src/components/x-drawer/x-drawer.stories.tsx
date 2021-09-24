import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";
export default {
    title: 'Drawer',
    component: 'x-drawer',
    parameters: {
    },
    argTypes: {
        width: {
            control: {
                type: 'text',
            }
        },
        height: {
            control: {
                type: 'text',
            }
        },
        placement: {
            control: {
                type: 'select',
                options: ['top', 'left', 'bottom', 'right']
            }
        },
        positioned: {
            control: {
                type: 'select',
                options: ['fixed', 'absolute', 'relative', 'sticky']
            }
        }
    },
};
const Template = (props) => (
    <span>
        <x-drawer namespace="x-drawer-1" placement="top" height="500px" {...props} overlay >
            <x-typography variant="title" text="TOP" />
        </x-drawer>
        <x-drawer namespace="x-drawer-2" placement="left" width="300px" >
            <x-typography variant="title" text="LEFT" />
        </x-drawer>
        <x-drawer namespace="x-drawer-3" placement="right" width="300px">
            <x-typography variant="title" text="RIGHT" />
        </x-drawer>
        <x-drawer namespace="x-drawer-4" placement="bottom" height="500px">
            <x-typography variant="title" text="BOTTOM" />
        </x-drawer>
        <x-container>
            <x-control name="x-drawer-1" trigger="click,mouseneter">
                <x-button >
                    Open/Close Drawer 1
                </x-button>
            </x-control>
            <x-control name="x-drawer-2" trigger="click">
                <x-button >
                    Open/Close Drawer 2
                </x-button>
            </x-control>
            <x-control name="x-drawer-3" trigger="click">
                <x-button >
                    Open/Close Drawer 3
                </x-button>
            </x-control>
            <x-control name="x-drawer-4" trigger="click">
                <x-button >
                    Open/Close Drawer 4
                </x-button>
            </x-control>
        </x-container>
    </span>
);

export const Drawer = Template.bind({})
