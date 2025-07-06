//src\db\services\servicecodelang.ts

import { PrismaClient } from "@generated/prisma";


export default async function Posts() {

    const prisma = new PrismaClient();
    const result = await prisma.codeLang.findMany();
    return (
        <div>

        </div>
    );
}