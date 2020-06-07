"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var emailValidator_1 = require("./emailValidator");
var Str = /** @class */ (function () {
    function Str() {
    }
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
     * Returns a regex escaped pattern.
     *
     * @param pattern
     */
    Str.escapeForRegex = function (pattern) {
        return pattern.replace(/([()[{*+.$^\\|?])/g, '\\$1');
    };
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
    Str.isValidEmail = function (email) {
        return new emailValidator_1.EmailValidator().validate(email);
    };
    /**
     * Checks if a given string is a valid url or not.
     *
     * Source: https://gist.github.com/dperini/729294
     *
     * @param url
     */
    Str.isValidUrl = function (url) {
        // If the pattern does not match the url, null is returned and the whole value if
        // url is a match. Hence the !! operator for truthiness.
        //
        // Using Regex class resulted in unexpected results for the pattern. So use it
        // this way.
        return !!/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?:(?:10|127)(?:\.\d{1,3}){3})|(?:(?:169\.254|192\.168)(?:\.\d{1,3}){2})|(?:172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i
            .exec(url);
    };
    /**
     * Convert a string to kebab case.
     *
     * @param value
     */
    Str.kebab = function (value) {
        return Str.snake(value).replace(/_/ug, '-');
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
     * Cleans a path. Removes backward slashes with forward slashes.
     * Removes trailing and leading spaces and slashes.
     *
     * @param path
     */
    Str.path = function (path) {
        return Str.trim(Str.replaceWithOne(Str.replace(path.trim(), '\\', '/'), '/'), '/');
    };
    /**
     * Generates a uri encoded query string for the given params. The second
     * argument is a list of parameters that has to be excluded.
     *
     * Returns string of form ?company=kaysy%20LLC&framework=rheas
     *
     * @param params
     * @param excludeKeys
     */
    Str.queryString = function (params, excludeKeys) {
        if (excludeKeys === void 0) { excludeKeys = []; }
        var queryString = Object.keys(params).reduce(function (queryString, currentParam) {
            if (excludeKeys.includes(currentParam)) {
                return '';
            }
            return queryString + currentParam + '=' + params[currentParam] + '&';
        }, '');
        queryString = Str.trimEnd(queryString, '&');
        return queryString.length > 0 ? '?' + encodeURIComponent(queryString) : '';
    };
    /**
     * Creates a random byte and returns hex string
     *
     * @param size
     */
    Str.random = function (size) {
        if (size === void 0) { size = 16; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            crypto_1.default.randomBytes(size, function (error, buffer) {
                                if (error !== null) {
                                    return reject("Error creating random bytes");
                                }
                                return resolve(buffer.toString('hex'));
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Replaces all occurances of needle from the string
     *
     * @param str
     * @param needle
     * @param replace
     */
    Str.replace = function (str, needle, replace) {
        needle = Str.escapeForRegex(needle);
        var regex = new RegExp("" + needle, 'g');
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
        needle = Str.escapeForRegex(needle);
        var regex = new RegExp(needle + "{2,}", 'g');
        return str.replace(regex, needle);
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
     * Removes multiple occurances of needle from the start and end of
     * the string
     *
     * @param str
     * @param needle
     */
    Str.trim = function (str, needle) {
        needle = Str.escapeForRegex(needle);
        var regex = new RegExp("^" + needle + "+|" + needle + "+$", 'g');
        return str.replace(regex, "");
    };
    /**
     * Removes multiple occurances of needle from the end of string
     *
     * @param str
     * @param needle
     */
    Str.trimEnd = function (str, needle) {
        needle = Str.escapeForRegex(needle);
        var regex = new RegExp(needle + "+$", 'g');
        return str.replace(regex, "");
    };
    /**
     * Removes multiple occurances of needle from the start of string
     *
     * @param str
     * @param needle
     */
    Str.trimStart = function (str, needle) {
        needle = Str.escapeForRegex(needle);
        var regex = new RegExp("^" + needle + "+", 'g');
        return str.replace(regex, "");
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
