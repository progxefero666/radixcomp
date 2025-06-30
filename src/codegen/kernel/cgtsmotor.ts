//src\app_front\codegen\util\modelutil.ts

import { ModelTable, ModelField, Relation } from "@/codegen/cgmodel";
import { CodeGenConfig } from "@/codegen/kernel/cgconfig";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { CodeGenSqlHelper } from "@/codegen/kernel/cgsqlhelper";


/**
 * class CodeGen TypeScript Entity Files Content
 *     for store in typescript file .ts
 */
export class CodeGenTsMotor {

    public static getEntityClass(tableModel: ModelTable): string {
        let content: string = "";      
        
        content +=  CodeGenTsMotor.getEntityDefClass(tableModel);

        const className = CodeGenHelper.capitalize(tableModel.name);
        const fileName = `table_${tableModel.name.toLowerCase()}.ts`;        
        content += `//${fileName}\n\n`;
        
        // Class info
        content += `/**\n`;
        content += ` * Class ${className}\n`;
        content += ` * Represents a ${className} entity with various properties and methods.\n`;
        content += ` * \n`;
        content += ` * @class ${className}\n`;
        content += ` */\n`;
        content += `export class ${className} {\n\n`;        
        // Generate properties
        for (const field of tableModel.fields) {
            const tsType = CodeGenSqlHelper.mapSqlTypeToTypeScript(field.type);
            const defaultValue = CodeGenHelper.getDefaultValue(field, tsType);            
            content += `    public ${field.name}: ${tsType} = ${defaultValue};\n`;
        }        
        // Constructor
        content += `\n    constructor(`;
        const constructorParams: string[] = [];
        for (const field of tableModel.fields) {
            const tsType = CodeGenSqlHelper.mapSqlTypeToTypeScript(field.type);
            constructorParams.push(`${field.name}: ${tsType}`);
        }        
        content += constructorParams.join(',\n                ');
        content += `) {\n\n`;        
        // Constructor assignments
        for (const field of tableModel.fields) {
            content += `        this.${field.name} = ${field.name};\n`;
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
    
    public static getArrayEntityClass(tableModel: ModelTable[]): string {
        let content: string = "";
        
        // 1. Imports una sola vez al principio
        content += CodeGenConfig.getKernelImports();
        
        // 2. Para cada tabla, los 3 bloques
        for (let i = 0; i < tableModel.length; i++) {
            const table = tableModel[i];
            
            // Bloque 1: Clase Def (sin imports)
            content += CodeGenTsMotor.getEntityDefClassData(table);
            content += `\n`;
            
            // Bloque 2: Clase normal (extraer solo la parte sin imports ni Def)
            const fullClassContent = CodeGenTsMotor.getEntityClass(table);
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
        // Generate single line field creation with proper indentation (8 spaces = 2 tabs of 4)
        return `        this.fields.push(new ModelField("${field.name}", "${field.type}", ${field.pk}, ${field.generated}, ${field.required}, ${field.minlen}, ${field.maxlen}${optionalParams}));\n`;
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
        code += CodeGenConfig.getKernelImports();
        code += CodeGenTsMotor.getEntityDefClassData(table);        
        return code;
    }//end
    
    public static getArrayEntityDefClass(tables: ModelTable[]): string {
        let code: string = "";
        code += CodeGenConfig.getKernelImports();
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

