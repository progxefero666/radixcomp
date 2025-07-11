//src\db\model\task.ts

import { Task } from "@generated/prisma";

/**
 * Db Table Entity Class Task
 **/
export class Taskgroup {

    public id: number;
    public workflow_id: number;
    public tpname: string;
    public description: string;

    public task:Task[];
    
    constructor(id:number,workflow_id:number,tpname:string,description:string,task:Task[]) {
        this.id = id;
        this.workflow_id = workflow_id;
        this.tpname = tpname;
        this.description = description;
        this.task = task;
    }

    /**
     * Returns the minimum length of the field.
     */
    public minlen(fieldName: string): number | null {
        return 0;
    }

    /**
     * Returns the max length of the field.
     * Returns -1 if has unlimited length.
     */
    public maxlen(fieldName: string): number | null {
        if (fieldName === "id") {
            return 15; // max digits for numeric
        }
        else if (fieldName === "tpname") {
            return 100; // max digits for numeric
        }
        return 0;
    }

}//end class

/**
 * Type definition for Task entity
 */
export type TypeTaskgroup = {
    id: number;
    workflow_id: number;
    tpname: string;
    description: string;
};
