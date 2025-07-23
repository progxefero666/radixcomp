//src\app_front\codegen\util\modelutil.ts

import { ModelTable, ModelField, Relation } from "@/codegen/kernel/cgmodel";
import { CgConfig } from "@/codegen/cgconfig";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { CodeGenSqlHelper } from "@/codegen/kernel/cgsqlhelper";
import { XForms } from "@/common/forms/xforms";
import { CodeGenTsFunctions } from "@/codegen/kernel/cgtsfunctions";
import { XFormsTemp } from "../forms/cgforms";

/**
 * class CodeGenTsMotor
 */
export class CodeGenTsMotor {

    public static getEntityClass(tableModel: ModelTable,includeDef:boolean): string {
        
        let content  = CodeGenTsFunctions.getClassHeader(tableModel.name);        
        content     += CodeGenTsFunctions.getListAttributes(tableModel.fields);
        content     += CodeGenTsFunctions.getConstructor(tableModel.fields);
        content     += CodeGenTsFunctions.getFunctiontMinLen(tableModel.fields);
        content     += CodeGenTsFunctions.getFunctiontMaxLen(tableModel.fields);
        content     += CodeGenHelper.applyTabsToStringBlock(XFormsTemp.function_json, 1)+ CgConfig.RET;
        content     += `}//end class`+ CgConfig.RETx2;            
        content     += CodeGenHelper.getClassType(tableModel);        
        return content;
    };//end
    
    public static getArrayEntityClass(tableModel: ModelTable[],includeDef?:boolean): string {
        let content: string = CgConfig.getKernelImports();
        for (let i = 0; i < tableModel.length; i++) {                       
            const fullClassContent = CodeGenTsMotor.getEntityClass(tableModel[i],false);
            const lines = fullClassContent.split(CgConfig.RET);
            let startIndex = -1;
            for (let j = 0; j < lines.length; j++) {
                if (lines[j].includes('//table_')) {startIndex = j;break;}
            }
            if (startIndex >= 0) {
                const classAndTypeContent = lines.slice(startIndex).join('\n');
                content += classAndTypeContent;
            }
            if (i < tableModel.length - 1) {content += `\n`;}
        }        
        return content;
    };//end

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
