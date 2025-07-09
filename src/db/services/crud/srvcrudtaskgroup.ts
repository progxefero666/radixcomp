//src\db\services\crud\srvcrudtasks.ts
//src\db\services\crud\srvcrudtasks.ts
"use server";

import { JsonResponse } from "@/common/jsonmodels";
import { PrismaClient } from "@generated/prisma";
import { DbOps, OpUtil } from "@/db/dboperations";
import { Taskgroup } from "@/db/model/taskgroup";
import { parseItem } from "@/common/parsers/javascriptparser";
import { DbTables } from "@/db/dbcatalog";


/**
 * __table__ insert
 */
export async function insert(item_serial:string): Promise<string> {
    
    const item: Taskgroup|null = parseItem<Taskgroup>(item_serial);
    if(item===null){return JsonResponse.ERROR(DbOps.ERR_BADFORMAT);}

    const prisma = new PrismaClient();
    let result: object|null = null;
    try {
        result = await prisma.taskgroup.create({data:item as any});
        if (result === null) {
            return JsonResponse.ERROR
                (OpUtil.getErrNotFoundMessage(DbOps.INSERT, DbTables.taskgroup));
        }
    }
    catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DbTables.taskgroup,DbOps.INSERT), null);
}//end

/**
 * __table__ update
 */
export async function update(item:Taskgroup): Promise<string> { 
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.taskgroup.update({where:{id:item.id!},data:item!});        
        if (result === null) {
            return JsonResponse.ERROR
                (OpUtil.getErrNotFoundMessage(DbOps.UPDATE, DbTables.taskgroup));
        }        
    }
    catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(OpUtil.getOpName(DbTables.taskgroup, DbOps.UPDATE), null);
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
            return JsonResponse.ERROR(OpUtil.getErrNotFoundMessage(DbOps.DELETE, DbTables.task));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(OpUtil.getOpName(DbTables.taskgroup, DbOps.DELETE),null);
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
            return JsonResponse.ERROR(OpUtil.getErrNotFoundMessage(DbOps.DELETE_ALL, DbTables.task));
        }          
    }
    catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {await prisma.$disconnect();}

    return JsonResponse.SUCCESS(OpUtil.getOpName(DbTables.taskgroup, DbOps.DELETE_ALL),null);
}//end

