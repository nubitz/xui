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
            options: ['row', 'column']
        },
        alignSelf: {
            control: 'text'
        },
        justifyContent: {
            control: 'select',
            options: [
                'space-evently',
                'space-between',
                'end'
            ]
        },
        alignContent: {
            control: 'select',
            options: [
                'stretch',
                'center',
                'space-evently',
                'space-between'
            ]
        },
        alignItems: {
            control: 'select',
            options: [
                'stretch',
                'center',
                'baseline',
                'start',
                'end',
                'self-start',
                'self-end',
                'normal'
            ]
        }
    },
};

const Template = (props) => (
    <x-box {...props}>
        <div> [Block Content]</div>
        <div> [Block Content]</div>
    </x-box>
);

export const Box = Template.bind({});
Box.args = {
    width: '100px',
    height: '100px',
    sx: {
        border: '1px solid #dadada',
        background: 'red',
        'box-shadow': 'rgb(34 34 34 / 51%) 0px 0px 5px 1px'
    }
}
