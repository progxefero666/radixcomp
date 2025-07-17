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

    public activeTableIndex: number = -1;
    public activeTableName: string = "";

    public jsontables: string[] = [];

    //CodeGenJson

    constructor(squema: string) {
        this.squema = squema;
        this.tables = CodeGenSql.getEsquemaTables(this.squema);        
        this.tcollection = SchemaService.getCollectionTables(this.tables);
        this.toptions = SchemaService.getListTablesAsTOptions(this.tables);
        this.activeTableIndex = 0;
        this.activeTableName = this.tables[this.activeTableIndex].name;
        this.postConstructor();
    };//end

    private postConstructor() {
        this.tables.forEach((table) => {
            this.jsontables.push(CodeGenJson.getJsonEntDef(table));
        });
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

  

    public getSelectedJsonFileCodes(): FileCode[] { 
        let listfilesId: string[] = CollectionHelper.getTOptionsNames(this.toptions);
                        
        const filecodes: FileCode[] = [];
        for (let idx=0;idx<this.jsontables.length;idx++) {
            if(this.toptions[idx].selected) {
                filecodes.push(new FileCode(
                    listfilesId[idx],
                    DocFormats.FORMAT_JSON.value,
                    DocFormats.FORMAT_JSON.key,
                    this.jsontables[idx]));                
            }
        }
        return filecodes;
     };//end
}//end class
