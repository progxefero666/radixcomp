//src\db\services\crud\srvcrudtasktypes.ts
"use server";

import { JsonResponse } from "@/common/json/models/jsonresponse";
import { PrismaClient } from "@generated/prisma";
import { DbOps, OpUtil } from "@/db/dboperations";
import { Tasktype, TypeTasktype } from "@/db/dmmodels/tasktype";

/**
 * Server Actions for TaskType CRUD operations
 */

/**
 * Insert a new TaskType
 * @param data - TaskType data
 * @returns JSON string with result
 */
export async function insert(data: TypeTasktype): Promise<string> {
    console.log("insertTaskType:", data);
    const prisma = new PrismaClient();

    try {
        const result = await prisma.taskType.create({
            data: {
                tename: data.tename,
                description: data.description
            }
        });

        return JsonResponse.SUCCESS(OpUtil.getOpName("tasktype", DbOps.INSERT), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("tasktype", DbOps.INSERT));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
}

/**
 * Update an existing TaskType
 * @param id - TaskType ID
 * @param data - TaskType data
 * @returns JSON string with result
 */
export async function update(id: number, data: TypeTasktype): Promise<string> {
    
    console.log("updateTaskType:", id, data);
    const prisma = new PrismaClient();
    try {
        const result = await prisma.taskType.update({
            where: { id: id },
            data: {
                tename: data.tename,
                description: data.description
            }
        });

        return JsonResponse.SUCCESS(OpUtil.getOpName("tasktype", DbOps.UPDATE), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("tasktype", DbOps.UPDATE));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
}//end

/**
 * Delete a TaskType by ID
 * @param id - TaskType ID to delete
 * @returns JSON string with result
 */
export async function deleted(id: number): Promise<string> {
    console.log("deleteTaskType:", id);
    const prisma = new PrismaClient();

    try {
        const result = await prisma.taskType.delete({
            where: { id: id }
        });

        return JsonResponse.SUCCESS(OpUtil.getOpName("tasktype", DbOps.DELETE), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("tasktype", DbOps.DELETE));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
}//end

/**
 * Delete all TaskTypes
 * @returns JSON string with result
 */
export async function deleteAll(): Promise<string> {
    console.log("deleteAllTaskTypes");
    const prisma = new PrismaClient();

    try {
        const result = await prisma.taskType.deleteMany({});

        return JsonResponse.SUCCESS(OpUtil.getOpName("tasktype", DbOps.DELETE_ALL), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("tasktype", DbOps.DELETE_ALL));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
}//end