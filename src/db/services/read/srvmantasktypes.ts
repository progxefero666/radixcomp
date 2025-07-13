//src\db\services\read\srvreadtasktypes.ts
"use server";

import { JsonResponse }  from "@/common/model/jsonreponse";
import { PrismaClient }  from "@generated/prisma";
import { DbOps, DpOperationUtil } from "@/db/dboperations";
import { DB_TABLES }     from "@/db/dbcatalog";


/**
 * Server Action: get -> by id
    include: {
        tasktype: true,
        workflow: true,
        codelang: true,
    },
 *    
 */
export async function get(id:number): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.tasktype.findFirst(
            {
                where:{id:id},
            }
        );
    }
    catch (error) {
        DpOperationUtil.consoleErr(error, DpOperationUtil.getOpName(DB_TABLES.tasktype, DbOps.GET_BY_ID));
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DB_TABLES.tasktype, DbOps.GET_BY_ID), result);

} //end function

/**
 * Server Action: Get All TaskTypesS
 *    desc: read all rows in table tasktypes
 */
export async function getAll(): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.tasktype.findMany();
    }
    catch (error) {
        DpOperationUtil.consoleErr(error, DpOperationUtil.getOpName(DB_TABLES.tasktype, DbOps.GET_ALL));
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DB_TABLES.tasktype, DbOps.GET_ALL), result);

} //end function