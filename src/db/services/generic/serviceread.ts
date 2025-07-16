//src\db\services\generic\serviceread.ts
"use server";

import { JsonResponse } from "@/common/model/jsonreponse";
import { Prisma, PrismaClient } from "@generated/prisma";
import { DB_COLL_CMD, DpOpsUtil } from "@/common/database/dbkernel";
import { DB_TABLES, DbTables } from "@/db/dbcatalog";


export async function getCountAllRows(table: string,rowName:string): Promise<string> {

    const prisma = new PrismaClient();
    let count = 0;
    try {
        if (table === DbTables.codelang) {
            count = await prisma.codelang.count({where:{name:rowName}});
        }        
        else if (table === DbTables.tasktype) {
            count = await prisma.tasktype.count({where:{name:rowName}});
        }     
        else if (table === DbTables.workflow) {
            count = await prisma.workflow.count({where:{name:rowName}});
        }  
        else if (table === DbTables.apptype) {
            count = await prisma.apptype.count({where:{name:rowName}});
        }     
        else if (table === DbTables.application) {
            count = await prisma.application.count({where:{name:rowName}});
        }                       
    }
    catch (error) {
        console.error(DpOpsUtil.getErrMessage(error));
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName(DB_TABLES.workflow, DB_COLL_CMD.COUNT_ROWS),count.toString());

};//end 


/**
 * Server Action for Read Commom Tables
 *    desc: get all rows from table passed in parameter.
 */
export async function getAllRows(table: string): Promise<string> {
    
    const prisma = new PrismaClient();
    let result = null;
    try {
        if (table === DbTables.codelang) {
            result = await prisma.codelang.findMany();
        }
        else if (table === DbTables.tasktype) {
            result = await prisma.tasktype.findMany();
        }
        else if (table === DbTables.workflow) {
            result = await prisma.workflow.findMany();
        }
        else if (table === DbTables.taskcategory) {
            result = await prisma.taskcategory.findMany();
        }
        else if (table === DbTables.task) {
            result = await prisma.task.findMany();
        }
        else if (table === DbTables.apptype) {
            result = await prisma.apptype.findMany();
        }
        else if (table === DbTables.application) {
            result = await prisma.application.findMany();
        }
        else {
            //throw new Error(OpUtil.getErrNotFoundMessage(table,DbOps.TYPE_TABLE));
        }
    }
    catch (error) {
        DpOpsUtil.consoleErr(error, DpOpsUtil.getOpName(table, DB_COLL_CMD.GET_ALL));
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName(table, DB_COLL_CMD.GET_ALL), result);

}//end server action

export async function executeReadQuery(commandSql: string, params: any[] = []): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.$queryRaw(Prisma.sql`${commandSql}`, ...params);
    }
    catch (error) {
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName("task", DB_COLL_CMD.GET_ALL), result);
}//end function