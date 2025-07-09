//src\db\services\crud\srvcrudcodelangs.ts
"use server";

import { JsonResponse } from "@/common/jsonmodels";
import { PrismaClient } from "@generated/prisma";
import { DbOps, OpUtil } from "@/db/dboperations";

import { parseItem } from "@/common/parsers/javascriptparser";
import { DbTables } from "@/db/dbcatalog";
import { Codelang } from "@/db/model/codelang";


/**
 * __table__ insert
 */
export async function insert(item_serial:string): Promise<string> {
    
    const item: Codelang|null = parseItem<Codelang>(item_serial);
    if(item===null){return JsonResponse.ERROR(DbOps.ERR_BADFORMAT);}

    const prisma = new PrismaClient();
    let result: object|null = null;
    try {
        result = await prisma.codelang.create({data:item});
        if (result === null) {
            return JsonResponse.ERROR
                (OpUtil.getErrNotFoundMessage(DbOps.INSERT, DbTables.codelang));
        }
    }
    catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DbTables.codelang,DbOps.INSERT), null);
}//end

/**
 * __table__ update
 */
export async function update(item:Codelang): Promise<string> { 
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.codelang.update({where:{id:item.id!},data:item!});        
        if (result === null) {
            return JsonResponse.ERROR
                (OpUtil.getErrNotFoundMessage(DbOps.UPDATE, DbTables.codelang));
        }        
    }
    catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(OpUtil.getOpName(DbTables.codelang,DbOps.UPDATE), null);
}//end

/**
 * __table__ delete
 */
export async function delette(id: number): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.codelang.delete({where:{id:id}});
        if (result === null) {
            return JsonResponse.ERROR(OpUtil.getErrNotFoundMessage(DbOps.DELETE, DbTables.codelang));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(OpUtil.getOpName(DbTables.codelang,DbOps.DELETE),null);
}//end

/**
 * __table__ delete all
 */
export async function deleteAll(): Promise<string> {
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.codelang.deleteMany({});
        if (result === null) {
            return JsonResponse.ERROR(OpUtil.getErrNotFoundMessage(DbOps.DELETE_ALL,DbTables.codelang));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(OpUtil.getOpName(DbTables.codelang,DbOps.DELETE_ALL),null);
}//end

