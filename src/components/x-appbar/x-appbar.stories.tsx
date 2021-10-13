import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'App Bar',
    component: 'x-appbar',
    parameters: {
    },
    argTypes: {
        sticky: {
            control: 'boolean',
        },
        placement: {
            control: 'select',
            options: ['top', 'bottom']
        },
    },
};

const Template = (props) => (
    <span>
        <x-drawer
            namespace="x-drawer-1"
            placement="bottom"
            height="300px"
            overlay
        >
            <x-box direction="column">
                <x-button color="info">
                    <x-icon solid name="bars" />
                </x-button>
                <x-menu
                    placement="right-top"
                    activation="click"
                    width="300px" >
                    <x-box
                        width="150px"
                        direction="column"
                        align-items="start"
                        sx={{
                            background: "#fff",
                            padding: '15px',
                            border: '1px solid #dadada'
                        }}
                    >
                        <x-link>link 1</x-link>
                        <x-link>link 2</x-link>
                        <x-link>link 3</x-link>
                    </x-box>
                    <x-button
                        slot="menu-control"
                        color="info"
                        variant="solid"
                    >
                        <x-icon solid name="envelope" />
                    </x-button>
                </x-menu>
                <x-button
                    color="info">
                    <x-icon name="expand" solid />
                </x-button>
            </x-box>
        </x-drawer>

        <x-container
            background="red"
            height="41px"
        >
            <x-appbar {...props}>
                <x-box
                    inline
                    justify-content="space-between"
                    align-items="center"
                    width="50%"
                >
                    <x-link> <x-icon name="envelope" /> link 4 </x-link>
                    <x-link underline="hover">link 5</x-link>
                    <x-control
                        name="x-drawer-1"
                        trigger="click">
                        <x-link underline="hover">link 6</x-link>
                    </x-control>
                </x-box>
                <x-box
                    inline
                    justify-content="end"
                    align-items="end"
                    width="50%"
                    gap="25px"
                >
                    <x-link>link 3</x-link>
                    <x-link>link 3</x-link>
                    <x-menu
                        placement="bottom-right"
                        activation="hover"
                    >
                        <x-box
                            width="150px"
                            direction="column"
                            align-items="start"
                            sx={{
                                background: "#fff",
                                padding: '15px',
                                border: '1px solid #dadada'
                            }}
                        >
                            <x-link>link 1</x-link>
                            <x-link>link 2</x-link>
                            <x-link>link 3</x-link>
                        </x-box>
                        <x-button
                            slot="menu-control"
                            color="info"
                            variant="solid"
                        >
                            <x-icon solid name="bars" />
                        </x-button>
                    </x-menu>
                </x-box>
            </x-appbar>
        </x-container>
        <x-container
            height="300px"
            background="hsl(0deg 0% 7% / 69%)"
        >
            <x-box inline direction="row" width="50%" height="100%"
                sx={
                    {
                        'border-right': '1px solid #dadada'
                    }
                }
            >
                <x-media overlay src="https://i.guim.co.uk/img/media/f1cf534836a8499ba2c0deff509241428abea9ea/28_0_803_482/master/803.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=126b67f180db8d670f47599abe72a5f7" />
            </x-box>
            <x-box inline direction="row" width="50%" height="100%">
                <x-media src="https://jojud265nia2bj9sy4ah9b61-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/ScaryMovies_AllTheGodsInTheSky_03-1-1600x900-c-default.jpg" />

            </x-box>
        </x-container>
    </span>
);
export const AppBar = Template.bind({});
AppBar.args = {

}
