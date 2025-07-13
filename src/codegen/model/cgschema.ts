//src\codegen\kernel\cgschemahelper.ts

import { TOption } from "@/radix/radixtypes";
import { ModelTable, ModelField, Relation } from "@/codegen/kernel/cgmodel";
import { CodeGenSql } from "@/codegen/kernel/cgsqlmotor";
import { SchemaService } from "@/codegen/schemaservice";
import { Keyvalue } from "@/common/model/keyvalue";


/**
 * class CodeGenSchema tables[activeTableIndex]
 */
export class CodeGenSquema{

    public squema:      string;
    public tables:      ModelTable[] = [];
    public tcollection: Keyvalue[] = [];
    public toptions:    TOption[] = [];

    public activeTableIndex: number = -1;
    public activeTableName: string = "";

    constructor(squema: string) {
        this.squema = squema;
        this.tables = CodeGenSql.getEsquemaTables(this.squema);        
        this.tcollection = SchemaService.getCollectionTables(this.tables);
        this.toptions = SchemaService.getListTablesAsTOptions(this.tables);
        this.activeTableIndex = 0;
        this.activeTableName = this.tables[this.activeTableIndex].name;
    };

    public setActiveTable(tableName: string) {
        const index = this.getTableIndex(tableName);
        //alert(index);
        if (index >= 0) {
            this.activeTableIndex = index;
            this.activeTableName = this.tables[this.activeTableIndex].name;
            alert("Active table: " + this.activeTableName);
        }
    };//end

    public selectTables(selecction: TOption[]) {
        this.toptions = selecction;
    };//end

    public getTableIndex(tableName: string): number {
        let index: number = -1;
        for (let idx=0;idx<this.tables.length;idx++) {
            if (this.tables[idx].name===tableName) {index = idx;break;}
        }
        return index;
    };//end

    public getActiveTable(): ModelTable | null {
        if (this.activeTableIndex < 0) { return null; }
        return this.tables[this.activeTableIndex];
    }

}//end class

