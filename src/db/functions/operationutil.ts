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

    public static getErrorMessage(error: unknown): unknown {        
        if(error instanceof Error) {
            return error.message;
        }        
        return DbOperations.ERROR_UNKNOWN;
    }    

}//end class 