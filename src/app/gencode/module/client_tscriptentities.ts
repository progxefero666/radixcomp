//src\app\gencode\module\gcmtsentfiles.ts

import { TsEntFilesOps } from "@/codegen/operations/tsentfilesops";
import { GenCodeModuleControl } from "@/app/gencode/module/gcmodcontrol";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { getTypeScriptArrayTableContent, getTypeScriptTableContent } from "@/app_server/xeferodb/tsclasses";
import { TOption, TSelection } from "@/radix/radixtypes";
import { CollectionHelper } from "@/common/collhelper";
import { JsonHelper } from "@/common/jsonhelper";


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
        if( (operationId === TsEntFilesOps.OP_GET_DEF_CLASS.id) ||
            (operationId === TsEntFilesOps.OP_GET_ENT_CLASS.id)){          
            code = await getTypeScriptTableContent(this.sqlsquema,operationId,table!);            
        }
        else if( (operationId == TsEntFilesOps.OP_GET_ALL_DEF_CLASS.id) ||
                 (operationId == TsEntFilesOps.OP_GET_ALL_ENT_CLASS.id)){
            code = await getTypeScriptArrayTableContent(this.sqlsquema,operationId);  
        } 
        else if( (operationId == TsEntFilesOps.OP_GET_LIST_DEF_CLASS.id) ||
                 (operationId == TsEntFilesOps.OP_GET_LIST_ENT_CLASS.id) ){   
            const selectTables:string[] = CollectionHelper.getListFromTOptions(tables!);
            const namesjoined:string = CodeGenHelper.getStringsJoined(selectTables!);
            code = await getTypeScriptArrayTableContent(this.sqlsquema,operationId,namesjoined);  
        }               
        return code;
    }

}//end class

//