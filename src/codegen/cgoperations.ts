//src\codegen\cgoperations.ts

import { Option } from "@/common/model/option";
import { ModelTable, ModelField, Relation } from "@/codegen/kernel/cgmodel";
import { SchemaService } from "@/codegen/schemaservice";
import { Keyvalue } from "@/common/model/keyvalue";

/**
 * class CodeGenOperations.OPS_ENTITIES
 */
export class CodeGenOperations {

    public static FORMAT_TYPESCRIPT:Keyvalue = new Keyvalue("typescript", "TypeScript");
    public static FORMAT_JSON:Keyvalue = new Keyvalue("json", "JSON");
    public static FORMAT_JSX:Keyvalue = new Keyvalue("jsx", "JSX");
    public static FORMAT_SQL:Keyvalue = new Keyvalue("sql", "SQL");
    public static FORMAT_JAVASCRIPT:Keyvalue = new Keyvalue("javascript", "JavaScript");

    public static readonly CODE_FORMATS: Keyvalue[] = [
        CodeGenOperations.FORMAT_TYPESCRIPT,        
        CodeGenOperations.FORMAT_JSON,
        CodeGenOperations.FORMAT_JSX,  
        CodeGenOperations.FORMAT_SQL,
        CodeGenOperations.FORMAT_JAVASCRIPT
    ]; 

    public static OPS_ENTITIES: Keyvalue[] = [
        new Keyvalue("get_def_class", "Get Def. Class"),
        new Keyvalue("get_entity_class", "Get Entity Class"),
        new Keyvalue("get_all_def_class", "Get All Def. Class"),
        new Keyvalue("get_all_entity_class", "Get All Entity Class"),
        new Keyvalue("get_list_def_class", "Get List Def. Class"),
        new Keyvalue("get_list_entity_class", "Get List Entity Class")
    ];

}//end class

/**
 * class CodeGenModules
 */
export class CodeGenModules {

    public static readonly MODULES: Option[] = [
        new Option("entity_files", "Entities files",null),
        new Option("service_files", "Service files",null)
    ]

}//end class

/*
    public static getModuleById(id: string): Keyvalue | null {
        return CodeGenModules.MODULES.find(m => m.key === id) || null;
    }
*/