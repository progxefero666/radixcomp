//src\db\services\read\srvreadtasks.ts
"use server";

import { JsonResponse }  from "@/common/jsonmodels";
import { PrismaClient }  from "@generated/prisma";
import { DbOps, OpUtil } from "@/db/dboperations";
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
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.workflow, DbOps.GET_BY_ID), result);

} //end function

export async function get(id:number): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.taskgroup.findFirst(
            {
                where:{id:id},
            }
        );
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName(DB_TABLES.taskgroup, DbOps.GET_BY_ID));
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.taskgroup, DbOps.GET_BY_ID), result);

} //end function


/**
 * Server Action: Get Tasks by Workflow id   
 *    desc: read all rows in table tasktypes
 */
export async function getTaskgroups(workflow_id:number,includeTasks?:boolean): Promise<string> {

    const loadTasks = includeTasks ?? false;
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.taskgroup.findMany({
            where: {id:workflow_id},
            include: {tasks:loadTasks}
        });
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName(DB_TABLES.taskgroup, DbOps.GET_BY_FK));
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.taskgroup, DbOps.GET_BY_FK), result);

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
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.task, DbOps.GET_BY_FK), result);

} //end function

export async function getTasksByTaskgroup(workflow_id:number,taskgroup_id:number): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.task.findMany({
            where: {
                workflowId: workflow_id,
                taskgroupId: taskgroup_id
            }
        });
    }
    catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.task, DbOps.GET_BY_FK), result);

} //end function
