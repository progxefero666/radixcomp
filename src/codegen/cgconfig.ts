//src\codegen\kernel\cgconfig.ts

import { Keyvalue } from "@/common/model/keyvalue";
import { DocFormats } from "@/filesystem/fsconstants";



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
 * class CodeGenConfig.FORMAT_TYPESCRIPT
 */
export class CodeGenConfig {

    public static readonly NOT_DEF:string = "undefined";
    

 
    public static readonly DEF_FILE_ID:string = "default";
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

};//end class

/*
    public static FORMAT_TYPESCRIPT:string = "typescript";
    public static FORMAT_JSON:string = "json";
    public static FORMAT_JSX:string = "jsx";
    public static FORMAT_SQL:string = "sql";
    public static FORMAT_JAVASCRIPT:string = "javascript";

    public static readonly CODE_FORMATS: Keyvalue[] = [
        new Keyvalue(CodeGenConfig.FORMAT_TYPESCRIPT, "TypeScript"),        
        new Keyvalue(CodeGenConfig.FORMAT_JSON, "JSON"),
        new Keyvalue(CodeGenConfig.FORMAT_JSX, "JSX"),  
        new Keyvalue(CodeGenConfig.FORMAT_SQL, "SQL"),
        new Keyvalue(CodeGenConfig.FORMAT_JAVASCRIPT, "JavaScript")
    ]; 
*/