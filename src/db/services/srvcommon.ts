//src\db\services\servicecodelang.ts
import { JsonResponse } from "@/db/operations/model/jsonresponse";
import { PrismaClient } from "@generated/prisma";
import { OpUtil } from "../functions/operationutil";
import { DbOps } from "../dboperations";



/**
 * Server Action for:
 *      get all rows from table passed in parameter.
 * @param table
 * @returns JSON string with result
 */
export async function GetAll(table: string): Promise<string> { 
    
    const prisma = new PrismaClient(); 
    let result = null;
    try {
        result = await prisma.codeLang.findMany();
    } 
    catch (error) {OpUtil.consoleErr(error,OpUtil.getOpName(table,DbOps.GET_ALL));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect(); 
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(table,DbOps.GET_ALL),result);

} //end function

/**
 * Server Action for: 
 *     get query with where included.
 * @param table 
 * @param filter 
 * @returns JSON string with result
 */
export async function GetFiltered(table: string,filter: string): Promise<string> { 
    
    const prisma = new PrismaClient(); 
    let result = null;
    try {
        result = await prisma.codeLang.findMany();
    } 
    catch (error) {OpUtil.consoleErr(error,OpUtil.getOpName(table,DbOps.GET_ALL));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect(); 
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(table,DbOps.GET_ALL),result);

} //end function