//src\db\dboperation.ts

/**
 * class DbOperation.SUCCESS
 */
export class DbOps {

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
    public static readonly COUNT_ROWS: string = "getAll";

    public static readonly ROW_ID: string = "getAll";
    public static readonly CREATED_AT = "created";
    public static readonly UPDATED_AT = "updated";

}//end class


    /*
    public static get(table: string): string {
        return "";
    }
    */