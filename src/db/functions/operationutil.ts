//src\db\functions\operationutil.ts

/**
 * Class OperationUtil.getOperationName
 * Utility class for operations.
 */
export class OpUtil {

    public static getOpName(table:string,command:string): string {
        return table.concat("_", command);
    }

}//end class 