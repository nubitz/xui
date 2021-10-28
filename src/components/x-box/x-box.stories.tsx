import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Box',
    component: 'x-box',
    parameters: {
    },
    argTypes: {
        width: {
            control: 'text'
        },
        height: {
            control: 'text'
        },
        inline: {
            control: 'boolean'
        },
        gap: {
            control: 'text'
        },
        direction: {
            control: 'select',
            options: [
                'row',
                'row-reverse',
                'column',
                'column-reverse'
            ]
        },
        justifyContent: {
            control: 'select',
            options: [
                'start',
                'end',
                'center',
                'space-between',
                'space-around',
                'space-evently'
            ]
        },
        alignContent: {
            control: 'select',
            options: [
                'flex-start',
                'flex-end',
                'center',
                'stretch',
                'space-around',
                'space-between'
            ]
        },
        alignItems: {
            control: 'select',
            options: [
                'stretch',
                'start',
                'end',
                'center',
                'baseline'
            ]
        }
    },
};

const Template = (props) => (
    <x-box {...props}>
        <x-box-item>
            [Block Content]
        </x-box-item>
        <x-box-item>
            [Block Content]
        </x-box-item>
        <x-box-item>
            [Block Content]
        </x-box-item>
    </x-box>
);

export const Box = Template.bind({});
Box.args = {
    width: '80%',
    height: '200px',
    sx: {
        border: '1px solid #dadada',
        background: 'red'
    }
}
