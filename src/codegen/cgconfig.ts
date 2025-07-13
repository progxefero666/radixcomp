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
 * class CodeGenConfig.FORMAT_TYPESCRIPT
 */
export class CodeGenConfig {

    public static readonly NOT_DEF:string = "undefined";
    
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
 * class CodeGeneration.generateFile
 */
export class CodeGeneration {

    public static getFilename(id:string,format:string): string {
        let fname: string = id + ".";
        if(format === CodeGenConfig.FORMAT_TYPESCRIPT) {
            fname += "ts";
        }
        else if(format === CodeGenConfig.FORMAT_JSON) {
            fname += "json";
        }
        else if(format === CodeGenConfig.FORMAT_SQL) {
            fname += "sql";
        }
        else if(format === CodeGenConfig.FORMAT_JAVASCRIPT) {
            fname += "js";
        }
        return fname;
    };

    public static getMimetype(format:string): string {
        let mimetype: string = CodeGenConfig.TXT_MIMETYPE;
        if(format === CodeGenConfig.FORMAT_TYPESCRIPT) {
            mimetype = CodeGenConfig.TYPESCRIPT_MIMETYPE;
        }
        else if(format === CodeGenConfig.FORMAT_JSON) {
            mimetype = CodeGenConfig.JSON_MIMETYPE;
        }
        else if(format === CodeGenConfig.FORMAT_SQL) {
            mimetype = CodeGenConfig.SQL_MIMETYPE;
        }
        else if(format === CodeGenConfig.FORMAT_JAVASCRIPT) {
            mimetype = CodeGenConfig.JAVASCRIPT_MIMETYPE;
        }
        return mimetype;
    };

    public static generateFile(id:string,format:string,content:string): boolean{        
        let fname: string = CodeGeneration.getFilename(id,format);
        let mimetype: string = CodeGeneration.getMimetype(format);
        // Here you would implement the logic to generate the file
        console.log(`Generating file: ${fname} with mimetype: ${mimetype}`);
        return true;
    }


    /*
   const exportFile = () => {
        if (dataCode === "undefined" || dataCode === null) {
            alert("No code to export");
            return;
        }
        const blob = new Blob([dataCode], { type: dataFormat });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = dataId + '.' + dataFormat;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }    
    */
       
}//end class