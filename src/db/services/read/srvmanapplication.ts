//src\db\services\read\srvreadapplications.ts
"use server";

import { PrismaClient } from "@generated/prisma";
import { DpOpsUtil } from "@/common/database/dbkernel";

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
        DpOpsUtil.consoleErr(error, DpOpsUtil.getOpName(DB_TABLES.application, "GET_BY_ID"));
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName(DB_TABLES.application,"GET_BY_ID"), result);

} //end function


export async function getAll(table: string): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.application.findMany();
    }
    catch (error) {
        DpOpsUtil.consoleErr(error, DpOpsUtil.getOpName(DB_TABLES.application, "GET_ALL"));
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName(DB_TABLES.application, "GET_ALL"), result);

} //end function