//src\client\metadata\schemaservice.ts

import { ModelTable } from "@/codegen/kernel/cgmodel";
import { Option } from "@/common/model/option";
import { CollectionHelper } from "@/common/helper/collhelper";
import { TOption, TSelection } from "@/radix/radixtypes";
import { Keyvalue } from "@/common/model/keyvalue";

/**
 * SchemaService.getListTablesAsOptions
 */
export class SchemaService {

    
    public static getListTablesAsTOptions(modeltables:ModelTable[]):TOption[]{
        let options: TOption[] = [];
        for(const table of modeltables) {
            const option = {
                name: table.name,
                text: table.name,
                selected: false
            };
            options.push(option);
        }
        return options;
    }

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
        return Promise.resolve(CollectionHelper.getOptionsFromList(dummyTables));
    }

    public static getCollectionTables(modeltables:ModelTable[]):  Keyvalue[]{
        const collection: Keyvalue[] = [];
        for (let idx = 0; idx < modeltables.length; idx++) {
            collection.push(new Keyvalue(idx.toString(),modeltables[idx].name));
        }
        return collection;
    }

}//end class