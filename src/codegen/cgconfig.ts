//src\codegen\kernel\cgconfig.ts

/**
 * class HttpConst
 */


/**
 * class CgConfig.CHAR_COMMA
 */
export class CgConfig {

    public static DEF_FILE_ID:string = 'default';
    public static DEF_CLASS_NAMEADD: string = 'Def';
    public static CHAR_SPACE:string = ' ';
    public static CHAR_COMMA:string = ',';
    public static CHAR_KEY_OPEN:string = '{';
    public static CHAR_KEY_CLOSE:string = '}';
    public static CHAR_QUOTE:string = '"';
    public static TAB_4:string = '    ';
    public static RET:string = "\n";
    public static RETx2:string = "\n\n";

    public static DATE_GEN_VALUES:string[] =['CURRENT_DATE', 'CURRENT_TIMESTAMP', 'NOW()'];  

    public static DEC_FIELD_START:string = "@field({";
    public static DEC_FIELD_END:string = "})";


    public static DEC_DEFAULT_START:string = "@defaultValue(";
    public static DEC_DEFAULT_END:string = ")";

    public static readonly CODEGEN_LIB_PATH: string 
        = "@/codegen/kernel/cgmodel"

    public static readonly SQLTYPES_JSON_PATH: string 
        = "@/codegen/kernel/sqltypes.json";

    public static readonly SQLTYPES_NUMBER_JSON_PATH: string 
        = "@/codegen/kernel/sqltypesnumber.json";

    public static getKernelImports(): string {
        let imports: string = "";
        imports += `import { ModelTable, ModelField, Relation } from `;
        imports += `"` + CgConfig.CODEGEN_LIB_PATH + `";\n`;
        imports += `import types from `;
        imports += `"` + CgConfig.SQLTYPES_NUMBER_JSON_PATH + `";\n`;
        imports += `import sqlTypesData from `;
        imports += `"` + CgConfig.SQLTYPES_JSON_PATH + `";\n\n`;        
        return imports;
    }

};//end class

