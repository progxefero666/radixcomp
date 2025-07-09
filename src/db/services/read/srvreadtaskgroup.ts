//src\db\services\read\srvreadtasks.ts
"use server";

import { JsonResponse }  from "@/common/jsonresponse";
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
 * Server Action: Get All TaskTypesS
 *    desc: read all rows in table tasktypes
 */
export async function getAll(): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.taskgroup.findMany();
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName(DB_TABLES.taskgroup, DbOps.GET_ALL));
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.taskgroup, DbOps.GET_ALL), result);

} //end function


/**
 * Server Action: Get Tasks by Workflow id   
 *    desc: read all rows in table tasktypes
 */
export async function getByWorkflow(workflow_id:number): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.taskgroup.findMany({
            where: {id:workflow_id},
            include: {
                workflow: true
            }
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
