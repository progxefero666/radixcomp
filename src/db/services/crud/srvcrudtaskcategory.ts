
//src\db\services\crud\srvcrudtaskcategory.ts


import { JsonResponse } from "@/common/model/jsonreponse";
import { PrismaClient, Taskcategory } from "@generated/prisma";
import { DB_ERROR, DbOps, DpOpsUtil } from "@/common/database/dbkernel";

import { parseItem } from "@/common/parsers/javascriptparser";
import { DbTables } from "@/db/dbcatalog";


/**
 * __table__ insert
 */
export async function insertTaskcategory(item_serial:string): Promise<string> {
    
    const item: Taskcategory|null = parseItem<Taskcategory>(item_serial);
    if(item===null){return JsonResponse.ERROR(DB_ERROR.BAD_FORMAT);}

    const prisma = new PrismaClient();
    let result: Taskcategory|null = null;
    try {
        result = await prisma.taskcategory.create({data:item as any});
        if (result === null) {
            return JsonResponse.ERROR
                (DpOpsUtil.getErrNotFoundMessage(DbOps.INSERT, DbTables.taskcategory));
        }
    }
    catch (error) {
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName(DbTables.taskcategory,DbOps.INSERT), 
                                result.id.toString());
}//end

/**
 * __table__ update
 */
export async function updateTaskcategory(item:Taskcategory): Promise<string> { 
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.taskcategory.update({where:{id:item.id!},data:item!});        
        if (result === null) {
            return JsonResponse.ERROR
                (DpOpsUtil.getErrNotFoundMessage(DbOps.UPDATE, DbTables.taskcategory));
        }        
    }
    catch (error) {
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOpsUtil.getOpName("taskcategory", DbOps.UPDATE), null);
}//end

/**
 * __table__ delete
 */
export async function deleteTaskcategory(id: string): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.taskcategory.delete({where:{id:id}});
        if (result === null) {
            return JsonResponse.ERROR(DpOpsUtil.getErrNotFoundMessage(DbOps.DELETE, DbTables.taskcategory));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOpsUtil.getOpName("taskcategory", DbOps.DELETE),null);
}//end

/**
 * __table__ delete all
 */
export async function deleteAllTaskcategory(): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.taskcategory.deleteMany({});
        if (result === null) {
            return JsonResponse.ERROR(DpOpsUtil.getErrNotFoundMessage(DbOps.DELETE_ALL, DbTables.taskcategory));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOpsUtil.getOpName("taskcategory", DbOps.DELETE_ALL),null);
}//end

