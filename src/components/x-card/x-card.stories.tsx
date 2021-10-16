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
        direction: {
            control: {
                type: 'select',
                options: ['column', 'row', 'row-reverse', 'column-reverse']
            }
        },
        variant: {
            control: {
                type: 'select',
                options: ['elevated', 'outline', 'none']
            }
        },
        rounded: {
            control: {
                type: 'boolean'
            }
        },
    },
};
const Template = ({ type, ...props }) => {
    return (
        <x-card {...props}>
            <x-box slot="card-header"
                height="100%"
                direction="column"
                sx={{
                    flex: 1,
                    padding: '0px 15px',
                }}>
                <x-typography
                    variant="h4"
                    sx={{
                        'min-width': '150px'
                    }}
                    text="[Some text]"
                />
            </x-box>
            <x-box slot="card-body"
                width="100%"
                height="100%"
            >
                <x-media src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg" />
            </x-box>
            <x-box slot="card-footer"
                direction="column"
                gap="0"
                sx={{
                    padding: '0px 15px',
                }}>
                <x-typography
                    variant="h4"
                    text="[Some text]"
                    sx={{
                        all: 'unset'
                    }}
                />
                <x-typography variant="body1">
                    Id explicabo enim sit facilis totam aut
                    atque voluptatem ut fugit
                </x-typography>
            </x-box>
            {/** 
            <x-link stretch href="https://www.tradingview.com/symbols/LRCUSD/" />
            */}
        </x-card>
    );
}

export const Card = Template.bind({});
Card.args = {
    rounded: false,
    width: '450px',
    height: '350px',
}
