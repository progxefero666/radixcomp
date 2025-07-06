//src\db\services\servicetasks.ts

import { JsonResponse } from "@/db/operations/model/jsonresponse";
import { PrismaClient } from "@generated/prisma";
import { OpUtil } from "../functions/operationutil";
import { DbOps } from "../dboperations";
import { DB_TABLES } from "../dbesquema";


/**
 * Server Action: Get All TaskTypesS
 *    desc: read all rows in table tasktypes
 */
export async function GetAllTaskType(): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.taskType.findMany();
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName(DB_TABLES.tasktype, DbOps.GET_ALL));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.tasktype, DbOps.GET_ALL), result);

} //end function

/**
 * Server Action: Get All Workflows
 *    desc: read all rows in table workflow
 */
export async function GetAllWorkflows(): Promise<string> {
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


/**
 * Server Action: Get Tasks by Workflow id   
 *    desc: read all rows in table tasktypes
 */
export async function GetTasksByFk(workflow_id:number): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.task.findMany({
            where: {id:workflow_id},
            include: {
                tasktype: true,
                workflow: true,
                codelang: true,
            }
        });
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName(DB_TABLES.task, DbOps.GET_BY_FK));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.task, DbOps.GET_BY_FK), result);

} //end function
