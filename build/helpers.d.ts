import { IApp } from "@rheas/contracts/core/app";
import { IFileManager } from "@rheas/contracts/files";
/**
 * Throws an Http exception that will break the request pipeline
 * causing capture by the exception handler.
 *
 * @param status
 * @param message
 */
export declare function abort(status: number, message?: string): void;
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
/**
 * Returns the applications main database connection.
 *
 * @return dbConnection
 */
export declare function db(): any;
/**
 * Returns the app environment variable value
 *
 * @param key
 * @param defaultValue
 */
export declare function env(key: string, defaultValue?: any): any;
/**
 * Returns a new fileManager instance.
 *
 * @returns
 */
export declare function files(): IFileManager;
