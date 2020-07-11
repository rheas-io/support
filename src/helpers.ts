import { FileManager } from "@rheas/files";
import { Application } from "@rheas/core/app";
import { IApp } from "@rheas/contracts/core/app";
import { IFileManager } from "@rheas/contracts/files";

/**
 * Returns the application instance. If no instance is
 * available, one will be initialised with the given root
 * path.
 * 
 * @param rootPath
 * @return IApp
 */
export function app(rootPath: string = ""): IApp {
    return Application.getInstance(rootPath);
}

/**
 * Returns the app configuration
 * 
 * @param key 
 * @param defaultValue 
 */
export function config(key: string, defaultValue: any = null) {
    return app().configs().get(key, defaultValue);
}

/**
 * Returns the applications main database connection.
 * 
 * @return dbConnection
 */
export function db() {
    return app().get('db');
}

/**
 * Returns the app environment variable value
 * 
 * @param key 
 * @param defaultValue 
 */
export function env(key: string, defaultValue: any = '') {
    return app().env().get(key, defaultValue);
}

/**
 * Returns a new fileManager instance.
 * 
 * @returns
 */
export function files(): IFileManager {
    return new FileManager();
}