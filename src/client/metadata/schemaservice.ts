//src\client\metadata\schemaservice.ts

/**
 * SchemaService.getDummyListTables
 */
export class SchemaService {

    public static getDummyListTables(): string[] {
        const dummyTables: string[] = ["agent",
            "application",
            "apptypes",
            "dbtable",
            "doccategory",
            "docprojanalisis",
            "doctype",
            "proglanguage",
            "script",
            "server",
            "service",
            "task",
            "tasktype",
            "workflow"];
        return dummyTables;
    }

    public static getListTables(): string[] {

        return [];
    }

}//end class