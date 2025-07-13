//src\app\gencode\module\gcmtsentfiles.ts

import { TsEntFilesOps } from "@/codegen/operations/tsentfilesops";
import { GenCodeModuleControl } from "@/app/gencode/module/gcmodcontrol";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";

import { TOption, TSelection } from "@/radix/radixtypes";
import { CollectionHelper } from "@/common/helper/collhelper";
import { JsonHelper } from "@/common/helper/jsonhelper";
import { getTypeScriptArrayTableContent, getTypeScriptTableContent } from "@/server/xeferodb/tsclasses";


/**
 * # GenCode Service client: TypeScript Table Entities clases
 *      - GenCode Control for TypeScript Entity Files Operations
 *      - kernel: src\codegen\operations\tsentfilesops.ts
 *      - server actions: src\app_server\xeferodb\tsclasses.ts
 */
export class ServClientTScriptEntities extends GenCodeModuleControl {

    public static readonly ID: string =  "typescript_entityfiles";
    public static readonly OPTION_VALUE: string =  "TS Entities files";

    public constructor(sqlsquema:string) {
        super(sqlsquema);
    }//end

    public async executeOperation(operationId:string,
                                  table:string|null,
                                  tables:TOption[]|null): Promise<string|null> {  
        //console.log(JsonHelper.getTSelectionJsonString(tables!));                                             
        let code:string|null = null;
        if( (operationId === "get_def_class") ||
            (operationId === "get_entity_class")){          
            code = await getTypeScriptTableContent(this.sqlsquema,operationId,table!);            
        }
        else if( (operationId == "get_all_def_class") ||
                 (operationId == "get_all_entity_class")){
            code = await getTypeScriptArrayTableContent(this.sqlsquema,operationId);  
        } 
        else if( (operationId == "get_list_def_class") ||
                 (operationId == "get_list_entity_class") ){   
            const selectTables:string[] = CollectionHelper.getListFromTOptions(tables!);
            const namesjoined:string = CodeGenHelper.getStringsJoined(selectTables!);
            code = await getTypeScriptArrayTableContent(this.sqlsquema,operationId,namesjoined);  
        }               
        return code;
    }

}//end class

//