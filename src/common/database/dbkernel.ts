//src\db\dboperation.ts

export enum DB_ITEM_CMD {   
    INSERT  = "insert", 
    EDIT    = "edit",
    OPEN    = "open",
    UPDATE  = "update",
    DELETE  = "delete",
    CANCEL    = "cancel",
    SELECT  = "select",
    MOVEUP  = "moveup",
    MOVEDOWN= "movedown",    
    IMPORT  = "import",
    EXPORT  = "export",
    COPY    = "copy",
}

export enum DB_ITEM_CMD_TEXT {   
    INSERT    = "new", 
    UPDATE    = "Save",
    OPEN    = "open",
    DELETE  = "delete",
    SELECT  = "select",
    IMPORT  = "import",
    EXPORT  = "export",
    COPY    = "copy",
    MOVEUP  = "move up",
    MOVEDOWN= "move down",
}

export enum DB_COLL_CMD {   
    DELETE_ALL = "delete_all",
    COUNT_ROWS  = "count_rows", 
    GET_ALL     = "get_all",
    GET_BY_ID   = "get_by_id",
    GET_BY_FK = "get_by_fk",
    GET_BY_NAME = "get_by_name",
}

export enum DB_CONSTANTS {   
    SUCCESS  = "success", 
    ERROR     = "gerror",    
    NOT_DEF   = "not_defined"
}

//export const NEW_ROW_ID:number = 0;

export enum DB_ERROR {   
    NOT_FOUND = "not_found",
    BAD_FORMAT = "bad_format",
    UNKNOWN = "unknown_error"
}   

/**
 * DbOps.NEW_ROW_ID
 */
export class DbOps{
    public static readonly NEW_ROW_ID:number = 0;

    public static INSERT = "insert";
    public static UPDATE = "update";
    public static GET_BY_ID = "get_by_id";
    public static GET_ALL = "get_all";
    public static GET_BY_FK = "get_by_fk";
    public static GET_BY_NAME = "get_by_name";
    public static DELETE_ALL = "delete_all";
    public static COUNT_ROWS = "count_rows";
    public static DELETE = "delete";
}
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

