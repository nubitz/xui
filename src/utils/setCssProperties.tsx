export const setCssProperties = <T extends { [key: string]: string }>(host, props: T): void => {
    Object.entries(props).forEach(([key, value]) => {
        if (value) {
            host.style.setProperty(key, value);
        }
    })
}
