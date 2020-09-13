import { ILaterTime } from '@rheas/contracts/notifications';

export class Later implements ILaterTime {
    /**
     * Epoch time in the future.
     *
     * @var number
     */
    protected _time: number;

    /**
     * Creates a new LaterTime instance with the millisecond
     * epoch time in the future.
     *
     * @param time
     */
    private constructor(time: number = Date.now()) {
        this._time = Math.trunc(time);
    }

    /**
     * Adds the given seconds to the current time.
     *
     * @param seconds
     */
    public static bySeconds(seconds: number): ILaterTime {
        return new Later(Date.now() + seconds * 1000);
    }

    /**
     * Adds the given minutes to the current time.
     *
     * @param minutes
     */
    public static byMinutes(minutes: number): ILaterTime {
        return new Later(Date.now() + minutes * 60 * 1000);
    }

    /**
     * Adds the given hours to the current time.
     *
     * @param hours
     */
    public static byHours(hours: number): ILaterTime {
        return new Later(Date.now() + hours * 3600 * 1000);
    }

    /**
     * Adds the given hours to the current time.
     *
     * @param days
     */
    public static byDays(days: number): ILaterTime {
        return new Later(Date.now() + days * 86400 * 1000);
    }

    /**
     * Returns a epoch millisecond in the future.
     *
     * @returns
     */
    public atTime(): number {
        return this._time;
    }
}
