import { Application } from '@rheas/core/app';
import { IQueue } from '@rheas/contracts/queue';
import { IApp } from '@rheas/contracts/core/app';
import { IDriverManager } from '@rheas/contracts/services';
import { IView, IViewFactory } from '@rheas/contracts/views';

/**
 * Returns the application instance. If no instance is available, one will be
 * initialised with the given root path.
 *
 * @param rootPath
 * @return IApp
 */
export function app(rootPath: string = ''): IApp {
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
 * Returns the mix manifest file path for the given path.
 *
 * @param path
 */
export function mix(path: string) {
    return app().get('mix').get(path);
}

/**
 * Returns a queue with the given name or returns the default queue if
 * no queue name is given.
 *
 * @param name
 */
export function queue(name?: string): IQueue {
    const queueManager: IDriverManager<IQueue> = app().get('queue');

    return queueManager.getDriver(name);
}

/**
 * Creates a new view object at the given source directory.
 *
 * @param srcDir
 */
export function view(srcDir?: string): IView {
    const viewFactory: IViewFactory = app().get('view');

    return viewFactory.createNewView(srcDir);
}
