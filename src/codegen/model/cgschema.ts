//src\codegen\kernel\cgschemahelper.ts

import { TOption } from "@/radix/radixtypes";
import { ModelTable, ModelField, Relation } from "@/codegen/kernel/cgmodel";
import { CodeGenSql } from "../kernel/cgsqlmotor";
import { SchemaService } from "../schemaservice";
import { Keyvalue } from "@/common/model/keyvalue";


/**
 * class CodeGenSchema
 */
export class CodeGenSquema{

    public squema:      string;
    public tables:      ModelTable[] = [];
    public tcollection: Keyvalue[] = [];
    public toptions:    TOption[] = [];

    constructor(squema: string) {
        this.squema = squema;
        this.tables = CodeGenSql.getEsquemaTables(this.squema);        
        this.tcollection = SchemaService.getCollectionTables(this.tables);
        this.toptions = SchemaService.getListTablesAsTOptions(this.tables);
    };

    public getTableIndex(tableName: string): number {
        let index: number = -1;
        for (let idx=0;idx<this.tables.length;idx++) {
            if (this.tables[idx].name===tableName) {index = idx;break;}
        }
        return index;
    };//end

}//end class

