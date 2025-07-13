//src\db\services\crud\srvcrudtasks.ts
//src\db\services\crud\srvcrudtasks.ts
"use server";

import { JsonResponse } from "@/common/model/jsonreponse";
import { PrismaClient } from "@generated/prisma";
import { DbOps, DpOperationUtil } from "@/common/database/dbkernel";
import { Taskcategory } from "@/db/model/taskcategory";
import { parseItem } from "@/common/parsers/javascriptparser";
import { DbTables } from "@/db/dbcatalog";


/**
 * __table__ insert
 */
export async function insert(item_serial:string): Promise<string> {
    
    const item: Taskcategory|null = parseItem<Taskcategory>(item_serial);
    if(item===null){return JsonResponse.ERROR(DbOps.ERR_BADFORMAT);}

    const prisma = new PrismaClient();
    let result: object|null = null;
    try {
        result = await prisma.taskgroup.create({data:item as any});
        if (result === null) {
            return JsonResponse.ERROR
                (DpOperationUtil.getErrNotFoundMessage(DbOps.INSERT, DbTables.taskcategory));
        }
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DbTables.taskcategory,DbOps.INSERT), null);
}//end

/**
 * __table__ update
 */
export async function update(item:Taskcategory): Promise<string> { 
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.taskgroup.update({where:{id:item.id!},data:item!});        
        if (result === null) {
            return JsonResponse.ERROR
                (DpOperationUtil.getErrNotFoundMessage(DbOps.UPDATE, DbTables.taskcategory));
        }        
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DbTables.taskcategory, DbOps.UPDATE), null);
}//end

/**
 * __table__ delete
 */
export async function delette(id: number): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.taskgroup.delete({where:{id:id}});
        if (result === null) {
            return JsonResponse.ERROR(DpOperationUtil.getErrNotFoundMessage(DbOps.DELETE, DbTables.task));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DbTables.taskcategory, DbOps.DELETE),null);
}//end

/**
 * __table__ delete all
 */
export async function deleteAll(): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.taskgroup.deleteMany({});
        if (result === null) {
            return JsonResponse.ERROR(DpOperationUtil.getErrNotFoundMessage(DbOps.DELETE_ALL, DbTables.task));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DbTables.taskcategory, DbOps.DELETE_ALL),null);
}//end

