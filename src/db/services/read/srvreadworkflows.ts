//src\db\services\servicetasks.ts
"use server";

import { JsonResponse }  from "@/common/json/models/jsonresponse";
import { PrismaClient }  from "@generated/prisma";
import { DbOps, OpUtil } from "@/db/dboperations";
import { DB_TABLES }     from "@/db/dbcatalog";



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
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.workflow, DbOps.GET_ALL), result);
} //end function

