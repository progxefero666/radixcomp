//src\codegen\filesystem\fsfunctions.ts

import { FsConstants } from "./fsconfig";

export class FsFunctions {

    /**
     * Checks if the given path is a valid file path.
     */
    public static isValidFilePath(path: string): boolean {
        // Basic validation for a file path
        return typeof path === 'string' && path.length > 0 && !path.includes('..');
    };//end


    /**
     * Checks if the given path is a valid directory path.
     */ 
    public static isValidDirectoryPath(path: string): boolean {

        return typeof path === 'string' && path.length > 0 && 
                     !path.includes('..') && !path.endsWith(FsConstants.PATH_BAR);  
    };//end

    /**
     * Joins two paths into a single path.
     */
    public static joinPaths(basePath: string, relativePath: string): string {
        if (!this.isValidDirectoryPath(basePath) || !this.isValidFilePath(relativePath)) {
            throw new Error("Invalid path provided");
        }
        return `${basePath}/${relativePath}`;
    };//end

    /**
     * Normalizes a file path by removing redundant slashes and resolving relative segments.
     */
    public static normalizePath(path: string): string {
        if (!this.isValidFilePath(path)) {
            throw new Error("Invalid file path provided");
        }
        // Replace multiple slashes with a single slash and trim leading/trailing slashes
        return path.replace(/\/+/g, '/').replace(/^\//, '').replace(/\/$/, '');

    };//end  

    /**
     * Checks if the given path is an absolute path.
     */
    public static isAbsolutePath(path: string): boolean {
        if (!this.isValidFilePath(path)) {
            throw new Error("Invalid file path provided");
        }
        // An absolute path typically starts with a slash
        return path.startsWith('/');
    };//end

}//end class