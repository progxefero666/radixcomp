//src\db\model\task.ts

/**
 * Db Table Entity Class Task
 **/
export class Task {

    public id: number;
    public tasktype_id: number;
    public codelang_id: number;
    public workflow_id: number;
    public orden: number;
    public name: string;
    public description: string;
    public files: string;
    public folders: string;
    public final: boolean = false;

    constructor(id: number,
                tasktype_id: number,
                codelang_id: number,
                workflow_id: number,
                orden: number,
                name: string,
                description: string,
                files: string,
                folders: string,
                final: boolean) {

        this.id = id;
        this.tasktype_id = tasktype_id;
        this.codelang_id = codelang_id;
        this.workflow_id = workflow_id;
        this.orden = orden;
        this.name = name;
        this.description = description;
        this.files = files;
        this.folders = folders;
        this.final = final;
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
        if (fieldName === "tasktype_id") {
            return 15; // max digits for numeric
        }
        if (fieldName === "codelang_id") {
            return 15; // max digits for numeric
        }
        if (fieldName === "workflow_id") {
            return 15; // max digits for numeric
        }
        if (fieldName === "orden") {
            return 15; // max digits for numeric
        }
        if (fieldName === "name") {
            return 255;
        }
        if (fieldName === "description") {
            return -1; // unlimited length
        }
        if (fieldName === "files") {
            return -1; // unlimited length
        }
        if (fieldName === "folders") {
            return -1; // unlimited length
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
    name: string;
    description: string;
    files: string;
    folders: string;
    final: boolean;
};
