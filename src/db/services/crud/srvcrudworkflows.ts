//src\db\services\crud\srvcrudworkflows.ts
"use server";

import { JsonResponse } from "@/common/json/models/jsonresponse";
import { PrismaClient } from "@generated/prisma";
import { DbOps, OpUtil } from "@/db/dboperations";
import { Workflow, TypeWorkflow } from "@/db/dmmodels/workflow";

/**
 * Server Actions for Workflow CRUD operations
 */

/**
 * Insert a new Workflow
 * @param data - Workflow data
 * @returns JSON string with result
 */
export async function insert(data: TypeWorkflow): Promise<string> {
    console.log("insertWorkflow:", data);
    const prisma = new PrismaClient();

    try {
        const result = await prisma.workflow.create({
            data: {
                wwname: data.wwname,
                description: data.description,
                application: data.application,
                fpath: data.fpath,
                updated: data.updated
            }
        });

        return JsonResponse.SUCCESS(OpUtil.getOpName("workflow", DbOps.INSERT), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("workflow", DbOps.INSERT));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
}

/**
 * Update an existing Workflow
 * @param id - Workflow ID
 * @param data - Workflow data
 * @returns JSON string with result
 */
export async function update(id: number, data: TypeWorkflow): Promise<string> {
    console.log("updateWorkflow:", id, data);
    const prisma = new PrismaClient();

    try {
        const result = await prisma.workflow.update({
            where: { id: id },
            data: {
                wwname: data.wwname,
                description: data.description,
                application: data.application,
                fpath: data.fpath,
                updated: data.updated
            }
        });

        return JsonResponse.SUCCESS(OpUtil.getOpName("workflow", DbOps.UPDATE), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("workflow", DbOps.UPDATE));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
}//end

/**
 * Delete a Workflow by ID
 * @param id - Workflow ID to delete
 * @returns JSON string with result
 */
export async function deleted(id: number): Promise<string> {
    console.log("deleteWorkflow:", id);
    const prisma = new PrismaClient();

    try {
        const result = await prisma.workflow.delete({
            where: { id: id }
        });

        return JsonResponse.SUCCESS(OpUtil.getOpName("workflow", DbOps.DELETE), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("workflow", DbOps.DELETE));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
}//end

/**
 * Delete all Workflows
 * @returns JSON string with result
 */
export async function deleteAll(): Promise<string> {
    console.log("deleteAllWorkflows");
    const prisma = new PrismaClient();

    try {
        const result = await prisma.workflow.deleteMany({});

        return JsonResponse.SUCCESS(OpUtil.getOpName("workflow", DbOps.DELETE_ALL), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("workflow", DbOps.DELETE_ALL));
        return JsonResponse.ERROR(OpUtil.getErrMessageString(error));
    }
    finally {
        await prisma.$disconnect();
    }
}//end