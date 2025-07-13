//src\codegen\kernel\cgconfig.ts

import { Keyvalue } from "@/common/model/keyvalue";



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
 * class CodeGenConfig.CODE_FORMATS
 */
export class CodeGenConfig {

    public static readonly NOT_DEF:string = "undefined";
    
    public static FORMAT_TYPESCRIPT:Keyvalue = new Keyvalue("typescript", "TypeScript");
    public static FORMAT_JSON:Keyvalue = new Keyvalue("json", "JSON");
    public static FORMAT_JSX:Keyvalue = new Keyvalue("jsx", "JSX");
    public static FORMAT_SQL:Keyvalue = new Keyvalue("sql", "SQL");
    public static FORMAT_JAVASCRIPT:Keyvalue = new Keyvalue("javascript", "JavaScript");

    public static readonly CODE_FORMATS: Keyvalue[] = [
        CodeGenConfig.FORMAT_TYPESCRIPT,        
        CodeGenConfig.FORMAT_JSON,
        CodeGenConfig.FORMAT_JSX,  
        CodeGenConfig.FORMAT_SQL,
        CodeGenConfig.FORMAT_JAVASCRIPT
    ]; 

    public static readonly TYPESCRIPT_MIMETYPE: string = "text/typescript";
    public static readonly JSON_MIMETYPE: string = "application/json";
    public static readonly PYTHON_MIMETYPE: string = "application/pdf";
    public static readonly MARKDOWN_MIMETYPE: string = "text/plain";
    public static readonly JSX_MIMETYPE: string = "text/typescript";        
    public static readonly SQL_MIMETYPE: string = "text/x-sql";
    public static readonly JAVASCRIPT_MIMETYPE: string = "text/javascript";
    public static readonly CSS_MIMETYPE: string = "text/css";
    public static readonly HTML_MIMETYPE: string = "text/html";
    public static readonly PDF_MIMETYPE: string = "application/pdf";
    public static readonly TXT_MIMETYPE: string = "text/plain";

 
    public static readonly DEF_FILE_ID:string = "default";
    public static readonly DEF_FILE_EXT:string = "ts";
    public static readonly DEF_FILE_MIMETYPE:string = CodeGenConfig.JAVASCRIPT_MIMETYPE;
    


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

/**
 * class CodeGeneration
 */
export class CodeGeneration {

    public static getDefaultFileName(): string {
        return CodeGenConfig.DEF_FILE_ID + "." + CodeGenConfig.DEF_FILE_EXT;
    }

    public static generateFile(id:string,format:string): boolean{

        return true;
    }

};//end class

/*
    
    const getExportFileMimetype = () => {
        let mimetype: string = "";
        if(codeFormat === FilesMimeTypes.TYPESCRIPT) {
            mimetype = FilesMimeTypes.TYPESCRIPT;
        }      
        else if(codeFormat === FilesMimeTypes.JSON) {
            mimetype = FilesMimeTypes.JSON; 
        }          
        else if(codeFormat === FilesMimeTypes.JAVASCRIPT) {
            mimetype = FilesMimeTypes.JAVASCRIPT;
        } 
        else if(codeFormat === FilesMimeTypes.PYTHON) {
            mimetype = FilesMimeTypes.PYTHON;
        }
        else if(codeFormat === FilesMimeTypes.SQL) {
            mimetype = FilesMimeTypes.SQL;
        }        
        else if(codeFormat === FilesMimeTypes.HTML) {
            mimetype = FilesMimeTypes.HTML;
        }
        else if(codeFormat === FilesMimeTypes.CSS) {
            mimetype = FilesMimeTypes.CSS;
        }
        else {
            mimetype = FilesMimeTypes.TXT; 
        }
        return mimetype;
    }

*/