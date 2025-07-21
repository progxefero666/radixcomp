//src\app_front\codegen\util\modelutil.ts

import { ModelTable, ModelField, Relation } from "@/codegen/kernel/cgmodel";
import { CgConfig } from "@/codegen/cgconfig";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { CodeGenSqlHelper } from "@/codegen/kernel/cgsqlhelper";


/**
 * CodeGenTsMotor.getArrayEntityClass(tableModel: ModelTable[],includeDef:boolean):
 * class CodeGen TypeScript Entity Files Content
 *     for store in typescript file .ts
 */


export class CodeGenTsMotor {

    /*
    public static getListAttributesOld(fields: ModelField[]):string {
        let content: string = ""; 

        fields.forEach((field) => {
            const tsType = CodeGenSqlHelper.mapSqlTypeToTypeScript(field.type); 
            if(!field.required ){
                if(tsType === 'boolean'){
                    content += CgConfig.TAB_4 +
                               `public ${field.name}: ${tsType};\n`;
                }
                else {
                    content += CgConfig.TAB_4 +
                              `public ${field.name}: ${tsType} | null = null;\n`;
                }
            }
            else {
                if(field.default!=null){
                    content += CgConfig.TAB_4 + `public ${field.name}: ${tsType} = ${field.default};\n`;               
                }
                else{
                    content += CgConfig.TAB_4 + `public ${field.name}: ${tsType};\n`;
                }  
            }    
        });
        return content;
    };//end 
    */

    public static getListAttributes(fields: ModelField[]):string {
        let content: string = ""; 

        fields.forEach((field) => {
            const tsType = CodeGenSqlHelper.mapSqlTypeToTypeScript(field.type); 

            // step 1: create decorator 
            content += CgConfig.DEC_FIELD_START;
            content += `ftype:"${field.type}"` + CgConfig.CHAR_COMMA;
            content += `name:"${field.name}"` + CgConfig.CHAR_COMMA;
            if (field.pk) {
                content += `pk:true` + CgConfig.CHAR_COMMA;
            }
            else if(field.fk) {
                content += `fk:true` + CgConfig.CHAR_COMMA;
                content += 'fxattrs:{table:' + 
                                field.relations?.[0].table + CgConfig.CHAR_QUOTE + 
                                CgConfig.CHAR_COMMA+'id:'+ field.relations?.[0].field + CgConfig.CHAR_QUOTE + 
                                CgConfig.CHAR_COMMA + 'name:' + field.relations?.[0].field + CgConfig.CHAR_QUOTE;
            }  
            else {
                 switch(field.type){
                    case "text":
                        if(field.minlen || field.maxlen){
                            if(field.required){content += `required:true`+ CgConfig.CHAR_COMMA }
                            content += "length:{min:" + (field.minlen??0) + CgConfig.CHAR_COMMA;                          
                            content += "max:" + (field.maxlen??-1) + CgConfig.CHAR_KEY_CLOSE + "\n";
                        }
                        break;
                    case "number":
                        if(field.required){content += `required:true`+ CgConfig.CHAR_COMMA }
                        break;
                    case "decimal":
                        if(field.required){content += `required:true`+ CgConfig.CHAR_COMMA }
                            const numberFormat = field.format?.split(':')!;
                            content += "format:{cntint:" + (numberFormat[0].toString()) + CgConfig.CHAR_COMMA;                          
                            content += "cntdec:" + (numberFormat[1].toString()) ;                        
                        break;                        
                 }//end switch
            }
    
            content += CgConfig.CHAR_KEY_CLOSE + '\n';

            // step 2: create attribute
            /*
            @field({ftype:"number",name:"codelang_id",fk:true,fxattrs:{table:"codelang",id:"id",name:"name" }})
            public codelang_id: number;

            @field({ftype:"text",name:"name",required:true})
            public name: string;

            @field({ftype:"text",name:"description",required:true,length:{min:0,max:255}})
            public description: string;

            @field({ftype:"decimal",name:"importe",format:{cntint:10,cntdec:2}})
            public importe: number|null = null;

            @field({ftype:"number",name:"version",required:true,length:{min:0,max:255}})
            public version: number|null = null;

            @field({ftype:"text",name:"appurl",required:false,length:{min:19,max:500}})
            public appurl: string|null = null;
            
            @field({ftype:"check",name:"localdev"})
            @defaultValue(false)
            public localdev: boolean;

            @field({ftype:"date",name:"updated",required:true})
    public updated: Date;            
            */    
            if(!field.required ){
                if(tsType === 'boolean'){
                    content += `public ${field.name}: ${tsType};\n`;
                }
                else {
                    content += `public ${field.name}: ${tsType} | null = null;\n`;
                }
            }
            else {
                if(field.default!=null){
                    content += `public ${field.name}: ${tsType} = ${field.default};\n`;               
                }
                else{
                    content += `public ${field.name}: ${tsType};\n`;
                }  
            }  
            content += CgConfig.DEC_FIELD_END + '\n';  
        });
        //CgConfig.TAB_4
        return content;
    };//end 

