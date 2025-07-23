//src\db\model\template.ts

/**
 * Db Table Entity Class Template
 */
export class Template {

    public id: string;
    public name: string | null;
    public proglanguage_id: string | null;
    public datacode: string | null;

    constructor(id:string, name:string|null, proglanguage_id:string|null, datacode:string|null) {
        this.id = id;
        this.name = name;
        this.proglanguage_id = proglanguage_id;
        this.datacode = datacode;
    };//end


    public minlen(fieldName: string): number | null {
        return 0;
    };//end

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

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
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
