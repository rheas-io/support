"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Str = /** @class */ (function () {
    function Str() {
    }
    /**
     * Convert a string to kebab case.
     *
     * @param value
     */
    Str.kebab = function (value) {
        return Str.snake(value).replace(/_/ug, '-');
    };
    /**
     * Convert a string to snake case.
     *
     * @param value
     */
    Str.snake = function (value) {
        var key = value;
        if (Str.snakeCache[value]) {
            return Str.snakeCache[value];
        }
        // Remove all spaces after first letter of words
        // are capitalized.
        value = Str.ucwords(value).replace(/\s+/ug, '');
        // Add an underscore before the capital letters.
        // And convert the whole string to lower case.
        value = value.replace(/(.)(?=[A-Z])/ug, '$1_').toLocaleLowerCase();
        return Str.snakeCache[key] = value;
    };
    /**
     * Convert a value to camel case.
     *
     * @param  value
     */
    Str.camel = function (value) {
        if (Str.camelCache[value]) {
            return Str.camelCache[value];
        }
        return Str.camelCache[value] = Str.lcfirst(Str.studly(value));
    };
    /**
     * Convert a value to studly caps case.
     *
     * @param  value
     */
    Str.studly = function (value) {
        var key = value;
        if (Str.studlyCache[key]) {
            return Str.studlyCache[key];
        }
        value = Str.ucwords(value.replace(/-|_/g, ' '));
        return Str.studlyCache[key] = value.replace(/\ /g, '');
    };
    /**
     * Convert the first character of the given string to lower case
     *
     * @param str
     */
    Str.lcfirst = function (str) {
        return str.charAt(0).toLocaleLowerCase() + str.slice(1);
    };
    /**
     * Convert the first character of the given string to upper case
     *
     * @param str
     */
    Str.ucfirst = function (str) {
        return str.charAt(0).toLocaleUpperCase() + str.slice(1);
    };
    /**
     * Upper case the first char of all the words in the string.
     *
     * @param str
     */
    Str.ucwords = function (str) {
        return str.trim().split(" ").map(function (word) { return Str.ucfirst(word); }).join(" ");
    };
    /**
     * Cleans a path. Removes backward slashes with forward slashes.
     * Removes trailing and leading spaces and slashes.
     *
     * @param path
     */
    Str.path = function (path) {
        return Str.trim(Str.replace(path.trim(), '\\', '/'), '/');
    };
    /**
     * Replaces all occurances of needle from the string
     *
     * @param str
     * @param needle
     * @param replace
     */
    Str.replace = function (str, needle, replace) {
        var regex = new RegExp("\\" + needle, 'g');
        return str.replace(regex, replace);
    };
    /**
     * Replaces multiple occurances of needle from the string with single
     *
     * @param str
     * @param needle
     * @param replace
     */
    Str.replaceWithOne = function (str, needle) {
        var regex = new RegExp("\\" + needle + "{2,}", 'g');
        return str.replace(regex, needle);
    };
    /**
     * Removes multiple occurances of needle from the start and end of
     * the string
     *
     * @param str
     * @param needle
     */
    Str.trim = function (str, needle) {
        var regex = new RegExp("^\\" + needle + "+|\\" + needle + "+$", 'g');
        return str.replace(regex, "");
    };
    /**
     * Removes multiple occurances of needle from the end of string
     *
     * @param str
     * @param needle
     */
    Str.trimEnd = function (str, needle) {
        var regex = new RegExp("\\" + needle + "+$", 'g');
        return str.replace(regex, "");
    };
    /**
     * Removes multiple occurances of needle from the start of string
     *
     * @param str
     * @param needle
     */
    Str.trimStart = function (str, needle) {
        var regex = new RegExp("^\\" + needle + "+", 'g');
        return str.replace(regex, "");
    };
    /**
     * The cache of snake-cased words.
     */
    Str.snakeCache = {};
    /**
     * The cache of camel-cased words.
     */
    Str.camelCache = {};
    /**
     * The cache of studly-cased words.
     */
    Str.studlyCache = {};
    return Str;
}());
exports.Str = Str;
