//src\common\dbmodel\dbrelation.ts

/**
 * class Relation
 */
export class Relation {
    public table: string = "undefined";
    public field: string = "undefined";

    constructor(table: string, field: string) {
        this.table = table;
        this.field = field;
    }
    
}//end 
