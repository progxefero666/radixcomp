//src\db\services\generic\serviceread.ts
"use server";

import { Option } from "@/common/models";
import { JsonResponse } from "@/common/jsonmodels";
import { Prisma, PrismaClient } from "@generated/prisma";

import { DB_COLLECTION_CMD, DpOperationUtil } from "@/db/dboperations";
import { DB_TABLES, DbTables } from "@/db/dbcatalog";
import { Codelang } from "@/db/model/codelang";



export async function executeReadQuery(commandSql: string, params: any[] = []): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.$queryRaw(Prisma.sql`${commandSql}`, ...params);
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DB_TABLES.task, DB_COLLECTION_CMD.GET_ALL), result);
}//end function

export async function getCountByParents(workflow_id: number, taskgroup_id: number): Promise<string> {

    const prisma = new PrismaClient();
    let count = 0;
    try {
        count = await prisma.task.count({
            where: {
                workflowId: workflow_id,
                taskgroupId: taskgroup_id,
            },
        });
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DB_TABLES.task, DB_COLLECTION_CMD.COUNT_ROWS), count);
}

/**
 * Server Action for Read Commom Tables
 *    desc: get all rows from table passed in parameter.
 * @param table
 * @returns JSON string with result
 */
export async function getAllByTable(table: string): Promise<string> {
    console.log("GetAll table:", table);
    const prisma = new PrismaClient();
    let result = null;
    try {
        if (table === DbTables.codelang) {
            result = await prisma.codelang.findMany();
        }
        else if (table === DbTables.tasktype) {
            result = await prisma.tasktype.findMany();
        }
        else if (table === DbTables.workflow) {
            result = await prisma.workflow.findMany();
        }
        else if (table === DbTables.taskgroup) {
            result = await prisma.taskgroup.findMany();
        }
        else if (table === DbTables.task) {
            result = await prisma.task.findMany();
        }
        else if (table === DbTables.apptype) {
            result = await prisma.apptype.findMany();
        }
        else if (table === DbTables.application) {
            result = await prisma.application.findMany();
        }
        else {
            //throw new Error(OpUtil.getErrNotFoundMessage(table,DbOps.TYPE_TABLE));
        }
    }
    catch (error) {
        DpOperationUtil.consoleErr(error, DpOperationUtil.getOpName(table, DB_COLLECTION_CMD.GET_ALL));
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(table, DB_COLLECTION_CMD.GET_ALL), result);

}//end server action


