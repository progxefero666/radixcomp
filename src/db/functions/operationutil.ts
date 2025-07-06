//src\db\functions\operationutil.ts

import { DbOperations } from "../dboperations";

/**
 * Class OpUtil.getErrorMessage
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
        return DbOperations.ERROR_UNKNOWN;
    }    

    public static getErrMessageString(error: unknown): string {        
        return String(OpUtil.getErrMessage(error));
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