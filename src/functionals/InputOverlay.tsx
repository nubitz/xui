import { FunctionalComponent, h } from '@stencil/core';
import { setCssProperties } from '../utils';

export const InputOverlay: FunctionalComponent<{
    [key: string]: any
}> = ({ host, align, ...props }, children) => {

    const element = host.querySelector("[slot='input-overlay']");

    if (element) {

        if (align == "left") {

            host.getNativeElement((input) => {

                const { width } = element.getBoundingClientRect();

                setCssProperties(input, {
                    'text-indent': width + 'px'
                });

                const mask = host.querySelector('.input-mask');

                if (mask) {

                    setCssProperties(mask, {
                        'left': (width + 7) + 'px'
                    })
                }
            });
        }
        return (
            <span class="input-overlay" {...props} >
                {children}
            </span>
        );
    }
}