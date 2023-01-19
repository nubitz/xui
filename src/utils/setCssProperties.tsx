export const setCssProperties = <T extends {
    media?: Array<{
        query: string,
        className: string,
        callback: (evt?: any) => void
    }>, [key: string]: any
}>(
    host: HTMLElement,
    { media, ...props }: T): void => {

    Object.entries(props).forEach(
        ([key, value]) => {
            if (value) {
                key = key?.replace(/([A-Z])/g, '-$1').toLocaleLowerCase();
                if ('string' == typeof value && '--' == value.slice(0, 2)) {
                    value = `var(${value})`;
                }
                host.style.setProperty(key, `${value}`);
            }
        });


    if (media) {

        media.forEach(({ query, className, callback }) => {

            const match = query.match(/\--[a-zA-Z0-9\-]+/g);

            if (match) {

                const style = getComputedStyle(host);

                const key = match[0];

                const value = style.getPropertyValue(key);

                query = query.replace(key, value);
            }

            const media = matchMedia(query);

            const setClass = ({ matches }) => {
                if (className) {
                    (matches)
                        ? host.classList.add(className)
                        : host.classList.add(className);
                }
                callback && (callback(matches));
            }

            media.onchange = media => setClass(media);

            setClass(media);
        });
    }
}
