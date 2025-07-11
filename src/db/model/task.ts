//src\db\model\task.ts

/**
 * Db Table Entity Class Task
 **/
export class Task {

    public id: number;
    public tasktype_id: number;
    public codelang_id: number;
    public workflow_id: number;
    public taskgroup_id: string;    
    public orden: number;
    public tkname: string;
    public description: string;
    public files: string;
    public folders: string;

    constructor(id: number,
                tasktype_id: number,
                codelang_id: number,
                workflow_id: number,
                taskgroup_id: string,
                orden: number,
                tkname: string,
                description: string,
                files: string,
                folders: string) {

        this.id = id;
        this.tasktype_id = tasktype_id;
        this.codelang_id = codelang_id;
        this.workflow_id = workflow_id;
        this.taskgroup_id = taskgroup_id;
        this.orden = orden;
        this.tkname = tkname;
        this.description = description;
        this.files = files;
        this.folders = folders;
    }

    /**
     * Returns the minimum length of the field.
     * @param fieldName The name of the field.
     * @returns The minimum length of the field or null if not applicable.
     */
    public minlen(fieldName: string): number {
        return 0;
    }

    /**
     * Returns the max length of the field.
     * Returns -1 if has unlimited length.
     * @param fieldName The name of the field.
     * @returns The maximum length of the field or null if not applicable.
     */
    public maxlen(fieldName: string): number  {
        //return -1; -> unlimited length

        if (fieldName === "orden") {
            return 15; // max digits for numeric
        }
        else if (fieldName === "tkname") {
            return 255;
        }
        else if  (fieldName === "description") {
            return 50000; // unlimited length
        }
        else if (fieldName === "files") {
            return 50000; // unlimited length
        }
        else if (fieldName === "folders") {
            return 50000; // unlimited length
        }
        return 0;
    }

}//end class

/**
 * Type definition for Task entity
 */
export type TypeTask = {
    id: number;
    tasktype_id: number;
    codelang_id: number;
    workflow_id: number;
    orden: number;
    tkname: string;
    description: string;
    files: string;
    folders: string;
    final: boolean;
};
