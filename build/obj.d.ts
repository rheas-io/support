import { AnyObject } from "@rheas/contracts";
export declare class Obj {
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
    static get(object: AnyObject, key: string, defaultValue?: any): any;
}
