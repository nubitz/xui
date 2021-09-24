import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'App Bar',
    component: 'x-appbar',
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
    <x-appbar {...props}>
        <x-box
            justify-content="space-between"
            align-items="end"
            width="50%"
        >
            <div>Link 1</div>
            <div>Link 1</div>
            <div>Link 1</div>
            <div>Link 1</div>
            <div>Link 1</div>
            <div>Link 1</div>
        </x-box>
        <x-box
            justify-content="end"
            align-items="end"
            width="50%"
        >
            <div>
                link 3
            </div>
            <div>
                Button 4
            </div>
            <div>
                Button 5
            </div>
        </x-box>
    </x-appbar>
);
export const AppBar = Template.bind({});
AppBar.args = {
}
