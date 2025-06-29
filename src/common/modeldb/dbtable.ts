//src\common\dbmodel\dbtable.ts

import { ModelField } from "@/common/dbmodel/dbfield";

/**
 * class ModelTable
 */
export class ModelTable {
    public name: string;
    public fields: ModelField[];
    constructor(name: string, fields?: ModelField[]) {
        this.name = name;
        this.fields = fields ?? [];
    }

    public addField(field: ModelField) {
        this.fields.push(field);
    }

    public addFields(fields: ModelField[]) {
        this.fields.push(...fields);
    }

}//end class