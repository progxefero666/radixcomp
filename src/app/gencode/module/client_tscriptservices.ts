//src\app\gencode\module\gcmtsentfiles.ts

import { TsEntFilesOps } from "@/codegen/operations/tsentfilesops";
import { GenCodeModuleControl } from "@/app/gencode/module/gcmodcontrol";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { getTypeScriptArrayTableContent, getTypeScriptTableContent } from "@/app_server/xeferodb/tsclasses";
import { TSelection } from "@/radix/radixtypes";
import { CollectionHelper } from "@/common/collhelper";
import { JsonHelper } from "@/common/jsonhelper";


/**
 * # GenCode Service client: TypeScript Table Service clases
 *      - GenCode Control for TypeScript Entity Files Operations
 *      - kernel: src\codegen\operations\tsentfilesops.ts
 *      - server actions: src\app_server\xeferodb\tsclasses.ts
 */
export class ServClientTScriptServices extends GenCodeModuleControl {

    public static readonly ID: string =  "typescript_servicefiles";
    public static readonly OPTION_VALUE: string =  "TS Server Files";
        
    public constructor(sqlsquema:string) {
        super(sqlsquema);
    }//end

    public async executeOperation(operationId:string,
                                  table:string|null,
                                  tables:TSelection|null): Promise<string|null> {  
        //console.log(JsonHelper.getTSelectionJsonString(tables!));                                             
        let code:string|null = null;
               
        return code;
    }

}//end class

