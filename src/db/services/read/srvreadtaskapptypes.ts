//src\db\services\read\srvreadtasktypes.ts
"use server";

import { PrismaClient }  from "@generated/prisma";

import { JsonResponse }  from "@/common/json/models/jsonresponse";
import { DbOps, OpUtil } from "@/db/dboperations";
import { DB_TABLES }     from "@/db/dbcatalog";


/**
 * Get __Template__ by Id
 */
export async function get(id:number): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.appType.findFirst({where:{id:id}});
        if (result === null) {
            return JsonResponse.ERROR
                (OpUtil.getErrNotFoundMessage(DbOps.GET_BY_ID,DB_TABLES.apptype));
        }
    }
    catch (error) {        
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.apptype, DbOps.GET_BY_ID), result);

} //end function


/**
 * Get All __Template__
 */
export async function getAll(): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.appType.findMany();        
    }
    catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.apptype,DbOps.GET_ALL), result);

} //end function


/*
OpUtil.consoleErr(error, OpUtil.getOpName(DB_TABLES.apptype, DbOps.GET_BY_ID));
OpUtil.consoleErr(error, OpUtil.getOpName(DB_TABLES.apptype, DbOps.GET_ALL));
*/