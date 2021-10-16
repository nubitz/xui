import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Grid',
    component: 'x-grid',
    parameters: {
    },
    argTypes: {
        columns: {
            control: {
                type: 'text',
            },
        },
        justifyContent: {
            control: {
                type: 'text',
            },
        },
        justifyItems: {
            control: {
                type: 'text',
            },
        },
        alignedContent: {
            control: {
                type: 'text',
            },
        },
        alignedItem: {
            control: {
                type: 'text',
            },
        },
    },
};

const Template = (props) => (
    <x-container width="100%">
        <x-divider color="red" />
        <x-media center src="https://wallpaperaccess.com/full/5381447.jpg" media-index="-2" />
        <x-grid {...props}>
            <div>
                <h2> WHAT THE FUCK</h2>
                <x-grid columns="repeat(auto-fill, minmax(350px, 1fr))" >
                    {'12345678'.split('').map(_ => (
                        <x-card>
                            <x-box slot="card-header">
                                <x-typography variant="title"> HEADER </x-typography>
                            </x-box>
                            <x-box slot="card-body">
                                <x-typography variant="body2">
                                    Id explicabo enim sit facilis totam aut atque voluptatem ut fugit iure qui
                                    reiciendis internos non molestiae rerum aut modi dolore. Qui fuga voluptates
                                </x-typography>
                            </x-box>
                            <x-box slot="card-footer">
                                <x-button color="error" variant="solid">
                                    <x-typography variant="button">
                                        Button
                                    </x-typography>
                                </x-button>
                            </x-box>
                            <x-divider color="blue" />
                        </x-card>
                    ))}
                </x-grid>
            </div>
            <div>
                <x-card>
                    <x-box slot="card-header">
                        <x-typography variant="title"> HEADER </x-typography>
                    </x-box>
                    <x-box slot="card-body">
                        <x-typography variant="body2">
                            Id explicabo enim sit facilis totam aut atque voluptatem ut fugit iure qui
                            reiciendis internos non molestiae rerum aut modi dolore. Qui fuga voluptates
                        </x-typography>
                    </x-box>
                    <x-box slot="card-footer">
                        <x-button color="error" variant="solid">
                            <x-typography variant="button">
                                Button
                            </x-typography>
                        </x-button>
                    </x-box>
                </x-card>
            </div>
        </x-grid>
    </x-container>
);
export const Grid = Template.bind({});
Grid.args = {
    columns: "repeat(auto-fit, minmax(500px, 2fr))"
}
