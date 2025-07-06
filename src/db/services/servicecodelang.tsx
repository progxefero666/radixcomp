//src\db\services\servicecodelang.ts

import { JsonResponse } from "@/common/json/model/jsonresponse";
import { PrismaClient } from "@generated/prisma";


export async function Posts():Promise<string> {
    JsonResponse
    const prisma = new PrismaClient();
    const result = await prisma.codeLang.findMany();

    return JsonResponse.success("codelang_getAll", result).toJson();

}//end function