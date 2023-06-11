export function classnames(...args: (string | string[] | { [key: string]: boolean })[]) {
    let template = "";
    args.forEach((arg) => {
        if (typeof arg === "string") {
            template += ` ${arg}`;
            return;
        }
        if (Array.isArray(arg)) {
            arg.forEach((e) => {
                template += ` ${e}`;
            });
            return;
        }
        const entries = Object.entries(arg);
        if (entries.length) {
            entries.forEach((entry) => {
                if (entry[1]) template += ` ${entry[0]}`;
            });
        }
    });
    return template;
}
