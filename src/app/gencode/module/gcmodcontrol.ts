//src\app\gencode\module\gcmodcontrol.ts

import { ModelTable } from "@/codegen/kernel/cgmodel";
import { CodeGenSql } from "@/codegen/kernel/cgsqlmotor";

/*
export interface GenCodeIServiceClient {
    sqlsquema: string;
}
*/
/**
 * GenCodeModuleControl is a class base
 *   !! not implement alone !!
 */
export class GenCodeModuleControl {

    
    public sqlsquema: string = "";
    public modeltables: ModelTable[] = []; 

    constructor(sqlsquema: string) {
        this.sqlsquema = sqlsquema;
        this.modeltables =  CodeGenSql.getEsquemaTables(this.sqlsquema); 
    }

}//end class