//src\codegen\cgoperations.ts

import { Option } from "@/common/model/option";
import { Keyvalue } from "@/common/model/keyvalue";


/**
 * class CodeGenModules
 */
export class CodeGenModules {

    public static readonly MODULES: Option[] = [
        new Option("entity_files", "Entities files",null),
        new Option("typescript_code", "Typescript Code",null),
        new Option("database_config", "Database Man.",null),   
    ]

}//end class

/**
 * CgEntityOperations
 */
export class CgEntityOperations {

    public static readonly OP_DEF_CLASS:string          = "get_def_class";
    public static readonly OP_ENTITY_CLASS:string       = "get_entity_class";
    public static readonly OP_ALL_DEF_CLASS:string      = "get_all_def_class";
    public static readonly OP_ALL_ENTITY_CLASS:string   = "get_all_entity_class";
    public static readonly OP_LIST_DEF_CLASS:string     = "get_list_def_class";
    public static readonly OP_LIST_ENTITY_CLASS:string  = "get_list_entity_class"; 

    public static OPS_ENTITIES: Keyvalue[] = [
        new Keyvalue(CgEntityOperations.OP_DEF_CLASS,        "Get Def. Class"),
        new Keyvalue(CgEntityOperations.OP_ENTITY_CLASS,     "Get Entity Class"),
        new Keyvalue(CgEntityOperations.OP_ALL_DEF_CLASS,    "Get All Def. Class"),
        new Keyvalue(CgEntityOperations.OP_ALL_ENTITY_CLASS, "Get All Entity Class"),
        new Keyvalue(CgEntityOperations.OP_LIST_DEF_CLASS,   "Get List Def. Class"),
        new Keyvalue(CgEntityOperations.OP_LIST_ENTITY_CLASS,"Get List Entity Class")
    ];

}//end class


