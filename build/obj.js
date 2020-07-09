"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Obj = /** @class */ (function () {
    function Obj() {
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
    Obj.get = function (object, key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var keys = key.split('.');
        var result = keys.reduce(function (prev, current) {
            return (prev && prev[current]) ? prev[current] : undefined;
        }, object);
        return result === undefined ? defaultValue : result;
    };
    return Obj;
}());
exports.Obj = Obj;
