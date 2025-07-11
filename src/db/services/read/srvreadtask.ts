//src\db\services\read\srvreadtasks.ts
"use server";

import { JsonResponse } from "@/common/jsonmodels";
import { Prisma, PrismaClient } from "@generated/prisma";
import { DbOps, OpUtil } from "@/db/dboperations";
import { DB_TABLES } from "@/db/dbcatalog";


//OpUtil.consoleErr(error, OpUtil.getOpName(DB_TABLES.task, DbOps.GET_ALL));


export async function get(id: number): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {result = await prisma.task.findFirst({where:{id:id}});}
    catch (error) {return JsonResponse.ERROR(OpUtil.getErrMessage(error));}
    finally {await prisma.$disconnect();}
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.task, DbOps.GET_BY_ID), result);
} //end function

export async function getAll(): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {result = await prisma.task.findMany();}
    catch (error) {return JsonResponse.ERROR(OpUtil.getErrMessage(error));}
    finally {await prisma.$disconnect();}
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.task, DbOps.GET_ALL), result);
} //end function

export async function getByParent(commandSql:string,workflow_id:number,taskgroup_id:number): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.$queryRawUnsafe(
            commandSql);
    }
    catch (error) {return JsonResponse.ERROR(OpUtil.getErrMessage(error));}
    finally {await prisma.$disconnect();}
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.task, DbOps.GET_ALL), result);
} //end function



export async function getByParents(
            workflow_id:  number, taskgroup_id:  number,
            workflow_name:string, taskgroup_name:string ): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        const resultBase = await prisma.task.findMany({
            where: {
                workflowId: workflow_id,
                taskgroupId: taskgroup_id
            },
            include: {
                workflow: true,
                taskgroup: true,
                codelang: true, 
                tasktype: true
            }
        });

        const codelang_name: string = "codelang_name";
        const tasktype_name: string = "tasktype_name";

        result = resultBase.map(task => {
            return {
                id: task.id,
                tkname: task.tkname,                
                clname: codelang_name,     
                tttype: tasktype_name,                           
                wwname: workflow_name,
                tgname: taskgroup_name,
                orden: task.orden,
                description: task.description,
                files: task.files,
                folders: task.folders
            };
        });
        
    } 
    catch (error) {return JsonResponse.ERROR(OpUtil.getErrMessage(error));}    
    finally {await prisma.$disconnect();}
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.task, DbOps.GET_ALL), result);

}//end function