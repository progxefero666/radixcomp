//src\db\services\read\srvreadworkflows.ts
"use server";

import { JsonResponse }  from "@/common/model/jsonreponse";
import { PrismaClient }  from "@generated/prisma";
import { DB_COLL_CMD, DpOperationUtil } from "@/db/dboperations";
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
        DpOperationUtil.consoleErr(error, DpOperationUtil.getOpName(DB_TABLES.workflow, DB_COLL_CMD.GET_ALL));
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DB_TABLES.workflow, DB_COLL_CMD.GET_ALL), result);
} //end function





