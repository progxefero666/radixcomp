//src\db\services\crud\srvcrudtasks.ts
"use server";

import { JsonResponse } from "@/common/json/models/jsonresponse";
import { PrismaClient } from "@generated/prisma";
import { DbOps, OpUtil } from "@/db/dboperations";
import { Task, TypeTask } from "@/db/dmmodels/task";

/**
 * Server Actions for Task CRUD operations
 */

/**
 * Insert a new Task
 * @param data - Task data
 * @returns JSON string with result
 */
export async function insert(data: TypeTask): Promise<string> {
    console.log("insertTask:", data);
    const prisma = new PrismaClient();

    try {
        const result = await prisma.task.create({
            data: {
                tasktypeId: data.tasktype_id,
                codelangId: data.codelang_id,
                workflowId: data.workflow_id,
                orden: data.orden,
                tkname: data.tkname,
                description: data.description,
                files: data.files,
                folders: data.folders,
                final: data.final
            }
        });

        return JsonResponse.SUCCESS(OpUtil.getOpName("task", DbOps.INSERT), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("task", DbOps.INSERT));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
}

/**
 * Update an existing Task
 * @param id - Task ID
 * @param data - Task data
 * @returns JSON string with result
 */
export async function update(id: number, data: TypeTask): Promise<string> {
    console.log("updateTask:", id, data);
    const prisma = new PrismaClient();

    try {
        const result = await prisma.task.update({
            where: { id: id },
            data: {
                tasktypeId: data.tasktype_id,
                codelangId: data.codelang_id,
                workflowId: data.workflow_id,
                orden: data.orden,
                tkname: data.tkname,
                description: data.description,
                files: data.files,
                folders: data.folders,
                final: data.final
            }
        });

        return JsonResponse.SUCCESS(OpUtil.getOpName("task", DbOps.UPDATE), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("task", DbOps.UPDATE));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
}//end

/**
 * Delete a Task by ID
 * @param id - Task ID to delete
 * @returns JSON string with result
 */
export async function deleted(id: number): Promise<string> {
    console.log("deleteTask:", id);
    const prisma = new PrismaClient();

    try {
        const result = await prisma.task.delete({
            where: { id: id }
        });

        return JsonResponse.SUCCESS(OpUtil.getOpName("task", DbOps.DELETE), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("task", DbOps.DELETE));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
}//end

/**
 * Delete all Tasks
 * @returns JSON string with result
 */
export async function deleteAll(): Promise<string> {
    console.log("deleteAllTasks");
    const prisma = new PrismaClient();

    try {
        const result = await prisma.task.deleteMany({});

        return JsonResponse.SUCCESS(OpUtil.getOpName("task", DbOps.DELETE_ALL), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("task", DbOps.DELETE_ALL));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
}//end