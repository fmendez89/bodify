/**
 * Returns a dictionary with the passed key as key and the object itself as value.
 * @param items - The array of objects to convert to a map
 * @param key - The property of the object that will be used as key
 * @returns { {[key: string]: any} }
 */
export const arrayToMap = <T, K extends keyof T>(items: T[], key: K): { [key: string]: T } =>
    items.reduce(
        (previousValue, currentValue) => ({
            ...previousValue,
            [currentValue[key] as unknown as string]: currentValue,
        }),
        {} as { [key: string]: T }
    );
