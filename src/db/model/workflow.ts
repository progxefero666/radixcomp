//src\db\model\workflow.ts

/**
 * Db Table Entity Class Workflow
 **/
export class Workflow {

    public id: number;
    public wwname: string;
    public description: string = '';

    public application: string;
    public fpath: string;
    public updated: Date;
    public context: string|null = '';
    constructor(id: number,
                wwname: string,
                description: string,
                application: string,
                fpath: string,
                updated: Date,
                context:string|null) {

        this.id = id;
        this.wwname = wwname;
        this.description = description;
        this.application = application;
        this.fpath = fpath;
        this.updated = updated;
        this.context = context;
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
        if (fieldName === "wwname") {
            return 100;
        }
        if (fieldName === "description") {
            return 500;
        }
        if (fieldName === "application") {
            return 50;
        }
        if (fieldName === "fpath") {
            return 500;
        }
        return 0;
    }

}//end class

/**
 * Type definition for Workflow entity
 */
export type TypeWorkflow = {
    id: number;
    wwname: string;
    description: string;
    application: string;
    fpath: string;
    updated: Date;
};
