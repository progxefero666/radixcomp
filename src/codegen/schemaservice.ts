//src\client\metadata\schemaservice.ts

import { ModelTable } from "@/codegen/kernel/cgmodel";
import { Option } from "@/common/model/option";
import { ModelHelper } from "@/common/util/modelhelper";

/**
 * SchemaService.getListTablesAsOptions
 */
export class SchemaService {

    public static getListTablesAsOptions(modeltables:ModelTable[]):Option[]{
        let options: Option[] = [];
        for(const table of modeltables) {
            const option = new Option(table.name, table.name, null, null, null);
            options.push(option);
        }
        return options;
    }

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