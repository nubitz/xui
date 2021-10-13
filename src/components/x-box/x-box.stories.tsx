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
        gap: {
            control: 'text'
        },
        alignSelf: {
            control: 'text'
        },
        justifyContent: {
            control: 'select',
            options: ['space-evently', 'space-between']
        },
        alignContent: {
            control: 'select',
            options: ['stretch', 'flex-start', 'flex-end', 'center', 'space-evently', 'space-between']
        },
        alignItems: {
            control: 'select',
            options: ['start', 'center', 'end', 'stretch', 'baseline']
        }
    },
};

const Template = (props) => (
    <x-box {...props}>
        <div> I am here</div>
        <div> I am here</div>
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
