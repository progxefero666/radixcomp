//src\db\services\read\srvreadtasktypes.ts
"use server";

import { JsonResponse }  from "@/common/json/models/jsonresponse";
import { PrismaClient }  from "@generated/prisma";
import { DbOps, OpUtil } from "@/db/dboperations";
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
        result = await prisma.taskType.findFirst(
            {
                where:{id:id},
            }
        );
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName(DB_TABLES.tasktype, DbOps.GET_ALL));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.tasktype, DbOps.GET_BY_ID), result);

} //end function
