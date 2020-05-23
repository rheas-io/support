import { IApp } from "@rheas/contracts/core/app";
/**
 * Returns the application instance. If no instance is
 * available, one will be initialised with the given root
 * path.
 *
 * @param rootPath
 * @return IApp
 */
export declare function app(rootPath?: string): IApp;
/**
 * Returns the app configuration
 *
 * @param key
 * @param defaultValue
 */
export declare function config(key: string, defaultValue?: any): any;
