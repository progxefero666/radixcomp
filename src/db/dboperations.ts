//src\db\dboperation.ts

export enum DB_ITEM_COMMAND {    
    EDIT    = "edit",
    OPEN    = "open",
    UPDATE  = "update",
    DELETE  = "delete",
    SELECT  = "select",
    MOVEUP  = "moveup",
    MOVEDOWN= "movedown"
}

export enum DB_ITEM_ACTION_TEXT {    
    EDIT    = "edit",
    OPEN    = "open",
    SAVE    = "Save",
    DELETE  = "delete",
    SELECT  = "select",
}


/**
 * class DbOps.ERROR_BADFORMAT
 */
export class DbOps {
    
    public static readonly ACT_COLLECTION_CLEAR:string = "insert";
    public static readonly ACT_ITEM_INSERT:string = "insert";
    public static readonly ACT_ITEM__UPDATE:string = "update";
    public static readonly ACT_ITEM__DELETE:string = "delete";

    public static readonly SUCCESS: string = "success";
    public static readonly ERROR: string = "error";
    public static readonly ERROR_UNKNOWN: unknown = "Unknown error";

    public static readonly INSERT: string = "insert";
    public static readonly UPDATE: string = "update";
    public static readonly DELETE: string = "delete";
    public static readonly DELETE_ALL: string = "deleteAll";

    public static readonly GET_ALL: string = "getAll";
    public static readonly GET_BY_ID: string = "get";
    public static readonly GET_BY_NAME: string = "get";
    public static readonly GET_BY_FK: string = "getByFk";

    public static readonly COUNT_ROWS: string = "getAll";

    public static readonly ROW_ID: string = "getAll";
    public static readonly CREATED_AT: string = "created";
    public static readonly UPDATED_AT: string = "updated";

    public static readonly ERR_NOTFOUND: string = "not found ";
    public static readonly ERR_BADFORMAT: string = "invalid format";

    public static readonly TYPE_TABLE: string = "table";

}//end class

export class OpUtil {

    public static getOpName(table:string,command:string): string {
        return table.concat("_", command);
    }

    public static getUnknowErrMessage(error: unknown): unknown {        
        if(error instanceof Error) {
            return error.message;
        }        
        return DbOps.ERROR_UNKNOWN;
    }    

    public static getErrMessage(error: unknown): string {        
        return String(OpUtil.getUnknowErrMessage(error));
    }    
    
    public static getOpErrMessage(table:string,command:string): string {
        const result:string = DbOps.ERROR.concat("=> ")
                             .concat(table).concat(" : ").concat(command);
        return result;

    }

    public static getErrNotFoundMessage(name:string|null,tipe:string|null): string {        
        let message:string = DbOps.ERR_NOTFOUND;
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