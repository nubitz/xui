import { FunctionalComponent, h } from '@stencil/core';
import { CssClassMap } from '../interface';

export const CalendarYears: FunctionalComponent<{
    year: number,
    range: number,
    startDate: number
    buttonClick?: ({ year, element }) => void,
    [key: string]: any
}> = ({ startDate, year, range, buttonClick, ...attrs }) => (

    <div class="x-years"  {...attrs}>
        {
            Array(range).fill(startDate).map((x, index) => {

                let element: HTMLElement;

                const y = x + index;
                const classes: CssClassMap = {
                    ['selected-year']: year == y
                }
                return (
                    <span class={classes}>
                        <button
                            ref={el => element = el}
                            type="button"
                            onClick={() => {
                                buttonClick({
                                    year: y,
                                    element: element
                                })
                            }}
                        >
                            {y}
                        </button>
                    </span>
                )
            })
        }
    </div>
);
