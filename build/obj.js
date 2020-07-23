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
        const keys = key.split('.');
        const result = keys.reduce((prev, current) => {
            return (prev && prev[current] !== undefined) ? prev[current] : undefined;
        }, object);
        return result === undefined ? defaultValue : result;
    }
}
exports.Obj = Obj;
