//src\db\services\serviceapps.ts
"use server";

import { PrismaClient } from "@generated/prisma";
import { DbOps, OpUtil } from "../../dboperations";

import { JsonResponse } from "../../../common/json/models/jsonresponse";
//import { DbTables } from "../dbesquema";


export async function getAll(table: string): Promise<string> {

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