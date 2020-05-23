import { Application } from "@rheas/core/app";
import { IApp } from "@rheas/contracts/core/app";

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
    return app().config(key, defaultValue);
}