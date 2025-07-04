//src\db\model\apptype.ts

/**
 * Db Table Entity Class Apptype
 **/
export class Apptype {

    public id: number;
    public name: string;
    public description: string = 'undefined';

    constructor(id: number,
                name: string,
                description: string) {

        this.id = id;
        this.name = name;
        this.description = description;
    }

    /**
     * Returns the minimum length of the field.
     * @param fieldName The name of the field.
     * @returns The minimum length of the field or null if not applicable.
     */
    public minlen(fieldName: string): number | null {
        return 0;
    }

    /**
     * Returns the max length of the field.
     * Returns -1 if has unlimited length.
     * @param fieldName The name of the field.
     * @returns The maximum length of the field or null if not applicable.
     */
    public maxlen(fieldName: string): number | null {
        if (fieldName === "id") {
            return 15; // max digits for numeric
        }
        if (fieldName === "name") {
            return 50;
        }
        if (fieldName === "description") {
            return 255;
        }
        return 0;
    }

}//end class

/**
 * Type definition for Apptype entity
 */
export type TypeApptype = {
    id: number;
    name: string;
    description: string;
};
