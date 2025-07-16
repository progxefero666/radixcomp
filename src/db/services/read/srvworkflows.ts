//src\db\services\read\srvreadworkflows.ts
"use server";

import { JsonResponse }  from "@/common/model/jsonreponse";
import { PrismaClient }  from "@generated/prisma";
import { DB_COLL_CMD, DpOpsUtil } from "@/common/database/dbkernel";
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
        DpOpsUtil.consoleErr(error, DpOpsUtil.getOpName(DB_TABLES.workflow, DB_COLL_CMD.GET_ALL));
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName(DB_TABLES.workflow, DB_COLL_CMD.GET_ALL), result);
} //end function





