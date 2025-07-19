//src\db\model\proglanguage.ts

import { Template } from "./template";

/**
 * Db Table Entity Class Proglanguage
 */
export class Proglanguage {

    public id: string;
    public name: string;

    public templates?: Template[]=[];

    constructor(id: string,name:string,templates?:Template[]) {
        this.id     = id;
        this.name   = name;
        if(templates) {this.templates = templates;}
    };//

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
            return 16;
        }
        if (fieldName === "name") {
            return 16;
        }
        return 0;
    }

}//end class

/**
 * Type definition for Proglanguage entity
 */
export type TypeProglanguage = {
    id: string;
    name: string;
};
