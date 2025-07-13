//src\db\services\read\srvreadapplications.ts
"use server";

import { PrismaClient } from "@generated/prisma";
import { DbOps, DpOperationUtil } from "@/db/dboperations";

import { JsonResponse } from "@/common/model/jsonreponse";
import { DB_TABLES } from "@/db/dbcatalog";


export async function get(id:number): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.application.findFirst(
            {
                where:{id:id},
            }
        );
    }
    catch (error) {
        DpOperationUtil.consoleErr(error, DpOperationUtil.getOpName(DB_TABLES.application, DbOps.GET_BY_ID));
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DB_TABLES.application, DbOps.GET_BY_ID), result);

} //end function


export async function getAll(table: string): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.application.findMany();
    }
    catch (error) {
        DpOperationUtil.consoleErr(error, DpOperationUtil.getOpName(DB_TABLES.application, DbOps.GET_ALL));
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DB_TABLES.application, DbOps.GET_ALL), result);

} //end function