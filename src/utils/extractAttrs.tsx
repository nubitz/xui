export const extractAttrs = (el: HTMLElement): { [key: string]: any } => {
    let attrs = {};
    Array.from(
        el?.attributes || []
    ).forEach((
        { name, value }) => {
        attrs = {
            ...attrs, [name]: value
        }
    });
    return attrs;
};
