//src\db\model\tasktype.ts

/**
 * Class Task
 * Represents a Task entity with various properties and methods.
 * 
 * @class Task
 */
export class Task {

    public id: number | null = null;
    public tasktype_id: number | null = null;
    public codelang_id: number | null = null;
    public workflow_id: number | null = null;
    public orden: number | null = null;
    public name: string = "undefined";
    public description: string = "undefined";
    public files: string = "undefined";
    public folders: string = "undefined";
    public final: boolean = false;

    constructor(id: number | null,
                tasktype_id: number | null,
                codelang_id: number | null,
                workflow_id: number | null,
                orden: number | null,
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
    id: number | null;
    tasktype_id: number | null;
    codelang_id: number | null;
    workflow_id: number | null;
    orden: number | null;
    name: string;
    description: string;
    files: string;
    folders: string;
    final: boolean;
};
