import { FunctionalComponent, h } from '@stencil/core';
export const Typography: FunctionalComponent<{
    variant: string,
    [key: string]: any
}> = ({ variant, ...props }, children) => {

    const variantMap = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        title: 'h2',
        subtitle1: 'h3',
        subtitle2: 'h4',
        body1: 'p',
        body2: 'span',
        button: 'span',
        caption: 'span',
    };
    const Tag = variantMap[variant];
    return (
        <Tag {...props}>
            {children}
        </Tag>
    )
};