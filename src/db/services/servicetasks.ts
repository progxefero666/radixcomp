//src\db\services\servicetasks.ts

import { JsonResponse } from "@/db/operations/model/jsonresponse";
import { PrismaClient } from "@generated/prisma";
import { OpUtil } from "../functions/operationutil";
import { DbOps } from "../dboperations";
import { DB_TABLES } from "../dbesquema";



/**
 * Server Action:*    
 *    desc: read all rows in table TaskTypes
 */
export async function GetAllTaskType(): Promise<string> { 
    
    const prisma = new PrismaClient(); 
    let result = null;
    try {
        result = await prisma.taskType.findMany();
    } 
    catch (error) {
        OpUtil.consoleErr(error,OpUtil.getOpName(DB_TABLES.tasktype,DbOps.GET_ALL));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect(); 
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.tasktype,DbOps.GET_ALL),result);

} //end function

/**
 * Server Action:*    
 *    desc: read all rows in table TaskTypes
 */
export async function GetAllWorkflows(): Promise<string> { 
    
    const prisma = new PrismaClient(); 
    let result = null;
    try {
        result = await prisma.workflow.findMany();
    } 
    catch (error) {
        OpUtil.consoleErr(error,OpUtil.getOpName(DB_TABLES.workflow,DbOps.GET_ALL));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect(); 
    }
    return JsonResponse.SUCCESS(OpUtil.getOpName(DB_TABLES.workflow,DbOps.GET_ALL),result);

} //end function
