import { FunctionalComponent, h } from '@stencil/core';

export const CalendarMonths: FunctionalComponent<{
    [key: string]: any,
    buttonClick?: (evt?) => void
}> = ({ buttonClick, ...attrs }) => (
    <div class="x-months"  {...attrs}>
        {
            [
                'January', 'Febuary', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'November', 'December'
            ].map((text, index) => {
                let element: HTMLElement;
                return (
                    <span>
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
    </div>
);

