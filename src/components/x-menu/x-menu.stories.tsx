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
    <span>
        <x-menu {...props} >
            <x-box direction="column" gap="15px" sx={
                {
                    border: '1px solid #dadada',
                    background: "#fff",
                    padding: '15px'
                }
            }>
                <x-box gap="10px" alignItems="center">
                    <x-popover width="200px" height="200px" placement="right">
                        <x-box alignItems="center">
                            <x-typography variant="h2">
                                [TITLE]
                            </x-typography>
                        </x-box>
                        <x-divider color="#dadada" />
                        <x-typography variant="body1">
                            BODY TEXT
                        </x-typography>
                        <x-button
                            slot="popover-control"
                            variant="outline"
                            color="info"
                        >
                            Button
                        </x-button>
                    </x-popover>
                </x-box>
                <x-box width="20%" alignItems="center">
                </x-box>
                <div>
                    <x-menu
                        width="100px"
                        placement="bottom-left"
                    >
                        <x-button slot="menu-control" color="info" variant="outline">
                            <x-icon solid name="ellipsis-v" />
                        </x-button>
                        <x-box direction="column" gap="15px" width="200px" sx={
                            {
                                border: '1px solid #dadada',
                                background: "#fff",
                                padding: '15px'
                            }
                        }>
                            <div>NAME</div>
                            <div>NAME</div>
                            <div>NAME</div>
                        </x-box>
                    </x-menu>
                </div>
                <div>NAME</div>
                <div>NAME</div>
                <div>NAME</div>
            </x-box>
            <x-button slot="menu-control" color="info" variant="outline">
                <x-icon solid name="bars" />
            </x-button>

        </x-menu>
        <x-menu>
            HELLO WORLD
            <x-button slot="menu-control" color="info" variant="outline">
                <x-icon solid name="bars" />
            </x-button>
        </x-menu>
    </span>


);

export const Menu = Template.bind({});

Menu.args = {
    gap: '5px',
    width: '300px',
    placement: "left-top"
}