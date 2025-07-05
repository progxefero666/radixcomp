//src\db\model\workflow.ts

/**
 * Class Workflow
 * Represents a Workflow entity with various properties and methods.
 * 
 * @class Workflow
 */
export class Workflow {

    public id: number | null = null;
    public name: string = "undefined";
    public description: string = "undefined";
    public application: string = "undefined";
    public fpath: string = "undefined";
    public updated: Date = new Date();

    constructor(id: number | null,
                name: string,
                description: string,
                application: string,
                fpath: string,
                updated: Date) {

        this.id = id;
        this.name = name;
        this.description = description;
        this.application = application;
        this.fpath = fpath;
        this.updated = updated;
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
    id: number | null;
    name: string;
    description: string;
    application: string;
    fpath: string;
    updated: Date;
};
