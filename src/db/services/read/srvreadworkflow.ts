//src\db\services\read\srvreadworkflows.ts
"use server";

import { JsonResponse }  from "@/common/jsonmodels";
import { PrismaClient }  from "@generated/prisma";
import { DbOps, OpUtil } from "@/db/dboperations";
import { DB_TABLES }     from "@/db/dbcatalog";


export async function get(id:number): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.workflow.findFirst(
            {
                where:{id:id},
            }
        );
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName(DB_TABLES.workflow, DbOps.GET_BY_ID));
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.workflow, DbOps.GET_BY_ID), result);

} //end function

/**
 * Server Action: Get All Workflows
 *    desc: read all rows in table workflow
 */
export async function getAll(): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.workflow.findMany();
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName(DB_TABLES.workflow, DbOps.GET_ALL));
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.workflow, DbOps.GET_ALL), result);
} //end function

