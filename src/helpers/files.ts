import { FileManager } from '@rheas/files';
import { IFileManager } from '@rheas/contracts/files';

/**
 * Returns a new fileManager instance.
 *
 * @returns
 */
export function files(): IFileManager {
    return new FileManager();
}
