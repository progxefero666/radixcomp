//src\codegen\kernel\cgconfig.ts

import types from "@/codegen/kernel/sqltypesnumber.json";

import { Option } from "@/common/model/option";
import { ModelHelper } from "@/common/util/modelhelper";

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
 * class CodeGenConfig.getSectionOperations
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

    public static getSectionOperations(sectionName: string): Option[] {

        if (sectionName === OP_CATEGORIES.typescript_entityfiles) {
            return TsEntFilesOperations.Operations;
        }
        else if (sectionName === OP_CATEGORIES.json_entityfiles) {
            return JsonEntFilesOperations.Operations;
        }
        else if (sectionName === OP_CATEGORIES.typescript_entityforms) {
            return TsxEntFormsOperations.Operations;
        }
        else if (sectionName === OP_CATEGORIES.typescript_servicefiles) {
            return TsEntServiceFilesOperations.Operations;
        }
        else if (sectionName === OP_CATEGORIES.python_serverfiles) {
            return PyEntServiceFilesOperations.Operations;
        }
        else if (sectionName === OP_CATEGORIES.sql_db_squema) {
            return ControlDatabase.Operations;
        }        
        alert("not found");
        return [];
    }

    public static getSectionOperationsNames(sectionName: string): string[] {
        alert("getSectionOperationsNames: " + sectionName);
        if (sectionName === OP_CATEGORIES.typescript_entityfiles) {
            return ModelHelper.getListFromOptions(TsEntFilesOperations.Operations);
        }
        else if (sectionName === OP_CATEGORIES.json_entityfiles) {
            return ModelHelper.getListFromOptions(JsonEntFilesOperations.Operations);
        }
        else if (sectionName === OP_CATEGORIES.typescript_entityforms) {
            return ModelHelper.getListFromOptions(TsxEntFormsOperations.Operations);
        }
        else if (sectionName === OP_CATEGORIES.typescript_servicefiles) {
            return ModelHelper.getListFromOptions(TsEntServiceFilesOperations.Operations);
        }
        else if (sectionName === OP_CATEGORIES.python_serverfiles) {
            return ModelHelper.getListFromOptions(PyEntServiceFilesOperations.Operations);
        }
        else if (sectionName === OP_CATEGORIES.sql_db_squema) {
            return ModelHelper.getListFromOptions(ControlDatabase.Operations);
        }        
        alert("not found");
        return [];
    }    
    
}//end class

export enum OP_CATEGORIES {
    json_entityfiles        = "json_files",
    typescript_entityfiles  = "typescript_entityfiles",
    typescript_entityforms  = "typescript_entityforms",
    typescript_servicefiles = "typescript_servicefiles",    
    python_serverfiles      = "python_serverfiles",
    sql_db_squema           = "sql_db_squema"    
}


/**
 * class TsEntityFiles
 */
export class TsEntFilesOperations {

    public static readonly OP_GET_DEF_CLASS: Option
        = new Option("get_definition_class", "Get Def. Class", null, null, null);

    public static readonly OP_GET_ENT_CLASS: Option
        = new Option("get_entity_class", "Get Entity Class", null, null, null);

    public static readonly OP_GET_ARRAY_DEF_CLASS: Option
        = new Option("get_definition_class", "Get Array Def. Class", null, null, null);

    public static readonly OP_GET_ARRAY_ENT_CLASS: Option
        = new Option("get_entity_class", "Get Array Entity Class", null, null, null);

    public static readonly Operations: Option[] = [
        TsEntFilesOperations.OP_GET_DEF_CLASS,
        TsEntFilesOperations.OP_GET_ENT_CLASS,
        TsEntFilesOperations.OP_GET_ARRAY_DEF_CLASS,
        TsEntFilesOperations.OP_GET_ARRAY_ENT_CLASS
    ]
    public static readonly ACTIVE_OPERATION: Option = TsEntFilesOperations.OP_GET_DEF_CLASS

}//end class


/**
 * class Json EntityFiles
 */
export class JsonEntFilesOperations {

    public static readonly OP_A: Option
        = new Option("option_a", "Option A", null, null, null);

    public static readonly OP_B: Option
        = new Option("option_b", "Option B", null, null, null);

    public static readonly Operations: Option[] = [
        JsonEntFilesOperations.OP_A,
        JsonEntFilesOperations.OP_B
    ]
    public static readonly ACTIVE_OPERATION: Option = JsonEntFilesOperations.OP_A;

}//end class


/**
 * class TsxEntityForms
 */
export class TsxEntFormsOperations {

    public static readonly OP_A: Option
        = new Option("option_a", "Option A", null, null, null);

    public static readonly OP_B: Option
        = new Option("option_b", "Option B", null, null, null);

    public static readonly Operations: Option[] = [
        TsxEntFormsOperations.OP_A,
        TsxEntFormsOperations.OP_B
    ]
    public static readonly ACTIVE_OPERATION: Option = TsxEntFormsOperations.OP_A;

}//end class


/**
 * class TsEntityFiles
 */
export class TsEntServiceFilesOperations {

    public static readonly OP_A: Option
        = new Option("option_a", "Option A", null, null, null);

    public static readonly OP_B: Option
        = new Option("option_b", "Option B", null, null, null);

    public static readonly Operations: Option[] = [
        TsEntServiceFilesOperations.OP_A,
        TsEntServiceFilesOperations.OP_B
    ]
    public static readonly ACTIVE_OPERATION: Option = TsEntServiceFilesOperations.OP_A;

}//end class


/**
 * class TsEntityFiles
 */
export class PyEntServiceFilesOperations {

    public static readonly OP_A: Option
        = new Option("option_a", "Option A", null, null, null);

    public static readonly OP_B: Option
        = new Option("option_b", "Option B", null, null, null);

    public static readonly Operations: Option[] = [
        PyEntServiceFilesOperations.OP_A,
        PyEntServiceFilesOperations.OP_B
    ]
    public static readonly ACTIVE_OPERATION: Option = PyEntServiceFilesOperations.OP_A;

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

