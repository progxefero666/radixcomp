//src\db\model\workflow.ts

import { DataConstants } from "@/common/constants";
import { DbConstants } from "@/common/database/dbkernel";


/**
 * Db Table Entity Class Workflow
 **/
export class Workflow {

    public id:          string | null = null;
    public name:        string | null = null;
    public description: string | null = null;
    public context:     string | null = null;
    public application: string | null = null;
    public fpath:       string | null = null;
    public updated:     Date   | null = null;

    constructor(id:          string | null, 
                name:        string | null,
                context:     string | null,
                description: string | null,
                application: string | null, 
                fpath:       string | null, 
                updated:     Date   | null ) {

        this.id         = id;
        this.name       = name;
        this.context    = context;
        this.description= description;
        this.application= application;
        this.fpath      = fpath;
        this.updated    = updated ?? new Date();
    }

    /**
     * Returns the minimum length of the field.
     * @param fieldName The name of the field.
     * @returns The minimum length of the field or null if not applicable.
     */
    public static minlen(fieldName: string): number | null {
        return 0;
    };//end

    /**
     * Returns the max length of the field.
     * Returns -1 if has unlimited length.
     * @param fieldName The name of the field.
     * @returns The maximum length of the field or null if not applicable.
     */
    public static maxlen(fieldName: string): number {

        if (fieldName === "wwname") {
            return 100;
        }
        if (fieldName === "description") {
            return 50000; // unlimited length
        }
        if (fieldName === "application") {
            return 50;
        }
        if (fieldName === "fpath") {
            return 500;
        }
        return 0;
    };//end

}//end class

/**
 * Type definition for Workflow entity
 */
export type TypeWorkflow = {
    id: number;
    wwname: string;
    context: string;
    description: string;
    application: string;
    fpath: string;
    updated: Date;
};
