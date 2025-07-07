//src\db\services\crud\srvcrudapptypes.ts
"use server";

import { JsonResponse } from "@/common/json/models/jsonresponse";
import { PrismaClient } from "@generated/prisma";
import { DbOps, OpUtil } from "@/db/dboperations";
import { Apptype, TypeApptype } from "@/db/dmmodels/apptype";
import { parseItem } from "@/common/parsers/javascriptparser";


/**
 * Update an existing AppType
 * @param id - AppType ID
 * @param data - AppType data
 * @returns JSON string with result
 * const objTest:Apptype|null = null;
 */
export async function update(item:Apptype): Promise<string> {
    
    //parseItem = <T>(obj: string): T | null => {
        
    const prisma = new PrismaClient();

    try {
        const result = await prisma.appType.update({
            where: { id: item.id },
            data: item
        });

        return JsonResponse.SUCCESS(OpUtil.getOpName("apptype", DbOps.UPDATE), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("apptype", DbOps.UPDATE));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
}//end


/**
 * Insert a new AppType
 * @param data - AppType data
 * @returns JSON string with result
 */
export async function insert(data: TypeApptype): Promise<string> {
    console.log("insertAppType:", data);
    const prisma = new PrismaClient();

    try {
        const result = await prisma.appType.create({
            data: {
                aename: data.aename,
                description: data.description
            }
        });

        return JsonResponse.SUCCESS(OpUtil.getOpName("apptype", DbOps.INSERT), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("apptype", DbOps.INSERT));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
}


/**
 * Delete an AppType by ID
 * @param id - AppType ID to delete
 * @returns JSON string with result
 */
export async function deleted(id: number): Promise<string> {
    console.log("deleteAppType:", id);
    const prisma = new PrismaClient();

    try {
        const result = await prisma.appType.delete({
            where: { id: id }
        });

        return JsonResponse.SUCCESS(OpUtil.getOpName("apptype", DbOps.DELETE), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("apptype", DbOps.DELETE));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
}//end

/**
 * Delete all AppTypes
 * @returns JSON string with result
 */
export async function deleteAll(): Promise<string> {
    console.log("deleteAllAppTypes");
    const prisma = new PrismaClient();

    try {
        const result = await prisma.appType.deleteMany({});

        return JsonResponse.SUCCESS(OpUtil.getOpName("apptype", DbOps.DELETE_ALL), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("apptype", DbOps.DELETE_ALL));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
}//end




/**
 * Update an existing AppType
 * @param id - AppType ID
 * @param data - AppType data
 * @returns JSON string with result
 */
export async function update_old(id: number, data: TypeApptype): Promise<string> {
    console.log("updateAppType:", id, data);
    const prisma = new PrismaClient();

    try {
        const result = await prisma.appType.update({
            where: { id: id },
            data: {
                aename: data.aename,
                description: data.description
            }
        });

        return JsonResponse.SUCCESS(OpUtil.getOpName("apptype", DbOps.UPDATE), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("apptype", DbOps.UPDATE));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
}//end
