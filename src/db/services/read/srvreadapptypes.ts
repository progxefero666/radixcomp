//src\db\services\read\srvreadtasktypes.ts
"use server";

import { PrismaClient }  from "@generated/prisma";

import { JsonResponse }  from "@/common/model/jsonreponse";
import { DpOpsUtil } from "@/common/database/dbkernel";
import { DB_TABLES }     from "@/db/dbcatalog";


/**
 * Get __Template__ by Id
 */
export async function get(id:number): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.apptype.findFirst({where:{id:id}});
        if (result === null) {
            return JsonResponse.ERROR
                (DpOpsUtil.getErrNotFoundMessage("GET_BY_ID",DB_TABLES.apptype));
        }
    }
    catch (error) {        
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName(DB_TABLES.apptype, "GET_BY_ID"), result);

} //end function


/**
 * Get All __Template__
 */
export async function getAll(): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.apptype.findMany();        
    }
    catch (error) {
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName(DB_TABLES.apptype,"GET_ALL"), result);

} //end function


/*
OpUtil.consoleErr(error, OpUtil.getOpName(DB_TABLES.apptype, DbOps.GET_BY_ID));
OpUtil.consoleErr(error, OpUtil.getOpName(DB_TABLES.apptype, DbOps.GET_ALL));
*/