import { FunctionalComponent, h } from '@stencil/core';
import { CssClassMap } from '../interface';

export const CalendarMonths: FunctionalComponent<{
    month?: any,
    [key: string]: any,
    buttonClick?: ({ month, monthName, element }) => void
}> = ({ buttonClick, month, ...attrs }) => (
    <div class="x-months"  {...attrs}>
        {
            [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ].map((text, index) => {
                let element: HTMLElement;

                const classes: CssClassMap = {
                    ['selected-month']: month == text
                }

                return (
                    <span
                        {...{ class: classes }}
                    >
                        <button
                            ref={el => element = el}
                            type="button"
                            onClick={() => {
                                buttonClick({
                                    month: index,
                                    monthName: text,
                                    element: element
                                })
                            }}
                        >
                            {text.substr(0, 3)}
                        </button>
                    </span>
                )
            })
        }
    </div >
);

