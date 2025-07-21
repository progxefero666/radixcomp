//src\db\model\taskcategory.ts

//import { Task } from "@generated/prisma";

/**
 * Db Table Entity Class Task
 **/
export class Taskcategory {

    public id: string;
    public workflow_id: string;
    public name: string;
    public description: string|null;
    //public tasks?:Task[];
    
    constructor(id:string,workflow_id:string,name:string,description:string|null) {//,tasks?:Task[]
        this.id          = id;
        this.workflow_id = workflow_id;
        this.name        = name;
        this.description = description;
        //if(tasks) { this.tasks = tasks;}
    }

    /**
     * Returns the minimum length of the field.
     */
    public minlen(fieldName: string): number{
        return 0;
    }

    /**
     * Returns the max length of the field.
     * Returns -1 if has unlimited length.
     */
    public maxlen(fieldName: string): number  {
        if (fieldName === "id") {
            return 15; // max digits for numeric
        }
        else if (fieldName === "name") {
            return 100; // max digits for numeric
        }
        return 0;
    }

}//end class

/**
 * Type definition for Task entity
 */
export type TypeTaskcategory = {
    id: number;
    workflow_id: number;
    tpname: string;
    description: string;
};
