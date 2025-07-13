//src\common\database\dboputil.ts

import { DB_CONSTANTS, DB_ERROR } from "@/common/database/dbkernel";

/*
export class DpOperationUtil {

    public static getOpName(table:string,command:string): string {
        return table.concat("_", command);
    }

    public static getUnknowErrMessage(error: unknown): unknown {        
        if(error instanceof Error) {
            return error.message;
        }        
        return DB_ERROR.UNKNOWN;
    }    

    public static getErrMessage(error: unknown): string {        
        return String(DpOperationUtil.getUnknowErrMessage(error));
    }    
    
    public static getOpErrMessage(table:string,command:string): string {
        const result:string = DB_CONSTANTS.ERROR.concat("=> ")
                             .concat(table).concat(" : ").concat(command);
        return result;

    }

    public static getErrNotFoundMessage(name:string|null,tipe:string|null): string {        
        let message:string = DB_ERROR.NOT_FOUND;
        if(name) {
            message += "name:".concat(name).concat("");
        }
        if(tipe) {
            message += "type:".concat(tipe).concat("");
        }  
        return message;
    }  

    public static consoleSuccess(opId:string|null,data:string|null,table?:string):void {   
        let message:string = "Operation success:";
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
*/