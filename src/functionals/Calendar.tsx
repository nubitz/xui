import { FunctionalComponent, h } from '@stencil/core';
import { CssClassMap } from '../interface';

export const Calendar: FunctionalComponent<{
    startDate?: string,
    endDate?: string,
    month: number,
    year: number,
    month_format?: 'long' | 'short',
    selectedDate: unknown,
    dayClick?: (evt?: any) => void,
    [key: string]: any
}> = ({ month: m, year: y, value, dayClick, ...attrs }) => {


    if (value) {
        console.log(new Date(value))
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [d1, d2] = [
        new Date(y, m, 1),
        new Date(y, m + 1, 0)
    ];

    let [day, month, year, start, length, position, name] = [
        d1.getDate(), d1.getMonth(), d1.getFullYear(), d1.getDay(),
        d2.getDate(), d2.getDay(), d1.toLocaleString('default', { month: 'long' })
    ];

    day = day - start;

    const shape = Math.round((length + start + (7 - position)) / 7) * 7;

    const calendar = Array(shape).fill(0).map((_, i) => {

        const date = new Date(year, month, day++);

        const [d, m, y, title] = [
            date.getDate(),
            date.getMonth(),
            date.getFullYear(),
            date.toLocaleString(
                'default', {
                weekday: 'long', month: 'long', day: '2-digit', year: 'numeric'
            })
        ];

        return (
            <span
                class={setClasses(
                    {
                        day_fill: month != m,
                        current_day: date.toString() == today.toString(),
                        weekend: i % 7 == 0 || i % 7 == 6
                    }
                )}
            >
                <button
                    key={`link-${d}`}
                    tab-index="-1"
                    onClick={() => {
                        dayClick({
                            day: d,
                            month: m,
                            year: y,
                            title: title
                        })
                    }}
                    data-day={d}
                    data-month={m}
                    data-year={y}
                    title={title}>
                    <span>{
                        d//.toString().padStart(2, '0')
                    }</span>
                </button>
            </span>
        );
    });
    return (
        <div class="x-calendar" data-month={name} data-year={y} {...attrs}>
            {
                [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thrusday',
                    'Friday',
                    'Staturday'
                ].map(x => {
                    const abbr = x.substring(0, 2);
                    return (
                        <span class="x-calendar-weekday" data-name={x} data-abbr={abbr}>
                            {abbr}
                        </span>
                    )
                })}
            {calendar}
        </div>
    );
}
// Rename the classses
const setClasses = ({ current_day, day_fill, weekend }): CssClassMap => ({
    ['calendar-day']: true,
    ['current-day']: current_day,
    ['day-fill']: day_fill,
    ['weekend']: weekend,
    ['selected-day']: false
})