    public static getEntityClass(tableModel: ModelTable,includeDef:boolean): string {
        let content: string = "";      
        
        let applyIncludeDef:boolean = includeDef ?? false;

        if(applyIncludeDef){
            content +=  CodeGenTsMotor.getEntityDefClass(tableModel);
        }

        const className = CodeGenHelper.capitalize(tableModel.name);
        const fileName = `table_${tableModel.name.toLowerCase()}.ts`;        
        content += `//${fileName}` + CgConfig.RETx2;
        
        // Class info
        content += `/**\n`;
        content += ` * Db Table Entity Class ${className}\n\n`;
        content += ` **/`+CgConfig.RET;
        content += `export class ${className} {\n\n`;        

        // Generate properties
        content += CodeGenTsMotor.getListAttributes(tableModel.fields);

        // Constructor
        content += `\n    constructor(`;
        const constructorParams: string[] = [];
        for (const field of tableModel.fields) {
            const tsType = CodeGenSqlHelper.mapSqlTypeToTypeScript(field.type);
            if(!field.required ){
                if(tsType === 'boolean'){
                    constructorParams.push(`${field.name}: ${tsType}`);
                }
                else {
                    constructorParams.push(`${field.name}: ${tsType} | null`);
                }                 
            }
            else {
                constructorParams.push(`${field.name}: ${tsType}`);
            }           
        }        
        content += constructorParams.join(',\n                ');
        content += `) {\n\n`;        
        // Constructor assignments
        for (const field of tableModel.fields) {
            content += `        this.${field.name} = ${field.name};`+CgConfig.RET;
        }        
        content += `    }\n\n`;
        
        // Generate minlen function
        content += `    /**\n`;
        content += `     * Returns the minimum length of the field.\n`;
        content += `     * @param fieldName The name of the field.\n`;
        content += `     * @returns The minimum length of the field or null if not applicable.\n`;
        content += `     */\n`;
        content += `    public minlen(fieldName: string): number | null {\n`;        
        for (const field of tableModel.fields) {
            if (field.minlen !== null) {
                content += `        if (fieldName === "${field.name}") {\n`;
                content += `            return ${field.minlen};\n`;
                content += `        }\n`;
            }
        }
        content += `        return 0;\n`;
        content += `    }\n\n`;
        
        // Generate maxlen function
        content += `    /**\n`;
        content += `     * Returns the max length of the field.\n`;
        content += `     * Returns -1 if has unlimited length.\n`;
        content += `     * @param fieldName The name of the field.\n`;
        content += `     * @returns The maximum length of the field or null if not applicable.\n`;
        content += `     */\n`;
        content += `    public maxlen(fieldName: string): number | null {\n`;        
        for (const field of tableModel.fields) {
            if (field.maxlen !== null) {
                // Campo con longitud específica definida
                content += `        if (fieldName === "${field.name}") {\n`;
                content += `            return ${field.maxlen};\n`;
                content += `        }\n`;
            } else if (field.type.toLowerCase().includes('text') && field.maxlen === null) {
                // Campos TEXT sin límite específico
                content += `        if (fieldName === "${field.name}") {\n`;
                content += `            return -1; // unlimited length\n`;
                content += `        }\n`;
            } else if (CodeGenSqlHelper.isNumericType(field.type)) {
                // Campos numéricos: calcular dígitos máximos según el tipo
                const maxDigits = CodeGenSqlHelper.getMaxDigitsForNumericType(field.type);
                content += `        if (fieldName === "${field.name}") {\n`;
                content += `            return ${maxDigits}; // max digits for ${field.type}\n`;
                content += `        }\n`;
            }
        }
        content += `        return 0;\n`;
        content += `    }\n\n`;        
        content += `}//end class\n\n`;        
        // Add type definition based on the class        
        content += CodeGenHelper.getClassType(tableModel);        
        return content;
    }
    
