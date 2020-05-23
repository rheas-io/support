"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("@rheas/core/app");
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
    return app().config(key, defaultValue);
}
exports.config = config;
