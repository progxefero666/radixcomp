//src\db\functions\modelutil.ts

/**
 * Utility class for model operations.
 *    - This class provides methods for manipulating 
 *    - Validate model data (not implemented yet).
 *    - Convert Deserialize server response to javascript object.
 * export class ModelUtil {}
 */

export const toArrayObjectsClass = <T>(coll: string): Array<T> | null => {
    if (coll == null) {
        return null;
    }
    const jsonParsed = JSON.parse(coll);
    return jsonParsed as Array<T>;
};


