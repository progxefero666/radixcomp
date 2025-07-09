//src\db\services\generic\serviceread.ts
"use server";

import { JsonResponse } from "@/common/jsonresponse";
import { Prisma, PrismaClient } from "@generated/prisma";

import { DbOps, OpUtil } from "@/db/dboperations";
import { DB_TABLES, DbTables } from "@/db/dbcatalog";

export async function executeReadQuery(commandSql:string,params:any[]= []): Promise<string> {
	
    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.$queryRaw(Prisma.sql`${commandSql}`, ...params);
    } 
	catch (error) {
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    } 
	finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.task, DbOps.GET_ALL), result);
}//end function

export async function getCountByParents(workflow_id:number,taskgroup_id:number): Promise<string> {

    const prisma = new PrismaClient();
    let count = 0; 
    try {
        count = await prisma.task.count({
            where: {
                workflowId: workflow_id,
                taskgroupId: taskgroup_id,
            },
        });
    }
    catch (error) {        
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    } 
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.task, DbOps.COUNT_ROWS), count);
}

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
        if( table === DbTables.codelang ) {
            result = await prisma.codelang.findMany();
        }        
        else if( table === DbTables.tasktype ) {
            result = await prisma.tasktype.findMany();
        }
        else if( table === DbTables.workflow ) {
            result = await prisma.workflow.findMany();
        }
        else if( table === DbTables.taskgroup ) {
            result = await prisma.taskgroup.findMany();
        }        
        else if( table === DbTables.task ) {
            result = await prisma.task.findMany();
        }        
        else if( table === DbTables.apptype ) {
            result = await prisma.apptype.findMany();
        }     
        else if( table === DbTables.application ) {
            result = await prisma.application.findMany();
        }   
        else {
            //throw new Error(OpUtil.getErrNotFoundMessage(table,DbOps.TYPE_TABLE));
        }
    } 
    catch (error) {OpUtil.consoleErr(error,OpUtil.getOpName(table,DbOps.GET_ALL));
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect(); 
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(table,DbOps.GET_ALL),result);

} //end function
