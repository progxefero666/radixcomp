//src\db\services\generic\servicecrud.ts

import { JsonResponse } from "@/common/model/jsonreponse";
import { DB_ERROR, DbOps, DpOpsUtil } from "@/common/database/dbkernel";
import { parseItem } from "@/common/parsers/javascriptparser";
import { DbTables } from "@/db/dbcatalog";

import { PrismaClient,
         Codelang,
         Taskcategory,
         Workflow,
         Tasktype,
         Task,
         Apptype,
         Application } from "@generated/prisma";

export async function insertRow(table:string,row:string): Promise<string> {
    
    const item: Task|null = parseItem<Task>(row);
    if(item===null){return JsonResponse.ERROR(DB_ERROR.BAD_FORMAT);}

    const prisma = new PrismaClient();
    let task: Task|null = null;
    try {
        task = await prisma.task.create({data:item as any});
        if (task === null) {
            return JsonResponse.ERROR
                (DpOpsUtil.getErrNotFoundMessage(DbOps.INSERT, DbTables.task));
        }
    }
    catch (error) {
        return JsonResponse.ERROR(DpOpsUtil.getErrMessage(error));
    }
    finally {
        await prisma.$disconnect();
    }
    return JsonResponse.SUCCESS(DpOpsUtil.getOpName(DbTables.task,DbOps.INSERT),
                                task.id.toString());
}//end