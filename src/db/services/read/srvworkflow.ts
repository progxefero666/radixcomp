//src\db\services\read\srvreadtasks.ts
"use server";

import { JsonResponse }  from "@/common/model/jsonreponse";
import { PrismaClient }  from "@generated/prisma";
import { DB_COLL_CMD, DpOperationUtil } from "@/db/dboperations";
import { DB_TABLES }     from "@/db/dbcatalog";




export async function getWorkflow(id:number): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.workflow.findFirst(
            {
                where:{id:id},
                /*include: {
                    taskgroups: true,
                    tasks: true                    
                }*/                   
            }
        );
    }
    catch (error) {
        //OpUtil.consoleErr(error, OpUtil.getOpName(DB_TABLES.workflow, DbOps.GET_BY_ID));
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DB_TABLES.workflow, DB_COLL_CMD.GET_BY_ID), result);

} //end function

export async function get(id:number): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.taskcategory.findFirst(
            {
                where:{id:id},
            }
        );
    }
    catch (error) {
        DpOperationUtil.consoleErr(error, DpOperationUtil.getOpName(DB_TABLES.taskgroup, DB_COLL_CMD.GET_BY_ID));
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DB_TABLES.taskgroup, DB_COLL_CMD.GET_BY_ID), result);

} //end function


/**
 * Server Action: Get Tasks by Workflow id   
 *    desc: read all rows in table tasktypes
 */
export async function getTaskcategories(workflow_id:number,includeTasks?:boolean): Promise<string> {

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
        DpOperationUtil.consoleErr(error, DpOperationUtil.getOpName(DB_TABLES.taskgroup, DB_COLL_CMD.GET_BY_FK));
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DB_TABLES.taskgroup, DB_COLL_CMD.GET_BY_FK), result);

} //end function

export async function getTasks(workflow_id:number): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.task.findMany({
            where: {
                workflowId:workflow_id}
        });
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DB_TABLES.task, DB_COLL_CMD.GET_BY_FK), result);

} //end function

export async function getTasksByTaskcategory(workflow_id:number,taskcategory_id:number): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.task.findMany({
            where: {
                workflowId: workflow_id,
                taskcategoryId: taskcategory_id
            }
        });
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DB_TABLES.task, DB_COLL_CMD.GET_BY_FK), result);

} //end function
