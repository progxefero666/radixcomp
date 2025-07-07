//src\db\services\crud\srvcrudapptypes.ts
"use server";

import { JsonResponse } from "@/common/json/models/jsonresponse";
import { PrismaClient } from "@generated/prisma";
import { DbOps, OpUtil } from "@/db/dboperations";
import { Apptype } from "@/db/model/apptype";
import { parseItem } from "@/common/parsers/javascriptparser";
import { DbTables } from "@/db/dbcatalog";


/**
 * __table__ insert
 */
export async function insert(item_serial:string): Promise<string> {
    
    const item: Apptype|null = parseItem<Apptype>(item_serial);
    if(item===null){return JsonResponse.ERROR(DbOps.ERR_BADFORMAT);}

    const prisma = new PrismaClient();
    let result: object|null = null;
    try {
        result = await prisma.appType.create({data:item});
        if (result === null) {
            return JsonResponse.ERROR
                (OpUtil.getErrNotFoundMessage(DbOps.INSERT, DbTables.apptype));
        }
    }
    catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DbTables.apptype,DbOps.INSERT), null);
}//end

/**
 * __table__ update
 */
export async function update(item:Apptype): Promise<string> { 
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.appType.update({where:{id:item.id!},data:item!});        
        if (result === null) {
            return JsonResponse.ERROR
                (OpUtil.getErrNotFoundMessage(DbOps.UPDATE, DbTables.apptype));
        }        
    }
    catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(OpUtil.getOpName("apptype", DbOps.UPDATE), null);
}//end

/**
 * __table__ delete
 */
export async function delette(id: number): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.appType.delete({where:{id:id}});
        if (result === null) {
            return JsonResponse.ERROR(OpUtil.getErrNotFoundMessage(DbOps.DELETE, DbTables.apptype));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(OpUtil.getOpName("apptype", DbOps.DELETE),null);
}//end

/**
 * __table__ delete all
 */
export async function deleteAll(): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.appType.deleteMany({});
        if (result === null) {
            return JsonResponse.ERROR(OpUtil.getErrNotFoundMessage(DbOps.DELETE_ALL, DbTables.apptype));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(OpUtil.getOpName("apptype", DbOps.DELETE_ALL),null);
}//end

