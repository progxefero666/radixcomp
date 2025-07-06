//src\db\functions\objectsutil.ts

/**
 * Utility class for model operations.
 *    - This class provides methods for manipulating 
 *    - Validate model data (not implemented yet).
 *    - Convert Deserialize server response to javascript object.
 * export class ModelUtil {}
 */

export const parseCollection = <T>(coll: string): Array<T> | null => {
    if (coll == null) {
        return null;
    }
    const jsonParsed = JSON.parse(coll);
    return jsonParsed as Array<T>;
};

export const parseItem = <T>(obj: string): T | null => {
    if (obj == null) {
        return null;
    }
    const jsonParsed = JSON.parse(obj);
    return jsonParsed as T;
};


export const parseItemWithRelChildrens = <T, R>(obj: string): T & { [key: string]: R[] } | null => {
    if (obj == null) {
        return null;
    }
    const jsonParsed = JSON.parse(obj);
    return jsonParsed as T & { [key: string]: R[] };
};

export const parseCollectionWithRelChildrens = <T, R>(coll: string): Array<T & { [key: string]: R[] }> | null => {
    if (coll == null) {
        return null;
    }
    const jsonParsed = JSON.parse(coll);
    return jsonParsed as Array<T & { [key: string]: R[] }>;
};


