//src\db\services\serviceapps.ts

import { PrismaClient } from "@generated/prisma";
import { DbTables } from "../dbesquema";
import { DbOps } from "../dboperations";
import { OpUtil } from "../functions/operationutil";
import { JsonResponse } from "../operations/model/jsonresponse";

/**
 * Server Action for Read Commom Tables
 *    desc: get all rows from table passed in parameter.
 * @param table
 * @returns JSON string with result
 */
export async function GetAll(table: string): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.application.findMany();
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName(table, DbOps.GET_ALL));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(table, DbOps.GET_ALL), result);

} //end function