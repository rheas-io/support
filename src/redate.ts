import dayjs from 'dayjs';

export { dayjs, Redate };

class Redate {
    /**
     * Converts the given epoch milliseconds into UTC string for date fields on
     * http responses. The time is returned in GMT/UTC.
     *
     * @param time
     */
    public static responseFormat(time: number) {
        return new Date(time).toUTCString();
    }
}
