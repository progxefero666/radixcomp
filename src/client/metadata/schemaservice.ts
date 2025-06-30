//src\client\metadata\schemaservice.ts

import { Option } from "@/common/model/option";
import { ModelHelper } from "@/common/util/modelhelper";

/**
 * SchemaService.getDummyListTables
 */
export class SchemaService {

    public static getDummyListTables(): Promise<Option[]> {
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
        return Promise.resolve(ModelHelper.getOptionsFromList(dummyTables));
    }

    public static getListTables(): string[] {

        return [];
    }

}//end class