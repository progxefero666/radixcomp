//src\db\services\crud\srvcrudtasktypes.ts

//src\db\services\crud\srvcrudtasktypes.ts
"use server";

import { JsonResponse } from "@/common/jsonmodels";
import { PrismaClient } from "@generated/prisma";
import { DbOps, DpOperationUtil } from "@/db/dboperations";
import { Tasktype } from "@/db/model/tasktype";
import { parseItem } from "@/common/parsers/javascriptparser";
import { DbTables } from "@/db/dbcatalog";


/**
 * __table__ insert
 */
export async function insert(item_serial:string): Promise<string> {
    
    const item: Tasktype|null = parseItem<Tasktype>(item_serial);
    if(item===null){return JsonResponse.ERROR(DbOps.ERR_BADFORMAT);}

    const prisma = new PrismaClient();
    let result: object|null = null;
    try {
        result = await prisma.tasktype.create({data:item});
        if (result === null) {
            return JsonResponse.ERROR
                (DpOperationUtil.getErrNotFoundMessage(DbOps.INSERT, DbTables.tasktype));
        }
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DbTables.tasktype,DbOps.INSERT), null);
}//end

/**
 * __table__ update
 */
export async function update(item:Tasktype): Promise<string> { 
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.tasktype.update({where:{id:item.id!},data:item!});        
        if (result === null) {
            return JsonResponse.ERROR
                (DpOperationUtil.getErrNotFoundMessage(DbOps.UPDATE, DbTables.tasktype));
        }        
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOperationUtil.getOpName("tasktype", DbOps.UPDATE), null);
}//end

/**
 * __table__ delete
 */
export async function delette(id: number): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.tasktype.delete({where:{id:id}});
        if (result === null) {
            return JsonResponse.ERROR(DpOperationUtil.getErrNotFoundMessage(DbOps.DELETE, DbTables.tasktype));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOperationUtil.getOpName("tasktype", DbOps.DELETE),null);
}//end

/**
 * __table__ delete all
 */
export async function deleteAll(): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.tasktype.deleteMany({});
        if (result === null) {
            return JsonResponse.ERROR(DpOperationUtil.getErrNotFoundMessage(DbOps.DELETE_ALL, DbTables.tasktype));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(DpOperationUtil.getOpName("tasktype", DbOps.DELETE_ALL),null);
}//end

