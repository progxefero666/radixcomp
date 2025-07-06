//src\db\services\servicecodelang.ts
import { JsonResponse } from "@/db/operations/model/jsonresponse";
import { PrismaClient } from "@generated/prisma";
import { OpUtil } from "../functions/operationutil";
import { DbOperations } from "../dboperations";

/*
error instanceof Error ? error.message : "Unknown error"
*/

/**
 * Server Action to get all rows from table passed in parameter.
 * @param table
 * @returns
 */
export async function GetAllRows(table: string,filter: string): Promise<string> { 
    
    const opName:string = OpUtil.getOpName(table, DbOperations.GET_ALL);
    const prisma = new PrismaClient(); 
    try {
        const result = await prisma.codeLang.findMany();
        return JsonResponse.success(
            OpUtil.getOpName(table, DbOperations.GET_ALL),
            result
        ).toJson();
    } 
    catch (error) {
        OpUtil.consoleErr(error,opName);
        return JsonResponse.error(OpUtil.getErrMessageString(error)).toJson();
    }
    finally {
        await prisma.$disconnect(); // Aseguramos el cierre del cliente
    }

} //end function