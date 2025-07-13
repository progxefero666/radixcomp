//src\db\services\crud\srvcrudtasks.ts
//src\db\services\crud\srvcrudtasks.ts
"use server";

import { JsonResponse } from "@/common/model/jsonreponse";
import { PrismaClient } from "@generated/prisma";
import { DbOps, DpOperationUtil } from "@/common/database/dbkernel";
import { Task } from "@/db/model/task";
import { parseItem } from "@/common/parsers/javascriptparser";
import { DbTables } from "@/db/dbcatalog";


/**
 * __table__ insert
 */
export async function insert(item_serial:string): Promise<string> {
    
    const item: Task|null = parseItem<Task>(item_serial);
    if(item===null){return JsonResponse.ERROR(DbOps.ERR_BADFORMAT);}

    const prisma = new PrismaClient();
    let result: object|null = null;
    try {
        result = await prisma.task.create({data:item as any});
        if (result === null) {
            return JsonResponse.ERROR
                (DpOperationUtil.getErrNotFoundMessage(DbOps.INSERT, DbTables.task));
        }
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DbTables.task,DbOps.INSERT), null);
}//end

/**
 * __table__ update
 */
export async function update(item:Task): Promise<string> { 
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.task.update({where:{id:item.id!},data:item!});        
        if (result === null) {
            return JsonResponse.ERROR
                (DpOperationUtil.getErrNotFoundMessage(DbOps.UPDATE, DbTables.task));
        }        
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOperationUtil.getOpName("task", DbOps.UPDATE), null);
}//end

/**
 * __table__ delete
 */
export async function delette(id: number): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.task.delete({where:{id:id}});
        if (result === null) {
            return JsonResponse.ERROR(DpOperationUtil.getErrNotFoundMessage(DbOps.DELETE, DbTables.task));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOperationUtil.getOpName("task", DbOps.DELETE),null);
}//end

/**
 * __table__ delete all
 */
export async function deleteAll(): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.task.deleteMany({});
        if (result === null) {
            return JsonResponse.ERROR(DpOperationUtil.getErrNotFoundMessage(DbOps.DELETE_ALL, DbTables.task));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOperationUtil.getOpName("task", DbOps.DELETE_ALL),null);
}//end

