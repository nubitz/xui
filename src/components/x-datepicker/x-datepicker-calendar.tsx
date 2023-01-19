import { Component, Prop, Event, EventEmitter, Listen, Watch, h } from '@stencil/core';
import { Calendar, CalendarMonths, CalendarYears } from '../../functionals';
import { clickAwayListener, debounce } from '../../utils';

@Component({
    tag: 'x-datepicker-calendar',
    styleUrl: 'x-datepicker-calendar.scss',
    shadow: false
})
export class XDatepickerCalendar {

    private popover: HTMLXPopoverElement;

    @Prop() activeWindow: 'calendar' | 'months' | 'years' = 'calendar';

    @Prop() value: string;

    @Prop() month: number = 1;

    @Prop() year: number = 2021;

    @Prop({
        mutable: true
    }) open: boolean = false;

    @Event() dateChange: EventEmitter<{
        value: string
    }>

    @Watch('open')
    openHandler(): void {
        if (this.open) {
            clickAwayListener(this.popover, _ => {
                this.open = false;
            })
        } else {
            this.activeWindow = 'calendar';
        }
    }

    @Listen('keydown')
    keydowndHandler(keyboard: KeyboardEvent): void {

        const { key, shiftKey } = keyboard;

        const flag = this.activeWindow == 'calendar';

        const {
            element = false, index, items
        } = this.getActiveElement()

        if (!element) return;

        const keyboardMap = {
            ArrowLeft: {
                moveTo: -1,
                increment: -1
            },
            ArrowRight: {
                moveTo: 1,
                increment: 1
            },
            ArrowUp: {
                moveTo: flag ? -7 : -4,
                increment: -1
            },
            ArrowDown: {
                moveTo: flag ? 7 : 4,
                increment: 1
            },
            Home: {
                moveTo: -(index % 7),
                increment: -1
            },
            End: {
                moveTo: 7 - (index % 7) - 1,
                increment: 1
            },
            PageUp: {
                moveTo: () => {
                    return (
                        shiftKey
                            ? { m: 0, y: -1, d: 1 }
                            : { m: -1, y: 0, d: 1 }
                    )
                }
            },
            PageDown: {
                moveTo: () => {
                    return (
                        shiftKey
                            ? { m: 0, y: 1, d: 1 }
                            : { m: 1, y: 0, d: 1 }
                    )
                }
            }
        };
        if (keyboardMap[key]) {
            this.keyboardSetFocus({
                ...keyboardMap[key],
                flag: flag, index: index, items: items
            })
        }
    }

    keyboardSetFocus<T extends {
        moveTo: any,
        increment: number,
        flag: boolean,
        index: number,
        items: Array<any>
    }>({ moveTo, increment, flag, items, index }: T): void {

        if (moveTo instanceof Function) {
            const { m, y, d } = moveTo();
            console.log(m, y, d)
            return;
        }

        const button = items[index + moveTo]?.firstChild;

        if (button) {
            button.focus();
        }
        console.log(123, 'NEEDS WORK - DATEPICKER CAL', moveTo, increment, flag, items, index)
    }

    getActiveElement(): {
        element: HTMLElement,
        parent: HTMLElement,
        index: number,
        items: Array<any>
    } {

        const element = document?.activeElement?.parentElement;

        const parent = element.parentElement;

        const grid = Array.from(parent.children);

        const index = grid.indexOf(element);
        return ({
            element: element,
            parent: parent,
            index: index,
            items: grid
        })
    }

    render() {

        const date = new Date(this.year, this.month, 1);

        const [year, month] = [
            date.getFullYear(),
            date.toLocaleString('default',
                { month: 'long' }
            )];

        return (
            <x-popover
                width="300px"
                placement="bottom-right"
                open={this.open}
                ref={el => this.popover = el}
                onOpenPopover={({ detail: { open } }) => this.open = open}
            >
                <x-button
                    slot="popover-control"
                    color="info"
                    variant="none"
                >
                    <x-icon solid name="calendar" />
                </x-button>
                <x-box direction="column">
                    <x-box direction="row">
                        <x-box-item
                            sx={{
                                flex: 1
                            }}
                        >
                            <x-button
                                color="info"
                                variant="none"
                                onButtonClicked={_ => {
                                    this.activeWindow = 'months';
                                }}
                            >
                                {month}
                            </x-button>
                        </x-box-item>
                        <x-box-item
                            sx={{
                                flex: 1
                            }}
                        >
                            <x-button
                                color="info"
                                variant="none"
                                onButtonClicked={() => {
                                    this.activeWindow = 'years';
                                }}
                            >
                                {year}
                            </x-button>
                        </x-box-item>
                        <x-box-item
                            sx={{ flex: 0 }}
                        >
                            <x-button
                                color="info"
                                variant="none"
                                onClick={() => {
                                    this.month = this.month - 1;
                                }}
                            >
                                <x-icon solid name="chevron-left" />
                            </x-button>
                            <x-button
                                color="info"
                                variant="none"
                                onClick={() => {
                                    this.month = this.month + 1;
                                }}
                            >
                                <x-icon solid name="chevron-right" />
                            </x-button>
                        </x-box-item>
                    </x-box>

                    {this.activeWindow == 'calendar' && (
                        <Calendar
                            month={this.month}
                            year={this.year}
                            selectedDate={this.value}
                            dayClick={debounce(({
                                day, month, year
                            }) => {
                                const value = [
                                    `${month}`.padStart(2, '0'),
                                    `${day}`.padStart(2, '0'),
                                    year
                                ].join('');
                                this.dateChange.emit({
                                    value: value
                                });
                                this.open = false;
                            })}
                        />
                    )}
                    {this.activeWindow == 'months' && (
                        <CalendarMonths
                            month={month}
                            buttonClick={({
                                month
                            }) => {
                                this.month = month;
                                this.activeWindow = 'calendar';
                            }}
                        />
                    )}
                    {this.activeWindow == 'years' && (
                        <div
                            style={{
                                height: '300px', overflowX: 'hidden'
                            }}
                        >
                            <CalendarYears
                                year={year}
                                range={200}
                                startDate={1900}
                                buttonClick={({ year }) => {
                                    this.activeWindow = 'calendar';
                                    this.year = year;
                                }}
                            />
                        </div>
                    )}
                </x-box>
            </x-popover>
        )
    }
}