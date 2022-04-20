import { FunctionalComponent, h } from '@stencil/core';

export const CalendarYears: FunctionalComponent<{
    year: number,
    range: number,
    buttonClick?: (evt?) => void
}> = ({ year, buttonClick, ...attrs }) => (

    <div class="x-years"  {...attrs}>
        {
            Array(28).fill(year).map((x, index) => {

                let element: HTMLElement;

                let year = x + index;

                return (
                    <span>
                        <button
                            ref={el => element = el}
                            type="button"
                            onClick={() => {
                                buttonClick({
                                    year: year,
                                    element: element
                                })
                            }}
                        >
                            {year}
                        </button>
                    </span>
                )
            })
        }
    </div>
);
