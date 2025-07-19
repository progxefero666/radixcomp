//src\codegen\kernel\cgconfig.ts

/**
 * class HttpConst
 */


/**
 * class CgConfig.CHAR_SPACE
 */
export class CgConfig {

    public static readonly DEF_FILE_ID:string = "default";
    public static readonly DEF_CLASS_NAMEADD: string = "Def"
    public static readonly CHAR_SPACE:string = " ";
    public static readonly TAB_4:string = "    ";
    public static readonly RET:string = "\n";
    public static readonly RETx2:string = "\n\n";

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

