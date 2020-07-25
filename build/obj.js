"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Obj {
    /**
     * Checks if an object is an actual object, ie key-value pairs
     * and not an array or any other types. Typeof won't work as everything
     * in JS is an object and arrays could also be considered as an object.
     *
     * @param object
     */
    static isObject(object) {
        return !!object && object.constructor === Object.prototype.constructor;
    }
    /**
     * Returns an item from the object. Supports nested search using dotted key.
     *
     * For example;
     * const obj = { id:123, author:{ id:131313, name:Kalesh } };
     * const id = Str.get(obj,'author.id')   // returns 131313
     *
     * Result: id = 131313
     *
     * @param object
     * @param key
     * @param defaultValue
     */
    static get(object, key, defaultValue = null) {
        if (object.hasOwnProperty(key)) {
            return object[key];
        }
        /*
        const result = key.split('.').reduce((prev: any, current: any) => {
            return (prev && prev[current] !== undefined) ? prev[current] : undefined;
        }, object);
*/
        const result = test(object, key);
        return result === undefined ? defaultValue : result;
    }
}
exports.Obj = Obj;
/**
 * This could be used to iterate objects with dots on keys like
 *
 * {'a.b' : { 'c.d' : 100 } } ---->a.b.c.d will return 100
 *
 * But the issue arises when there are keys like
 *
 * {'a.b' : { 'c.d' : 100 }, 'a.b.c.d' : 2000 }
 * in the above case, there are two possible values for
 * a.b.c.d == 100 and 2000. Both are valid and there is no way to tell
 * which one is user referring to.
 *
 * So having no dots in the keys are the best option and dots are used
 * only for nested key access.
 *
 * @param dotted
 * @param mainKey
 */
function test(dotted, mainKey) {
    for (let key in dotted) {
        if (mainKey === key) {
            return dotted[key];
        }
        if (mainKey.startsWith(key + '.') && mainKey.length > key.length + 1) {
            return test(dotted[key], mainKey.substring(key.length + 1));
        }
    }
    return undefined;
}
