//src\db\services\read\srvreadcodelangs.ts
"use server";

import { JsonResponse }  from "@/common/model/jsonreponse";
import { PrismaClient }  from "@generated/prisma";

import { DB_TABLES } from "@/db/dbcatalog";
import { DpOpsUtil } from "@/common/database/dbkernel";



/**
 * Server Action: get -> by id
    include: {
        tasktype: true,
        workflow: true,
        codelang: true,
    },
 *    
 */
export async function getCodelang(id:number): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.codelang.findFirst(
            {
                where:{id:id},
            }
        );
    }
    catch (error) {
        DpOpsUtil.consoleErr(error, DpOpsUtil.getOpName(DB_TABLES.codeLang,"GET_BY_ID"));
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName(DB_TABLES.codeLang, "GET_BY_ID"), result);

} //end function

/**
 * Server Action: Get All TaskTypesS
 *    desc: read all rows in table tasktypes
 */
export async function getAllCodelang(): Promise<string> {

    const prisma = new PrismaClient();
    let result = null;
    try {
        result = await prisma.codelang.findMany();
    }
    catch (error) {
        DpOpsUtil.consoleErr(error, DpOpsUtil.getOpName(DB_TABLES.codeLang, "GET_ALL"));
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName(DB_TABLES.codeLang, "GET_ALL"), result);

} //end function

// Método 1: Usando aggregate (MÁS EFICIENTE)
export async function getMaxCodelangId(): Promise<number> {
    const prisma = new PrismaClient();    
    try {
        const result = await prisma.codelang.aggregate({_max: {id: true}});        
        return result._max.id ?? 0; // Si tabla vacía devuelve 0
    }
    catch (error) {
        console.error('Error getting max ID:', error);
        throw error;
    }
    finally {
        await prisma.$disconnect();
    }
};//end function

// Función para obtener siguiente ID disponible
export async function getNextCodelangId(): Promise<number> {
    let nextId:number = 0;
    const prisma = new PrismaClient();
    try {
        const result = await prisma.codelang.aggregate({_max: {id: true}});        
        const maxId:number = result._max.id ?? 0;
        nextId = maxId + 1;
    }
    catch (error) {
        console.error('Error getting max ID:', error);
        throw error;
    }
    finally {
        await prisma.$disconnect();
    }    
    return nextId;
};//end function

