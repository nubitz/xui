import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";
export default {
    title: 'Dialog',
    component: 'x-dialog',
    parameters: {
    },
    argTypes: {
        width: {
            control: {
                type: 'text',
            }
        },
        height: {
            control: {
                type: 'text',
            }
        },
    },
};
const Template = (props) => (
    <div>
        <x-dialog {...props} name="asshole">
            <x-typography slot="dialog-header" variant="h2">
                Header
            </x-typography>
            <x-box slot="dialog-body">
                <x-divider color="blue" placement="top" />
                <x-typography variant="body1">
                    dfjgklsd jfgslk dgjkl sdf
                    dfjgklsd jfgslk dgjkl sdf
                    dfjgklsd jfgslk dgjkl sdf
                    dfjgklsd jfgslk dgjkl sdf
                    dfjgklsd
                </x-typography>
                <x-divider color="blue" placement="bottom" />
            </x-box>
            <x-typography slot="dialog-footer" variant="h2">
                Footer
            </x-typography>
        </x-dialog>
        <x-control name="asshole" trigger="click">
            <x-button
                variant="outline"
                color="secondary">
                Button
            </x-button>
        </x-control>
    </div>
);

export const Dialog = Template.bind({})
Dialog.args = {
    open: true,
    backdrop: true,
    disableHeaderControl: true,
    actionRequired: true
}