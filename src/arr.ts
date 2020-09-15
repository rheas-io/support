export class Arr {
    /**
     * Returns an array containing both the `oldValue` and `newValue`.
     *
     * @param newValue
     * @param oldValue
     */
    public static append(newValue: any, oldValue: any): any[] {
        oldValue = Arr.wrap(oldValue);

        oldValue.push(...Arr.wrap(newValue));

        return oldValue;
    }

    /**
     * Returns a clean array without empty strings, undefined or null values
     * in it.
     *
     * @param value
     */
    public static clean(value: any[]): any[] {
        const clone = [...value];

        return clone.filter((value) => value != null && value !== '');
    }

    /**
     * Returns true if the array element is empty. We filter out any empty strings,
     * undefined and null values in the array, before checking the length.
     *
     * @param value
     */
    public static isEmpty(value: any[]): boolean {
        const clean = Arr.clean(value);

        return clean.length === 0;
    }

    /**
     * Wraps a value into an array.
     *
     * If the `value` is undefined, then an empty array is returned.
     * Otherwise, an array with the first element set as the `value`
     * will be returned.
     *
     * @param value
     */
    public static wrap(value: any): any[] {
        if (!Array.isArray(value)) {
            value = value === undefined ? [] : [value];
        }
        return value;
    }
}
