import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";
export default {
    title: 'Card',
    component: 'x-card',
    parameters: {
        layout: 'centered',
        jsx: {
            disable: false
        }
    },
    argTypes: {
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
        variant: {
            control: 'select',
            options: ['solid', 'outline', 'none']
        },
        color: {
            control: 'select',
            options: [
                'primary',
                'secondary',
                'tertiary',
                'success',
                'error',
                'info',
                'warning'
            ]
        }
    },
};
const Template = ({ type, ...props }) => {
    return (
        <x-card {...props}>
            <h2 slot="card-header">HEADER</h2>
            <div slot="card-body">
                Id explicabo enim sit facilis totam aut atque voluptatem ut fugit
                iure qui reiciendis internos non molestiae rerum aut modi dolore.
                Qui fuga voluptates non quisquam dicta et error nisi non quod fuga.
            </div>
            <div slot="card-footer">
                <x-button variant={type} color="info" slot="tooltip-control">
                    Button
                </x-button>
            </div>
        </x-card>
    );
}

export const Card = Template.bind({});
Card.args = {
    elevated: false,
    rounded: false,
    border: false,
}