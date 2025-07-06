//src\db\dboperation.ts

/**
 * class DbOps.GET_BY_FK
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
    public static readonly GET_BY_FK: string = "getByFk";

    public static readonly COUNT_ROWS: string = "getAll";

    public static readonly ROW_ID: string = "getAll";
    public static readonly CREATED_AT: string = "created";
    public static readonly UPDATED_AT: string = "updated";

    public static readonly ERROR_NOTFOUND: string = "not found ";

    public static readonly TYPE_TABLE: string = "table";

}//end class

