//src\codegen\kernel\cgconfig.ts

import types from "@/codegen/kernel/sqltypesnumber.json";

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