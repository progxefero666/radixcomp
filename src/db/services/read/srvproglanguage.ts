//src\db\services\read\srvreadcodelangs.ts
"use server";

import { JsonResponse }  from "@/common/model/jsonreponse";
import { PrismaClient, Proglanguage } from "@generated/prisma";

import { DB_TABLES } from "@/db/dbcatalog";
import { DpOpsUtil } from "@/common/database/dbkernel";



export async function getProglanguage(id:string): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.proglanguage.findFirst(
            {
                where:{id:id},
            }
        );
    }
    catch (error) {
        DpOpsUtil.consoleErr(error, DpOpsUtil.getOpName("Proglanguage","GET_BY_ID"));
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName("Proglanguage", "GET_BY_ID"), result);

} //end function

/**
 * Server Action: Get All TaskTypesS
 *    desc: read all rows in table tasktypes
 */
export async function getAllProglanguage(): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.proglanguage.findMany();
    }
    catch (error) {
        DpOpsUtil.consoleErr(error, DpOpsUtil.getOpName("Proglanguages", "GET_ALL"));
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName("Proglanguage", "GET_ALL"), result);

} //end function