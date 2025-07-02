//src\codegen\kernel\cgconfig.ts

import types from "@/codegen/kernel/sqltypesnumber.json";

import { Option } from "@/common/model/option";

export class HttpConst {

    public static readonly HTTP_GET = "GET";
    public static readonly HTTP_POST = "POST";
    public static readonly HTTP_PUT = "PUT";
    public static readonly HTTP_DELETE = "DELETE";
    public static readonly CONTENT_TYPE_JSON: string = "application/json";
    public static readonly CONTENT_TYPE_FORM_URLENCODED: string = "application/x-www-form-urlencoded";
    public static readonly CONTENT_TYPE_MULTIPART_FORM_DATA: string = "multipart/form-data";

}

/**
 * class CodeGenConfig.TAB_4
 */
export class CodeGenConfig {

    public static readonly DEF_CLASS_NAMEADD: string = "Def"
    public static readonly TAB_4:string = "    ";
    public static readonly RETURN:string = "\n";

    public static readonly CODEGEN_LIB_PATH: string 
        = "@/codegen/kernel/cgmodel"

    public static readonly SQLTYPES_JSON_PATH: string 
        = "@/codegen/kernel/sqltypes.json";

    public static readonly SQLTYPES_NUMBER_JSON_PATH: string 
        = "@/codegen/kernel/sqltypesnumber.json";

    public static getKernelImports(): string {
        let imports: string = "";
        imports += `import { ModelTable, ModelField, Relation } from `;
        imports += `"` + CodeGenConfig.CODEGEN_LIB_PATH + `";\n`;
        imports += `import types from `;
        imports += `"` + CodeGenConfig.SQLTYPES_NUMBER_JSON_PATH + `";\n`;
        imports += `import sqlTypesData from `;
        imports += `"` + CodeGenConfig.SQLTYPES_JSON_PATH + `";\n\n`;        
        return imports;
    }



}//end class


/**
 * class TsEntityFiles
 */
export class TsEntitiesFiles {

    public static readonly OP_GET_DEF_CLASS: Option
        = new Option("get_definition_class", "Get Def. Class", null, null, null);

    public static readonly OP_GET_ENT_CLASS: Option
        = new Option("get_entity_class", "Get Entity Class", null, null, null);

    public static readonly OP_GET_ARRAY_DEF_CLASS: Option
        = new Option("get_definition_class", "Get Array Def. Class", null, null, null);

    public static readonly OP_GET_ARRAY_ENT_CLASS: Option
        = new Option("get_entity_class", "Get Array Entity Class", null, null, null);

    public static readonly Operations: Option[] = [
        TsEntitiesFiles.OP_GET_DEF_CLASS,
        TsEntitiesFiles.OP_GET_ENT_CLASS,
        TsEntitiesFiles.OP_GET_ARRAY_DEF_CLASS,
        TsEntitiesFiles.OP_GET_ARRAY_ENT_CLASS
    ]
    public static readonly ACTIVE_OPERATION: Option = TsEntitiesFiles.OP_GET_DEF_CLASS

}//end class


/**
 * class Json EntityFiles
 */
export class JsonEntitiesFiles {

    public static readonly OP_A: Option
        = new Option("option_a", "Option A", null, null, null);

    public static readonly OP_B: Option
        = new Option("option_b", "Option B", null, null, null);

    public static readonly Operations: Option[] = [
        JsonEntitiesFiles.OP_A,
        JsonEntitiesFiles.OP_B
    ]
    public static readonly ACTIVE_OPERATION: Option = JsonEntitiesFiles.OP_A;

}//end class


/**
 * class TsxEntityForms
 */
export class TsxEntitiesForms {

    public static readonly OP_A: Option
        = new Option("option_a", "Option A", null, null, null);

    public static readonly OP_B: Option
        = new Option("option_b", "Option B", null, null, null);

    public static readonly Operations: Option[] = [
        TsxEntitiesForms.OP_A,
        TsxEntitiesForms.OP_B
    ]
    public static readonly ACTIVE_OPERATION: Option = TsxEntitiesForms.OP_A;

}//end class


/**
 * class TsEntityFiles
 */
export class TsEntitiesServiceFiles {

    public static readonly OP_A: Option
        = new Option("option_a", "Option A", null, null, null);

    public static readonly OP_B: Option
        = new Option("option_b", "Option B", null, null, null);

    public static readonly Operations: Option[] = [
        TsEntitiesServiceFiles.OP_A,
        TsEntitiesServiceFiles.OP_B
    ]
    public static readonly ACTIVE_OPERATION: Option = TsEntitiesServiceFiles.OP_A;

}//end class


/**
 * class TsEntityFiles
 */
export class PyEntitiesServiceFiles {

    public static readonly OP_A: Option
        = new Option("option_a", "Option A", null, null, null);

    public static readonly OP_B: Option
        = new Option("option_b", "Option B", null, null, null);

    public static readonly Operations: Option[] = [
        PyEntitiesServiceFiles.OP_A,
        PyEntitiesServiceFiles.OP_B
    ]
    public static readonly ACTIVE_OPERATION: Option = PyEntitiesServiceFiles.OP_A;

}//end class

/**
 * class ControlDatabase
 */
export class ControlDatabase {

    public static readonly ALL_SQUEMA: Option
        = new Option("complete_db_squema", "Full Squema", null, null, null);

    public static readonly Operations: Option[] = [
        ControlDatabase.ALL_SQUEMA
    ]
    
    public static readonly ACTIVE_OPERATION: Option = ControlDatabase.ALL_SQUEMA;

}//export class AppConfig

