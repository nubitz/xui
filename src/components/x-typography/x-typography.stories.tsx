import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Typography',
    component: 'x-typography',
    parameters: {
        layout: 'centered',
        jsx: {
            disable: false
        }
    },
    argTypes: {
        text: {
            control: {
                type: 'text'
            }
        },
        weight: {
            control: {
                type: 'text'
            }
        },
        size: {
            control: {
                type: 'text'
            }
        },
        sx: {
            control: {
                type: 'object'
            }
        },
        variant: {
            control: {
                type: 'select',
                options: [
                    'h1',
                    'h2',
                    'h3',
                    'h4',
                    'h5',
                    'h6',
                    'title',
                    'subtitle1',
                    'subtitle2',
                    'body1',
                    'body2',
                    'caption',
                    'button',
                    'link'
                ]
            }
        }
    },
};

const Template = (props) => (
    <x-box sx={{ display: 'flex', 'flex-direction': 'column', gap: '5px' }}>
        <x-typography {...props} variant="h1" text="h1.Heading" />
        <x-typography variant="h2" text="h2.Heading" />
        <x-typography variant="h3" text="h3.Heading" />
        <x-typography variant="h4" text="h4.Heading" />
        <x-typography variant="h5" text="h5.Heading" />
        <x-typography variant="h6" text="h6.Heading" />
        <x-typography variant="title" text="Title" />
        <x-typography variant="subtitle1" text="Subtitle 1" />
        <x-typography variant="subtitle2" text="Subtitle 2" />
        <x-typography variant="body1" text="body 1 " />
        <x-typography variant="body2" text="body 2" />
        <x-typography variant="button" text="Button Text" />
        <x-typography variant="caption" text="Cation Text" />
    </x-box>
);

export const Typography = Template.bind({});

Typography.args = {
}


