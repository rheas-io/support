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
