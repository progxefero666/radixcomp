//src\common\dbmodel\dbfield.ts

import { Relation } from "@/common/dbmodel/dbrelation";

/**
 * class ModelField
 */
export class ModelField {
    public name: string;
    public type: string;
    public required: boolean;
    public generated: boolean;
    public pk: boolean;
    public fk: boolean;
    public minlen: number | null;
    public maxlen: number | null;
    public relations: Relation[] | null = null;

    constructor(name: string, type: string,
        pk: boolean, generated: boolean,
        required: boolean, minlen: number | null, maxlen: number | null,
        fk?: boolean, relations?: Relation[]) {
        this.name = name;
        this.type = type;
        this.pk = pk;
        this.generated = generated;
        this.required = required;
        this.minlen = minlen;
        this.maxlen = maxlen;
        this.fk = fk ?? false;
        this.relations = relations ?? null;
    }


}//end     