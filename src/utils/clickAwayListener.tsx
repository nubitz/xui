export const clickAwayListener = (
    host: HTMLElement, callback: (e?: any) => void): void => {

    const tagName = host?.tagName.toLocaleLowerCase();

    if (!tagName) return;

    const events = ['click', 'touchend'];

    const eventHandler = ({ target }) => {

        const parentElement = (target as HTMLElement).closest(tagName);

        if (!parentElement) {

            callback({
                flag: true
            });
            cancelEvents();

        } else if (!parentElement.contains(host)) {

            if (!parentElement?.parentElement.closest(tagName)) {

                callback({
                    flag: true
                });
            }
        } else {

            if (parentElement.closest(tagName) != host) {
                callback({
                    flag: true
                });
            }
        }
    }

    const cancelEvents = () => {
        events.forEach(e => {
            document.removeEventListener(e, eventHandler, false);
        });
    }

    events.forEach(e => {
        document.addEventListener(e, eventHandler)
    });
}