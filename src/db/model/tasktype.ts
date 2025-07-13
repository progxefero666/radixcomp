//src\db\model\tasktype.ts

/**
 * Db Table Entity Class Tasktype
 **/
export class Tasktype {

    public id: number;
    public name: string;
    public description: string;

    constructor(id:number,tename:string,description:string) {
        this.id = id;
        this.name = tename;
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
    public maxlen(fieldName: string): number{
        if (fieldName === "id") {
            return 15; // max digits for numeric
        }
        if (fieldName === "name") {
            return 100;
        }
        if (fieldName === "description") {
            return 200;
        }
        return 0;
    }

}//end class

/**
 * Type definition for Tasktype entity
 */
export type TypeTasktype = {
    id: number;
    tename: string;
    description: string;
};
