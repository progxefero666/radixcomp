//src\app\gencode\module\gcmtsentfiles.ts

import { TsEntFilesOps } from "@/codegen/operations/tsentfilesops";
import { GenCodeModuleControl } from "@/app/gencode/module/gcmodcontrol";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { getTypeScriptArrayTableContent, getTypeScriptTableContent } from "@/app_server/xeferodb/tsclasses";
import { TSelection } from "@/radix/radixtypes";
import { ModelHelper } from "@/common/collectionutil";
import { JsonHelper } from "@/common/jsonhelper";


/**
 * # GenCode Service client: Jsx Tables Entities Forms
 *      - GenCode Control for TypeScript Entity Files Operations
 *      - kernel: src\codegen\operations\tsentfilesops.ts
 *      - server actions: src\app_server\xeferodb\tsclasses.ts
 */
export class ServiceClientJson extends GenCodeModuleControl {

    public static readonly ID: string =  "json_entityfiles";
    public static readonly OPTION_VALUE: string =  "JSon Entity Files";

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

