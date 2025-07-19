//src\db\model\template.ts

/**
 * Db Table Entity Class Template
 */
export class Template {

    public id: string;
    public name: string;
    public proglanguage_id: string;
    public datacode: string;

    constructor(id:string,name:string,proglanguage_id:string,datacode: string) {
        this.id = id;
        this.name = name;
        this.proglanguage_id = proglanguage_id;
        this.datacode = datacode;
    };//end

    /**
     * Returns the minimum length of the field.
     * @param fieldName The name of the field.
     * @returns The minimum length of the field or null if not applicable.
     */
    public minlen(fieldName: string): number | null {
        return 0;
     };//end

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
            return 100;
        }
        if (fieldName === "proglanguage_id") {
            return 16;
        }
        if (fieldName === "datacode") {
            return -1; // unlimited length
        }
        return 0;
     };//end

}//end class

/**
 * Type definition for Template entity
 */
export type TypeTemplate = {
    id: string;
    name: string;
    proglanguage_id: string;
    datacode: string;
};
