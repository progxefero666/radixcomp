//src\db\services\read\srvreadtasks.ts
"use server";

import { JsonResponse }  from "@/common/model/jsonreponse";
import { PrismaClient, Taskcategory }  from "@generated/prisma";
import { DB_COLL_CMD, DpOpsUtil } from "@/common/database/dbkernel";
import { DB_TABLES }     from "@/db/dbcatalog";


export async function getTaskcategory(id:number): Promise<string> {

    const prisma = new PrismaClient();
    let taskcategory:Taskcategory | null = null;
    try {
        taskcategory = await prisma.taskcategory.findFirst(
            {
                where:{id:id},
            }
        );
    }
    catch (error) {
        DpOpsUtil.consoleErr(error, DpOpsUtil.getOpName(DB_TABLES.taskgroup, DB_COLL_CMD.GET_BY_ID));
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName(DB_TABLES.taskgroup, DB_COLL_CMD.GET_BY_ID), taskcategory);

} //end function


/**
 * Server Action: Get Tasks by Workflow id   
 *    desc: read all rows in table tasktypes
 */
export async function getAllTaskcategory(workflow_id:number,includeTasks?:boolean): Promise<string> {

    const loadTasks = includeTasks ?? false;
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.taskcategory.findMany({
            where: {id:workflow_id},
            include: {tasks:loadTasks}
        });
    }
    catch (error) {
        DpOpsUtil.consoleErr(error, DpOpsUtil.getOpName(DB_TABLES.taskgroup, DB_COLL_CMD.GET_BY_FK));
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName(DB_TABLES.taskgroup, DB_COLL_CMD.GET_BY_FK), result);

} //end function



