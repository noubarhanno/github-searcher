let timeout: NodeJS.Timeout | null;
export default (func: any, wait: number, immediate: boolean = false) => {
    return function (...args: any) {
        // @ts-ignore
        const context: any = this;
        const later = () => {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        const callNow = immediate && !timeout;
        // @ts-ignore
        clearTimeout(timeout);
        // @ts-ignore
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
};
