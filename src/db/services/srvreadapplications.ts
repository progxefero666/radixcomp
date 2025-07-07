//src\db\services\serviceapps.ts

import { PrismaClient } from "@generated/prisma";
import { DbOps } from "../dboperations";
import { OpUtil } from "../util/operationutil";
import { JsonResponse } from "../../common/json/models/jsonresponse";
//import { DbTables } from "../dbesquema";


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