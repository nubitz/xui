import { _j } from "../../jsx-parser";
import { h } from "@stencil/core";

export default {
    title: 'Media',
    component: 'x-media',
    parameters: {
        layout: 'centered',
        jsx: {
            disable: false
        }
    },
    argTypes: {
    },
};

const Template = ({ style, ...props }) => (
    <div style={style}>
        <x-media
            {...props}
        >
        </x-media>
    </div>
);
export const Media = Template.bind({});

Media.args = {
    src: "https://play-lh.googleusercontent.com/tWOCFum34rKMnhBEQJLHHjRV6qQdlwDCdn4YIY5Yly9LIcuqdtdiGmeWq7XHnmekEC2z",
    clipPath: "circle(50%)",
    center: true,
    style: 'width: 250px; height: 250px; position: relative; border: 10px solid #222; border-radius: 50%'
}