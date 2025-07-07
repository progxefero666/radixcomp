//src\db\services\crud\srvcrudapplications.ts

//src\db\services\crud\srvcrudapplications.ts
"use server";

import { JsonResponse } from "@/common/json/models/jsonresponse";
import { PrismaClient } from "@generated/prisma";
import { DbOps, OpUtil } from "@/db/dboperations";
import { Application } from "@/db/dmmodels/application";
import { parseItem } from "@/common/parsers/javascriptparser";
import { DbTables } from "@/db/dbcatalog";


/**
 * __table__ insert
 */
export async function insert(item_serial:string): Promise<string> {
    
    const item: Application|null = parseItem<Application>(item_serial);
    if(item===null){return JsonResponse.ERROR(DbOps.ERR_BADFORMAT);}

    const prisma = new PrismaClient();
    let result: object|null = null;
    try {
        result = await prisma.application.create({data:item as any});
        if (result === null) {
            return JsonResponse.ERROR
                (OpUtil.getErrNotFoundMessage(DbOps.INSERT, DbTables.application));
        }
    }
    catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DbTables.application,DbOps.INSERT), null);
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
                (OpUtil.getErrNotFoundMessage(DbOps.UPDATE, DbTables.application));
        }        
    }
    catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(OpUtil.getOpName("application", DbOps.UPDATE), null);
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
            return JsonResponse.ERROR(OpUtil.getErrNotFoundMessage(DbOps.DELETE, DbTables.application));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(OpUtil.getOpName("application", DbOps.DELETE),null);
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
            return JsonResponse.ERROR(OpUtil.getErrNotFoundMessage(DbOps.DELETE_ALL, DbTables.application));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(OpUtil.getOpName("application", DbOps.DELETE_ALL),null);
}//end

