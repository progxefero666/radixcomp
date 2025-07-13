//src\db\services\crud\srvcrudapplications.ts

//src\db\services\crud\srvcrudapplications.ts
"use server";

import { JsonResponse } from "@/common/model/jsonreponse";
import { PrismaClient } from "@generated/prisma";
import { DB_ERROR, DbOps, DpOperationUtil } from "@/common/database/dbkernel";
import { Application } from "@/db/model/application";
import { parseItem } from "@/common/parsers/javascriptparser";
import { DbTables } from "@/db/dbcatalog";


/**
 * __table__ insert
 */
export async function insert(item_serial:string): Promise<string> {
    
    const item: Application|null = parseItem<Application>(item_serial);
    if(item===null){return JsonResponse.ERROR(DB_ERROR.BAD_FORMAT);}

    const prisma = new PrismaClient();
    let result: object|null = null;
    try {
        result = await prisma.application.create({data:item as any});
        if (result === null) {
            return JsonResponse.ERROR
                (DpOperationUtil.getErrNotFoundMessage(DbOps.INSERT, DbTables.application));
        }
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DbTables.application,DbOps.INSERT), null);
}//end

/**
 * __table__ update
 */
export async function update(item:Application): Promise<string> { 
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.application.update({where:{id:item.id!},data:item!});        
        if (result === null) {
            return JsonResponse.ERROR
                (DpOperationUtil.getErrNotFoundMessage(DbOps.UPDATE, DbTables.application));
        }        
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOperationUtil.getOpName("application", DbOps.UPDATE), null);
}//end

/**
 * __table__ delete
 */
export async function delette(id: number): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.application.delete({where:{id:id}});
        if (result === null) {
            return JsonResponse.ERROR(DpOperationUtil.getErrNotFoundMessage(DbOps.DELETE, DbTables.application));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOperationUtil.getOpName("application", DbOps.DELETE),null);
}//end

/**
 * __table__ delete all
 */
export async function deleteAll(): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.application.deleteMany({});
        if (result === null) {
            return JsonResponse.ERROR(DpOperationUtil.getErrNotFoundMessage(DbOps.DELETE_ALL, DbTables.application));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOperationUtil.getOpName("application", DbOps.DELETE_ALL),null);
}//end

