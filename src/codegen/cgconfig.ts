//src\codegen\kernel\cgconfig.ts

import types from "@/codegen/kernel/sqltypesnumber.json";

import { Option } from "@/common/model/option";
import { ControlDatabase } from "@/codegen/controldatabase";
import { TsEntFilesOps } from "@/codegen/operations/tsentfilesops";
import { JsonEntFilesOps } from "@/codegen/operations/jsonentfilesops";
import { TsxEntFormsOps } from "@/codegen/operations/tsxentformsops";
import { TsEntServiceFilesOps } from "@/codegen/operations/tsentservicefilesops";
import { PyEntServiceFilesOps } from "@/codegen/operations/pyentservicefilesops";
import { ServClientTScriptEntities } from "@/app/gencode/module/client_tscriptentities";
import { ServiceClientJsxForms } from "@/app/gencode/module/client_jsxforms";
import { ServClientTScriptServices } from "@/app/gencode/module/client_tscriptservices";
import { ServiceClientJson } from "@/app/gencode/module/client_json";
import { ServiceClientSqlScripts } from "@/app/gencode/module/client_sqlscripts";


export enum OP_CATEGORIES {
    python_serverfiles      = "python_serverfiles",
    sql_db_squema           = "sql_db_squema",
    test_components         = "test_components"
}

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



}//end class


