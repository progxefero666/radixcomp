//src\db\services\read\srvreadcodelangs.ts
"use server";

import { JsonResponse }  from "@/common/model/jsonreponse";
import { PrismaClient }  from "@generated/prisma";

import { DB_TABLES } from "@/db/dbcatalog";
import { DpOpsUtil } from "@/common/database/dbkernel";



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
        result = await prisma.codelang.findFirst(
            {
                where:{id:id},
            }
        );
    }
    catch (error) {
        DpOpsUtil.consoleErr(error, DpOpsUtil.getOpName(DB_TABLES.codeLang,"GET_BY_ID"));
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName(DB_TABLES.codeLang, "GET_BY_ID"), result);

} //end function

/**
 * Server Action: Get All TaskTypesS
 *    desc: read all rows in table tasktypes
 */
export async function getAll(): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.codelang.findMany();
    }
    catch (error) {
        DpOpsUtil.consoleErr(error, DpOpsUtil.getOpName(DB_TABLES.codeLang, "GET_ALL"));
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName(DB_TABLES.codeLang, "GET_ALL"), result);

} //end function