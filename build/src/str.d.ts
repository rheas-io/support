import { StringObject } from "@laress/contracts";
export declare class Str {
    /**
     * The cache of snake-cased words.
     */
    protected static snakeCache: StringObject;
    /**
     * The cache of camel-cased words.
     */
    protected static camelCache: StringObject;
    /**
     * The cache of studly-cased words.
     */
    protected static studlyCache: StringObject;
    /**
     * Convert a string to kebab case.
     *
     * @param value
     */
    static kebab(value: string): string;
    /**
     * Convert a string to snake case.
     *
     * @param value
     */
    static snake(value: string): string;
    /**
     * Convert a value to camel case.
     *
     * @param  value
     */
    static camel(value: string): string;
    /**
     * Convert a value to studly caps case.
     *
     * @param  value
     */
    static studly(value: string): string;
    /**
     * Convert the first character of the given string to lower case
     *
     * @param str
     */
    static lcfirst(str: string): string;
    /**
     * Convert the first character of the given string to upper case
     *
     * @param str
     */
    static ucfirst(str: string): string;
    /**
     * Upper case the first char of all the words in the string.
     *
     * @param str
     */
    static ucwords(str: string): string;
}
