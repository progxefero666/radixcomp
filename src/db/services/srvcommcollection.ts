//src\db\services\servicecodelang.ts
import { JsonResponse } from "@/common/json/model/jsonresponse";
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
    
    const prisma = new PrismaClient(); 
    try {
        const result = await prisma.codeLang.findMany();
        return JsonResponse.success(
            OpUtil.getOpName(table, DbOperations.GET_ALL),
            result
        ).toJson();
    } 
    catch (error) {
        let errorMessage = DbOperations.ERROR_UNKNOWN;
        if(error instanceof Error) {
            errorMessage = error.message;
        }
    
        console.error("Error fetching rows from table:", table, error);
        return JsonResponse.error("Failed to fetch data").toJson();
    }
    finally {
        await prisma.$disconnect(); // Aseguramos el cierre del cliente
    }

} //end function