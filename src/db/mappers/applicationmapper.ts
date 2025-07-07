//src\db\mappers\applicationmapper.ts

import { TypeApplication } from "@/db/dmmodels/application";

/**
 * Maps TypeApplication (snake_case) to Prisma format (camelCase)
 */
export class ApplicationMapper {
    
    /**
     * Convert TypeApplication to Prisma create/update format
     */
    static toPrisma(data: TypeApplication) {
        return {
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
        };
    }
}
