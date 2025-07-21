//src\app\gencode\module\gcmtsentfiles.ts
import { ModelTable } from "@/codegen/kernel/cgmodel";
import { CodeGenSql } from "@/codegen/kernel/cgsqlmotor";

import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { TOption } from "@/radix/radixtypes";
import { CollectionHelper } from "@/common/helper/collhelper";

import { CodeGenJson } from "@/codegen/kernel/cgjsonmotor";
import {Keyvalue} from "@/common/model/keyvalue";
import { getTypeScriptArrayTableContent, getTypeScriptTableContent } from "@/server/xeferodb/tsclasses";

export class GenCodeModuleControl {

    public sqlsquema: string = "";
    public modeltables: ModelTable[] = []; 

    constructor(sqlsquema: string) {
        this.sqlsquema = sqlsquema;
        this.modeltables =  CodeGenSql.getEsquemaTables(this.sqlsquema); 
    }

}//end class

/**
 * ServClientEntities is a class 
 *  for managing entity files operations.
 */
export class ServClientEntities extends GenCodeModuleControl {

    public static readonly ID: string = "typescript_entityfiles";
    public static readonly OPTION_VALUE: string = "TS Entities files";

    public constructor(sqlsquema: string) {
        super(sqlsquema);
    }//end

    public async execItemTsOperation(operationId:string,table:string):Promise<string|null> {                                
        let code: string | null = null;
        if ((operationId === "get_def_class") ||
            (operationId === "get_entity_class")) {
            code = await getTypeScriptTableContent(this.sqlsquema, operationId, table!);
        }
        return code;
    };//end

    

    public async execAllListTsOperation(operationId:string): Promise<string | null> {                                                 
        return await getTypeScriptArrayTableContent(this.sqlsquema, operationId);
    };//end

    public async execListSelectionTsOperation(operationId:string,tables:TOption[]): Promise<string | null> {       
        const selectTables: string[] = CollectionHelper.getTOptionsNames(tables!);
        const namesjoined: string = CodeGenHelper.getStringsJoined(selectTables!);
        let code: string | null = await getTypeScriptArrayTableContent(this.sqlsquema, operationId, namesjoined);
        return code;
    };//end

    public async execItemJsonOperation(operationId: string,table: ModelTable): Promise<string | null> {
        let code: string | null = null;
        if (operationId === "get_def_class") {
            code = CodeGenJson.getJsonEntDef(table);
        }
        else if (operationId === "get_entity_class") {
            code = JSON.stringify(table, null, 4);
        }        
        return code;
    };//end

    public async execArrayJsonOperation(operationId:string,tables:ModelTable[]): Promise<string | null> {
        let code: string | null = null;
        if (operationId == "get_all_def_class" || operationId == "get_list_def_class") {
            code =CodeGenJson.getJsonArrayEntDef(tables);
        }   
        else if (operationId == "get_all_entity_class" || operationId == "get_list_entity_class") {
            code = JSON.stringify(tables, null, 4);
        }
        return code;
    };//end
    
    public async execMultipleTsOperation(operationId:string,tables:TOption[]): Promise<string[] | null> {
                                                 
        let listCode: string[] = [];

        if (operationId == "get_all_def_class" || operationId == "get_list_def_class" ) {
            for (let idx=0;idx<tables.length;idx++) {
                const itemCode: string | null = 
                    await this.execItemTsOperation("get_def_class",tables[idx].name);
                if(itemCode !== null) {
                    listCode.push(itemCode);
                }   
            }
        }
        else if(operationId == "get_all_entity_class" || operationId == "get_list_entity_class") {
            for (let idx=0;idx<tables.length;idx++) {
                const itemCode: string | null 
                    = await this.execItemTsOperation("get_entity_class",tables[idx].name);
                if(itemCode !== null) {
                    listCode.push(itemCode);
                }                       
            }
        }        
        return listCode;
    };//end

    

};//end class