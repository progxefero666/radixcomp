//src\codegen\kernel\cgschemahelper.ts

import { TOption } from "@/radix/radixtypes";
import { ModelTable, ModelField, Relation } from "@/codegen/kernel/cgmodel";
import { CodeGenSql } from "@/codegen/kernel/cgsqlmotor";
import { SchemaService } from "@/codegen/schemaservice";
import { Keyvalue } from "@/common/model/keyvalue";
import { CodeGenJson } from "../kernel/cgjsonmotor";
import {FileCode} from "@/filesystem/fsmodels";

import { DocFormats } from "@/filesystem/fsconstants";
import { CollectionHelper } from "@/common/helper/collhelper";
import { CgFileFunctions } from "../kernel/cgfilefunctions";
/**
 * class CodeGenSchema tables[activeTableIndex]
 */
export class CodeGenSquema{

    public squema:      string;
    public tables:      ModelTable[] = [];
    public tcollection: Keyvalue[] = [];
    public toptions:    TOption[] = [];

    public activeTableIndex: number = 0;
    public activeTableName: string = "";

    //can be charged previously
    public jsontables: string[] = [];

    constructor(squema: string,jsontables?:string[]) {
        this.squema = squema;
        this.tables           = CodeGenSql.getEsquemaTables(this.squema);        
        this.tcollection      = SchemaService.getCollectionTables(this.tables);
        this.toptions         = SchemaService.getListTablesAsTOptions(this.tables);
        this.activeTableName  = this.tables[this.activeTableIndex].name;

        if(jsontables){this.jsontables=jsontables;}  
        else          {this.loadJsonTables();}      
    };//end

    private loadJsonTables() {
        //alert("loadJsonTables");
        this.tables.forEach((table) => {
            this.jsontables.push(CodeGenJson.getJsonEntDef(table));
        });
        //console.log(this.jsontables[1]);
    };//end

    public setActiveTable(tableName: string) {
        const index = this.getTableIndex(tableName);
        if (index >= 0) {
            this.activeTableIndex = index;
            this.activeTableName = this.tables[this.activeTableIndex].name;
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
    };//end

    public getActiveJson():string {
        return this.jsontables[this.activeTableIndex];
    };//end

    public getAllJsonTables():string[] {
        return this.jsontables;
    };//end
    
    public getSelectedJsonTables():string[] {
        let jsonTables: string[] = [];
        for (let idx=0;idx<this.toptions.length;idx++) {
            if(this.toptions[idx].selected) {
                jsonTables.push(this.jsontables[idx]);
            }
        }      
        return this.jsontables;
    };//end

};//end class
