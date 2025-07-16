//src\db\services\crud\srvcrudworkflows.ts
//src\db\services\crud\srvcrudworkflows.ts
"use server";

import { JsonResponse } from "@/common/model/jsonreponse";
import { PrismaClient, Workflow } from "@generated/prisma";
import { DB_ERROR, DbOps, DpOpsUtil } from "@/common/database/dbkernel";

import { parseItem } from "@/common/parsers/javascriptparser";
import { DbTables } from "@/db/dbcatalog";


/**
 * __table__ insert
 */
export async function insertWorkflow(item_serial:string): Promise<string> {
    
    const item: Workflow|null = parseItem<Workflow>(item_serial);
    if(item===null){return JsonResponse.ERROR(DB_ERROR.BAD_FORMAT);}

    const prisma = new PrismaClient();
    let result: Workflow|null = null;
    try {
        result = await prisma.workflow.create({data:item});
        if (result === null) {
            return JsonResponse.ERROR
                (DpOpsUtil.getErrNotFoundMessage(DbOps.INSERT, DbTables.workflow));
        }
    }
    catch (error) {
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName(DbTables.workflow,DbOps.INSERT),result.id.toString());
}//end

/**
 * __table__ update
 */
export async function updateWorkflow(item:Workflow): Promise<string> { 
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.workflow.update({where:{id:item.id!},data:item!});        
        if (result === null) {
            return JsonResponse.ERROR
                (DpOpsUtil.getErrNotFoundMessage(DbOps.UPDATE, DbTables.workflow));
        }        
    }
    catch (error) {
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOpsUtil.getOpName("workflow", DbOps.UPDATE), null);
}//end

/**
 * __table__ delete
 */
export async function deleteWorkflow(id: number): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.workflow.delete({where:{id:id}});
        if (result === null) {
            return JsonResponse.ERROR(DpOpsUtil.getErrNotFoundMessage(DbOps.DELETE, DbTables.workflow));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOpsUtil.getOpName("workflow", DbOps.DELETE),null);
}//end

/**
 * __table__ delete all
 */
export async function deleteAll(): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.workflow.deleteMany({});
        if (result === null) {
            return JsonResponse.ERROR(DpOpsUtil.getErrNotFoundMessage(DbOps.DELETE_ALL, DbTables.workflow));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOpsUtil.getOpName("workflow", DbOps.DELETE_ALL),null);
}//end

