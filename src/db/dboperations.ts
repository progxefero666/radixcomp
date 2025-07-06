//src\db\dboperation.ts

/**
 * class DbOperation.ERROR_UNKNOWN
 */
export class DbOperations {

    public static readonly INSERT: string = "insert";
    public static readonly UPDATE: string = "update";
    public static readonly DELETE: string = "delete";
    public static readonly DELETE_ALL: string = "deleteAll";

    public static readonly GET_ALL: string = "getAll";
    public static readonly GET_BY_ID: string = "get";
    public static readonly GET_BY_NAME: string = "get";

    public static readonly ROW_ID: string = "getAll";

    public static readonly COUNT_ROWS: string = "getAll";

    public static readonly ERROR_UNKNOWN: unknown = "Unknown error";



}//end class


    /*
    public static get(table: string): string {
        return "";
    }
    */