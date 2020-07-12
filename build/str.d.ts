import { AnyObject } from "@rheas/contracts";
export declare class Str {
    /**
     * Decodes a base64 string to the given encoding
     *
     * @param data
     * @param encoding
     */
    static base64Decode(data: string, encoding?: string): string;
    /**
     * Encodes a utf8 string to base64
     *
     * @param data
     * @param encoding
     */
    static base64Encode(data: string): string;
    /**
     * Convert a value to camel case.
     *
     * @param  value
     */
    static camel(value: string): string;
    /**
     * Returns a dotted path of the given path.
     *
     * @param path
     */
    static dottedPath(path: string): string;
    /**
     * Returns a regex escaped pattern.
     *
     * @param pattern
     */
    static escapeForRegex(pattern: string): string;
    /**
     * Returns true if the given argument is a valid email.
     *
     * Weak email validation is performed by checking charcter lengths of
     * each part of email.
     *
     * For strong check, use the Regex
     *
     * /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i
     *
     * Regex source: https://github.com/ansman/validate.js/blob/master/validate.js
     *
     * @param email
     */
    static isValidEmail(email: string): boolean;
    /**
     * Checks if a given string is a valid url or not.
     *
     * Source: https://gist.github.com/dperini/729294
     *
     * @param url
     */
    static isValidUrl(url: string): boolean;
    /**
     * Convert a string to kebab case.
     *
     * @param value
     */
    static kebab(value: string): string;
    /**
     * Convert the first character of the given string to lower case
     *
     * @param str
     */
    static lcfirst(str: string): string;
    /**
     * Cleans a path. Removes backward slashes with forward slashes.
     * Removes trailing and leading spaces and slashes.
     *
     * @param path
     */
    static path(path: string): string;
    /**
     * Generates a uri encoded query string for the given params. The second
     * argument is a list of parameters that has to be excluded.
     *
     * Returns string of form ?company=kaysy%20LLC&framework=rheas
     *
     * @param params
     * @param excludeKeys
     */
    static queryString(params: AnyObject, excludeKeys?: string[]): string;
    /**
     * Creates a random byte and returns hex string
     *
     * @param size
     */
    static random(size?: number): Promise<string>;
    /**
     * Replaces all occurances of needle from the string
     *
     * @param str
     * @param needle
     * @param replace
     */
    static replace(str: string, needle: string, replace: string): string;
    /**
     * Replaces multiple occurances of needle from the string with single
     *
     * @param str
     * @param needle
     * @param replace
     */
    static replaceWithOne(str: string, needle: string): string;
    /**
     * Convert a string to snake case.
     *
     * @param value
     */
    static snake(value: string): string;
    /**
     * Convert a value to studly caps case.
     *
     * @param  value
     */
    static studly(value: string): string;
    /**
     * Removes multiple occurances of needle from the start and end of
     * the string
     *
     * @param str
     * @param needle
     */
    static trim(str: string, needle: string): string;
    /**
     * Removes multiple occurances of needle from the end of string
     *
     * @param str
     * @param needle
     */
    static trimEnd(str: string, needle: string): string;
    /**
     * Removes multiple occurances of needle from the start of string
     *
     * @param str
     * @param needle
     */
    static trimStart(str: string, needle: string | string[]): string;
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
