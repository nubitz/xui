import { FunctionalComponent, h } from '@stencil/core';

export const InputMask: FunctionalComponent<{
    value: string,
    format: string,
    mask?: string,
    focus?: boolean,
    input: HTMLInputElement,
    [key: string]: any
}> = ({ value, format, mask, input, focus, ...props }) => {

    if (!format) return;

    let characters: Array<any> = [];

    const chars = value?.match(/[\p{L}0-9]/gu) || [];

    const [m, f] = [mask, format].map(x => x?.split("") || []);

    f.forEach((v: string, i: number) => {

        if (v == "*" && chars.length > 0) {

            characters = [...characters, chars[0]]

            chars.shift();

        } else {

            if (m[i]) {

                characters = [...characters, m[i]];

            } else if (chars.length > 0) {

                characters = [...characters, (v == "*") ? "" : v];
            }
        }
    });

    if (focus) {

        let cursor: Array<any> = f;

        cursor.map(
            (x: string, i: number) => {
                if (x != "*") {
                    delete cursor[i];
                }
                return x;
            })

        cursor = Object.keys(cursor);

        const buffer = Array(5).fill(
            parseInt(cursor[cursor.length - 1])
        ).map((x: number, i: number) => x + (i + 1));

        cursor = cursor.concat(buffer);

        if (input) {
            characters.splice(
                cursor[input.selectionStart], 0, <span class="cursor"></span>
            )
        }
        characters = characters.concat("");
    }

    if (characters.length > 0) {
        return (
            <span class="input-mask" {...props} >
                {...characters}
            </span>
        )
    }
}