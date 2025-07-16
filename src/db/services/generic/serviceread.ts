//src\db\services\generic\serviceread.ts
"use server";

import { Option } from "@/common/model/option";
import { JsonResponse } from "@/common/model/jsonreponse";
import { Prisma, PrismaClient } from "@generated/prisma";

import { DB_COLL_CMD, DpOperationUtil } from "@/common/database/dbkernel";
import {  DB_TABLES, DbTables } from "@/db/dbcatalog";
import { Codelang } from "@/db/model/codelang";



export async function getCountByTable(table: string,rowName:string): Promise<string> {

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
        console.error(DpOperationUtil.getErrMessage(error));
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(DB_TABLES.workflow, DB_COLL_CMD.COUNT_ROWS),count.toString());

};//end 




/**
 * Server Action for Read Commom Tables
 *    desc: get all rows from table passed in parameter.
 * @param table
 * @returns JSON string with result
 */
export async function getAllByTable(table: string): Promise<string> {
    console.log("GetAll table:", table);
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
        DpOperationUtil.consoleErr(error, DpOperationUtil.getOpName(table, DB_COLL_CMD.GET_ALL));
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName(table, DB_COLL_CMD.GET_ALL), result);

}//end server action

export async function executeReadQuery(commandSql: string, params: any[] = []): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.$queryRaw(Prisma.sql`${commandSql}`, ...params);
    }
    catch (error) {
        return JsonResponse.ERROR(DpOperationUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOperationUtil.getOpName("task", DB_COLL_CMD.GET_ALL), result);
}//end function