//src\app\gencode\module\gcmtsentfiles.ts

import { TsEntFilesOps } from "@/codegen/operations/tsentfilesops";
import { GenCodeModuleControl } from "@/app/gencode/module/gcmodcontrol";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { getTypeScriptArrayTableContent, getTypeScriptTableContent } from "@/app_server/xeferodb/tsclasses";
import { TSelection } from "@/common/types";
import { ModelHelper } from "@/common/util/modelhelper";


/**
 * # Service client: TsEntFilesService
 *      - GenCode Control for TypeScript Entity Files Operations
 *      - kernel: src\codegen\operations\tsentfilesops.ts
 *      - server actions: src\app_server\xeferodb\tsclasses.ts
 */
export class TsEntFilesServiceClient extends GenCodeModuleControl {

    public constructor(sqlsquema:string) {
        super(sqlsquema);
    }//end

    public async executeOperation(operationId:string,
                                  table:string|null,
                                  tables:TSelection|null): Promise<string|null> {               
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
            const selectTables:string[] = ModelHelper.getListFromTSelection(tables!);
            const namesjoined:string = CodeGenHelper.getStringsJoined(selectTables!);
            code = await getTypeScriptArrayTableContent(this.sqlsquema,operationId,namesjoined);  
        }               
        return code;
    }

}//end class

//JsonHelper.getTSelectionJsonString(tableNames) 