import { ModelTable, ModelField, Relation } from "@/codegen/kernel/cgmodel";
import types from "@/codegen/kernel/sqltypesnumber.json";
import sqlTypesData from "@/codegen/kernel/sqltypes.json";

/**
 * Table definition class for task
 * Generated from database schema
 */
export class TaskDef {

    public name: string = "task";
    public fields: ModelField[] = [];

    constructor() {
        this.fields.push(new ModelField("id", "numeric", true, false, true, null, "5:0", null, null));
        this.fields.push(new ModelField("tasktype_id", "numeric", false, false, true, null, "5:0", null, null, true, [new Relation("tasktype", "id")]));
        this.fields.push(new ModelField("codelang_id", "numeric", false, false, true, null, "5:0", null, null, true, [new Relation("codelang", "id")]));
        this.fields.push(new ModelField("workflow_id", "numeric", false, false, true, null, "5:0", null, null, true, [new Relation("workflow", "id")]));
        this.fields.push(new ModelField("orden", "numeric", false, false, true, null, "5:0", null, null));
        this.fields.push(new ModelField("name", "text", false, false, true, null, null, null, 255));
        this.fields.push(new ModelField("description", "text", false, false, false, null, null, null, null));
        this.fields.push(new ModelField("files", "text", false, false, false, null, null, null, null));
        this.fields.push(new ModelField("folders", "text", false, false, false, null, null, null, null));
        this.fields.push(new ModelField("final", "boolean", false, false, false, "false", null, null, null));
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

}//end class
