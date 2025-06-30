//src\codegen\kernel\cgconfig.ts

/**
 * class CodeGen Config
 */
export class CodeGenConfig {

    public static readonly CODEGEN_LIB_PATH: string 
        = "@/codegen/cgmodel"

    public static readonly SQLTYPES_JSON_PATH: string 
        = "@/codegen/sqltypes.json";


    public static getKernelImports(): string {
        let imports: string = "";
        imports += `import { ModelTable, ModelField, Relation } from `;
        imports += `"` + CodeGenConfig.CODEGEN_LIB_PATH + `";\n`;
        imports += `import sqlTypesData from `;
        imports += `"` + CodeGenConfig.SQLTYPES_JSON_PATH + `";\n\n`;
        return imports;
    }

}//end class