import { FunctionalComponent, h } from '@stencil/core';
import { CssClassMap } from '../interface';

const setClasses = (props): CssClassMap => ({
    ['calendar-day']: true,
    ['current-day']: props.current_day,
    ['day-fill']: props.day_fill
})

export const Calendar: FunctionalComponent<{
    startDate?: string,
    endDate?: string,
    month: number,
    year: number,
    month_format?: 'long' | 'short',
    dayClick?: (evt?: any) => void
    attrs?: { [x: string]: any }
}> = (props) => {

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [d1, d2] = [
        new Date(props.year, props.month, 1),
        new Date(props.year, props.month + 1, 0)
    ];

    let [day, month, year, start, length, position, name] = [
        d1.getDate(), d1.getMonth(), d1.getFullYear(), d1.getDay(),
        d2.getDate(), d2.getDay(), d1.toLocaleString('default', { month: 'long' })
    ];

    day = day - start;

    const shape = Math.round((length + start + (7 - position)) / 7);

    const cal = Array(shape).fill(0).map(_ => Array(7).fill(0).map(_ => {

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
            <td key={`cell-${Math.random()}`}>
                <a
                    class={setClasses({
                        day_fill: month != m,
                        current_day: date.toString() == today.toString(),
                    })}
                    key={`link-${d}`}
                    href="javascript:void(0)"
                    onClick={props.dayClick}
                    data-day={d}
                    data-month={m}
                    data-year={y}
                    title={title}>
                    <span>{
                        d.toString().padStart(2, '0')
                    }</span>
                </a>
            </td>
        );
    })).map(el => (
        <tr class="tr">{...el}</tr>
    ));
    return (
        <table data-month={name} data-year={year} {...props.attrs}>
            <thead>
                <tr>
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
                                <th class="th" data-name={x} data-abbr={abbr}>
                                    {x}
                                </th>
                            )
                        })}
                </tr>
            </thead>
            <tbody>
                {cal}
            </tbody>
        </table>
    );
}
