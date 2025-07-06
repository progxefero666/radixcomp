//src\db\services\servicecodelang.ts

import { JsonResponse } from "@/common/json/model/jsonresponse";
import { PrismaClient } from "@generated/prisma";
import { OpUtil } from "../functions/operationutil";

/*

    const count = await prisma.codeLang.count({
        where: { name: 'Rust' }
    });

    //const count = await prisma.codeLang.count();

const result = await prisma.$queryRaw`
  SELECT * FROM "CodeLang"
`;

const langName = 'Rust';
const result = await prisma.$queryRaw`
  SELECT * FROM "CodeLang" WHERE name = ${langName}`;

await prisma.$executeRaw`
  DELETE FROM "CodeLang" WHERE id = ${someId}
`; 

[
  {
    id: 1,
    name: 'Build parser',
    tasktypeId: 2,
    tasktype: { id: 2, name: 'Compile', ... },
    workflowId: 3,
    workflow: { id: 3, name: 'CI/CD', ... },
    codelangId: 1,
    codelang: { id: 1, name: 'Rust', ... },
    ...
  },
  ...
]

*/


export async function GetAllRows(table:string):Promise<string> {
    
    
    const prisma = new PrismaClient();

    const result = await prisma.codeLang.findMany();

    return JsonResponse.success(OpUtil.getOpName(table,"getAll"), result).toJson();

}//end function