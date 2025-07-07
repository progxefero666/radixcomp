//src\db\services\read\srvreadcmcollections.ts
"use server";

import { JsonResponse } from "@/common/json/models/jsonresponse";
import { PrismaClient } from "@generated/prisma";

import { DbOps, OpUtil } from "@/db/dboperations";
import { DbTables } from "@/db/dbcatalog";



/**
 * Server Action for Read Commom Tables
 *    desc: get all rows from table passed in parameter.
 * @param table
 * @returns JSON string with result
 */
export async function GetAll(table: string): Promise<string> {
    console.log("GetAll table:", table);
    const prisma = new PrismaClient(); 
    let result = null;
    try {
        if( table === DbTables.codelang ) {
            result = await prisma.codeLang.findMany();
        }        
        else if( table === DbTables.tasktype ) {
            result = await prisma.taskType.findMany();
        }
        else if( table === DbTables.workflow ) {
            result = await prisma.workflow.findMany();
        }
        else if( table === DbTables.task ) {
            result = await prisma.task.findMany();
        }        
        else if( table === DbTables.apptype ) {
            result = await prisma.appType.findMany();
        }     
        else if( table === DbTables.application ) {
            result = await prisma.application.findMany();
        }   
        else {
            //throw new Error(OpUtil.getErrNotFoundMessage(table,DbOps.TYPE_TABLE));
        }
    } 
    catch (error) {OpUtil.consoleErr(error,OpUtil.getOpName(table,DbOps.GET_ALL));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect(); 
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(table,DbOps.GET_ALL),result);

} //end function
