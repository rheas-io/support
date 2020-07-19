"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var files_1 = require("@rheas/files");
var app_1 = require("@rheas/core/app");
var http_1 = require("@rheas/errors/http");
/**
 * Throws an Http exception that will break the request pipeline
 * causing capture by the exception handler.
 *
 * @param status
 * @param message
 */
function abort(status, message) {
    if (message === void 0) { message = ""; }
    throw new http_1.HttpException(status, message);
}
exports.abort = abort;
/**
 * Returns the application instance. If no instance is
 * available, one will be initialised with the given root
 * path.
 *
 * @param rootPath
 * @return IApp
 */
function app(rootPath) {
    if (rootPath === void 0) { rootPath = ""; }
    return app_1.Application.getInstance(rootPath);
}
exports.app = app;
/**
 * Returns the app configuration
 *
 * @param key
 * @param defaultValue
 */
function config(key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return app().configs().get(key, defaultValue);
}
exports.config = config;
/**
 * Returns the applications main database connection.
 *
 * @return dbConnection
 */
function db() {
    return app().get('db');
}
exports.db = db;
/**
 * Returns the app environment variable value
 *
 * @param key
 * @param defaultValue
 */
function env(key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = ''; }
    return app().env().get(key, defaultValue);
}
exports.env = env;
/**
 * Returns a new fileManager instance.
 *
 * @returns
 */
function files() {
    return new files_1.FileManager();
}
exports.files = files;
