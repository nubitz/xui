export const debounce = (callback: (...args: any[]) => void, ms?: number): () => void => {
    let timer: any;
    return (...args: any[]): any => {
        clearTimeout(timer);
        timer = setTimeout(callback, ms, ...args);
    }
}
