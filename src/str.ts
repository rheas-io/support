import crypto from 'crypto';
import { AnyObject } from '@rheas/contracts';
import { EmailValidator } from './emailValidator';

export class Str {
    /**
     * Decodes a base64 string to the given encoding
     *
     * @param data
     * @param encoding
     */
    public static base64Decode(data: string, encoding: string = 'utf8'): string {
        return Buffer.from(data, 'base64').toString(encoding);
    }

    /**
     * Encodes a utf8 string to base64
     *
     * @param data
     * @param encoding
     */
    public static base64Encode(data: string): string {
        return Buffer.from(data, 'utf8').toString('base64');
    }

    /**
     * Convert a value to camel case.
     *
     * @param  value
     */
    public static camel(value: string): string {
        return Str.lcfirst(Str.studly(value));
    }

    /**
     * Returns a dotted path of the given path.
     *
     * @param path
     */
    public static dottedPath(path: string): string {
        return Str.replace(Str.path(path), '/', '.');
    }

    /**
     * Returns a regex escaped pattern.
     *
     * @param pattern
     */
    public static escapeForRegex(pattern: string): string {
        return pattern.replace(/([()[{*+.$^\\|?])/g, '\\$1');
    }

    /**
     * Checks if a value is an alphanumeric string containing only
     * chars from 0-9, A-Z and a-z
     *
     * @param value
     */
    public static isAlphaNum(value: string): boolean {
        return /^[0-9A-Za-z]+$/g.test(value);
    }

    /**
     * Checks if a value is a hex string or not.
     *
     * @param value
     */
    public static isHex(value: string): boolean {
        return /^[0-9A-Fa-f]+$/g.test(value);
    }

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
    public static isValidEmail(email: string): boolean {
        return new EmailValidator().validate(email);
    }

    /**
     * Checks if a given string is a valid url or not.
     *
     * Source: https://gist.github.com/dperini/729294
     *
     * @param url
     */
    public static isValidUrl(url: string): boolean {
        // If the pattern does not match the url, null is returned and the whole value if
        // url is a match. Hence the !! operator for truthiness.
        //
        // Using Regex class resulted in unexpected results for the pattern. So use it
        // this way.
        return !!/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?:(?:10|127)(?:\.\d{1,3}){3})|(?:(?:169\.254|192\.168)(?:\.\d{1,3}){2})|(?:172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.exec(
            url,
        );
    }

    /**
     * Convert a string to kebab case.
     *
     * @param value
     */
    public static kebab(value: string): string {
        return Str.snake(value).replace(/_/gu, '-');
    }

    /**
     * Convert the first character of the given string to lower case
     *
     * @param str
     */
    public static lcfirst(str: string) {
        return str.charAt(0).toLocaleLowerCase() + str.slice(1);
    }

    /**
     * Cleans a path. Removes backward slashes with forward slashes.
     * Removes trailing and leading spaces and slashes.
     *
     * @param path
     */
    public static path(path: string) {
        return Str.trim(Str.replaceWithOne(Str.replace(path.trim(), '\\', '/'), '/'), '/');
    }

    /**
     * Generates a uri encoded query string for the given params. The second
     * argument is a list of parameters that has to be excluded.
     *
     * Returns string of form ?company=kaysy%20LLC&framework=rheas
     *
     * @param params
     * @param excludeKeys
     */
    public static queryString(params: AnyObject, excludeKeys: string[] = []): string {
        let queryString = Object.keys(params).reduce((queryString, currentParam) => {
            if (!excludeKeys.includes(currentParam)) {
                queryString +=
                    encodeURIComponent(currentParam) +
                    '=' +
                    encodeURIComponent(params[currentParam]) +
                    '&';
            }
            return queryString;
        }, '');

        queryString = Str.trimEnd(queryString, '&');

        return queryString.length > 0 ? '?' + queryString : '';
    }

    /**
     * Creates a random byte and returns hex string
     *
     * @param size
     */
    public static async random(size: number = 16): Promise<string> {
        return await new Promise<string>((resolve, reject) => {
            crypto.randomBytes(size, (error, buffer) => {
                if (error !== null) {
                    return reject('Error creating random bytes');
                }
                return resolve(buffer.toString('hex'));
            });
        });
    }

    /**
     * Replaces all occurances of needle from the string
     *
     * @param str
     * @param needle
     * @param replace
     */
    public static replace(str: string, needle: string, replace: string) {
        needle = Str.escapeForRegex(needle);

        const regex = new RegExp(`${needle}`, 'g');

        return str.replace(regex, replace);
    }

    /**
     * Replaces multiple occurances of needle from the string with single
     *
     * @param str
     * @param needle
     * @param replace
     */
    public static replaceWithOne(str: string, needle: string) {
        needle = Str.escapeForRegex(needle);

        const regex = new RegExp(`${needle}{2,}`, 'g');

        return str.replace(regex, needle);
    }

    /**
     * Convert a string to snake case.
     *
     * @param value
     */
    public static snake(value: string): string {
        // Remove all spaces after first letter of words
        // are capitalized.
        value = Str.ucwords(value).replace(/\s+/gu, '');
        // Add an underscore before the capital letters.
        // And convert the whole string to lower case.
        value = value.replace(/(.)(?=[A-Z])/gu, '$1_').toLocaleLowerCase();

        return value;
    }

    /**
     * Convert a value to studly caps case.
     *
     * @param  value
     */
    public static studly(value: string): string {
        value = Str.ucwords(value.replace(/-|_/g, ' '));

        return value.replace(/\ /g, '');
    }

    /**
     * Removes multiple occurances of needle from the start and end of
     * the string
     *
     * @param str
     * @param needle
     */
    public static trim(str: string, needle: string) {
        needle = Str.escapeForRegex(needle);

        const regex = new RegExp(`^${needle}+|${needle}+$`, 'g');

        return str.replace(regex, '');
    }

    /**
     * Removes multiple occurances of needle from the end of string
     *
     * @param str
     * @param needle
     */
    public static trimEnd(str: string, needle: string) {
        needle = Str.escapeForRegex(needle);

        const regex = new RegExp(`${needle}+$`, 'g');

        return str.replace(regex, '');
    }

    /**
     * Removes multiple occurances of needle from the start of string
     *
     * @param str
     * @param needle
     */
    public static trimStart(str: string, needle: string | string[]) {
        let regexPattern = '';

        if (Array.isArray(needle)) {
            regexPattern = '(' + needle.map((item) => Str.escapeForRegex(item)).join('|') + ')';
        } else {
            regexPattern = Str.escapeForRegex(needle);
        }

        const regex = new RegExp(`^${regexPattern}+`, 'g');

        return str.replace(regex, '');
    }

    /**
     * Convert the first character of the given string to upper case
     *
     * @param str
     */
    public static ucfirst(str: string) {
        return str.charAt(0).toLocaleUpperCase() + str.slice(1);
    }

    /**
     * Upper case the first char of all the words in the string.
     *
     * @param str
     */
    public static ucwords(str: string) {
        return str
            .trim()
            .split(' ')
            .map((word) => Str.ucfirst(word))
            .join(' ');
    }
}
