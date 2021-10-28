export const setCssProperties = <T extends { [key: string]: string }>(host, props: T): void => {
    Object.entries(props).forEach(([key, value]) => {
        if (value) {
            key = key.replace(/([A-Z])/g, '-$1').toLocaleLowerCase();
            host.style.setProperty(key, `${value}`);
        }
    })
}
