//src\db\services\read\srvreadapplications.ts
"use server";

import { PrismaClient } from "@generated/prisma";
import { DbOps, OpUtil } from "@/db/dboperations";

import { JsonResponse } from "@/common/json/models/jsonresponse";
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
        OpUtil.consoleErr(error, OpUtil.getOpName(DB_TABLES.application, DbOps.GET_BY_ID));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.application, DbOps.GET_BY_ID), result);

} //end function


export async function getAll(table: string): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.application.findMany();
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName(DB_TABLES.application, DbOps.GET_ALL));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.application, DbOps.GET_ALL), result);

} //end function