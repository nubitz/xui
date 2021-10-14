import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Container',
    component: 'x-container',
    parameters: {
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
        background: {
            control: {
                type: 'text'
            }
        },
        overlay: {
            control: {
                type: 'boolean'
            }
        },
    },
};

const Template = (props) => (
    <x-container {...props}>
        <x-box
            height="300px"
            width="100%"
            sx={{
                'background': 'lightblue',
                'border-bottom': '5px solid darkblue'
            }}
        >
        </x-box>
    </x-container>
);
export const Container = Template.bind({});

Container.args = {
    width: '80%',
    height: '500px',
}
