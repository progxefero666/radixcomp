//src\app\gencode\module\gcmtsentfiles.ts

import { TsEntFilesOps } from "@/codegen/operations/tsentfilesops";
import { GenCodeModuleControl } from "@/app/gencode/module/gcmodcontrol";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { getTypeScriptArrayTableContent, getTypeScriptTableContent } from "@/app_server/xeferodb/tsclasses";


TsEntFilesOps

/**
 * # Module: GcControlTsEntFilesOps
 *      - GenCode Control for TypeScript Entity Files Operations
 *      - kernel: src\codegen\operations\tsentfilesops.ts
 */
export class GcControlTsEntFilesOps extends GenCodeModuleControl {

    public  tablesNames:string[] = []; 

    public constructor(sqlsquema: string) {
        super(sqlsquema);
        this.tablesNames = CodeGenHelper.getModelsTableNames(this.modeltables);
    }//end

    public async executeOperation(operationId: string): Promise<string|null> {
        const selectTables:string[]|null = [];
        
        let code:string|null = "";

        if(operationId == TsEntFilesOps.OP_GET_DEF_CLASS.id){              
            code = await getTypeScriptTableContent(this.sqlsquema,operationId,selectTables![0]);            
        }
        else if(operationId == TsEntFilesOps.OP_GET_ENT_CLASS.id){
            code = await getTypeScriptTableContent(this.sqlsquema,operationId,selectTables![0]);  
        }
        else if(operationId == TsEntFilesOps.OP_GET_ALL_DEF_CLASS.id){
            code = await getTypeScriptArrayTableContent(this.sqlsquema,operationId);  
        } 
        else if(operationId == TsEntFilesOps.OP_GET_ALL_ENT_CLASS.id){
            code = await getTypeScriptArrayTableContent(this.sqlsquema,operationId);  
        }      
        else if(operationId == TsEntFilesOps.OP_GET_LIST_DEF_CLASS.id){
            const namesjoined:string = CodeGenHelper.getStringsJoined(selectTables!);
            code = await getTypeScriptArrayTableContent(this.sqlsquema,operationId,namesjoined);  
        }           
        else if(operationId == TsEntFilesOps.OP_GET_LIST_ENT_CLASS.id){
            const namesjoined:string = CodeGenHelper.getStringsJoined(selectTables!);
            code = await getTypeScriptArrayTableContent(this.sqlsquema,operationId,namesjoined);  
        }          
        if(code != null) {  
            return code;
        }
        return null;
    }

}//end class