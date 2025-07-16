//src\codegen\cgoperations.ts

import { Option } from "@/common/model/option";
import { Keyvalue } from "@/common/model/keyvalue";


/**
 * class CodeGenModules
 */
export class CodeGenModules {

    public static readonly MODULES: Option[] = [
        new Option("entity_files", "Entities files",null),
        new Option("typescript_code", "Typescript Code",null)
    ]

}//end class

/**
 * class CodeGenOperations.OPS_ENTITIES
 */
export class CodeGenOperations {

    public static OPS_ENTITIES: Keyvalue[] = [
        new Keyvalue("get_def_class", "Get Def. Class"),
        new Keyvalue("get_entity_class", "Get Entity Class"),
        new Keyvalue("get_all_def_class", "Get All Def. Class"),
        new Keyvalue("get_all_entity_class", "Get All Entity Class"),
        new Keyvalue("get_list_def_class", "Get List Def. Class"),
        new Keyvalue("get_list_entity_class", "Get List Entity Class")
    ];

}//end class


