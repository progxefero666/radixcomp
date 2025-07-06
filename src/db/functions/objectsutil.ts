//src\db\functions\objectsutil.ts

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

export const toObjectClass = <T>(obj: string): T | null => {
    if (obj == null) {
        return null;
    }
    const jsonParsed = JSON.parse(obj);
    return jsonParsed as T;
};

/*
Tipo de la entidad principal (ej: User, Task, etc.)
R → Tipo de las entidades relacionadas (ej: Task[], Application[], etc.)
Application[], etc.)
// Usuario con sus tareas
const userWithTasks = toObjectWithRelations<User, Task>(response);

// CodeLang con sus aplicaciones y tareas
const codeLangWithApps = toObjectWithRelations<CodeLang, Application>(response);
 */
export const toObjectWithRelations = <T, R>(obj: string): T & { [key: string]: R[] } | null => {
    if (obj == null) {
        return null;
    }
    const jsonParsed = JSON.parse(obj);
    return jsonParsed as T & { [key: string]: R[] };
};

export const toArrayObjectsWithRelations = <T, R>(coll: string): Array<T & { [key: string]: R[] }> | null => {
    if (coll == null) {
        return null;
    }
    const jsonParsed = JSON.parse(coll);
    return jsonParsed as Array<T & { [key: string]: R[] }>;
};