    public static getArrayEntityClass(tableModel: ModelTable[],includeDef?:boolean): string {
        let content: string = "";
        
        let applyIncludeDef:boolean = includeDef ?? false;
        // 1. Imports una sola vez al principio
        content += CgConfig.getKernelImports();
        
        // 2. Para cada tabla, los 3 bloques
        for (let i = 0; i < tableModel.length; i++) {
            const table = tableModel[i];
            
            // Bloque 1: Clase Def (sin imports)
            content += CodeGenTsMotor.getEntityDefClassData(table);
            content += `\n`;
            
            // Bloque 2: Clase normal (extraer solo la parte sin imports ni Def)
            const fullClassContent = CodeGenTsMotor.getEntityClass(table,applyIncludeDef);
            // Quitar la parte de imports y Def, quedarnos solo con la clase y tipo
            const lines = fullClassContent.split('\n');
            let startIndex = -1;
            for (let j = 0; j < lines.length; j++) {
                if (lines[j].includes('//table_')) {
                    startIndex = j;
                    break;
                }
            }
            if (startIndex >= 0) {
                const classAndTypeContent = lines.slice(startIndex).join('\n');
                content += classAndTypeContent;
            }
            
            // Separador entre tablas (excepto la última)
            if (i < tableModel.length - 1) {
                content += `\n`;
            }
        }
        
        return content;
    }//end

    public static getEntityDefClassFieldLine(field: ModelField): string {
        let optionalParams = "";
        if (field.fk) {
            optionalParams += `, ${field.fk}`;
            if (field.relations && field.relations.length > 0) {
                optionalParams += ", [";
                for (let i = 0; i < field.relations.length; i++) {
                    const relation = field.relations[i];
                    optionalParams += `new Relation("${relation.table}", "${relation.field}")`;
                    if (i < field.relations.length - 1) {
                        optionalParams += ", ";
                    }
                }
                optionalParams += "]";
            }
        }
        
        // Handle default value
        let defaultValue = 'null';
        if (field.default !== null) {
            if (field.type === "date" && 
                (field.default.toLowerCase().includes("current_date") || 
                 field.default.toLowerCase().includes("now()") || 
                 field.default.toLowerCase().includes("'today'") ||
                 field.default.toLowerCase().includes("date_trunc"))) {
                defaultValue = '"CURRENT_DATE"';
            } else {
                defaultValue = `"${field.default}"`;
            }
        }
        
        // Handle format value
        let formatValue = 'null';
        if (field.format !== null) {
            formatValue = `"${field.format}"`;
        }


        // Generate single line field creation with proper indentation (8 spaces = 2 tabs of 4)
        // New constructor order: name, type, pk, generated, required, defaultValue, format, minlen, maxlen, fk?, relations?
        return `        this.fields.push(new ModelField("${field.name}", "${field.type}", ${field.pk}, ${field.generated}, ${field.required}, ${defaultValue}, ${formatValue}, ${field.minlen}, ${field.maxlen}${optionalParams}));\n`;
    }//end

    public static getEntityDefClassData(table: ModelTable): string {
        let classCode = "";
        const className = `${CodeGenHelper.capitalize(table.name)}Def`;        
        classCode += `/**\n`;
        classCode += ` * Table definition class for ${table.name}\n`;
        classCode += ` * Generated from database schema\n`;
        classCode += ` */\n`;
        classCode += `export class ${className} {\n\n`;        
        // Class properties
        classCode += `    public name: string = "${table.name}";\n`;
        classCode += `    public fields: ModelField[] = [];\n\n`;        
        // Constructor
        classCode += `    constructor() {\n`;        
        // Add fields to array
        for (const field of table.fields) {
            classCode += CodeGenTsMotor.getEntityDefClassFieldLine(field);
        }        
        classCode += `    }\n\n`;        
        // Add toJsonString method
        classCode += `    public toJsonString(): string {\n`;
        classCode += `        return JSON.stringify(this, null, 4);\n`;
        classCode += `    }\n\n`;        
        classCode += `}//end class\n`;
        
        return classCode;
    }//end
      
    public static getEntityDefClass(table: ModelTable): string {
        let code: string = "";
        code += CgConfig.getKernelImports();
        code += CodeGenTsMotor.getEntityDefClassData(table);        
        return code;
    }//end
    
    public static getArrayEntityDefClass(tables: ModelTable[]): string {
        let code: string = "";
        code += CgConfig.getKernelImports();
        for (let i = 0; i < tables.length; i++) {
            const table = tables[i];
            code += CodeGenTsMotor.getEntityDefClassData(table);
            if (i < tables.length - 1) {
                code += `\n`;
            }
        }        
        return code;
    }//end


}//end class ModelUtil

