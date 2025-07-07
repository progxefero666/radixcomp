//src\db\services\crud\srvcrudapplications.ts
"use server";

import { JsonResponse } from "@/common/json/models/jsonresponse";
import { PrismaClient } from "@generated/prisma";
import { DbOps, OpUtil } from "@/db/dboperations";
import { Application, TypeApplication } from "@/db/dmmodels/application";

/**
 * Server Actions for Application CRUD operations
 */

/**
 * Insert a new Application
 * @param data - Application data
 * @returns JSON string with result
 */
export async function insert(data: TypeApplication): Promise<string> {
    console.log("insertApplication:", data);
    const prisma = new PrismaClient();

    try {
        const result = await prisma.application.create({
            data: {
                apptypeId: data.apptype_id,
                codelangId: data.codelang_id,
                anname: data.anname,
                description: data.description,
                repository: data.repository,
                author: data.author,
                osystem: data.osystem,
                appurl: data.appurl,
                apppath: data.apppath,
                localdev: data.localdev,
                usedocker: data.usedocker,
                controlusers: data.controlusers,
                useui: data.useui,
                useagents: data.useagents,
                consumedb: data.consumedb,
                consumeapi: data.consumeapi,
                consumeai: data.consumeai,
                exposedb: data.exposedb,
                exposeapi: data.exposeapi,
                updated: data.updated
            }
        });

        return JsonResponse.SUCCESS(OpUtil.getOpName("application", DbOps.INSERT), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("application", DbOps.INSERT));
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
}

/**
 * Update an existing Application
 * @param id - Application ID
 * @param data - Application data
 * @returns JSON string with result
 */
export async function update(id: number, data: TypeApplication): Promise<string> {
    console.log("updateApplication:", id, data);
    const prisma = new PrismaClient();

    try {
        const result = await prisma.application.update({
            where: { id: id },
            data: {
                apptypeId: data.apptype_id,
                codelangId: data.codelang_id,
                anname: data.anname,
                description: data.description,
                repository: data.repository,
                author: data.author,
                osystem: data.osystem,
                appurl: data.appurl,
                apppath: data.apppath,
                localdev: data.localdev,
                usedocker: data.usedocker,
                controlusers: data.controlusers,
                useui: data.useui,
                useagents: data.useagents,
                consumedb: data.consumedb,
                consumeapi: data.consumeapi,
                consumeai: data.consumeai,
                exposedb: data.exposedb,
                exposeapi: data.exposeapi,
                updated: data.updated
            }
        });

        return JsonResponse.SUCCESS(OpUtil.getOpName("application", DbOps.UPDATE), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("application", DbOps.UPDATE));
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
}//end

/**
 * Delete an Application by ID
 * @param id - Application ID to delete
 * @returns JSON string with result
 */
export async function deleted(id: number): Promise<string> {
    console.log("deleteApplication:", id);
    const prisma = new PrismaClient();

    try {
        const result = await prisma.application.delete({
            where: { id: id }
        });

        return JsonResponse.SUCCESS(OpUtil.getOpName("application", DbOps.DELETE), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("application", DbOps.DELETE));
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
}//end

/**
 * Delete all Applications
 * @returns JSON string with result
 */
export async function deleteAll(): Promise<string> {
    console.log("deleteAllApplications");
    const prisma = new PrismaClient();

    try {
        const result = await prisma.application.deleteMany({});

        return JsonResponse.SUCCESS(OpUtil.getOpName("application", DbOps.DELETE_ALL), result);
    }
    catch (error) {
        OpUtil.consoleErr(error, OpUtil.getOpName("application", DbOps.DELETE_ALL));
        return JsonResponse.ERROR(OpUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
}//end