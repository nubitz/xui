import { _j } from "../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Form/Element',
    parameters: {
        layout: 'centered',
        jsx: {
            disable: false
        }
    },
    argTypes: {
    },
};

const Template = () => (
    <x-form>
        <x-box
            direction="column"
            gap="15px"
        >
            <x-textbox
                fieldId="t-1"
                label="[ Textbox ]"
            />
            <x-textarea
                fieldId="t-2"
                label="[ Textarea ]"
            />
            <x-radiolist
                label="[ Radiolist ]"
                fieldName="radiolist-1"
            >
                <x-radio fieldId="a-1" label="[Label 1]" value="0" />
                <x-radio fieldId="a-2" label="[Label 2]" value="1" />
                <x-radio fieldId="a-3" label="[Label 3]" value="2" />
            </x-radiolist>
            <x-checkbox
                fieldId="checkbox-id"
                label="[Checkbox]"
                value="on"
            />
            <x-dropdown
                fieldId="t-3"
                label="[ Dropdown ]"
                items='[{
                "text":"Item 1",
                "value":"v-1"
            },{
                "text":"Item 2",
                "value":"v-2"
            },{
                "text":"Item 3",
                "value":"v-3"
            },{
                "text":"Item 4",
                "value":"v-4"
            },{
                "text":"Item 5",
                "value":"v-5"
            }]'
            >
            </x-dropdown>
            <x-switch value="1" />
            <x-button variant="outline" color="secondary">
                Button
            </x-button>
        </x-box>
    </x-form>
);
export const Element = Template.bind({});

