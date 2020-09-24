import { HttpException } from '@rheas/errors/http';

/**
 * Throws an Http exception that will break the request pipeline
 * causing capture by the exception handler.
 *
 * @param status
 * @param message
 */
export function abort(status: number, message: string = ''): void {
    throw new HttpException(status, message);
}
