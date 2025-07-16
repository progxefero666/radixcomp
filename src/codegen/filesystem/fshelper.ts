//src\codegen\filesystem\fshelper.ts

/**
 * class FsHelper
 */
export class FsHelper {
    

    /**
     * Normalizes a file path by removing redundant 
     * slashes and resolving relative segments.
     */
    public static normalizePath(path: string): string {
        return path.replace(/\/+/g, '/').replace(/^\//, '').replace(/\/$/, '');
    };//end  

    /**
     * Joins two paths into a single path.
     */
    public static joinPaths(basePath: string, relativePath: string): string {
        return `${basePath}/${relativePath}`;
    };//end


    /**
     * Checks if the given path is an absolute path.
     */
    public static isAbsolutePath(path: string): boolean {

        return path.startsWith('/');
    };//end


};//end class