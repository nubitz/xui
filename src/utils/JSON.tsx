export const fromJSON = (json: string): Object => {
    if (typeof json == 'string') {
        return (
            JSON.parse(json) as any
        );
    }
    return json;
}

export const toJSON = (json: Object, pretty: boolean = false): string => {
    if (typeof json == 'object') {
        return (
            !pretty
                ? JSON.stringify(json)
                : JSON.stringify(json, null, 2)
        );
    }
    return json;
}
