//src\db\functions\operationutil.ts

import { DbOps } from "../dboperations";

/**
 * Class OpUtil.getErrNotFoundMessage
 * Utility class for operations.
 */
export class OpUtil {

    public static getOpName(table:string,command:string): string {
        return table.concat("_", command);
    }

    public static getErrMessage(error: unknown): unknown {        
        if(error instanceof Error) {
            return error.message;
        }        
        return DbOps.ERROR_UNKNOWN;
    }    

    public static getErrMessageString(error: unknown): string {        
        return String(OpUtil.getErrMessage(error));
    }    

    public static getErrNotFoundMessage(name:string|null,tipe:string|null): string {        
        let message:string = DbOps.ERROR_NOTFOUND;
        if(name) {
            message += "name:".concat(name).concat("");
        }
        if(tipe) {
            message += "type:".concat(tipe).concat("");
        }  
        return message;
    }  

    public static consoleSuccess(opId:string|null,data:string|null,table?:string):void {   
        let message:string = "Operation succeess:";
        if(table) {
            message += "table:".concat(table).concat("");
        }
        if(data) {
            message += "data:".concat(data).concat("");
        }               
        console.log(message); 
    }

    public static consoleErr(error:unknown,opId:string|null,table?:string):void {    
        if(table && opId) {
            console.error(`Operation ${opId} on table ${table} failed:`, error);
        } 
        else if(table) {
            console.error(`Operation on table ${table} failed:`, error);
        } 
        else if(opId) {
            console.error(`Operation ${opId} failed:`, error);
        } 
        else {
            console.error("Unknown operation failed:", error);
        }    
    }


}//end class 