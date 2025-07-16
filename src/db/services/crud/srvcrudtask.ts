//src\db\services\crud\srvcrudtask.ts

import { JsonResponse } from "@/common/model/jsonreponse";
import { PrismaClient, Task } from "@generated/prisma";
import { DB_ERROR, DbOps, DpOpsUtil } from "@/common/database/dbkernel";

import { parseItem } from "@/common/parsers/javascriptparser";
import { DbTables } from "@/db/dbcatalog";


/**
 * __table__ insert
 */
export async function insertTask(item_serial:string): Promise<string> {
    
    const item: Task|null = parseItem<Task>(item_serial);
    if(item===null){return JsonResponse.ERROR(DB_ERROR.BAD_FORMAT);}

    const prisma = new PrismaClient();
    let task: Task|null = null;
    try {
        task = await prisma.task.create({data:item as any});
        if (task === null) {
            return JsonResponse.ERROR
                (DpOpsUtil.getErrNotFoundMessage(DbOps.INSERT, DbTables.task));
        }
    }
    catch (error) {
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName(DbTables.task,DbOps.INSERT),
                                task.id.toString());
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
                (DpOpsUtil.getErrNotFoundMessage(DbOps.UPDATE, DbTables.task));
        }        
    }
    catch (error) {
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOpsUtil.getOpName("task", DbOps.UPDATE), null);
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
            return JsonResponse.ERROR(DpOpsUtil.getErrNotFoundMessage(DbOps.DELETE, DbTables.task));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOpsUtil.getOpName("task", DbOps.DELETE),null);
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
            return JsonResponse.ERROR(DpOpsUtil.getErrNotFoundMessage(DbOps.DELETE_ALL, DbTables.task));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOpsUtil.getOpName("task", DbOps.DELETE_ALL),null);
}//end

