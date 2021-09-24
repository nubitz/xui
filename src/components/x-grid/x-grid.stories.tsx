import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Grid',
    component: 'x-grid',
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

const Template = (props) => (
    <x-container width="100%">
        <x-media center src="https://wallpaperaccess.com/full/5381447.jpg" media-index="-2" />
        <x-grid {...props}>
            <div>
                <h2> WHAT THE FUCK</h2>
                <x-grid columns="repeat(auto-fill, minmax(350px, 1fr))" >
                    {'12345678'.split('').map(_ => (
                        <x-card elevated height="300px">
                            <x-typography
                                slot="card-header"
                                variant="h2"
                            >HEADER
                            </x-typography>
                            <x-typography slot="card-body" variant="body2">
                                Id explicabo enim sit facilis totam aut atque voluptatem ut fugit iure qui
                                reiciendis internos non molestiae rerum aut modi dolore. Qui fuga voluptates
                                non quisquam dicta et error nisi non quod fuga.
                            </x-typography>
                            <x-button slot="card-footer" color="info">
                                Button
                            </x-button>
                        </x-card>
                    ))}
                </x-grid>
            </div>
            <div>
                <x-card elevated>
                    <x-typography
                        slot="card-header"
                        variant="title"
                    >HEADER
                    </x-typography>
                    <x-typography slot="card-body" variant="body2">
                        Id explicabo enim sit facilis totam aut atque voluptatem ut fugit iure qui
                        reiciendis internos non molestiae rerum aut modi dolore. Qui fuga voluptates
                    </x-typography>
                    <x-button slot="card-footer" color="error" variant="solid">
                        <x-typography variant="button">
                            Button
                        </x-typography>
                    </x-button>
                </x-card>
            </div>
        </x-grid>
    </x-container>
);
export const Grid = Template.bind({});
Grid.args = {
    columns: "repeat(auto-fit, minmax(500px, 2fr))"
}
